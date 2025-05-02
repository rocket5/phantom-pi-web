# Dependency Troubleshooting Guide

## Common Dependency Issues in v0.dev Projects

This guide documents solutions to dependency conflicts encountered in this project generated from v0.dev.

## Issue 1: `date-fns` and `react-day-picker` Conflict

**Error:**
```
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error While resolving: my-v0-project@0.1.0
npm error Found: date-fns@4.1.0
npm error node_modules/date-fns
npm error   date-fns@"4.1.0" from the root project
npm error Could not resolve dependency:
npm error peer date-fns@"^2.28.0 || ^3.0.0" from react-day-picker@8.10.1
```

**Solution:**
1. Downgrade `date-fns` from v4.1.0 to v3.3.1 (compatible with react-day-picker)
2. Remove `react-day-picker` if not used in the project

**Implementation:**
- Edit `package.json` to change `date-fns` version to "3.3.1"
- Remove the `react-day-picker` entry from dependencies

## Issue 2: `react` and `vaul` Conflict

**Error:**
```
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error While resolving: my-v0-project@0.1.0
npm error Found: react@19.1.0
npm error node_modules/react
npm error   react@"^19" from the root project
npm error Could not resolve dependency:
npm error peer react@"^16.8 || ^17.0 || ^18.0" from vaul@0.9.9
```

**Solution:**
1. Downgrade React from v19.1.0 to v18.2.0
2. Downgrade React DOM to match (v18.2.0)
3. Remove `vaul` if not used in the project
4. Update React types to match React version (v18)

**Implementation:**
- Edit `package.json` to change React version to "18.2.0"
- Edit `package.json` to change React DOM version to "18.2.0"
- Remove the `vaul` entry from dependencies
- Update `@types/react` and `@types/react-dom` to "^18"

## Alternative Solutions

If you prefer not to modify package versions, you can use one of these flags:

1. `--legacy-peer-deps`: Ignore peer dependency requirements
   ```
   npm install --legacy-peer-deps
   ```

2. `--force`: Force installation despite conflicts
   ```
   npm install --force
   ```

The specific version modifications are generally preferred as they ensure actual compatibility rather than just bypassing npm's dependency checking mechanism.

## Preventing Future Issues

When working with v0.dev projects:

1. Review dependencies for unused packages
2. Check for compatible versions of React and its ecosystem
3. Consider using `npm ls` to identify dependency conflicts
4. Test the application thoroughly after resolving dependency issues

Remember that v0.dev may include template dependencies that aren't actually used in your specific implementation. 
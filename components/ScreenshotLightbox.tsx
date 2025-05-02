import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

type ScreenshotLightboxProps = {
  isOpen: boolean;
  imgSrc: string;
  imgAlt: string;
  onClose: () => void;
};

export function ScreenshotLightbox({ isOpen, imgSrc, imgAlt, onClose }: ScreenshotLightboxProps) {
  // Handle escape key to close
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Lock body scroll when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-[90vh] mx-auto" onClick={(e) => e.stopPropagation()}>
        <button 
          className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="relative w-full max-h-[90vh]">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={1920}
            height={1080}
            className="max-h-[90vh] w-auto h-auto object-contain mx-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
} 
import { useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-cms-dark/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative w-full md:max-w-3xl max-h-screen md:max-h-[90vh] overflow-y-auto bg-white shadow-2xl animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="sticky top-0 float-right z-10 m-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-cms-dark shadow-md transition-colors hover:bg-cms-sand"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
}

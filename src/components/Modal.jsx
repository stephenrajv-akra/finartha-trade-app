import { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-sm mx-4 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-[#EDE8F2] px-6 pt-5 pb-4 flex items-center justify-center relative">
                    <h2 className="text-lg font-semibold text-[#1A1A1A]">{title}</h2>
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#9E9E9E] text-[#9E9E9E] hover:border-[#724A9A] hover:text-[#724A9A] transition-colors"
                    >
                        <X size={14} strokeWidth={2.5} />
                    </button>
                </div>

                {/* Body */}
                <div className="bg-white">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;

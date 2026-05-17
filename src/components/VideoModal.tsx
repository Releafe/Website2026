import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors z-10"
        >
          <X className="w-5 h-5 text-slate-700" />
        </button>

        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xYa6K0zWnow?si=gqKatzLf2K3n1lIS"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-t-2xl"
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Jan legt uit</h2>
          <p className="text-slate-600">Bekijk hoe het Releafe platform werkt en hoe het jouw team kan helpen.</p>
        </div>
      </div>
    </div>
  );
}

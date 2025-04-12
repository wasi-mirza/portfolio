import { useRive } from '@rive-app/react-canvas';


interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { RiveComponent } = useRive({
        src: '/animations/figure_message_sent.riv',
        autoplay: true,
      });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl font-bold text-gray-400 hover:text-gray-900"
        >
          ×
        </button>

        <div className="mb-4">
          <div className="h-[200px] w-full">
            <RiveComponent />
          </div>
        </div>

        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded"
            type="email"
            placeholder="Your Email"
            required
          />
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full btn bg-primary hover:bg-primary-hover text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

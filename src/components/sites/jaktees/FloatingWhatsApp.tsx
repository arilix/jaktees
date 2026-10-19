import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "./data";

const text = encodeURIComponent(
  "Hi Jaktees, I want to make custom apparel.\n\nProduct:\nQuantity:\nDeadline:\nDesign ready? Yes/No\nDelivery location:",
);

export function FloatingWhatsApp() {
  return (
    <a
      href={`${WHATSAPP_URL}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground border-brutal shadow-brutal hover:scale-110 transition-transform"
    >
      <MessageCircle size={26} strokeWidth={2.5} aria-hidden="true" />
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary animate-ping" />
    </a>
  );
}

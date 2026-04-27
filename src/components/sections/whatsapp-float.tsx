import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5513981469779"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[var(--shadow-float)] hover:scale-105 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
}
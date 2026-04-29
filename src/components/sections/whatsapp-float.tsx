import { FaWhatsapp } from "react-icons/fa";


export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5513981469779"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[var(--shadow-float)] hover:scale-105 transition"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}
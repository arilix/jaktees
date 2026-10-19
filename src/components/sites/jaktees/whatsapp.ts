import { WHATSAPP_URL } from "./data";

export function openWhatsApp(lines: string[]) {
  const text = encodeURIComponent(lines.join("\n"));
  window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");
}

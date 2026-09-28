export const SITE = {
  name: "Navi Fencing",
  tagline: "Strong, Stylish & Secure",
  description:
    "Premium fencing solutions for residential, commercial and agricultural properties across Avinashi, Tiruppur, Coimbatore and Tamil Nadu. Expert installation with durable, modern designs.",
  url: "https://navifencing.in",
  phone: [
    { number: "+919176337014", display: "+91 91763 37014" },
    { number: "+918248055188", display: "+91 82480 55188" },
    { number: "+919597722813", display: "+91 95977 22813" },
  ],
  location: "Avinashi, Tiruppur, Coimbatore, Tamil Nadu",
  email: "navifencing@gmail.com",
};

export const WHATSAPP_NUMBER = "919094909918";

export function getWhatsAppLink(message?: string) {
  const text = message || "Hi, I'm interested in your fencing solutions. Can you help?";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getCallLink(phone: string) {
  return `tel:${phone}`;
}
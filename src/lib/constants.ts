/**
 * Global Agency Constants & Contact Configuration
 * Clean digits only (country code + number, e.g., 923354679492).
 * Formatted cleanly without '+', spaces, or dashes.
 */

export const RAW_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "923354679492";

/**
 * Strips all non-digit characters to ensure clean wa.me redirection.
 */
export const cleanPhoneForWhatsApp = (phone: string): string => {
  return phone.replace(/\D/g, "");
};

export const WHATSAPP_NUMBER = cleanPhoneForWhatsApp(RAW_WHATSAPP_NUMBER);

/**
 * Human-readable display format for UI elements (Footer, Contact page, etc.)
 */
export const WHATSAPP_DISPLAY_NUMBER = "+92 335 4679492";

/**
 * Generates a clean WhatsApp redirect URL with optional encoded pre-filled text.
 * Example: https://wa.me/923354679492?text=...
 */
export const getWhatsAppUrl = (text?: string): string => {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
};

export const DEFAULT_PREVIEW_MESSAGE =
  "Hi NexaFlow team, I'm interested in the free 48-hour preview for my business.";

export const DEFAULT_INQUIRY_MESSAGE =
  "Hi NexaFlow, I'd like to enquire about a website preview.";

export const CONTACT_EMAIL = "hello@nexaflow.studio";


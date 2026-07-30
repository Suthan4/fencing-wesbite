import { analytics } from "@/infrastructure/analytics";

export const contactActions = {
  whatsapp(location: ContactLocation) {
    analytics.trackWhatsapp(location);
  },

  phone(location: ContactLocation) {
    analytics.trackPhone(location);
  },
  email(location: ContactLocation) {
    analytics.trackEmail(location);
  },

  map(location: ContactLocation) {
    analytics.trackMap(location);
  },

  quote(location: ContactLocation) {
    analytics.trackQuote(location);
  },
};

export type ContactLocation =
  | "header"
  | "footer"
  | "hero"
  | "floating"
  | "mobile_menu"
  | "contact_page";
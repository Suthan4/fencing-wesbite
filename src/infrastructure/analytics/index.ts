import { ga4Track } from "./ga4";

export const analytics = {
  trackWhatsapp(location: string) {
    ga4Track("whatsapp_click", { location });

    // Later:
    // clarityTrack(...)
    // metaPixel(...)
  },

  trackPhone(location: string) {
    ga4Track("phone_click", { location });
  },
  trackEmail(location: string) {
    ga4Track("email_click", { location });
  },
  trackMap(location: string) {
    ga4Track("map_click", { location });
  },

  trackQuote(location: string) {
    ga4Track("quote_request", { location });
  },
};
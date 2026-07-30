declare global{
    interface Window {
        gtag: (command: "event",
      eventName: string,
      params?: Record<string, unknown>) => void;
    }
}

export function ga4Track(eventName: string, params?: Record<string, unknown>) { 
    if(typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
    }
  }
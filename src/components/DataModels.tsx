
// Newer data models below
export interface writtenCopy {
  title: string;
  subtitle: string | null;
  description?: string | null;
}

export interface callToAction {
  cta: string;
  url: string;
}

export interface heroContent {
  supportImage: {
    url: string;
  };
  callToAction: callToAction;
  writtenCopy: writtenCopy;
}

export interface TagLine {
  text: string
  subtext: string
}

export interface Testimonial {
  launchPartner: launchPartner
  persona: string;
  testimonialShortVersion: string | null;
  testimonialLongVersion?: string;
  futurePromise?: string;
}

export interface launchPartner {
  partnerName: string;
  link: string | null;
  categories?: string[];
  blackPngLogo: {
    url: string;
  }
  partnerSince?: string | number;
}

export interface coreBenefit {
  title: string;
  subtitle: string | null;
  description: string | null;
  supportImage: {
    url: string;
  }
}

export interface polywrapApplication {
  writtenCopy: writtenCopy;
  callToAction: callToAction;
  uiScreenshot: {
    url: string;
  };
}

const trackEvent = (event: string): void => {
  console.log(`[EVENT]: ${event}`);
};

const trackError = (event: string, error: unknown): void => {
  console.error(`[ERROR]: ${event} - Exception: ${error}`);
};

const tracker = {
  trackEvent,
  trackError,
};

export default tracker;

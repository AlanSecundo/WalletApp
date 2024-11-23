import tracker from '../config/tracker';
import secureStorageService from './secureStorageService';

const PIN_KEY = 'PIN';

const savePIN = async (pin: string) => {
  await secureStorageService.saveItem(PIN_KEY, pin);
};

const hasPINRegistered = async () => {
  try {
    tracker.trackEvent('Initializing PIN Registration');
    const credentials = await secureStorageService.getItem(PIN_KEY);

    return !!credentials;
  } catch (error) {
    tracker.trackError('PIN Registration', error);
    return false;
  }
};

const isValidPIN = async (typedPin: string) => {
  try {
    tracker.trackEvent('Initializing PIN Validation');
    const credentials = await secureStorageService.getItem(PIN_KEY);

    if (credentials?.password === typedPin) {
      return true;
    }
    return false;
  } catch (error) {
    tracker.trackError('PIN Validation', error);
    return false;
  }
};

const pinService = {
  savePIN,
  hasPINRegistered,
  isValidPIN,
};

export default pinService;

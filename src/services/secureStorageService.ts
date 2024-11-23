import * as Keychain from 'react-native-keychain';
import tracker from '../config/tracker';

const saveItem = async (key: string, value: string): Promise<void> => {
  try {
    await Keychain.setGenericPassword(key, value, {
      accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
      storage: Keychain.STORAGE_TYPE.AES_GCM_NO_AUTH,
    });
  } catch (error) {
    tracker.trackError(`Error on save storage key ${key}`, error);
    throw error;
  }
};

const getItem = async (
  key: string,
): Promise<Keychain.UserCredentials | null> => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.username === key) {
      return credentials;
    }
    return null;
  } catch (error) {
    tracker.trackError(`Error on getting storage key ${key}`, error);
    return null;
  }
};

const secureStorageService = {
  saveItem,
  getItem,
};

export default secureStorageService;

import {Platform} from 'react-native';

const Config = {
  baseURL:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:3000'
      : 'http://localhost:3000',
};

export default Config;

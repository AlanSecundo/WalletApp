import {useCallback, useState} from 'react';

interface ResponseUseAsync {
  loading: boolean;
  call: any;
}

const useAsync = (callback: any, inputs: any = []): ResponseUseAsync => {
  const [loading, setLoading] = useState(false);

  const call = useCallback(async (...args: any) => {
    setLoading(true);

    try {
      const response = await callback(...args);
      return response;
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, inputs);

  return {
    call,
    loading,
  };
};

export default useAsync;

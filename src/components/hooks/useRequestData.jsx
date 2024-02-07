import { useState } from 'react';
import axios from 'axios';

const useRequestData = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = async (apiurl, method = 'GET', bodydata = null, headers = null, params = null) => {
    setisLoading(true);

    // Kalder API med GET POST PUT PATCH DELETE
    try {
      let response;

      switch (method) {
        case 'GET':
          response = await axios.get(apiurl, { headers: headers, params: params, timeout: 10000 });
          break;

        case 'POST':
          response = await axios.post(apiurl, bodydata, { headers, params, timeout: 10000 });
          break;

        case 'PUT':
          response = await axios.put(apiurl, bodydata, { headers, params, timeout: 10000 });
          break;

        case 'PATCH':
          response = await axios.patch(apiurl, bodydata, { headers, params, timeout: 10000 });
          break;

        case 'DELETE':
          response = await axios.delete(apiurl, { headers, params, timeout: 10000 });
          break;

        default:
          throw new Error('Invalid method - GET POST PUT PATCH or DELETE was expected');
      }

      if (response.data) {
        setData(response.data);
        setError(null);
      } else {
        throw new Error('Tomt response/ingen data');
      }
    } catch (error) {
      console.log(error);
      setError('Der er opstået en fejl: ' + error.message);
      setData(null);
    } finally {
      setisLoading(false);
    }
  };

  return { data, isLoading, error, makeRequest };
};

export default useRequestData;

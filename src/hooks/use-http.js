import { useCallback, useState } from "react";

const useHttp = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback((url, reqConfig) => {
    setError(null);
    setIsLoading(true);
    setData(null);
    let method, body, headers;

    if (reqConfig) {
      ({ method, body, headers } = reqConfig);
    }
    const options = {
      method: method || "GET",
    };

    if (!headers) {
      headers = {};
    }
    if (body) {
      options.body = JSON.stringify(body);
      if (!headers["Content-Type"]) {
        headers["Content-Type"] = "application/json";
      }
      //console.log(options.body)
    }
    options.headers = headers;

    return fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((resData) => {
            //console.log(resData)
            const error = new Error(resData.message);
            error.data = resData;
            throw error;
          });
        }
        return response.json();
      })
      .then((resData) => {
        setData(resData);
        //console.log(resData);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        //console.log(err);
        setError(err);
      });
  }, []);

  return { data, error, isLoading, sendRequest };
};

export default useHttp;

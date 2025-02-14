import { useEffect, useState } from "react";

const useLocalStorage = (key) => {
  const localStorageValue = localStorage.getItem(key);

  const [getLocalStorage, setLocalStorageValue] = useState(
    localStorageValue ? JSON.parse(localStorageValue) : null
  );

  useEffect(() => {
    if (localStorageValue) {
      setLocalStorageValue(JSON.parse(localStorageValue));
    } else {
      setLocalStorageValue(null);
    }
  }, [localStorageValue]);

  const setLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
  };
  return [getLocalStorage, setLocalStorage, clearLocalStorage];
};

export default useLocalStorage;

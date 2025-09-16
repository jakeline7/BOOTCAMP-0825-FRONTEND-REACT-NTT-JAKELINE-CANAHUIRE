import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const item = localStorage.getItem(key);
  const parsed = item ? JSON.parse(item) : initialValue;

  const [storedValue, setStoredValue] = useState<T>(parsed);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return { storedValue, setStoredValue };
};

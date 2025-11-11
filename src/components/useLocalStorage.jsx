import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Get the existing value from localStorage (if it exists)
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // When storedValue changes, update localStorage
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;

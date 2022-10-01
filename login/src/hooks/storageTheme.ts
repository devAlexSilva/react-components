import { useEffect, useState } from "react";

export const useStorageTheme = (key: string, value: {}) => {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);

    return storage ? JSON.parse(storage) : value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

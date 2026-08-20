import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const readValue = () => {
    const items = localStorage.getItem(key);
    if (items) return JSON.parse(items);
    return initialValue;
  };
  const [store, setStore] = useState(readValue);

  const setLocal = (value) => {
    localStorage.setItem(key, JSON.stringify([...store, value]));
    setStore(readValue)
  };

  const setlocalupdate = (id) => {
    localStorage.setItem(key, JSON.stringify(store.filter((curr,index) => index !== id)))
    setStore(readValue)
  }

  const clearAllLocal = () => {
    localStorage.setItem(key, []);
    setStore(readValue)
  }

  return [store ,setLocal, setlocalupdate, clearAllLocal];
};

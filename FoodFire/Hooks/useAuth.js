import { useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const useAuth = () => {
  const [getLocalStorage] = useLocalStorage("user");

  const [isLoggedin, setIsLoggedin] = useState(
    getLocalStorage?.token?.length === 100 ? true : false
  );

  return [isLoggedin, setIsLoggedin];
};

export default useAuth;

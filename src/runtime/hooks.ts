import { createContext, useContext } from "react";
import { PageData } from "types";

export const contextData = createContext({} as PageData);

export const useContextData = () => {
  return useContext(contextData);
};

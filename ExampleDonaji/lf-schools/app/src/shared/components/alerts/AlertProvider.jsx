import { message } from "antd";
import { createContext, useContext } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const success = (text) => message.success(text);
  const error = (text) => message.error(text);
  const warning = (text) => message.warning(text);
  const info = (text) => message.info(text);

  return (
    <AlertContext.Provider
      value={{ success, error, warning, info }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () =>
  useContext(AlertContext);

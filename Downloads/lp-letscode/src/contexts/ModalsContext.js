import { createContext } from "react";

export default createContext({
  captureLead: {
    visible: false,
    close: () => undefined,
    open: () => undefined
  }
})
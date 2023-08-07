import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  PropsWithChildren,
} from "react";

import useLocalStorage from "../../hooks/useLocalStorage";
import { defaultData } from "./defaultData";
import { SampleAppContextType } from "./types";

// ----------------------------------------------------------------------

const initialState: SampleAppContextType = {
  ...defaultData,

  updateAppContext: () => {},
};

// ----------------------------------------------------------------------

export const SampleAppContext = createContext(initialState);

export const useSampleAppContext = () => {
  const context = useContext(SampleAppContext);

  if (!context)
    throw new Error(
      "useSampleAppContext must be use inside SampleAppContextProvider"
    );

  return context;
};

// ----------------------------------------------------------------------

type SampleAppContextProviderProps = PropsWithChildren;

export const SampleAppContextProvider = ({
  children,
}: SampleAppContextProviderProps) => {
  const [appData, setAppData] = useLocalStorage("data", defaultData);

  const updateAppContext = useCallback(
    (payload: any) => {
      setAppData({ ...appData, ...payload });
    },
    [appData, setAppData]
  );

  const memoizedValue = useMemo(
    () => ({
      ...appData,
      updateAppContext,
    }),
    [appData, updateAppContext]
  );

  return (
    <SampleAppContext.Provider value={memoizedValue}>
      {children}
    </SampleAppContext.Provider>
  );
};

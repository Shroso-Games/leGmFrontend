import { createContext, ReactNode, useState } from "react";

export const SpinnerContext = createContext<[boolean, (val: boolean) => void]>([false, () => null])


interface Props {
  children: ReactNode
}

export const SpinnerContextProvider = ({children}: Props) => {
  const [value, setValue] = useState<boolean>(false);
  return (
    <SpinnerContext.Provider value={[value, setValue]}>
      {children}
    </SpinnerContext.Provider>
  )
}
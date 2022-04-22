import { ReactNode, createContext } from 'react'

interface ProgressContextProvider {
  children: ReactNode
}

interface ProgressContextDefalut {
  lastTime: string
  status: string
}

const progressDefalut = {
  lastTime: '22/4/2022',
  status: 'In Progess',
}

export const ProgressContext = createContext<ProgressContextDefalut>(progressDefalut)

const ProgressContextProvider = ({ children }: ProgressContextProvider) => {
  return <ProgressContext.Provider value={progressDefalut}>{children}</ProgressContext.Provider>
}

export default ProgressContextProvider

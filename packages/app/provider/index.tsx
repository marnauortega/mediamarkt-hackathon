import { Dripsy } from './dripsy'
import DaysProvider from './DaysProvider'
import AddParcelProvider from './AddParcelProvider'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Dripsy>
      <DaysProvider>
        <AddParcelProvider>{children}</AddParcelProvider>
      </DaysProvider>
    </Dripsy>
  )
}

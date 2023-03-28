import { createContext, useState } from 'react'

export const AddParcelContext = createContext()

function AddParcelProvider({ children }) {
  const [id, setId] = useState('')
  const [carrier, setCarrier] = useState('')

  const value = {
    id,
    setId,
    carrier,
    setCarrier,
  }

  return (
    <AddParcelContext.Provider value={value}>
      {children}
    </AddParcelContext.Provider>
  )
}

export default AddParcelProvider

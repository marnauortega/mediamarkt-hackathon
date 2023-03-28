import { createContext, useState } from 'react'

export const DaysContext = createContext()

function DaysProvider({ children }) {
  const [dayList, setDayList] = useState([
    {
      id: 0,
      date: new Date(),
      itemsCount: 1,
      finishedDeliveries: 0,
      totalDeliveries: 1,
      parcels: [
        {
          $oid: '641db7b2fc89',
          carrier: 'MRW',
          deliveryStatus: 'notDelivered',
        },
      ],
    },
  ])

  const value = {
    dayList,
    setDayList,
  }

  return <DaysContext.Provider value={value}>{children}</DaysContext.Provider>
}

export default DaysProvider
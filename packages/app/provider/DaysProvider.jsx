import { createContext, useState } from 'react'

export const DaysContext = createContext()

function DaysProvider({ children }) {
  const [dayList, setDayList] = useState([
    {
      id: 0,
      date: '2023-3-25',
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
    {
      id: 1,
      date: '2023-3-28',
      itemsCount: 1,
      finishedDeliveries: 0,
      totalDeliveries: 1,
      parcels: [
        {
          $oid: '641db7b2fc91',
          carrier: 'Seur',
          deliveryStatus: 'notDelivered',
        },
      ],
    },
    {
      id: 2,
      date: '2023-3-25',
      itemsCount: 1,
      finishedDeliveries: 0,
      totalDeliveries: 1,
      parcels: [
        {
          $oid: '641db7b2fd08',
          carrier: 'MRW',
          deliveryStatus: 'notDelivered',
        },
      ],
    },
    {
      id: 3,
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
    {
      id: 4,
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
    {
      id: 5,
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
    {
      id: 6,
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

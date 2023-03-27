const days = [
  {
    id: 1,
    date: new Date(),
    items: 14,
    finishedDeliveries: 0,
    totalDeliveries: 4,
    parcels: [
      { $oid: '641db7b2fc16' },
      { $oid: '641db7b2fc34' },
      { $oid: '641db7b2fc97' },
    ],
  },
  {
    id: 2,
    date: new Date(),
    items: 10,
    finishedDeliveries: 5,
    totalDeliveries: 5,
  },
  {
    id: 3,
    date: new Date(),
    items: 12,
    finishedDeliveries: 10,
    totalDeliveries: 10,
  },
  {
    id: 4,
    date: new Date(),
    items: 19,
    finishedDeliveries: 9,
    totalDeliveries: 9,
  },
  {
    id: 5,
    date: new Date(),
    items: 8,
    finishedDeliveries: 7,
    totalDeliveries: 8,
  },
  {
    id: 6,
    date: new Date(),
    items: 12,
    finishedDeliveries: 6,
    totalDeliveries: 6,
  },
  {
    id: 7,
    date: new Date(),
    items: 16,
    finishedDeliveries: 5,
    totalDeliveries: 5,
  },
  {
    id: 8,
    date: new Date(),
    items: 11,
    finishedDeliveries: 5,
    totalDeliveries: 6,
  },
]

export default days

import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'

import Header from 'app/components/Header'
import ParcelRow from '../../components/ParcelRow'
import { createParam } from 'solito'
import formatDateSlug from 'app/utils/formatDateSlug'
import formatDateDayMonth from 'app/utils/formatDateDayMonth'
import parcels from 'app/data/parcels'
import { FlatList, P, View } from 'dripsy'
import AddParcelLink from 'app/components/AddParcelLink'

const { useParam } = createParam()

const DayScreen = () => {
  const [idSlug] = useParam('id')
  const [daySlug] = useParam('slug')
  const { dayList } = useContext(DaysContext)
  const day = dayList.find((day) => formatDateSlug(day.date) === daySlug)

  return (
    <>
      <Header preTitle="Day" title={formatDateDayMonth(day?.date)}>
        <View sx={{ flexDirection: 'row', gap: 15 }}>
          <P
            sx={{
              color: '$lightText',
              borderColor: '$lightText',
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 36,
              paddingRight: 36,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {day?.itemsCount} items
          </P>
          <P
            sx={{
              color: '$lightText',
              borderColor: '$lightText',
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 36,
              paddingRight: 36,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {`${day?.finishedDeliveries} / ${day?.totalDeliveries}  Deliveries`}
          </P>
        </View>
      </Header>
      <FlatList
        data={day?.parcels}
        renderItem={({ item }) => {
          const parcelId = item.$oid
          const parcel = parcels.find((parcel) => parcel.id.$oid === parcelId)

          return (
            <ParcelRow
              key={parcel.id.$oid}
              id={parcel.id.$oid}
              carrier={item.carrier}
              itemsCount={parcel.itemsCount}
              deliveryStatus={item.deliveryStatus}
              daySlug={daySlug}
              idSlug={idSlug}
            />
          )
        }}
      />
      <View sx={{ padding: 20 }}>
        <AddParcelLink />
      </View>
    </>
  )
}

export default DayScreen

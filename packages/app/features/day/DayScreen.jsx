import Header from 'app/components/Header'
import ParcelRow from '../../components/ParcelRow'
import { createParam } from 'solito'
import days from 'app/data/days'
import formatDateSlug from 'app/utils/formatDateSlug'
import parcels from 'app/data/parcels'
import { P, View } from 'dripsy'

const { useParam } = createParam()

const DayScreen = () => {
  const [daySlug] = useParam('slug')
  const day = days.find((day) => formatDateSlug(day.date) === daySlug)

  return (
    <>
      <Header preTitle="Day" title="24 Mar">
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
            14 Items
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
            1 / 4 Deliveries
          </P>
        </View>
      </Header>
      {day?.parcels?.map((parcelRef) => {
        const parcelId = parcelRef.$oid

        const parcel = parcels.find((parcel) => parcel.id.$oid === parcelId)

        return (
          <ParcelRow
            key={parcel.id.$oid}
            id={parcel.id.$oid}
            carrier="Seur"
            itemsCount={parcel.itemsCount}
            deliveryStatus="delivered"
            daySlug={daySlug}
          />
        )
      })}
    </>
  )
}

export default DayScreen

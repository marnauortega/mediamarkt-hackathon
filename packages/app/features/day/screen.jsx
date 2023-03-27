import Header from 'app/components/Header'
import ParcelRow from '../../components/ParcelRow'
import { createParam } from 'solito'
import days from 'app/data/days'
import formatDateSlug from 'app/utils/formatDateSlug'
import parcels from 'app/data/parcels'
import { View } from 'dripsy'

const { useParam } = createParam()

const DayScreen = () => {
  const [daySlug] = useParam('slug')
  const day = days.find((day) => formatDateSlug(day.date) === daySlug)

  return (
    <>
      <Header />
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

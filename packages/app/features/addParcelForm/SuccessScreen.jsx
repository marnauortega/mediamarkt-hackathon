import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'
import { AddParcelContext } from 'app/provider/AddParcelProvider'
import parcels from 'app/data/parcels'

import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppButton from 'app/components/AppButton'
import ParcelRow from 'app/components/ParcelRow'

import { useRouter } from 'solito/router'
import FieldDescription from 'app/components/FieldDescription'
import checkIcon from 'app/assets/images/checkIcon.svg'

const SuccessScreen = () => {
  const { id } = useContext(AddParcelContext)
  const { dayList } = useContext(DaysContext)
  const sx = useSx()
  const { push } = useRouter()

  const parcel = parcels.find((parcel) => parcel.id.$oid === id)
  const day = dayList.find((day) =>
    day.parcels.find((parcel) => parcel.$oid === id)
  )
  const parcelRef = day?.parcels.find((parcel) => parcel.$oid === id)

  return (
    <>
      <Header preTitle="" title="Add Parcel"></Header>
      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FieldDescription sx={{ padding: 20 }} icon={checkIcon}>
          Parcel added successfully
        </FieldDescription>
        <ParcelRow
          id={id}
          carrier={parcelRef?.carrier}
          itemsCount={parcel?.itemsCount}
          deliveryStatus={parcelRef?.deliveryStatus}
          daySlug
        />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton
          title="Back to list"
          onPress={() => {
            push('/')
          }}
        />
      </View>
    </>
  )
}

export default SuccessScreen

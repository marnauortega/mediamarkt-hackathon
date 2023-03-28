import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'
import { AddParcelContext } from 'app/provider/AddParcelProvider'

import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'
import { useRouter } from 'solito/router'

const CarrierFieldScreen = () => {
  const { dayList, setDayList } = useContext(DaysContext)
  const { id, carrier, setCarrier } = useContext(AddParcelContext)

  const sx = useSx()
  const { push } = useRouter()

  const handlePress = () => {
    const nextDayList = [...dayList]

    // Find day where we added parcel id
    const dayIndex = nextDayList.findIndex((day) =>
      day.parcels.find((p) => p.$oid === id)
    )

    // Add carrier to that parcel (within dayList)
    nextDayList[dayIndex].parcels.forEach((parcel) => {
      if (parcel.$oid === id) {
        parcel.carrier = carrier
        parcel.deliveryStatus = 'notDelivered'
      }
    })
    setDayList(nextDayList)

    push('/add-parcel/success')
  }

  return (
    <>
      <Header preTitle="" title="Add Parcel"></Header>
      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <AppTextInput
          placeholder={'Ex. MRW'}
          onChangeText={(text) => setCarrier(text)}
        />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton title="Next" onPress={handlePress} />
      </View>
    </>
  )
}

export default CarrierFieldScreen

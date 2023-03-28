import { useContext, useState } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'
import { AddParcelContext } from 'app/provider/AddParcelProvider'

import Header from 'app/components/Header'
import { useSx, View, Text } from 'dripsy'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'
import { useRouter } from 'solito/router'
import FieldDescription from 'app/components/FieldDescription'
import truckIcon from 'app/assets/images/truckIcon.svg'

const CarrierFieldScreen = () => {
  const { dayList, setDayList } = useContext(DaysContext)
  const { id, carrier, setCarrier } = useContext(AddParcelContext)

  const [error, setError] = useState('')

  const sx = useSx()
  const { push } = useRouter()

  const handlePress = () => {
    if (!carrier.length > 0) {
      setError("Carrier can't be empty")
      return
    }

    const nextDayList = [...dayList]

    // Find day where we added parcel id
    const dayIndex = nextDayList.findIndex((day) =>
      day.parcels.find((p) => p.$oid === id)
    )

    // Add carrier to that parcel (within dayList)
    nextDayList[dayIndex]?.parcels.forEach((parcel) => {
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
        <FieldDescription icon={truckIcon}>
          Write the carrier name
        </FieldDescription>
        <AppTextInput
          placeholder={'Ex. MRW'}
          onChangeText={(text) => setCarrier(text)}
        />
        <Text sx={{ color: '$primary' }}>{error}</Text>
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton title="Next" onPress={handlePress} />
      </View>
    </>
  )
}

export default CarrierFieldScreen

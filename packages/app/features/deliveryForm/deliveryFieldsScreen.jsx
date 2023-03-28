import carriers from 'app/data/carriers'
import { useContext, useState } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'

import { useRouter } from 'solito/router'

import Header from 'app/components/Header'
import { createParam } from 'solito'
import { View, Text } from 'dripsy'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'

const { useParam } = createParam()

const DeliveryFieldsScreen = () => {
  const { dayList, setDayList } = useContext(DaysContext)
  const [name, setName] = useState('')
  const [license, setLicense] = useState('')
  const { push } = useRouter()
  const [error, setError] = useState('')

  const [idSlug] = useParam('id')

  const handlePress = () => {
    // 1. idslug is in any day parcels (for security)?
    const day = dayList.find((day) =>
      day.parcels.find((parcel) => parcel.$oid === idSlug)
    )

    // 1A. No, "Error, this parcel cannot be delivered. Go back, and try again"
    if (!day) {
      setError('This parcel cannot be delivered. Go back, and try again')
      return
    }

    // 1B. Yes, grab day and parcel.
    const parcelRef = day.parcels.find((parcel) => parcel.$oid === idSlug)

    // 2. Delivery status "delivered"?
    // 2A. Yes, (shouldn't happen, but make sure it isn't delivered again) "Error, this parcel is already delivered"
    // return
    if (parcelRef.deliveryStatus === 'delivered') {
      setError('This parcel is already delivered')
      return
    }

    // 3. Delivered status "notDelivered"?
    // 3A. No, "Error: there's a problem, contact support or try again"
    if (parcelRef.deliveryStatus !== 'notDelivered') {
      setError("There's a database problem, contact support or try again")
      return
    }

    // 4. Name is in carriers?
    // 4A. No, "Error: this driver is not in the database, contact support"
    const carrier = carriers.find(
      (carrier) => carrier.driver.toUpperCase() === name.toUpperCase()
    )
    if (!carrier) {
      setError('This driver is not in the database, contact support')
      return
    }

    // 5. Carrier coincides with driver.carrier?
    // 5A. No, "Error: this parcel should be delivered by another Carrier"
    if (parcelRef.carrier.toUpperCase() !== carrier.companyName.toUpperCase()) {
      setError('This parcel should be delivered by another Carrier')
      return
    }

    // 6. License coincides with carrier.license?
    // 6A. No, "Error: this parcel should be delivered by another Carrier"
    if (license.toUpperCase() !== carrier.licensePlate.toUpperCase()) {
      setError(
        'This license is not in our database, contact support or try again'
      )
      return
    }

    // 6B. Yes, add carrier and license to dayList
    const nextDayList = [...dayList]
    const dayIndex = dayList.findIndex((day) =>
      day.parcels.find((parcel) => parcel.$oid === idSlug)
    )
    nextDayList[dayIndex].finishedDeliveries++
    nextDayList[dayIndex].parcels.forEach((parcel) => {
      if (parcel.$oid === idSlug) {
        parcel.driver = name
        parcel.deliveryStatus = 'delivered'
      }
    })
    setDayList(nextDayList)
    push('/delivery/success')
  }

  return (
    <>
      <Header preTitle="" title="Delivery"></Header>

      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <AppTextInput
          placeholder={"Driver's Name"}
          onChangeText={(text) => setName(text)}
        />
        <AppTextInput
          placeholder={'License plate'}
          onChangeText={(text) => setLicense(text)}
        />
        <Text sx={{ color: '$primary' }}>{error}</Text>
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton title="Next" onPress={handlePress} />
      </View>
    </>
  )
}

export default DeliveryFieldsScreen

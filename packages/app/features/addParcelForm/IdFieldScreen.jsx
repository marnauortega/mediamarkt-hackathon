import parcels from 'app/data/parcels'
import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'
import { AddParcelContext } from 'app/provider/AddParcelProvider'

import { useRouter } from 'solito/router'

import Header from 'app/components/Header'
import { P, useSx, View } from 'dripsy'
import { TextLink } from 'solito/link'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'

const IdFieldScreen = () => {
  const { dayList, setDayList } = useContext(DaysContext)
  const { id, setId } = useContext(AddParcelContext)
  const sx = useSx()
  const { push } = useRouter()

  const handlePress = () => {
    console.log(dayList)
    // 1. input id is in parcel list?
    console.log(parcels)
    const parcel = parcels.find((parcel) => parcel.id.$oid === id)

    // 1A. No, error message: "no parcel with such id"
    if (!parcel) {
      // Error
      console.log('no parcel with such id')
      return
    }

    // 1B. Yes,
    // 2. parcel pickup date is already on the dayList?
    const dayIndex = dayList.findIndex((day) => day.date === parcel.pickupDate)

    // 2A. Yes
    if (dayIndex > -1) {
      // 3. parcel is on the dayList?
      const dayIncludingParcel = dayList.find((day) =>
        day.parcels.find((p) => p.$oid === parcel.id.$oid)
      )

      if (dayIncludingParcel) {
        //3A. Yes, error message: already added parcel
        console.log('already added parcel')
        return
      }

      //3B No, add parcel data on already existing day in dayList
      console.log('add on existing')
      const nextDayList = [...dayList]
      nextDayList[dayIndex].itemsCount += parcel.itemsCount
      nextDayList[dayIndex].totalDeliveries++
      nextDayList[dayIndex].parcels.push({ $oid: parcel.id.$oid })
      setDayList(nextDayList)
      push('/add-parcel/carrier-field')
      return
    }

    // 2B No, add parcel data on dayList
    const nextDay = {
      id: dayList.length,
      date: parcel.pickupDate,
      itemsCount: parcel.itemsCount,
      finishedDeliveries: 0,
      totalDeliveries: 1,
      parcels: [parcel.id],
    }
    console.log('Just add')
    setDayList([...dayList, nextDay])
    push('/add-parcel/carrier-field')
  }

  return (
    <>
      <Header preTitle="" title="Add Parcel">
        <View
          sx={{
            boxSizing: 'border-box',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '$lightTransparent',
            borderRadius: 20,
            height: 30,
          }}
        >
          <TextLink
            href="/add-parcel/id-scan"
            sx={{
              borderRadius: 20,
              paddingLeft: 36,
              paddingRight: 36,
            }}
          >
            <View
              sx={{
                height: 30,
                justifyContent: 'center',
              }}
            >
              <P
                sx={{
                  color: '$lightText',
                  textTransform: 'uppercase',
                  paddingLeft: 36,
                  paddingRight: 36,
                  marginTop: 0,
                  marginBottom: 0,
                }}
              >
                Scanning
              </P>
            </View>
          </TextLink>
          <View
            sx={{
              backgroundColor: '$lightText',
              borderRadius: 20,
              height: 30,
              justifyContent: 'center',
            }}
          >
            <P
              sx={{
                color: '$primary',
                textTransform: 'uppercase',
                paddingLeft: 36,
                paddingRight: 36,
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              Manually
            </P>
          </View>
        </View>
      </Header>

      <View
        sx={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <AppTextInput
          placeholder={'Ex. 641db7b2fc16'}
          onChangeText={(text) => setId(text)}
        />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton title="Next" onPress={handlePress} />
      </View>
    </>
  )
}

export default IdFieldScreen

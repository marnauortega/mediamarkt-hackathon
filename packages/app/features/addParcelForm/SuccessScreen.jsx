import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppButton from 'app/components/AppButton'
import ParcelRow from 'app/components/ParcelRow'

const SuccessScreen = () => {
  const sx = useSx()

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
        <ParcelRow />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton
          title="Back to list"
          onPress={() => {
            push('/add-parcel/success')
          }}
        />
      </View>
    </>
  )
}

export default SuccessScreen

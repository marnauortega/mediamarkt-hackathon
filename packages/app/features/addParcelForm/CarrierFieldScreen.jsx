import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'
import { useRouter } from 'solito/router'

const CarrierFieldScreen = () => {
  const sx = useSx()
  const { push } = useRouter()

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
        <AppTextInput placeholder={'Ex. MRW'} />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton
          title="Next"
          onPress={() => {
            push('/add-parcel/success')
          }}
        />
      </View>
    </>
  )
}

export default CarrierFieldScreen

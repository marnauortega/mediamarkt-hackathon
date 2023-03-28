import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppButton from 'app/components/AppButton'
import ParcelRow from 'app/components/ParcelRow'

import { useRouter } from 'solito/router'

const SuccessScreen = () => {
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
        <ParcelRow />
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

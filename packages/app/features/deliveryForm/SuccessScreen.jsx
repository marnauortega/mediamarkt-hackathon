import Header from 'app/components/Header'
import { useSx, View } from 'dripsy'

import AppButton from 'app/components/AppButton'

import { useRouter } from 'solito/router'

const SuccessScreen = () => {
  const sx = useSx()
  const { push } = useRouter()

  return (
    <>
      <Header preTitle="" title="Delivery"></Header>
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

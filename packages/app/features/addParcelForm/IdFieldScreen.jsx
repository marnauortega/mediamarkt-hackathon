import Header from 'app/components/Header'
import { P, useSx, View } from 'dripsy'
import { TextLink } from 'solito/link'

import AppTextInput from 'app/components/AppTextInput'
import AppButton from 'app/components/AppButton'
import { useRouter } from 'solito/router'

const IdFieldScreen = () => {
  const sx = useSx()
  const { push } = useRouter()

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
        <AppTextInput placeholder={'Ex. 641db7b2fc16'} />
      </View>
      <View sx={{ padding: 20 }}>
        <AppButton
          title="Next"
          onPress={() => {
            push('/add-parcel/carrier-field')
          }}
        />
      </View>
    </>
  )
}

export default IdFieldScreen

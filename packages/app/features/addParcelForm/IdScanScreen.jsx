import Header from 'app/components/Header'
import { P, useSx, View } from 'dripsy'
import { TextLink } from 'solito/link'

const IdScanScreen = () => {
  const sx = useSx()

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
              Scanning
            </P>
          </View>
          <TextLink
            href="/add-parcel/id-field"
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
                Manually
              </P>
            </View>
          </TextLink>
        </View>
      </Header>
    </>
  )
}

export default IdScanScreen

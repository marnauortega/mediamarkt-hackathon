import Header from 'app/components/Header'
import { P, useSx, View, Text } from 'dripsy'
import { TextLink } from 'solito/link'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { StyleSheet } from 'react-native'

import { useState, useEffect, useContext } from 'react'
import { AddParcelContext } from 'app/provider/AddParcelProvider'

import { useRouter } from 'solito/router'

const IdScanScreen = () => {
  const sx = useSx()

  const { id, setId } = useContext(AddParcelContext)
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  const { push } = useRouter()

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getBarCodeScannerPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    setId(data)
    push('/add-parcel/id-field')
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
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

      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$primary',
          height: 40,
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          sx={{ flex: 1, margin: 60 }}
        />
        {/* {scanned && (
          <Button
            title={'Tap to Scan Again'}
            onPress={() => setScanned(false)}
          />
        )} */}
      </View>
    </>
  )
}

export default IdScanScreen

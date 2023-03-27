import { View, H1, P } from 'dripsy'

const Header = () => {
  return (
    <View sx={{ backgroundColor: '$primary', height: 160 }}>
      <View sx={{ flex: 1, alignItems: 'center' }}>
        <P sx={{ color: '$lightText', textTransform: 'uppercase' }}>Calendar</P>
        <H1 sx={{ color: '$lightText', textTransform: 'uppercase' }}>
          CARRIERX
        </H1>
        <P
          sx={{
            color: '$lightText',
            borderColor: '$lightText',
            borderWidth: 1,
            borderRadius: 20,
            paddingLeft: 36,
            paddingRight: 36,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          March 2023
        </P>
      </View>
    </View>
  )
}

export default Header

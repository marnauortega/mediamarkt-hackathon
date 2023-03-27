import { TextLink } from 'solito/link'
import { View, Text } from 'dripsy'

const AddParcelLink = () => {
  return (
    <View
      sx={{
        alignItems: 'center',
      }}
    >
      <TextLink href="/add-parcel/id-scan">
        <View
          sx={{
            height: 48,
            width: 48,
            backgroundColor: '$primary',
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text sx={{ color: '$lightText' }}>+</Text>
        </View>
      </TextLink>
    </View>
  )
}

export default AddParcelLink

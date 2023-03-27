import { TextLink } from 'solito/link'
import { View, Text } from 'dripsy'

const AddParcelLink = () => {
  return (
    <TextLink href="/">
      <View
        sx={{
          alignItems: 'center',
        }}
      >
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
      </View>
    </TextLink>
  )
}

export default AddParcelLink

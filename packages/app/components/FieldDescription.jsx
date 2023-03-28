import { SolitoImage } from 'solito/image'
import { View, Text } from 'dripsy'

const FieldDescription = ({ children, icon }) => {
  return (
    <View sx={{ alignItems: 'center', gap: 14, paddingBottom: 30 }}>
      <SolitoImage src={icon} height={33} width={33} alt="An icon" />
      <Text>{children}</Text>
    </View>
  )
}

export default FieldDescription

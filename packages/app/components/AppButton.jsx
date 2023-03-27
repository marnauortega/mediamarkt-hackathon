import { View, Text, Pressable } from 'dripsy'

const AppButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        sx={{
          height: 54,
          width: '100%',
          backgroundColor: '$primary',
          textAlign: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <Text
          sx={{
            textTransform: 'uppercase',
            color: '$lightText',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          {title}
        </Text>
      </View>
    </Pressable>
  )
}

export default AppButton

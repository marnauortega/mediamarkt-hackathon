import { TextInput } from 'dripsy'
import { useState } from 'react'

const AppTextInput = ({ placeholder }) => {
  const [id, setId] = useState('')

  return (
    <TextInput
      sx={{
        backgroundColor: '$lightPrimary',
        width: '100%',
        height: 54,
        borderRadius: 6,
        padding: 18,
        marginVertical: 10,
        textTransform: 'uppercase',
        color: '$darkerGray',
      }}
      onChangeText={(text) => setId(text)}
      placeholder={placeholder}
      placeholderTextColor="rgba(58,53,65, 0.50)"
    />
  )
}

export default AppTextInput

import { TextInput } from 'dripsy'
import { useState } from 'react'

const AppTextInput = (props) => {
  // const [id, setId] = useState('')

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
      placeholderTextColor="rgba(58,53,65, 0.50)"
      {...props}
    />
  )
}

export default AppTextInput

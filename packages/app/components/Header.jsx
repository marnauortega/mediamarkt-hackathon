import { View, H1, P } from 'dripsy'

const Header = ({ preTitle, title = null, children }) => {
  return (
    <View sx={{ backgroundColor: '$primary', height: 160 }}>
      <View sx={{ flex: 1, alignItems: 'center' }}>
        <P sx={{ color: '$lightText', textTransform: 'uppercase' }}>
          {preTitle}
        </P>
        {title && (
          <H1 sx={{ color: '$lightText', textTransform: 'uppercase' }}>
            {title}
          </H1>
        )}
        {children}
      </View>
    </View>
  )
}

export default Header

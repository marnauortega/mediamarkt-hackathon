import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  colors: {
    $primary: '#DF0000',
    $lightText: 'white',
    $darkGray: 'rgba(58,53,65, 0.87)',
    $lightGray: 'rgba(58,53,65,0.12)',
  },
  text: {
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}

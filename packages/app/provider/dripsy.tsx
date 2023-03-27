import { DripsyProvider, makeTheme } from 'dripsy'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  colors: {
    $primary: '#DF0000',
    $lightPrimary: 'rgba(223,0,0, 0.15)',
    $lightText: 'white',
    $lightTransparent: 'rgba(255,255,255, 0.2)',
    $darkerGray: 'rgba(58,53,65, 1)',
    $darkGray: 'rgba(58,53,65, 0.87)',
    $gray: 'rgba(58,53,65, 0.38)',
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

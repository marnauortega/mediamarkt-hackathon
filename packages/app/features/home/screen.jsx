import Header from 'app/components/Header'
import { Text, useSx, View, H1, P, Row, A, FlatList } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import DayRow from '../../components/DayRow'

const dayList = [
  {
    id: 1,
    dayMonth: '24 Mar',
    items: 14,
    finishedDeliveries: 0,
    totalDeliveries: 4,
  },
  {
    id: 2,
    dayMonth: '19 Mar',
    items: 10,
    finishedDeliveries: 5,
    totalDeliveries: 5,
  },
  {
    id: 3,
    dayMonth: '10 Mar',
    items: 12,
    finishedDeliveries: 10,
    totalDeliveries: 10,
  },
  {
    id: 4,
    dayMonth: '25 Feb',
    items: 19,
    finishedDeliveries: 9,
    totalDeliveries: 9,
  },
  {
    id: 5,
    dayMonth: '20 Feb',
    items: 8,
    finishedDeliveries: 7,
    totalDeliveries: 8,
  },
  {
    id: 6,
    dayMonth: '18 Feb',
    items: 12,
    finishedDeliveries: 6,
    totalDeliveries: 6,
  },
  {
    id: 7,
    dayMonth: '15 Feb',
    items: 16,
    finishedDeliveries: 5,
    totalDeliveries: 5,
  },
  {
    id: 8,
    dayMonth: '14 Feb',
    items: 11,
    finishedDeliveries: 5,
    totalDeliveries: 6,
  },
]

export function HomeScreen() {
  const sx = useSx()

  return (
    <>
      <Header />
      <FlatList
        data={dayList}
        renderItem={({ item }) => (
          <DayRow
            day={item.dayMonth}
            items={item.items}
            finishedDeliveries={item.finishedDeliveries}
            totalDeliveries={item.totalDeliveries}
          />
        )}
        keyExtractor={(day) => day.id.toString()}
      />

      <View
        sx={{ flex: 1, justifyContent: 'center', alignItems: 'center', p: 16 }}
      >
        <H1 sx={{ fontWeight: '800' }}>Welcome to Solito.</H1>
        <View sx={{ maxWidth: 600 }}>
          <P sx={{ textAlign: 'center' }}>
            Here is a basic starter to show you how you can navigate from one
            screen to another. This screen uses the same code on Next.js and
            React Native.
          </P>
          <P sx={{ textAlign: 'center' }}>
            Solito is made by{' '}
            <A
              href="https://twitter.com/fernandotherojo"
              // @ts-expect-error react-native-web only types
              hrefAttrs={{
                target: '_blank',
                rel: 'noreferrer',
              }}
              sx={{ color: 'blue' }}
            >
              Fernando Rojo
            </A>
            .
          </P>
        </View>
        <View sx={{ height: 32 }} />
        <Row>
          <TextLink
            href="/user/fernando"
            textProps={{
              style: sx({ fontSize: 16, fontWeight: 'bold', color: 'blue' }),
            }}
          >
            Regular Link
          </TextLink>
          <View sx={{ width: 32 }} />
          <MotiLink
            href="/user/fernando"
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
              }
            }}
            from={{
              scale: 0,
              rotateZ: '0deg',
            }}
            transition={{
              type: 'timing',
              duration: 150,
            }}
          >
            <Text
              selectable={false}
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              Moti Link
            </Text>
          </MotiLink>
        </Row>
      </View>
    </>
  )
}

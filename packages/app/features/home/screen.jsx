import Header from 'app/components/Header'
import { useSx, FlatList } from 'dripsy'
import DayRow from '../../components/DayRow'
import days from 'app/data/days'


export function HomeScreen() {
  const sx = useSx()

  return (
    <>
      <Header />
      <FlatList
        data={days}
        renderItem={({ item }) => (
          <DayRow
            date={item.date}
            items={item.items}
            finishedDeliveries={item.finishedDeliveries}
            totalDeliveries={item.totalDeliveries}
          />
        )}
        keyExtractor={(day) => day.id.toString()}
      />
      <AddParcelLink/>
    </>
  )
}

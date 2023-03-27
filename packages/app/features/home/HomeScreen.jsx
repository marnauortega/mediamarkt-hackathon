import Header from 'app/components/Header'
import { P, useSx, FlatList } from 'dripsy'
import DayRow from '../../components/DayRow'
import days from 'app/data/days'
import AddParcelLink from 'app/components/AddParcelLink'

const HomeScreen = () => {
  const sx = useSx()

  return (
    <>
      <Header preTitle="Calendar" title="CARRIERX">
        <P
          sx={{
            color: '$lightText',
            borderColor: '$lightText',
            borderWidth: 1,
            borderRadius: 20,
            paddingLeft: 36,
            paddingRight: 36,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          March 2023
        </P>
      </Header>
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
      <AddParcelLink />
    </>
  )
}

export default HomeScreen

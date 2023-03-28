import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'

import Header from 'app/components/Header'
import { View, P, useSx, FlatList } from 'dripsy'
import DayRow from '../../components/DayRow'
import AddParcelLink from 'app/components/AddParcelLink'

const HomeScreen = () => {
  const sx = useSx()

  const { dayList } = useContext(DaysContext)
  console.log(dayList)
  const orderedDayList = [...dayList].sort((a, b) => a.date - b.date)

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
        data={orderedDayList}
        renderItem={({ item }) => (
          <DayRow
            date={item.date}
            itemsCount={item.itemsCount}
            finishedDeliveries={item.finishedDeliveries}
            totalDeliveries={item.totalDeliveries}
          />
        )}
        keyExtractor={(day) => day.id.toString()}
      />
      <View sx={{ padding: 20 }}>
        <AddParcelLink />
      </View>
    </>
  )
}

export default HomeScreen

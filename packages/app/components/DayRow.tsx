import { View, P } from 'dripsy'
import { SolitoImage } from 'solito/image'
import box from '../assets/images/box.svg'
import truck from '../assets/images/truck.svg'
import { Link } from 'solito/link'

const DayRow = ({ day, items, finishedDeliveries, totalDeliveries }) => {
  return (
    <Link href="/day">
      <View
        sx={{
          height: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 20,
          borderBottomWidth: 1,
          borderBottomColor: '$lightGray',
        }}
      >
        <P sx={{ color: '$darkGray' }}>{day}</P>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <P sx={{ paddingRight: 10, color: '$darkGray' }}>{items}</P>
          <SolitoImage src={box} height={16} width={16} alt="A box icon" />
        </View>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <P sx={{ paddingRight: 10, color: '$darkGray' }}>{finishedDeliveries} / {totalDeliveries}</P>
          <SolitoImage src={truck} height={16} width={16} alt="A truck icon" />
        </View>
      </View>
    </Link>
  )
}

export default DayRow

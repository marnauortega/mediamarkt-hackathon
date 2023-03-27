import { View, P } from 'dripsy'
import { SolitoImage } from 'solito/image'
import box from '../assets/images/box.svg'
import truckIcon from '../assets/images/truckIcon.svg'
import { Link } from 'solito/link'

const ParcelRow = ({ id, carrier, itemsCount, deliveryStatus, daySlug }) => {
  let deliveryStatusText

  if (deliveryStatus === 'delivered') {
    deliveryStatusText = (
      <P
        sx={{
          paddingRight: 10,
          textTransform: 'uppercase',
          color: '$gray',
        }}
      >
        Delivered
      </P>
    )
  }

  if (deliveryStatus === 'notDelivered') {
    deliveryStatusText = (
      <P
        sx={{
          paddingRight: 10,
          textTransform: 'uppercase',
          color: '$primary',
        }}
      >
        Delivery
      </P>
    )
  }

  return (
    <Link href={`/${daySlug}/${id}`}>
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
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <SolitoImage
            src={truckIcon}
            height={33}
            width={33}
            alt="A truck icon"
          />
          <P
            sx={{
              color: '$darkGray',
              textTransform: 'uppercase',
              paddingLeft: 10,
            }}
          >
            {id}
          </P>
        </View>
        <P
          sx={{
            color: '$darkGray',
            textTransform: 'uppercase',
          }}
        >
          {carrier}
        </P>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <P sx={{ paddingRight: 10, color: '$darkGray' }}> {itemsCount}</P>
          <SolitoImage src={box} height={16} width={16} alt="A box icon" />
        </View>
        {deliveryStatusText}
      </View>
    </Link>
  )
}

export default ParcelRow

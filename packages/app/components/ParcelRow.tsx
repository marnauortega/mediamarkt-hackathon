import { View, P } from 'dripsy'
import { SolitoImage } from 'solito/image'
import box from '../assets/images/box.svg'
import truckIcon from '../assets/images/truckIcon.svg'
import { Link } from 'solito/link'

const ParcelRow = () => {
  return (
    <Link href="/parcel">
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
            sk165887809
          </P>
        </View>
        <P
          sx={{
            color: '$darkGray',
            textTransform: 'uppercase',
          }}
        >
          Seur
        </P>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <P sx={{ paddingRight: 10, color: '$darkGray' }}> 16</P>
          <SolitoImage src={box} height={16} width={16} alt="A box icon" />
        </View>
        <P
          sx={{
            paddingRight: 10,
            textTransform: 'uppercase',
            color: '$primary',
          }}
        >
          Delivery
        </P>
      </View>
    </Link>
  )
}

export default ParcelRow

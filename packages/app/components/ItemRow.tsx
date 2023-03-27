import { View, P } from 'dripsy'
import { SolitoImage } from 'solito/image'
import watchIcon from '../assets/images/watchIcon.svg'
import laptopIcon from '../assets/images/laptopIcon.svg'
import tvIcon from '../assets/images/tvIcon.svg'
import phoneIcon from '../assets/images/phoneIcon.svg'
import light from '../assets/images/light.svg'
import regular from '../assets/images/regular.svg'
import heavy from '../assets/images/heavy.svg'
import chevronDown from '../assets/images/chevronDown.svg'
import { Link } from 'solito/link'

const ItemRow = () => {
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
            src={watchIcon}
            height={33}
            width={33}
            alt="A watch icon"
          />
          <P
            sx={{
              color: '$darkGray',
              textTransform: 'uppercase',
              paddingLeft: 10,
            }}
          >
            sk2673729
          </P>
        </View>
        <View sx={{ flexDirection: 'row', alignItems: 'center' }}>
          <P sx={{ paddingRight: 10, color: '$darkGray' }}> 100kg</P>
          <SolitoImage
            src={regular}
            height={16}
            width={16}
            alt="A half full icon"
          />
        </View>
        <SolitoImage
          src={chevronDown}
          height={16}
          width={16}
          alt="An accordion icon"
        />
      </View>
    </Link>
  )
}

export default ItemRow

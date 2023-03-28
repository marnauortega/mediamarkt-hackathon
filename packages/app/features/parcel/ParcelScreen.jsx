import { useContext } from 'react'
import { DaysContext } from 'app/provider/DaysProvider'

import Header from 'app/components/Header'
import ItemRow from '../../components/ItemRow'
import { createParam } from 'solito'
import parcels from 'app/data/parcels'
import formatDateSlug from 'app/utils/formatDateSlug'
import items from 'app/data/items'
import { P, View } from 'dripsy'
import AppButton from 'app/components/AppButton'
import { FlatList } from 'dripsy'

const { useParam } = createParam()

const ParcelScreen = () => {
  const [idSlug] = useParam('id')
  const parcel = parcels.find((parcel) => parcel.id.$oid === idSlug)

  const [daySlug] = useParam('slug')
  const { dayList } = useContext(DaysContext)
  const day = dayList.find((day) => formatDateSlug(day.date) === daySlug)
  const carrier = day.parcels.find((parcel) => parcel.$oid === idSlug).carrier

  return (
    <>
      <Header preTitle="Parcel" title={idSlug}>
        <View sx={{ flexDirection: 'row', gap: 15 }}>
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
            {parcel.itemsCount} items
          </P>
          <P
            sx={{
              color: '$lightText',
              borderColor: '$lightText',
              textTransform: 'uppercase',
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 36,
              paddingRight: 36,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {carrier}
          </P>
        </View>
      </Header>
      <FlatList
        data={parcel?.items}
        renderItem={({ item }) => {
          const itemId = item.$oid
          const itemElement = items.find((item) => item.id.$oid === itemId)

          return (
            <ItemRow
              key={itemElement.id.$oid}
              type={itemElement.type}
              id={itemElement.id.$oid}
              weight={itemElement.weight}
              price={itemElement.price}
              model={itemElement.model}
            />
          )
        }}
      />
      <View sx={{ padding: 20 }}>
        <AppButton title="Delivery" />
      </View>
    </>
  )
}

export default ParcelScreen

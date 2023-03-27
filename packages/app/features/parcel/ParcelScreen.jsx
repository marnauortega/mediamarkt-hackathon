import Header from 'app/components/Header'
import ItemRow from '../../components/ItemRow'
import { createParam } from 'solito'
import parcels from 'app/data/parcels'
import formatDateSlug from 'app/utils/formatDateSlug'
import items from 'app/data/items'
import { P, View } from 'dripsy'

const { useParam } = createParam()

const ParcelScreen = () => {
  const [idSlug] = useParam('id')
  const parcel = parcels.find(
    (parcel) => formatDateSlug(parcel.id.$oid) === idSlug
  )

  console.log(parcel)
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
            5 Items
          </P>
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
            SEUR
          </P>
        </View>
      </Header>
      {parcel?.items?.map((itemRef) => {
        const itemId = itemRef.$oid

        const item = items.find((item) => item.id.$oid === itemId)

        return (
          <ItemRow
            key={item.id.$oid}
            type={item.type}
            id={item.id.$oid}
            weight={item.weight}
            price={item.price}
            model={item.model}
          />
        )
      })}
    </>
  )
}

export default ParcelScreen

import Header from 'app/components/Header'
import ItemRow from '../../components/ItemRow'
import { createParam } from 'solito'
import parcels from 'app/data/parcels'
import formatDateSlug from 'app/utils/formatDateSlug'
import items from 'app/data/items'

const { useParam } = createParam()

const ParcelScreen = () => {
  const [idSlug] = useParam('id')
  const parcel = parcels.find(
    (parcel) => formatDateSlug(parcel.id.$oid) === idSlug
  )

  console.log(parcel)
  return (
    <>
      <Header />
      {parcel?.items?.map((itemRef) => {
        const itemId = itemRef.$oid

        const item = items.find((item) => item.id.$oid === itemId)
        console.log(item)

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

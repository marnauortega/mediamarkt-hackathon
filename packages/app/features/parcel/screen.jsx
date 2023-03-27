import Header from 'app/components/Header'
import ItemRow from '../../components/ItemRow'

const ParcelScreen = () => {
  return (
    <>
      <Header />
      {[...Array(8)].map((e, i) => (
        <ItemRow key={i} />
      ))}
    </>
  )
}

export default ParcelScreen

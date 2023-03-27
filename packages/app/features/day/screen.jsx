import Header from 'app/components/Header'
import ParcelRow from '../../components/ParcelRow'

const DayScreen = () => {
  return (
    <>
      <Header />
      {[...Array(8)].map((e, i) => (
        <ParcelRow key={i} />
      ))}
    </>
  )
}

export default DayScreen

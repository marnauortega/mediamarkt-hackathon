export default function formatDateDayMonth(date) {
  console.log(date)
  const dateObject = new Date(date)
  console.log(
    dateObject,
    dateObject.toLocaleString('es-ES', { day: 'numeric', month: 'short' })
  )
  return dateObject.toLocaleString('es-ES', { day: 'numeric', month: 'short' })
}

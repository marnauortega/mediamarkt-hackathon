export default function formatDateDayMonth(date) {
  const dateObject = new Date(date)
  return dateObject.toLocaleString('es-ES', { day: 'numeric', month: 'short' })
}

export default function formatDateDayMonth(date) {
  return date.toLocaleString('es-ES', { day: 'numeric', month: 'short' })
}

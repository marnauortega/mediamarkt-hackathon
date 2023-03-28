export default function formatDateSlug(date) {
  const dateObject = new Date(date)
  const formattedDate = dateObject.toLocaleString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return formattedDate.replaceAll(' ', '-')
}

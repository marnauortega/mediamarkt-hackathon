export default function formatDateSlug(date) {
  const formattedDate = date.toLocaleString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return formattedDate.replaceAll(' ', '-')
}

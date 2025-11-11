// Date formatting
export const formatDate = (date: Date): string => {
  const isoString: string = date.toISOString()
  const datePart: string = isoString.split('T')[0] ?? ''
  return datePart
}

// Calculate date N days ago
export const getDateNDaysAgo = (days: number): string => {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return formatDate(date)
}

// Format date for display (e.g., "January 15, 2024")
export const formatDisplayDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}


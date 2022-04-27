import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

// Express server on port 3000
// $ npm run dev
// $ open http://localhost:3000
// Return the current time in the format:
// "January 1, 2020"
// "January 1, 2020, 5:30 PM"
// "January 1, 2020, 5:30 PM EST"
// "January 1, 2020, 5:30 PM Eastern Standard Time"

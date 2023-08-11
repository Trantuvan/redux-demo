import { formatDistanceToNow, parseISO } from 'date-fns'

const TimeAgo = ({ timestamp }) => {
  let timeAgo = ''

  if (timestamp !== undefined) {
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`
  }
  return (
    <span title={timeAgo}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo

const TIME_CONTAINER_ID = 'time-container'
const TIMEZONE_TO_DISPLAY = 'Australia/Sydney'

function updateTime(timezone) {
  const timeContainer = document.getElementById(TIME_CONTAINER_ID)
  if (!timeContainer) {
    return
  }

  const now = new Date()

  // Define options for Intl.DateTimeFormat
  const options = {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24-hour notation
    timeZoneName: 'short', // e.g., AEDT or AEST
  }

  try {
    // Create a formatter for Sydney time
    const formatter = new Intl.DateTimeFormat('en-AU', options)

    // Format the time: "14:30:45 AEDT"
    // We use toUpperCase() just in case the locale returns "am/pm" or lowercase zone names
    const timeString = formatter.format(now).toUpperCase()

    timeContainer.innerText = timeString
  } catch (error) {
    console.error('Time zone error:', error)
    timeContainer.innerText = 'TIME ERROR'
  }
}

updateTime(TIMEZONE_TO_DISPLAY)
setInterval(() => updateTime(TIMEZONE_TO_DISPLAY), 1000)

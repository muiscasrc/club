const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  es: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
}

const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  es: {
    currency: {
      style: 'currency',
      currency: 'COP',
      currencySymbol: '$',
      minimumFractionDigits: 0
    }
  }
}

export { dateTimeFormats, numberFormats }

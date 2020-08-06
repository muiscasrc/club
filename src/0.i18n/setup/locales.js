const langs = []
const requireLangs = require.context('../', true, /\w+\.json$/)

requireLangs.keys().forEach((lang) => {
  langs.push(lang)
// FIX: Automated import languages
// locales[lang.replace(/[., /]/g, '')] = await import(`${lang}`)
//   const arrayTempLang = lang.split('/')
//   const indexTempLang = arrayTempLang[arrayTempLang.length - 1]
//   const keyLang = indexTempLang.split('.')[0]
//   locales[keyLang] = await import(`${lang}`)
})

const locales = {
  es: require('../langs/es.json'),
  en: require('../langs/en.json')
}

export {
  langs,
  locales
}

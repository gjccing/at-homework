import en from './en.json'
import zhTw from './zh-tw.json'

const langs = {
  en,
  'zh-tw': zhTw
}

const langUtil = {
  genUtil: (langCode) => {
    const langObj = langs[langCode]
    return {
      getMessage: (code, values) => {
        const text = (code.split('.') || []).reduce(
          (res, part) => res[part],
          langObj
        )
        return text
          ? text.replace(/{{([^}]+)}}/g, (match, g1) => values[g1] || match)
          : code
      }
    }
  }
}

export default langUtil

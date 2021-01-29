import { browser } from 'webextension-polyfill-ts'

const main = async () => {
  const value = await browser.storage.local.get('date')
  console.log(value.date ? `Access date: ${value.date}` : 'No access date')
  await browser.storage.local.set({ date: new Date().toString() })
}

main()

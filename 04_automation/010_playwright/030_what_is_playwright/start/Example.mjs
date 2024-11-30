import { chromium } from "@playwright/test";
// console.log('chromium', chromium)

// ブラウザのタブを起動
const browser = await chromium.launch({ headless: false })
// console.log('browser', browser)

// 新規のページを作成
const page = await browser.newPage()
await page.goto('http://localhost:3000')

// ページのHTML情報を取得
const htmlStr = await page.content()
console.log(htmlStr)


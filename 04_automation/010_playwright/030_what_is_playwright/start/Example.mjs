import { chromium } from "@playwright/test";

(async () => {
	// ブラウザを起動
	const browser = await chromium.launch({ headless: false, slowMo: 500 })

	// 新規のページを作成
	const page = await browser.newPage()
	await page.goto('http://localhost:3000')
	const pageTitleLocator = page.locator('.navbar-brand')
	const pageTitle = await pageTitleLocator.innerText()
	console.log('pageText', pageTitle);

	const pageTextLocator = page.locator("text=名刺管理アプリ")
	const pageText = await pageTextLocator.innerText()
	console.log('pageText', pageText)


	await browser.close()
})()

import { chromium } from "@playwright/test";

(async () => {
	// ブラウザを起動
	const browser = await chromium.launch({ headless: false, slowMo: 100 })

	// 新規のページを作成
	const page = await browser.newPage()
	await page.goto('http://localhost:3000')
	const pageTitleLocator = page.locator('.navbar-brand')
	const pageTitle = await pageTitleLocator.innerText()
	console.log('pageText', pageTitle);

	// テキストで取得
	const pageTextLocator = page.locator("text=名刺管理アプリ")
	const pageText = await pageTextLocator.innerText()
	console.log('pageText', pageText)

	// xpathで取得
	const xpathTextLocator = page.locator("xpath=//*[@id=\"__next\"]/nav/div/a")
	const xpathText = await xpathTextLocator.innerText()
	console.log('xpathText', xpathText)

	// aタグの要素を取得
	const anckerLocator = page.locator(".cards.list-group-item > a")
	const anckerAllTexts = await anckerLocator.allInnerTexts()
	console.log(anckerAllTexts[0])

	const linkTextLocator = page.locator(".cards.list-group-item > a >> nth=0")
	const linkText = await linkTextLocator.innerText()
	console.log(linkText)

	await browser.close()
})()

// @ts-check

import {test,expect} from "@playwright/test"


test("navigate_to_url",async ({page})=>{

  await page.goto("https://www.saucedemo.com/")
  await expect(page).toHaveTitle("Swag Labs")

  await page.waitForTimeout(5000)
  
})


test('test the_url', async ({page})=>{
await page.goto("https://www.saucedemo.com/")

await expect(page).toHaveURL(/.*demo/)})

test("login_swagLab", async ({page})=>{

  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  // add to one item 
  // await page.click('#add-to-cart-sauce-labs-backpack')

  // add all items 
  const buttons = await page.$$('.btn')

  for(const button of buttons){

     await button.click()

  }

  await page.waitForTimeout(3000)
});


import { expect, test } from '@playwright/test'
const url = 'http://localhost:3001/'

test('possui titulo', async ({ page }) => {
  await page.goto(url)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Intranet/)
})

test('login', async ({ page }) => {
  await page.goto(url)

  // Click the get started link.
  await page.getByLabel('Usuário *').fill('elias')
  await page.getByLabel('Senha *').fill('jkl')
  await page.getByRole('button', { name: 'Entrar' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('img', { name: 'Visiontech Logo' })).toBeVisible()
})

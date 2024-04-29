import { expect, test } from '@playwright/test'

// Login
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3001/')
  await page.getByLabel('Usuário *').fill('erf')
  await page.getByLabel('Senha *').fill('jkl')
  await page.getByRole('button', { name: 'Entrar' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('img', { name: 'Visiontech Logo' })).toBeVisible()
})

test('Executar login', async ({ page }) => {
  await page.goto('http://localhost:3001/')

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('img', { name: 'Visiontech Logo' })).toBeVisible()
})

test('Entrar na calculadora', async ({ page }) => {
  await page.getByRole('menuitem', { name: 'Comercial' }).click()
  await page.getByRole('menuitem', { name: 'Calculadora de preços' }).click()

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Intranet Visiontech/)
})

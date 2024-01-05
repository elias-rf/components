import { expect, test } from '@playwright/test'
const url = 'http://localhost:3001/'

test.describe('agenda', () => {
  test.beforeEach('login', async ({ page }) => {
    // login
    await page.goto(url)
    await page.getByLabel('Usuário *').fill('elias')
    await page.getByLabel('Senha *').fill('jkl')
    await page.getByRole('button', { name: 'Entrar' }).click()
    // goto Agenda
    await page.getByRole('button', { name: 'Outros' }).click()
    await page.getByText('Agenda de ramais').click()
  })

  test('edit agenda', async ({ page }) => {
    const mail = ` teste.${Math.trunc(Math.random() * 1000)}@mail.com`
    // await expect(
    //   page.getByText('Agenda de Ramais', { exact: true })
    // ).toBeVisible()
    // await expect(page.getByText('Brenda Gomes')).toBeVisible()
    page.getByRole('row', { name: '103 vago' }).click()
    await page.getByRole('button', { name: 'EDITAR' }).click()
    // await expect(page.getByRole('button', { name: 'EDITAR' })).toBeVisible()
    await page.getByLabel('Email').fill(mail)
    await page.getByRole('button', { name: 'SALVAR' }).click()
    await expect(
      page.getByRole('row', { name: '103' }).getByRole('cell').nth(3)
    ).toHaveText(mail)
  })
})

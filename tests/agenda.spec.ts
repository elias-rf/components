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

  test('edit', async ({ page }) => {
    const mail = ` teste.${Math.trunc(Math.random() * 1000)}@mail.com`
    page.getByRole('row', { name: '103 vago' }).click()
    await page.getByRole('button', { name: 'EDITAR' }).click()
    await page.getByLabel('Email').fill(mail)
    await page.getByRole('button', { name: 'SALVAR' }).click()
    await expect(
      page.getByRole('row', { name: '103' }).getByRole('cell').nth(3)
    ).toHaveText(mail)
  })

  test('cancel edit', async ({ page }) => {
    const mail = `teste.${Math.trunc(Math.random() * 1000)}@mail.com`
    page.getByRole('row', { name: '103 vago' }).click()
    await page.getByRole('button', { name: 'EDITAR' }).click()
    await page.getByLabel('Email').fill(mail)
    await page.getByRole('button', { name: 'CANCELAR' }).click()
    await expect(
      page.getByRole('row', { name: '103' }).getByRole('cell').nth(3)
    ).not.toHaveText(mail)
  })

  test('create and delete', async ({ page }) => {
    const mail = `teste.${Math.trunc(Math.random() * 1000)}@mail.com`
    await page.getByRole('button', { name: 'NOVO' }).click()
    await page.getByLabel('Ramal *').fill('99')
    await page.getByLabel('Nome').fill('Fulano')
    await page.getByLabel('Setor').fill('outros')
    await page.getByLabel('Email').fill(mail)
    await page.getByRole('button', { name: 'SALVAR' }).click()
    await expect(
      page.getByRole('row', { name: '99' }).getByRole('cell').nth(1)
    ).toHaveText('Fulano')
    await page.getByRole('button', { name: 'EXCLUIR' }).click()
    await page.getByRole('button', { name: 'Sim' }).click()
    await page.getByRole('table').locator('input[name="id"]').fill('99')
    await page.getByRole('table').locator('input[name="id"]').blur()
    await page.waitForResponse('api/rpc2')
    await expect(page.getByRole('row', { name: '99' })).toBeUndefined()
  })
})

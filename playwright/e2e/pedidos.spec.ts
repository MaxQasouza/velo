import { test, expect } from '@playwright/test'

test('Deve consultar um pedido aprovado', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Checkpoint 1: Verificar se a página de login está carregada
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')


//checkpoint 
await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

await page.getByTestId('search-order-id').click()
  await page.getByTestId('search-order-id').fill('VLO-D0KO1J')

await page.getByTestId('search-order-button').click()

await expect(page.getByTestId('order-result-id')).toBeVisible()
await expect(page.getByTestId('order-result-id')).toContainText('VLO-D0KO1J')

await expect(page.getByTestId('order-result-status')).toBeVisible()
await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')
})
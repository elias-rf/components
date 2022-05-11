import { test, expect, Page } from "@playwright/test";

test.describe("New Todo", () => {
  test("deve fazer login", async ({ page }) => {
    await page.goto("http://localhost:3001");
    await expect(page).toHaveURL("http://localhost:3001/login");
    await page.locator('[placeholder="Nome"]').fill("elias");
    await page.locator('[placeholder="Senha"]').fill("jkl");
    await page.locator('button:has-text("Login")').press("Enter");
    await expect(page).toHaveURL("http://localhost:3001");
    const logo = await page.locator('img[alt="logo"]');
    expect(logo).toBeDefined();
  });
});

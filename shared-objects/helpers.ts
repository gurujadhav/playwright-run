
export async function waitAndClick( selector: string): Promise<void> {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.click(selector);
}

export async function waitAndFill(selector: string, value: string): Promise<void> {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.fill(selector, value);
}

export async function getText(selector: string): Promise<string> {
  await page.waitForSelector(selector, { state: 'visible' });
  return (await page.textContent(selector)) ?? '';
}

export async function isVisible(selector: string, timeout = 3000): Promise<boolean> {
  try {
    await page.waitForSelector(selector, { state: 'visible', timeout });
    return true;
  } catch {
    return false;
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

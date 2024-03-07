// @ts-check
const { test, expect } = require('@playwright/test');

test('Googleค้นคำว่า หวย ', async ({ page }) => {
  // Step 1 :: go to search page.
  await test.step('Step 1 :: go to search page', async () => {
    await page.goto('https://www.google.com/');
  });

  await test.step('Step 2 :: Type into search box', async () => {
    const seachField = page.locator('#APjFqb');
    await seachField.fill('หวย');
      await seachField.press('Enter');   // ทำไมรันแล้วมันไม่กด Enter หนา?? 
    
  });

  await test.step('Step 3 :: Assert text in id=result-stats', async () => {
    // Assert "ผลการค้นหาประมาณ XXX รายการ (X.XX วินาที)"
    // Step 3 :: Assert text in id=result-stats
    await expect(page.locator('#result-stats')).toHaveText(/ผลการค้นหาประมาณ/);
   // await expect(page.locator('#result-stats')).toHaveText(/รายการ/);
   // await expect(page.locator('#result-stats')).toHaveText(/วินาที/);

    // Assert with regular expression ผลการค้นหาประมาณ 101,000,000 รายการ (0.36 วินาที)
    await expect(page.locator('#result-stats'))
    //  .toHaveText(/ผลการค้นหาประมาณ \d{1,3},\d{3},\d{3} รายการ \(\d{1,2}\.\d{1,2} วินาที\)/);

  });   

});
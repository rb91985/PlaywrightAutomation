# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/tc04login.spec.ts >> Verify that a sample PDF can be uploaded as an attachment. 
- Location: tests/handsonExercise/tc04login.spec.ts:12:5

# Error details

```
Error: locator.waitFor: Error: strict mode violation: locator('div[role="dialog"]') resolved to 2 elements:
    1) <div role="dialog" data-v-fa3720ff="" data-v-edf1c7c7="" class="oxd-overlay oxd-overlay--flex oxd-overlay--flex-centered oxd-overlay--hide oxd-layout-overlay"></div> aka locator('.oxd-overlay').first()
    2) <div role="dialog" data-v-fa3720ff="" data-v-126e9e0f="" data-v-8f9701a2="" class="oxd-overlay oxd-overlay--flex oxd-overlay--flex-centered fade-enter-from fade-enter-active">…</div> aka getByRole('dialog')

Call log:
  - waiting for locator('div[role="dialog"]') to be visible

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic:
      - complementary [ref=f3e4]:
        - navigation "Sidepanel" [ref=f3e5]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f3e9]
            - text: 
          - generic [ref=f3e10]:
            - generic [ref=f3e11]:
              - generic [ref=f3e12]:
                - textbox "Search" [ref=f3e15]
                - button "" [ref=f3e16] [cursor=pointer]
              - separator [ref=f3e18]
            - list [ref=f3e19]:
              - listitem [ref=f3e20]:
                - link "Admin" [ref=f3e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f3e25]:
                - link "PIM" [ref=f3e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f3e41]:
                - link "Leave" [ref=f3e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f3e46]:
                - link "Time" [ref=f3e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f3e54]:
                - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f3e62]:
                - link "My Info" [ref=f3e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f3e70]:
                - link "Performance" [ref=f3e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f3e80]:
                - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f3e85]:
                - link "Directory" [ref=f3e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f3e90]:
                - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f3e96]:
                - link "Claim" [ref=f3e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f3e105]:
                - link "Buzz" [ref=f3e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f3e110]:
        - generic [ref=f3e111]:
          - generic [ref=f3e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f3e114]
          - link [ref=f3e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f3e117] [cursor=pointer]
          - list [ref=f3e123]:
            - listitem [ref=f3e124]:
              - generic [ref=f3e125] [cursor=pointer]:
                - img "profile picture" [ref=f3e126]
                - paragraph [ref=f3e127]: Ramya J
                - generic [ref=f3e128]: 
        - navigation "Topbar Menu" [ref=f3e130]:
          - list [ref=f3e131]:
            - button "" [ref=f3e133] [cursor=pointer]
    - generic [ref=f3e135]:
      - generic [ref=f3e139]:
        - generic [ref=f3e140]:
          - generic [ref=f3e141]:
            - heading "Ramya J" [level=6] [ref=f3e143]
            - img "profile picture" [ref=f3e146] [cursor=pointer]
          - tablist [ref=f3e147]:
            - tab [ref=f3e148]:
              - link "Personal Details" [ref=f3e149] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
            - tab [ref=f3e150]:
              - link "Contact Details" [ref=f3e151] [cursor=pointer]:
                - /url: /web/index.php/pim/contactDetails/empNumber/7
            - tab [ref=f3e152]:
              - link "Emergency Contacts" [ref=f3e153] [cursor=pointer]:
                - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
            - tab [ref=f3e154]:
              - link "Dependents" [ref=f3e155] [cursor=pointer]:
                - /url: /web/index.php/pim/viewDependents/empNumber/7
            - tab [ref=f3e156]:
              - link "Immigration" [ref=f3e157] [cursor=pointer]:
                - /url: /web/index.php/pim/viewImmigration/empNumber/7
            - tab [ref=f3e158]:
              - link "Job" [ref=f3e159] [cursor=pointer]:
                - /url: /web/index.php/pim/viewJobDetails/empNumber/7
            - tab [ref=f3e160]:
              - link "Salary" [ref=f3e161] [cursor=pointer]:
                - /url: /web/index.php/pim/viewSalaryList/empNumber/7
            - tab [ref=f3e162]:
              - link "Report-to" [ref=f3e163] [cursor=pointer]:
                - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
            - tab [ref=f3e164]:
              - link "Qualifications" [ref=f3e165] [cursor=pointer]:
                - /url: /web/index.php/pim/viewQualifications/empNumber/7
            - tab [ref=f3e166]:
              - link "Memberships" [ref=f3e167] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMemberships/empNumber/7
        - generic [ref=f3e168]:
          - generic [ref=f3e170]:
            - heading "Assigned Dependents" [level=6] [ref=f3e171]
            - button " Add" [ref=f3e172] [cursor=pointer]:
              - generic [ref=f3e173]: 
              - text: Add
          - table [ref=f3e175]
          - generic [ref=f3e180]:
            - separator [ref=f3e181]
            - generic [ref=f3e183]:
              - heading "Attachments" [level=6] [ref=f3e184]
              - button " Add" [ref=f3e185] [cursor=pointer]:
                - generic [ref=f3e186]: 
                - text: Add
            - generic [ref=f3e187]:
              - separator [ref=f3e188]
              - generic [ref=f3e189]: (1) Record Found
            - table [ref=f3e192]:
              - rowgroup [ref=f3e193]:
                - row [ref=f3e194]:
                  - columnheader "" [ref=f3e195]:
                    - generic [ref=f3e197] [cursor=pointer]:
                      - checkbox "" [ref=f3e198]
                      - generic [ref=f3e199]: 
                  - columnheader "File Name" [ref=f3e201]
                  - columnheader "Description" [ref=f3e202]
                  - columnheader "Size" [ref=f3e203]
                  - columnheader "Type" [ref=f3e204]
                  - columnheader "Date Added" [ref=f3e205]
                  - columnheader "Added By" [ref=f3e206]
                  - columnheader "Actions" [ref=f3e207]
              - rowgroup [ref=f3e208]:
                - row [ref=f3e210]:
                  - cell "" [ref=f3e211]:
                    - generic [ref=f3e214] [cursor=pointer]:
                      - checkbox "" [ref=f3e215]
                      - generic [ref=f3e216]: 
                  - cell "Samplefileupload.rtf" [ref=f3e218]
                  - cell [ref=f3e220]
                  - cell "381.00 B" [ref=f3e221]
                  - cell "text/rtf" [ref=f3e223]
                  - cell "2026-19-09" [ref=f3e225]
                  - cell "Admin" [ref=f3e227]
                  - cell [ref=f3e229]:
                    - generic [ref=f3e230]:
                      - button "" [ref=f3e231] [cursor=pointer]
                      - button "" [active] [ref=f3e233] [cursor=pointer]
                      - button "" [ref=f3e235] [cursor=pointer]
      - generic [ref=f3e237]:
        - paragraph [ref=f3e238]: OrangeHRM OS 5.9
        - paragraph [ref=f3e239]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f3e240] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f3e242] [cursor=pointer]:
    - generic [ref=f3e243]:
      - generic [ref=f3e244]: 
      - generic [ref=f3e247]:
        - paragraph [ref=f3e248]: Success
        - paragraph [ref=f3e249]: Successfully Saved
    - button "×" [ref=f3e251]
  - dialog [ref=f3e252]:
    - document [ref=f3e255]:
      - button "×" [ref=f3e256] [cursor=pointer]
      - paragraph [ref=f3e258]: Are you Sure?
      - paragraph [ref=f3e260]: The selected record will be permanently deleted. Are you sure you want to continue?
      - generic [ref=f3e261]:
        - button "No, Cancel" [ref=f3e262] [cursor=pointer]
        - button " Yes, Delete" [ref=f3e263] [cursor=pointer]:
          - generic [ref=f3e264]: 
          - text: Yes, Delete
```

# Test source

```ts
  1  | // Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2  | // Log in with valid credentials. 
  3  | // Select the “My Info” tab. 
  4  | // Open the “Dependents” subtab. 
  5  | // In the Attachments section, select “Add.” 
  6  | // Browse to and select a sample PDF from the device. 
  7  | // Select “Save.
  8  | 
  9  | 
  10 | import { test, expect } from '@playwright/test';
  11 | 
  12 | test ('Verify that a sample PDF can be uploaded as an attachment. ', async({page}) => {
  13 | page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  14 | await page.fill('input[name="username"]', 'Admin');
  15 | await page.fill('input[name="password"]', 'admin123');
  16 | await page.click('button[type="submit"]');
  17 | await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
  18 | 
  19 | await page.click('a[href="/web/index.php/pim/viewDependents/empNumber/7"]'); // Click on "Dependents" subtab
  20 | 
  21 | await page.click('button[type="button"]:has-text("Add")'); // Click "Add" button
  22 | 
  23 | // await page.fill('input[class="oxd-input oxd-input--active"]', 'DependentName'); // Enter dependent name
  24 | 
  25 | await page.getByRole('textbox').nth(1).fill('DependentName');
  26 | 
  27 | // await page.selectOption('select[class="oxd-select-text-input"]', 'other'); // Select "Other" as relationship
  28 | 
  29 | // await page.getByRole('textbox').nth(2).fill('other');
  30 | 
  31 | // await page.locator('.oxd-select-option', { hasText: /^Other$/ }).click();
  32 | 
  33 | const dropdown = page.locator('.orangehrm-edit-employee-content form .oxd-select-text-input').first();
  34 |   
  35 |   // Open the dropdown menu
  36 |   await dropdown.click();
  37 | 
  38 |   // 2. Select the option with the exact text "Other"
  39 |   const optionOther = page.locator('.oxd-select-option', { hasText: /^Other$/ });
  40 |   await optionOther.click();
  41 | 
  42 |   // 3. Optional assertion to verify "Other" is selected
  43 |   await expect(dropdown).toHaveText('Other');
  44 | 
  45 |   await page.getByRole('textbox').nth(2).isVisible();
  46 |   await page.getByRole('textbox').nth(2).fill('SpecifiedRelationship');
  47 | // await page.fill('input[name="relationship"]', 'SpecifiedRelationship'); // Specify the relationship
  48 | await page.getByRole('button', { name: 'Save' }).click(); // Click "Save" (Add Dependent form is inline, not a modal)
  49 | await page.getByText('Successfully Saved').waitFor(); // Wait for add confirmation toast
  50 | 
  51 | // await page.click('button[type="button"]:has-text("Edit")'); // Click "Edit" button for the dependent
  52 | 
  53 | await page.locator('//div[@class="oxd-table-body"]/div[1]//button[2]').first().click();
  54 | 
  55 | const editDialog = page.locator('div[role="dialog"]');
> 56 | await editDialog.waitFor({ state: 'visible' }); // Wait for the Edit dialog to be fully rendered
     |                  ^ Error: locator.waitFor: Error: strict mode violation: locator('div[role="dialog"]') resolved to 2 elements:
  57 | 
  58 | await editDialog.getByRole('textbox').nth(1).fill('UpdatedDependentName');
  59 | 
  60 | await editDialog.getByRole('button', { name: 'Save' }).click(); // Click "Save"
  61 | await page.getByText('Successfully Updated').waitFor(); // Wait for save confirmation toast
  62 | await editDialog.waitFor({ state: 'hidden' }); // Wait for the Edit dialog to fully close
  63 | 
  64 | 
  65 | const secondAddButton = page.getByRole('button', { name: 'Add' }).nth(1);
  66 |   await secondAddButton.click();
  67 | 
  68 | const browseBtn = page.locator('.oxd-file-button', { hasText: 'Browse' }).first();
  69 | 
  70 |   // Explicitly wait for the element to be visible
  71 |   await browseBtn.waitFor({ state: 'visible', timeout: 10000 });
  72 | 
  73 |   // Listen for the file picker event before clicking
  74 |   const [fileChooser] = await Promise.all([
  75 |     page.waitForEvent('filechooser'),
  76 |     browseBtn.click()
  77 |   ]);
  78 | 
  79 |   // Attach the file
  80 |   await fileChooser.setFiles('/Users/rameshbalasubramanian/PlaywrightAutomation/Samplefileupload.rtf');
  81 | 
  82 |   const saveButton = page.getByRole('button', { name: 'Save' }).last();
  83 | 
  84 |   // Wait explicitly for visibility (default timeout: 30s)
  85 |   await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  86 |   await saveButton.click();
  87 | 
  88 | await saveButton.getByText('Successfully Uploaded').waitFor(); // Wait for upload confirmation toast
  89 | 
  90 | });
```
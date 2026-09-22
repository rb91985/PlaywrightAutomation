# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/tc04login.spec.ts >> Verify that a sample PDF can be uploaded as an attachment. 
- Location: tests/handsonExercise/tc04login.spec.ts:12:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div[role="dialog"]').getByRole('button', { name: 'Save' })

```

# Page snapshot

```yaml
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
        - generic [ref=f3e169]:
          - heading "Add Dependent" [level=6] [ref=f3e170]
          - separator [ref=f3e171]
          - generic [ref=f3e172]:
            - generic [ref=f3e174]:
              - generic [ref=f3e176]:
                - generic [ref=f3e177]: Name*
                - textbox [ref=f3e180]: DependentName
              - generic [ref=f3e182]:
                - generic [ref=f3e183]: Relationship*
                - generic [ref=f3e187] [cursor=pointer]:
                  - generic [ref=f3e188]: Other
                  - generic [ref=f3e189]: 
              - generic [ref=f3e192]:
                - generic [ref=f3e193]: Please Specify*
                - textbox [active] [ref=f3e196]: SpecifiedRelationship
            - generic [ref=f3e200]:
              - generic [ref=f3e201]: Date of Birth
              - generic [ref=f3e205]:
                - textbox "yyyy-dd-mm" [ref=f3e206]
                - generic [ref=f3e207] [cursor=pointer]: 
            - generic [ref=f3e208]:
              - paragraph [ref=f3e209]: "* Required"
              - button "Cancel" [ref=f3e210] [cursor=pointer]
              - button "Save" [ref=f3e211] [cursor=pointer]
        - separator [ref=f3e212]
        - generic [ref=f3e214]:
          - heading "Assigned Dependents" [level=6] [ref=f3e215]
          - button " Add" [ref=f3e216] [cursor=pointer]:
            - generic [ref=f3e217]: 
            - text: Add
        - generic [ref=f3e218]:
          - separator [ref=f3e219]
          - generic [ref=f3e220]: (9) Records Found
        - table [ref=f3e223]:
          - rowgroup [ref=f3e224]:
            - row [ref=f3e225]:
              - columnheader "" [ref=f3e226]:
                - generic [ref=f3e228] [cursor=pointer]:
                  - checkbox "" [ref=f3e229]
                  - generic [ref=f3e230]: 
              - columnheader "Name" [ref=f3e232]
              - columnheader "Relationship" [ref=f3e233]
              - columnheader "Date of Birth" [ref=f3e234]
              - columnheader "Actions" [ref=f3e235]
          - rowgroup [ref=f3e236]:
            - row [ref=f3e238]:
              - cell "" [ref=f3e239]:
                - generic [ref=f3e242]:
                  - checkbox "" [disabled] [ref=f3e243]
                  - generic [ref=f3e244]: 
              - cell "DependentName" [ref=f3e246]
              - cell "SpecifiedRelationship" [ref=f3e248]
              - cell [ref=f3e250]
              - cell [ref=f3e251]:
                - generic [ref=f3e252]:
                  - button "" [disabled] [ref=f3e253]
                  - button "" [disabled] [ref=f3e255]
            - row [ref=f3e258]:
              - cell "" [ref=f3e259]:
                - generic [ref=f3e262]:
                  - checkbox "" [disabled] [ref=f3e263]
                  - generic [ref=f3e264]: 
              - cell "DependentName" [ref=f3e266]
              - cell "SpecifiedRelationship" [ref=f3e268]
              - cell [ref=f3e270]
              - cell [ref=f3e271]:
                - generic [ref=f3e272]:
                  - button "" [disabled] [ref=f3e273]
                  - button "" [disabled] [ref=f3e275]
            - row [ref=f3e278]:
              - cell "" [ref=f3e279]:
                - generic [ref=f3e282]:
                  - checkbox "" [disabled] [ref=f3e283]
                  - generic [ref=f3e284]: 
              - cell "DependentName" [ref=f3e286]
              - cell "SpecifiedRelationship" [ref=f3e288]
              - cell [ref=f3e290]
              - cell [ref=f3e291]:
                - generic [ref=f3e292]:
                  - button "" [disabled] [ref=f3e293]
                  - button "" [disabled] [ref=f3e295]
            - row [ref=f3e298]:
              - cell "" [ref=f3e299]:
                - generic [ref=f3e302]:
                  - checkbox "" [disabled] [ref=f3e303]
                  - generic [ref=f3e304]: 
              - cell "dsa" [ref=f3e306]
              - cell "asdf" [ref=f3e308]
              - cell [ref=f3e310]
              - cell [ref=f3e311]:
                - generic [ref=f3e312]:
                  - button "" [disabled] [ref=f3e313]
                  - button "" [disabled] [ref=f3e315]
            - row [ref=f3e318]:
              - cell "" [ref=f3e319]:
                - generic [ref=f3e322]:
                  - checkbox "" [disabled] [ref=f3e323]
                  - generic [ref=f3e324]: 
              - cell "UpdatedDependentName" [ref=f3e326]
              - cell "SpecifiedRelationship" [ref=f3e328]
              - cell [ref=f3e330]
              - cell [ref=f3e331]:
                - generic [ref=f3e332]:
                  - button "" [disabled] [ref=f3e333]
                  - button "" [disabled] [ref=f3e335]
            - row [ref=f3e338]:
              - cell "" [ref=f3e339]:
                - generic [ref=f3e342]:
                  - checkbox "" [disabled] [ref=f3e343]
                  - generic [ref=f3e344]: 
              - cell "UpdatedDependentName" [ref=f3e346]
              - cell "SpecifiedRelationship" [ref=f3e348]
              - cell [ref=f3e350]
              - cell [ref=f3e351]:
                - generic [ref=f3e352]:
                  - button "" [disabled] [ref=f3e353]
                  - button "" [disabled] [ref=f3e355]
            - row [ref=f3e358]:
              - cell "" [ref=f3e359]:
                - generic [ref=f3e362]:
                  - checkbox "" [disabled] [ref=f3e363]
                  - generic [ref=f3e364]: 
              - cell "UpdatedDependentName" [ref=f3e366]
              - cell "SpecifiedRelationship" [ref=f3e368]
              - cell [ref=f3e370]
              - cell [ref=f3e371]:
                - generic [ref=f3e372]:
                  - button "" [disabled] [ref=f3e373]
                  - button "" [disabled] [ref=f3e375]
            - row [ref=f3e378]:
              - cell "" [ref=f3e379]:
                - generic [ref=f3e382]:
                  - checkbox "" [disabled] [ref=f3e383]
                  - generic [ref=f3e384]: 
              - cell "UpdatedDependentName" [ref=f3e386]
              - cell "SpecifiedRelationship" [ref=f3e388]
              - cell [ref=f3e390]
              - cell [ref=f3e391]:
                - generic [ref=f3e392]:
                  - button "" [disabled] [ref=f3e393]
                  - button "" [disabled] [ref=f3e395]
            - row [ref=f3e398]:
              - cell "" [ref=f3e399]:
                - generic [ref=f3e402]:
                  - checkbox "" [disabled] [ref=f3e403]
                  - generic [ref=f3e404]: 
              - cell "UpdatedDependentName" [ref=f3e406]
              - cell "SpecifiedRelationship" [ref=f3e408]
              - cell [ref=f3e410]
              - cell [ref=f3e411]:
                - generic [ref=f3e412]:
                  - button "" [disabled] [ref=f3e413]
                  - button "" [disabled] [ref=f3e415]
        - generic [ref=f3e418]:
          - separator [ref=f3e419]
          - generic [ref=f3e421]:
            - heading "Attachments" [level=6] [ref=f3e422]
            - button " Add" [ref=f3e423] [cursor=pointer]:
              - generic [ref=f3e424]: 
              - text: Add
          - generic [ref=f3e425]:
            - separator [ref=f3e426]
            - generic [ref=f3e427]: (1) Record Found
          - table [ref=f3e430]:
            - rowgroup [ref=f3e431]:
              - row [ref=f3e432]:
                - columnheader "" [ref=f3e433]:
                  - generic [ref=f3e435] [cursor=pointer]:
                    - checkbox "" [ref=f3e436]
                    - generic [ref=f3e437]: 
                - columnheader "File Name" [ref=f3e439]
                - columnheader "Description" [ref=f3e440]
                - columnheader "Size" [ref=f3e441]
                - columnheader "Type" [ref=f3e442]
                - columnheader "Date Added" [ref=f3e443]
                - columnheader "Added By" [ref=f3e444]
                - columnheader "Actions" [ref=f3e445]
            - rowgroup [ref=f3e446]:
              - row [ref=f3e448]:
                - cell "" [ref=f3e449]:
                  - generic [ref=f3e452] [cursor=pointer]:
                    - checkbox "" [ref=f3e453]
                    - generic [ref=f3e454]: 
                - cell "Samplefileupload.rtf" [ref=f3e456]
                - cell [ref=f3e458]
                - cell "381.00 B" [ref=f3e459]
                - cell "text/rtf" [ref=f3e461]
                - cell "2026-19-09" [ref=f3e463]
                - cell "Admin" [ref=f3e465]
                - cell [ref=f3e467]:
                  - generic [ref=f3e468]:
                    - button "" [ref=f3e469] [cursor=pointer]
                    - button "" [ref=f3e471] [cursor=pointer]
                    - button "" [ref=f3e473] [cursor=pointer]
    - generic [ref=f3e475]:
      - paragraph [ref=f3e476]: OrangeHRM OS 5.9
      - paragraph [ref=f3e477]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e478] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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
  48 | const addDialog = page.locator('div[role="dialog"]');
> 49 | await addDialog.getByRole('button', { name: 'Save' }).click(); // Click "Save"
     |                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  50 | await addDialog.waitFor({ state: 'hidden' }); // Wait for the Add dialog to fully close
  51 | 
  52 | // await page.click('button[type="button"]:has-text("Edit")'); // Click "Edit" button for the dependent
  53 | 
  54 | await page.locator('//div[@class="oxd-table-body"]/div[1]//button[2]').click();
  55 | 
  56 | const editDialog = page.locator('div[role="dialog"]');
  57 | await editDialog.waitFor({ state: 'visible' }); // Wait for the Edit dialog to be fully rendered
  58 | 
  59 | await editDialog.getByRole('textbox').nth(1).fill('UpdatedDependentName');
  60 | 
  61 | await editDialog.getByRole('button', { name: 'Save' }).click(); // Click "Save"
  62 | await page.getByText('Successfully Updated').waitFor(); // Wait for save confirmation toast
  63 | await editDialog.waitFor({ state: 'hidden' }); // Wait for the Edit dialog to fully close
  64 | 
  65 | 
  66 | const secondAddButton = page.getByRole('button', { name: 'Add' }).nth(1);
  67 |   await secondAddButton.click();
  68 | 
  69 | const browseBtn = page.locator('.oxd-file-button', { hasText: 'Browse' }).first();
  70 | 
  71 |   // Explicitly wait for the element to be visible
  72 |   await browseBtn.waitFor({ state: 'visible', timeout: 10000 });
  73 | 
  74 |   // Listen for the file picker event before clicking
  75 |   const [fileChooser] = await Promise.all([
  76 |     page.waitForEvent('filechooser'),
  77 |     browseBtn.click()
  78 |   ]);
  79 | 
  80 |   // Attach the file
  81 |   await fileChooser.setFiles('/Users/rameshbalasubramanian/PlaywrightAutomation/Samplefileupload.rtf');
  82 | 
  83 |   const saveButton = page.getByRole('button', { name: 'Save' }).last();
  84 | 
  85 |   // Wait explicitly for visibility (default timeout: 30s)
  86 |   await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  87 |   await saveButton.click();
  88 | 
  89 | await saveButton.getByText('Successfully Uploaded').waitFor(); // Wait for upload confirmation toast
  90 | 
  91 | });
```
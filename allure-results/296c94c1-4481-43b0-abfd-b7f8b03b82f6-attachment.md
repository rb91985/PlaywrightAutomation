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
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('Successfully Uploaded') to be visible

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
              - paragraph [ref=f3e127]: tom jerry
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - button "" [ref=f3e133] [cursor=pointer]
  - generic [ref=f3e135]:
    - generic [ref=f3e139]:
      - generic [ref=f3e140]:
        - generic [ref=f3e141]:
          - heading "tom jerry" [level=6] [ref=f3e143]
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
        - generic [ref=f3e174]:
          - separator [ref=f3e175]
          - generic [ref=f3e176]: (18) Records Found
        - table [ref=f3e179]:
          - rowgroup [ref=f3e180]:
            - row [ref=f3e181]:
              - columnheader "" [ref=f3e182]:
                - generic [ref=f3e184] [cursor=pointer]:
                  - checkbox "" [ref=f3e185]
                  - generic [ref=f3e186]: 
              - columnheader "Name" [ref=f3e188]
              - columnheader "Relationship" [ref=f3e189]
              - columnheader "Date of Birth" [ref=f3e190]
              - columnheader "Actions" [ref=f3e191]
          - rowgroup [ref=f3e192]:
            - row [ref=f3e194]:
              - cell "" [ref=f3e195]:
                - generic [ref=f3e198] [cursor=pointer]:
                  - checkbox "" [ref=f3e199]
                  - generic [ref=f3e200]: 
              - cell "DependentName" [ref=f3e202]
              - cell "SpecifiedRelationship" [ref=f3e204]
              - cell [ref=f3e206]
              - cell [ref=f3e207]:
                - generic [ref=f3e208]:
                  - button "" [ref=f3e209] [cursor=pointer]
                  - button "" [ref=f3e211] [cursor=pointer]
            - row [ref=f3e214]:
              - cell "" [ref=f3e215]:
                - generic [ref=f3e218] [cursor=pointer]:
                  - checkbox "" [ref=f3e219]
                  - generic [ref=f3e220]: 
              - cell "DependentName" [ref=f3e222]
              - cell "SpecifiedRelationship" [ref=f3e224]
              - cell [ref=f3e226]
              - cell [ref=f3e227]:
                - generic [ref=f3e228]:
                  - button "" [ref=f3e229] [cursor=pointer]
                  - button "" [ref=f3e231] [cursor=pointer]
            - row [ref=f3e234]:
              - cell "" [ref=f3e235]:
                - generic [ref=f3e238] [cursor=pointer]:
                  - checkbox "" [ref=f3e239]
                  - generic [ref=f3e240]: 
              - cell "DependentName" [ref=f3e242]
              - cell "SpecifiedRelationship" [ref=f3e244]
              - cell [ref=f3e246]
              - cell [ref=f3e247]:
                - generic [ref=f3e248]:
                  - button "" [ref=f3e249] [cursor=pointer]
                  - button "" [ref=f3e251] [cursor=pointer]
            - row [ref=f3e254]:
              - cell "" [ref=f3e255]:
                - generic [ref=f3e258] [cursor=pointer]:
                  - checkbox "" [ref=f3e259]
                  - generic [ref=f3e260]: 
              - cell "DependentName" [ref=f3e262]
              - cell "SpecifiedRelationship" [ref=f3e264]
              - cell [ref=f3e266]
              - cell [ref=f3e267]:
                - generic [ref=f3e268]:
                  - button "" [ref=f3e269] [cursor=pointer]
                  - button "" [ref=f3e271] [cursor=pointer]
            - row [ref=f3e274]:
              - cell "" [ref=f3e275]:
                - generic [ref=f3e278] [cursor=pointer]:
                  - checkbox "" [ref=f3e279]
                  - generic [ref=f3e280]: 
              - cell "DependentName" [ref=f3e282]
              - cell "SpecifiedRelationship" [ref=f3e284]
              - cell [ref=f3e286]
              - cell [ref=f3e287]:
                - generic [ref=f3e288]:
                  - button "" [ref=f3e289] [cursor=pointer]
                  - button "" [ref=f3e291] [cursor=pointer]
            - row [ref=f3e294]:
              - cell "" [ref=f3e295]:
                - generic [ref=f3e298] [cursor=pointer]:
                  - checkbox "" [ref=f3e299]
                  - generic [ref=f3e300]: 
              - cell "DependentName" [ref=f3e302]
              - cell "SpecifiedRelationship" [ref=f3e304]
              - cell [ref=f3e306]
              - cell [ref=f3e307]:
                - generic [ref=f3e308]:
                  - button "" [ref=f3e309] [cursor=pointer]
                  - button "" [ref=f3e311] [cursor=pointer]
            - row [ref=f3e314]:
              - cell "" [ref=f3e315]:
                - generic [ref=f3e318] [cursor=pointer]:
                  - checkbox "" [ref=f3e319]
                  - generic [ref=f3e320]: 
              - cell "DependentName" [ref=f3e322]
              - cell "SpecifiedRelationship" [ref=f3e324]
              - cell [ref=f3e326]
              - cell [ref=f3e327]:
                - generic [ref=f3e328]:
                  - button "" [ref=f3e329] [cursor=pointer]
                  - button "" [ref=f3e331] [cursor=pointer]
            - row [ref=f3e334]:
              - cell "" [ref=f3e335]:
                - generic [ref=f3e338] [cursor=pointer]:
                  - checkbox "" [ref=f3e339]
                  - generic [ref=f3e340]: 
              - cell "DependentName" [ref=f3e342]
              - cell "SpecifiedRelationship" [ref=f3e344]
              - cell [ref=f3e346]
              - cell [ref=f3e347]:
                - generic [ref=f3e348]:
                  - button "" [ref=f3e349] [cursor=pointer]
                  - button "" [ref=f3e351] [cursor=pointer]
            - row [ref=f3e354]:
              - cell "" [ref=f3e355]:
                - generic [ref=f3e358] [cursor=pointer]:
                  - checkbox "" [ref=f3e359]
                  - generic [ref=f3e360]: 
              - cell "DependentName" [ref=f3e362]
              - cell "SpecifiedRelationship" [ref=f3e364]
              - cell [ref=f3e366]
              - cell [ref=f3e367]:
                - generic [ref=f3e368]:
                  - button "" [ref=f3e369] [cursor=pointer]
                  - button "" [ref=f3e371] [cursor=pointer]
            - row [ref=f3e374]:
              - cell "" [ref=f3e375]:
                - generic [ref=f3e378] [cursor=pointer]:
                  - checkbox "" [ref=f3e379]
                  - generic [ref=f3e380]: 
              - cell "DependentName" [ref=f3e382]
              - cell "SpecifiedRelationship" [ref=f3e384]
              - cell [ref=f3e386]
              - cell [ref=f3e387]:
                - generic [ref=f3e388]:
                  - button "" [ref=f3e389] [cursor=pointer]
                  - button "" [ref=f3e391] [cursor=pointer]
            - row [ref=f3e394]:
              - cell "" [ref=f3e395]:
                - generic [ref=f3e398] [cursor=pointer]:
                  - checkbox "" [ref=f3e399]
                  - generic [ref=f3e400]: 
              - cell "DependentName" [ref=f3e402]
              - cell "SpecifiedRelationship" [ref=f3e404]
              - cell [ref=f3e406]
              - cell [ref=f3e407]:
                - generic [ref=f3e408]:
                  - button "" [ref=f3e409] [cursor=pointer]
                  - button "" [ref=f3e411] [cursor=pointer]
            - row [ref=f3e414]:
              - cell "" [ref=f3e415]:
                - generic [ref=f3e418] [cursor=pointer]:
                  - checkbox "" [ref=f3e419]
                  - generic [ref=f3e420]: 
              - cell "dsa" [ref=f3e422]
              - cell "asdf" [ref=f3e424]
              - cell [ref=f3e426]
              - cell [ref=f3e427]:
                - generic [ref=f3e428]:
                  - button "" [ref=f3e429] [cursor=pointer]
                  - button "" [ref=f3e431] [cursor=pointer]
            - row [ref=f3e434]:
              - cell "" [ref=f3e435]:
                - generic [ref=f3e438] [cursor=pointer]:
                  - checkbox "" [ref=f3e439]
                  - generic [ref=f3e440]: 
              - cell "UpdatedDependentName" [ref=f3e442]
              - cell "SpecifiedRelationship" [ref=f3e444]
              - cell [ref=f3e446]
              - cell [ref=f3e447]:
                - generic [ref=f3e448]:
                  - button "" [ref=f3e449] [cursor=pointer]
                  - button "" [ref=f3e451] [cursor=pointer]
            - row [ref=f3e454]:
              - cell "" [ref=f3e455]:
                - generic [ref=f3e458] [cursor=pointer]:
                  - checkbox "" [ref=f3e459]
                  - generic [ref=f3e460]: 
              - cell "UpdatedDependentName" [ref=f3e462]
              - cell "SpecifiedRelationship" [ref=f3e464]
              - cell [ref=f3e466]
              - cell [ref=f3e467]:
                - generic [ref=f3e468]:
                  - button "" [ref=f3e469] [cursor=pointer]
                  - button "" [ref=f3e471] [cursor=pointer]
            - row [ref=f3e474]:
              - cell "" [ref=f3e475]:
                - generic [ref=f3e478] [cursor=pointer]:
                  - checkbox "" [ref=f3e479]
                  - generic [ref=f3e480]: 
              - cell "UpdatedDependentName" [ref=f3e482]
              - cell "SpecifiedRelationship" [ref=f3e484]
              - cell [ref=f3e486]
              - cell [ref=f3e487]:
                - generic [ref=f3e488]:
                  - button "" [ref=f3e489] [cursor=pointer]
                  - button "" [ref=f3e491] [cursor=pointer]
            - row [ref=f3e494]:
              - cell "" [ref=f3e495]:
                - generic [ref=f3e498] [cursor=pointer]:
                  - checkbox "" [ref=f3e499]
                  - generic [ref=f3e500]: 
              - cell "UpdatedDependentName" [ref=f3e502]
              - cell "SpecifiedRelationship" [ref=f3e504]
              - cell [ref=f3e506]
              - cell [ref=f3e507]:
                - generic [ref=f3e508]:
                  - button "" [ref=f3e509] [cursor=pointer]
                  - button "" [ref=f3e511] [cursor=pointer]
            - row [ref=f3e514]:
              - cell "" [ref=f3e515]:
                - generic [ref=f3e518] [cursor=pointer]:
                  - checkbox "" [ref=f3e519]
                  - generic [ref=f3e520]: 
              - cell "UpdatedDependentName" [ref=f3e522]
              - cell "SpecifiedRelationship" [ref=f3e524]
              - cell [ref=f3e526]
              - cell [ref=f3e527]:
                - generic [ref=f3e528]:
                  - button "" [ref=f3e529] [cursor=pointer]
                  - button "" [ref=f3e531] [cursor=pointer]
            - row [ref=f3e534]:
              - cell "" [ref=f3e535]:
                - generic [ref=f3e538] [cursor=pointer]:
                  - checkbox "" [ref=f3e539]
                  - generic [ref=f3e540]: 
              - cell "UpdatedDependentName" [ref=f3e542]
              - cell "SpecifiedRelationship" [ref=f3e544]
              - cell [ref=f3e546]
              - cell [ref=f3e547]:
                - generic [ref=f3e548]:
                  - button "" [ref=f3e549] [cursor=pointer]
                  - button "" [ref=f3e551] [cursor=pointer]
        - generic [ref=f3e554]:
          - separator [ref=f3e555]
          - generic [ref=f3e557]:
            - heading "Attachments" [level=6] [ref=f3e558]
            - button " Add" [ref=f3e559] [cursor=pointer]:
              - generic [ref=f3e560]: 
              - text: Add
          - generic [ref=f3e561]:
            - separator [ref=f3e562]
            - generic [ref=f3e563]: (3) Records Found
          - table [ref=f3e566]:
            - rowgroup [ref=f3e567]:
              - row [ref=f3e568]:
                - columnheader "" [ref=f3e569]:
                  - generic [ref=f3e571] [cursor=pointer]:
                    - checkbox "" [ref=f3e572]
                    - generic [ref=f3e573]: 
                - columnheader "File Name" [ref=f3e575]
                - columnheader "Description" [ref=f3e576]
                - columnheader "Size" [ref=f3e577]
                - columnheader "Type" [ref=f3e578]
                - columnheader "Date Added" [ref=f3e579]
                - columnheader "Added By" [ref=f3e580]
                - columnheader "Actions" [ref=f3e581]
            - rowgroup [ref=f3e582]:
              - row [ref=f3e584]:
                - cell "" [ref=f3e585]:
                  - generic [ref=f3e588] [cursor=pointer]:
                    - checkbox "" [ref=f3e589]
                    - generic [ref=f3e590]: 
                - cell "Samplefileupload.rtf" [ref=f3e592]
                - cell [ref=f3e594]
                - cell "381.00 B" [ref=f3e595]
                - cell "text/rtf" [ref=f3e597]
                - cell "2026-19-09" [ref=f3e599]
                - cell "Admin" [ref=f3e601]
                - cell [ref=f3e603]:
                  - generic [ref=f3e604]:
                    - button "" [ref=f3e605] [cursor=pointer]
                    - button "" [ref=f3e607] [cursor=pointer]
                    - button "" [ref=f3e609] [cursor=pointer]
              - row [ref=f3e612]:
                - cell "" [ref=f3e613]:
                  - generic [ref=f3e616] [cursor=pointer]:
                    - checkbox "" [ref=f3e617]
                    - generic [ref=f3e618]: 
                - cell "Samplefileupload.rtf" [ref=f3e620]
                - cell [ref=f3e622]
                - cell "381.00 B" [ref=f3e623]
                - cell "text/rtf" [ref=f3e625]
                - cell "2026-19-09" [ref=f3e627]
                - cell "Admin" [ref=f3e629]
                - cell [ref=f3e631]:
                  - generic [ref=f3e632]:
                    - button "" [ref=f3e633] [cursor=pointer]
                    - button "" [ref=f3e635] [cursor=pointer]
                    - button "" [ref=f3e637] [cursor=pointer]
              - row [ref=f3e640]:
                - cell "" [ref=f3e641]:
                  - generic [ref=f3e644] [cursor=pointer]:
                    - checkbox "" [ref=f3e645]
                    - generic [ref=f3e646]: 
                - cell "Samplefileupload.rtf" [ref=f3e648]
                - cell [ref=f3e650]
                - cell "381.00 B" [ref=f3e651]
                - cell "text/rtf" [ref=f3e653]
                - cell "2026-19-09" [ref=f3e655]
                - cell "Admin" [ref=f3e657]
                - cell [ref=f3e659]:
                  - generic [ref=f3e660]:
                    - button "" [ref=f3e661] [cursor=pointer]
                    - button "" [ref=f3e663] [cursor=pointer]
                    - button "" [ref=f3e665] [cursor=pointer]
    - generic [ref=f3e667]:
      - paragraph [ref=f3e668]: OrangeHRM OS 5.9
      - paragraph [ref=f3e669]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e670] [cursor=pointer]:
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
  48 | await page.getByRole('button', { name: 'Save' }).click(); // Click "Save" (Add Dependent form is inline, not a modal)
  49 | await page.getByRole('heading', { name: 'Add Dependent' }).waitFor({ state: 'hidden' }); // Wait for the inline Add form to close and the table to re-enable
  50 | 
  51 | // await page.click('button[type="button"]:has-text("Edit")'); // Click "Edit" button for the dependent
  52 | 
  53 | const dependentsTable = page.getByRole('table').first(); // "Assigned Dependents" is the first table on the page
  54 | await dependentsTable.getByRole('row').nth(1).locator('button:has(.bi-pencil-fill)').click(); // Click the edit (pencil) icon for the first dependent
  55 | await page.getByRole('heading', { name: 'Edit Dependent' }).waitFor({ state: 'visible' }); // Edit Dependent is also an inline form, not a modal
  56 | 
  57 | await page.getByRole('textbox').nth(1).fill('UpdatedDependentName');
  58 | 
  59 | await page.getByRole('button', { name: 'Save' }).click(); // Click "Save"
  60 | await page.getByRole('heading', { name: 'Edit Dependent' }).waitFor({ state: 'hidden' }); // Wait for the inline Edit form to close and the table to re-enable
  61 | 
  62 | 
  63 | const secondAddButton = page.getByRole('button', { name: 'Add' }).nth(1);
  64 |   await secondAddButton.click();
  65 | 
  66 | const browseBtn = page.locator('.oxd-file-button', { hasText: 'Browse' }).first();
  67 | 
  68 |   // Explicitly wait for the element to be visible
  69 |   await browseBtn.waitFor({ state: 'visible', timeout: 10000 });
  70 | 
  71 |   // Listen for the file picker event before clicking
  72 |   const [fileChooser] = await Promise.all([
  73 |     page.waitForEvent('filechooser'),
  74 |     browseBtn.click()
  75 |   ]);
  76 | 
  77 |   // Attach the file
  78 |   await fileChooser.setFiles('/Users/rameshbalasubramanian/PlaywrightAutomation/Samplefileupload.rtf');
  79 | 
  80 |   const saveButton = page.getByRole('button', { name: 'Save' }).last();
  81 | 
  82 |   // Wait explicitly for visibility (default timeout: 30s)
  83 |   await saveButton.waitFor({ state: 'visible', timeout: 10000 });
  84 |   await saveButton.click();
  85 | 
> 86 | await page.getByText('Successfully Uploaded').waitFor(); // Wait for upload confirmation toast
     |                                               ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  87 | 
  88 | });
```
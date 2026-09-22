# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: handsonExercise/login.spec.ts >> Verify that the employee name can be updated successfully. 
- Location: tests/handsonExercise/login.spec.ts:11:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "NewName"
Received: ""
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
              - paragraph [ref=f3e127]: manda user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - button "" [ref=f3e133] [cursor=pointer]
  - generic [ref=f3e135]:
    - generic [ref=f3e139]:
      - generic [ref=f3e140]:
        - generic [ref=f3e141]:
          - generic:
            - heading [level=6]
          - img "profile picture" [ref=f3e144] [cursor=pointer]
        - tablist [ref=f3e145]:
          - tab [ref=f3e146]:
            - link "Personal Details" [ref=f3e147] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/7
          - tab [ref=f3e148]:
            - link "Contact Details" [ref=f3e149] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/7
          - tab [ref=f3e150]:
            - link "Emergency Contacts" [ref=f3e151] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/7
          - tab [ref=f3e152]:
            - link "Dependents" [ref=f3e153] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/7
          - tab [ref=f3e154]:
            - link "Immigration" [ref=f3e155] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/7
          - tab [ref=f3e156]:
            - link "Job" [ref=f3e157] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/7
          - tab [ref=f3e158]:
            - link "Salary" [ref=f3e159] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/7
          - tab [ref=f3e160]:
            - link "Report-to" [ref=f3e161] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/7
          - tab [ref=f3e162]:
            - link "Qualifications" [ref=f3e163] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/7
          - tab [ref=f3e164]:
            - link "Memberships" [ref=f3e165] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/7
      - generic [ref=f3e166]:
        - generic [ref=f3e167]:
          - heading "Personal Details" [level=6] [ref=f3e168]
          - separator [ref=f3e169]
          - generic [ref=f3e170]:
            - generic [ref=f3e177]:
              - generic [ref=f3e178]: Employee Full Name*
              - generic [ref=f3e180]:
                - textbox "First Name" [ref=f3e183]
                - textbox "Middle Name" [ref=f3e186]
                - textbox "Last Name" [ref=f3e189]
            - separator [ref=f3e190]
            - generic [ref=f3e191]:
              - generic [ref=f3e192]:
                - generic [ref=f3e194]:
                  - generic [ref=f3e195]: Employee Id
                  - textbox [ref=f3e198]
                - generic [ref=f3e200]:
                  - generic [ref=f3e201]: Other Id
                  - textbox [ref=f3e204]
              - generic [ref=f3e205]:
                - generic [ref=f3e207]:
                  - generic [ref=f3e208]: Driver's License Number
                  - textbox [ref=f3e211]
                - generic [ref=f3e213]:
                  - generic [ref=f3e214]: License Expiry Date
                  - generic [ref=f3e218]:
                    - textbox "yyyy-dd-mm" [ref=f3e219]
                    - generic [ref=f3e220] [cursor=pointer]: 
            - separator [ref=f3e221]
            - generic [ref=f3e222]:
              - generic [ref=f3e223]:
                - generic [ref=f3e225]:
                  - generic [ref=f3e226]: Nationality
                  - generic [ref=f3e230] [cursor=pointer]:
                    - generic [ref=f3e231]: "-- Select --"
                    - generic [ref=f3e232]: 
                - generic [ref=f3e235]:
                  - generic [ref=f3e236]: Marital Status
                  - generic [ref=f3e240] [cursor=pointer]:
                    - generic [ref=f3e241]: "-- Select --"
                    - generic [ref=f3e242]: 
              - generic [ref=f3e244]:
                - generic [ref=f3e246]:
                  - generic [ref=f3e247]: Date of Birth
                  - generic [ref=f3e251]:
                    - textbox "yyyy-dd-mm" [ref=f3e252]
                    - generic [ref=f3e253] [cursor=pointer]: 
                - generic [ref=f3e255]:
                  - generic [ref=f3e256]: Gender
                  - generic [ref=f3e258]:
                    - generic [ref=f3e262] [cursor=pointer]:
                      - radio "Male" [ref=f3e263]
                      - text: Male
                    - generic [ref=f3e268] [cursor=pointer]:
                      - radio "Female" [ref=f3e269]
                      - text: Female
            - separator [ref=f3e271]
            - generic [ref=f3e272]:
              - paragraph [ref=f3e273]: "* Required"
              - button "Save" [ref=f3e274] [cursor=pointer]
        - generic [ref=f3e275]:
          - separator [ref=f3e276]
          - generic [ref=f3e278]:
            - heading "Attachments" [level=6] [ref=f3e279]
            - button " Add" [ref=f3e280] [cursor=pointer]:
              - generic [ref=f3e281]: 
              - text: Add
          - table [ref=f3e283]
    - generic [ref=f3e287]:
      - paragraph [ref=f3e288]: OrangeHRM OS 5.9
      - paragraph [ref=f3e289]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e290] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | //Generate login test for the OrangeHRM demo site: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
  2  | // Log in with valid credentials. 
  3  | // Select the “My Info” tab. 
  4  | // Clear the existing value in the name field. 
  5  | // Enter a new name and select “Save.” 
  6  | // Refresh the page. 
  7  | // The updated employee name is saved and remains visible after the page is refreshed 
  8  | 
  9  | import { test, expect } from '@playwright/test';
  10 | 
  11 | test ('Verify that the employee name can be updated successfully. ', async({page}) => {
  12 | page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  13 | await page.fill('input[name="username"]', 'Admin');
  14 | await page.fill('input[name="password"]', 'admin123');
  15 | await page.click('button[type="submit"]');
  16 | await page.click('a[href="/web/index.php/pim/viewMyDetails"]'); // Click on "My Info" tab
  17 | await page.fill('input[name="firstName"]', 'NewName'); // Clear and enter new name
  18 | await page.click('button[type="submit"]'); // Click "Save"
  19 | await page.reload(); // Refresh the page
  20 | const updatedName = await page.inputValue('input[name="firstName"]');
> 21 | expect(updatedName).toBe('NewName'); // Verify the updated name is saved
     |                     ^ Error: expect(received).toBe(expected) // Object.is equality
  22 | }
  23 | 
  24 | )
```
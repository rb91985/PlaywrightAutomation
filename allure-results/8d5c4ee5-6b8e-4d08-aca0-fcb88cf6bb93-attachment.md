# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Plugins/eslintPlugins.spec.ts >> 
- Location: tests/Plugins/eslintPlugins.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Bot Test Page"
Received: Promise {}
```

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://bot.sannysoft.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Intoli.com tests + additions" [level=1] [ref=e2]
  - table [ref=e3]:
    - rowgroup [ref=e4]:
      - row [ref=e5]:
        - columnheader "Test Name" [ref=e6]
        - columnheader "Result" [ref=e7]
      - row [ref=e8]:
        - cell "User Agent (Old)" [ref=e9]:
          - text: User Agent
          - generic [ref=e10]: (Old)
        - cell "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36" [ref=e11]
      - row [ref=e12]:
        - cell "WebDriver (New)" [ref=e13]:
          - text: WebDriver
          - generic [ref=e14]: (New)
        - cell "present (failed)" [ref=e15]
      - row [ref=e16]:
        - cell "WebDriver Advanced" [ref=e17]
        - cell "passed" [ref=e18]
      - row [ref=e19]:
        - cell "Chrome (New)" [ref=e20]:
          - text: Chrome
          - generic [ref=e21]: (New)
        - cell "missing (failed)" [ref=e22]
      - row [ref=e23]:
        - cell "Permissions (New)" [ref=e24]:
          - text: Permissions
          - generic [ref=e25]: (New)
        - cell "prompt" [ref=e26]
      - row [ref=e27]:
        - cell "Plugins Length (Old)" [ref=e28]:
          - text: Plugins Length
          - generic [ref=e29]: (Old)
        - cell "0" [ref=e30]
      - row [ref=e31]:
        - cell "Plugins is of type PluginArray" [ref=e32]
        - cell "failed" [ref=e33]
      - row [ref=e34]:
        - cell "Languages (Old)" [ref=e35]:
          - text: Languages
          - generic [ref=e36]: (Old)
        - cell "en-US" [ref=e37]
      - row [ref=e38]:
        - cell "WebGL Vendor" [ref=e39]
        - cell "Google Inc. (Google)" [ref=e40]
      - row [ref=e41]:
        - cell "WebGL Renderer" [ref=e42]
        - cell "ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (LLVM 10.0.0) (0x0000C0DE)), SwiftShader driver)" [ref=e43]
      - row [ref=e44]:
        - cell "Broken Image Dimensions" [ref=e45]
        - cell "16x16" [ref=e46]
  - heading [level=1] [ref=e47]:
    - link "Fingerprint Scanner" [ref=e48] [cursor=pointer]:
      - /url: https://github.com/antoinevastel/fpscanner
    - text: tests
  - table [ref=e49]
  - heading "Some details" [level=1] [ref=e50]
  - table [ref=e51]:
    - rowgroup [ref=e52]:
      - row [ref=e53]:
        - cell "navigator.cookieEnabled" [ref=e54]
        - cell "true" [ref=e55]
      - row [ref=e56]:
        - cell "navigator.doNotTrack" [ref=e57]
        - cell "null" [ref=e58]
      - row [ref=e59]:
        - cell "navigator.msDoNotTrack" [ref=e60]
        - cell "undefined" [ref=e61]
      - row [ref=e62]:
        - cell "navigator.sendBeacon" [ref=e63]
        - cell [ref=e64]
      - row [ref=e65]:
        - cell "navigator.cookieEnabled" [ref=e66]
        - cell "true" [ref=e67]
      - row [ref=e68]:
        - cell "navigator.userAgent" [ref=e69]
        - cell "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36" [ref=e70]
      - row [ref=e71]:
        - cell "navigator.appName" [ref=e72]
        - cell "Netscape" [ref=e73]
      - row [ref=e74]:
        - cell "navigator.vendor" [ref=e75]
        - cell "Google Inc." [ref=e76]
      - row [ref=e77]:
        - cell "navigator.appCodeName" [ref=e78]
        - cell "Mozilla" [ref=e79]
      - row [ref=e80]:
        - cell "navigator.getUserMedia" [ref=e81]
        - cell [ref=e82]
      - row [ref=e83]:
        - cell "navigator.sayswho" [ref=e84]
        - cell "undefined" [ref=e85]
      - row [ref=e86]:
        - cell "navigator.javaEnabled" [ref=e87]
        - cell "false" [ref=e88]
      - row [ref=e89]:
        - cell "navigator.plugins" [ref=e90]
        - 'cell "{}" [ref=e91]'
      - row [ref=e92]:
        - cell "screen.width" [ref=e93]
        - cell "1280" [ref=e94]
      - row [ref=e95]:
        - cell "screen.height" [ref=e96]
        - cell "720" [ref=e97]
      - row [ref=e98]:
        - cell "screen.colorDepth" [ref=e99]
        - cell "24" [ref=e100]
      - row [ref=e101]:
        - cell "navigator.language" [ref=e102]
        - cell "en-US" [ref=e103]
      - row [ref=e104]:
        - cell "navigator.loadPurpose" [ref=e105]
        - cell "undefined" [ref=e106]
      - row [ref=e107]:
        - cell "navigator.platform" [ref=e108]
        - cell "MacIntel" [ref=e109]
      - row [ref=e110]:
        - cell "navigator.mediaDevices" [ref=e111]
        - cell [ref=e112]
      - row [ref=e113]:
        - cell "navigator.getBattery details" [ref=e114]
        - 'cell "Charging: false Level: 0.72" [ref=e115]': "Charging: falseLevel: 0.72"
      - row [ref=e116]:
        - cell "Canvas1" [ref=e117]
        - 'cell "Hash: 129242487" [ref=e118]'
      - row [ref=e121]:
        - cell "Canvas2" [ref=e122]
        - 'cell "Hash: 129242487" [ref=e123]'
      - row [ref=e126]:
        - cell "Canvas3 (iframe sandbox)" [ref=e127]
        - 'cell "Hash: 129242487" [ref=e128]'
      - row [ref=e131]:
        - cell "Canvas4 (iframe sandbox)" [ref=e132]
        - 'cell "Hash: 129242487" [ref=e133]'
      - row [ref=e136]:
        - cell "Canvas5 (iframe)" [ref=e137]
        - 'cell "Hash: 129242487" [ref=e138]'
  - heading "Fp-collect info" [level=1] [ref=e141]
  - iframe [ref=e144]:
    - generic [ref=f5e1]: Test1
  - iframe [ref=e145]:
    - generic [ref=f6e1]: Test2
```

# Test source

```ts
  1 | import {test, expect} from '@playwright/test';
  2 | 
  3 | test ('', async({page}) => {
  4 | let title;
> 5 | page.goto('https://bot.sannysoft.com/');
    |      ^ Error: page.goto: Test ended.
  6 | title =  page.title();
  7 | expect(title).toBe("Bot Test Page");
  8 | })
```
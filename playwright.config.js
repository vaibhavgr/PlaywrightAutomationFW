// @ts-check
import { chromium, defineConfig, devices, expect } from '@playwright/test';
import { report } from 'node:process';


const config = ({
  testDir: './tests',
  reporter: 'html',
  timeout: 60 * 1000,
  expect: {
    timeout: 40 * 1000
  },

  projects: [
    {
      name: 'web',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        trace: 'on'
      },
    },{
    
  name : 'Mobile_Android',
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    ...devices['Galaxy S24']
  },
},
{
  name : 'Mobile_IOS',
  use : {
    browserName : 'chromiumm',
    headless: false,
    screenshot: 'on',
    trace: 'on',
    ...devices['iPhone 15 Pro Max']

  }
}

]

});

module.exports = config;

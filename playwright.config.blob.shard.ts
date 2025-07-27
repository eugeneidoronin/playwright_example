import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */


const shardIndex = process.env.SHARD_INDEX; // e.g. '1/3'


export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: process.env.BASE_URL,

    //Playing with screenshots & videos
    // screenshot: 'on',
    // video: 'on',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    // Dump authentication context
    { name: 'setup', testMatch: /.*\.setup\.ts/ },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      dependencies: ['setup'],
      //pick up the context
      storageState: 'playwright/.auth/user.json',
       },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      dependencies: ['setup'],
      //pickup the context
      storageState: 'playwright/.auth/user.json',
       },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
      dependencies: ['steup'],
      //pickup the context
      storageState: 'playwright/.auth/user.json',
       },
    },

  ],
  reporter: [['blob', { outputFile: `./blob-report/report-${shardIndex}.zip` }]]
});

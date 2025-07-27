# Playwright Example Project

## Overview
This project demonstrates automated testing using Playwright, a powerful end-to-end testing framework for web applications. It provides a collection of example tests showcasing Playwright's capabilities for reliable, cross-browser testing.

## Project Structure
- **tests/** - Contains test files
  - `auth.setup.ts` - Authentication setup for tests
  - `simple-form.spec.ts` - Form testing examples
  - `newsletter-signup.spec.ts` - Newsletter signup testing examples
- **playwright/** - Contains Playwright configurations and reports
- **mobile-tests/** - Mobile-specific test implementations
- **playwright.config.ts** - Main Playwright configuration
- **playwright.config.blob.shard.ts** - Configuration for blob storage sharding

## Technologies Used
- **@playwright/test**: v1.54.1 - Core testing framework
- **@types/node**: v24.0.12 - TypeScript definitions for Node.js
- **@faker-js/faker**: v9.9.0 - Generate realistic test data

## Prerequisites
- Node.js (latest LTS version recommended)
- npm package manager

# Clone the repository
git clone <repository-url> cd playwright_example
# Install dependencies
npm install

# Run specific test file
npx playwright test tests/simple-form.spec.ts
# Run tests with UI mode
npx playwright test --ui
# Run tests in specific browsers
npx playwright test --project=chromium

## Test Reporting
Test reports are generated after test execution and can be found in the `tests/` and `mobile-tests/`directory.

# Open the latest HTML report
npx playwright show-report


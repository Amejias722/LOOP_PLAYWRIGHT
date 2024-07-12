# Playwright Project 🎭
## _Data-Driven Testing With Asana._
Note: Test is **read-only** due to update in login credentials. Do not run test.

## Overview 👩🏻‍💻

This test suite is designed to perform data-driven testing for Asana projects. Each test case within the suite leverages different sets of data to validate various aspects of the Asana project functionality.

## Challenge and Test Description 📝 ✨
Data-Driven Testing Using JSON:

Tests should be driven from the testCases JSON object. Implement a mechanism to read test case data from this JSON object to drive your tests. Each test case will comprise of 3 test.steps:

 - Login to Asana: Verify that a user can log in to Asana successfully using provided credentials.
 - Navigate to Project Page: Ensure that the user can navigate to a specified project page and validate the visibility of a specific project card.
 - Verify Card Position: Check that the specified project card is visible and correctly positioned within the right column of the project page.

 ## Installation ⚙️

This project requires [Playwright](https://playwright.dev/docs/intro) to run.

Install dependencies
```sh
yarn install
```

Running the test

```sh
yarn playwright test
or
yarn test:ui
```
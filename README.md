# Cypress E2E & API Testing Project

## Setup
1. Clone the repository
2. Run `npm install`
3. Configure environment variables if needed

## Running Tests
# TO run the spec file single test in headed mode with specific browser 
npx cypress run --spec  "your path to the test foler like {cypress/e2e/login.js}" --headed --browser chrome --env url="https://www.saucedemo.com/inventory.html"
- All tests: `npm test`
- E2E tests only: `npm run test:e2e`
- API tests only: `npm run test:api`
- Open Cypress UI: `npm run test:ui`

## GitHub Actions
Tests run automatically on push and pull requests.


Deliverables:
1. Source Code:  
○ Provide the complete source code for the automation tests - 
○ Include a README with clear instructions on how to set up, configure, and
run the tests.
2. Test Report:
○ Submit a generated test execution report showing the results of your test
cases (successes and failures).
3. CI/CD Pipeline:
○ Submit configuration files for the CI/CD pipeline (e.g., Jenkinsfile,
.github/workflows for GitHub Actions)
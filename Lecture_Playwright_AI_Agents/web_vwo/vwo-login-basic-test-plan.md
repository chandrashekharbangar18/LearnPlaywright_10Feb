# VWO Login Basic Test Plan

## Application Overview

Basic functional and security test coverage for the VWO login page. Each test starts from a fresh browser context at the VWO login URL. Valid-account scenarios require approved test credentials; do not use production credentials.

## Test Scenarios

### 1. VWO Login Basics

**Seed:** `Lecture_Playwright_AI_Agents/web_vwo/seed.spec.js`

#### TC-001 - Verify login page loads with required controls

**File:** `tests/vwo-login/tc-001-login-page-load.spec.js`

**Steps:**
  1. Open the VWO login URL in a fresh browser context.
    - expect: The page loads without an unrecoverable error.
    - expect: The page identifies itself as the VWO login page.
    - expect: Email or username, password, and primary login controls are visible.
    - expect: The password input masks entered characters.
  2. Inspect the page at desktop and narrow mobile viewport sizes.
    - expect: The form remains usable without clipping or overlapping controls.

#### 1.2. TC-002 - Verify empty submission validation

**File:** `tests/vwo-login/tc-002-empty-submit-validation.spec.js`

**Steps:**
  1. Submit the login form without entering credentials.
    - expect: The form is not submitted.
    - expect: Required validation appears for each missing field.
    - expect: The first invalid field is clearly identified.

#### 1.3. TC-003 - Verify invalid email format validation

**File:** `tests/vwo-login/tc-003-invalid-email-validation.spec.js`

**Steps:**
  1. Enter an invalid email such as `user@`, enter a non-empty password, and submit.
    - expect: The invalid email is rejected with a clear validation message.
    - expect: No successful login state is displayed.
    - expect: The password is not exposed.

#### 1.4. TC-004 - Verify incorrect credentials show an authentication error

**File:** `tests/vwo-login/tc-004-incorrect-credentials.spec.js`

**Steps:**
  1. Enter a validly formatted but intentionally incorrect email and password, then submit.
    - expect: The user remains unauthenticated.
    - expect: A clear, non-sensitive authentication error is displayed.
    - expect: The form remains available for correction and retry.

#### 1.5. TC-005 - Verify password is masked by default

**File:** `tests/vwo-login/tc-005-password-masking.spec.js`

**Steps:**
  1. Enter a password containing letters, numbers, and symbols.
    - expect: The password is masked by default.
    - expect: The password is not visible in page text or the URL.

#### 1.6. TC-006 - Verify password visibility toggle

**File:** `tests/vwo-login/tc-006-password-visibility.spec.js`

**Steps:**
  1. Use the password visibility control if present, then hide the password again.
    - expect: The password becomes readable only when visibility is enabled.
    - expect: The password returns to a masked state when visibility is disabled.

#### 1.7. TC-007 - Verify forgot-password flow is accessible

**File:** `tests/vwo-login/tc-007-forgot-password.spec.js`

**Steps:**
  1. Activate the Forgot password or equivalent recovery link.
    - expect: The recovery page or dialog opens.
    - expect: An email or username input and a way to return to login are available.
    - expect: Credentials are not exposed.

#### 1.8. TC-008 - Verify successful login with approved test credentials

**File:** `tests/vwo-login/tc-008-successful-login.spec.js`

**Steps:**
  1. Enter approved non-production VWO test credentials and submit the form.
    - expect: Login succeeds.
    - expect: The user is redirected to the authenticated VWO destination.
    - expect: Authenticated navigation or account UI is visible.
    - expect: The password is not present in the URL.

#### 1.9. TC-009 - Verify login and recovery pages use HTTPS

**File:** `tests/vwo-login/tc-009-https.spec.js`

**Steps:**
  1. Open the login page and recovery flow.
    - expect: All login and recovery URLs use HTTPS.

#### 1.10. TC-010 - Verify protected pages require authentication

**File:** `tests/vwo-login/tc-010-protected-pages.spec.js`

**Steps:**
  1. Open an authenticated VWO page in a fresh unauthenticated browser context.
    - expect: Access is denied or redirected to the login page.

#### 1.11. TC-011 - Verify logout protects the authenticated session

**File:** `tests/vwo-login/tc-011-logout-session.spec.js`

**Steps:**
  1. Log in with approved test credentials, log out, and use browser history to revisit the authenticated page.
    - expect: The authenticated page is not accessible after logout without logging in again.

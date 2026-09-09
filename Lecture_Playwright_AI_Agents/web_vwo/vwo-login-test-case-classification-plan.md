# VWO Login Test Case Classification

## Application Overview

Classification of the existing VWO login test cases by functional, security, UI, and accessibility coverage. Assumes a fresh browser context and approved non-production credentials where required.

## Test Scenarios

### 1. VWO Login Coverage Matrix

**Seed:** `Lecture_Playwright_AI_Agents/web_vwo/seed.spec.js`

#### 1.1. TC-001 Login page loads with required controls

**File:** `tests/vwo-login/tc-001-login-page-load.spec.js`

**Steps:**
  1. Open the VWO login page in a fresh browser context at desktop and narrow mobile viewport sizes.
    - expect: The login page loads and identifies itself as VWO.
    - expect: Email or username, password, and login controls are visible.
    - expect: The password input masks characters.
    - expect: The form remains usable without clipping or overlap.
    - expect: Functional, UI, and accessibility smoke coverage is exercised.

#### 1.2. TC-002 Empty submission validation

**File:** `tests/vwo-login/tc-002-empty-submit-validation.spec.js`

**Steps:**
  1. Submit the login form with all fields empty.
    - expect: Submission is prevented.
    - expect: Required validation appears for each missing field.
    - expect: The first invalid field is clearly identified.
    - expect: Functional and accessibility validation coverage is exercised.

#### 1.3. TC-003 Invalid email format validation

**File:** `tests/vwo-login/tc-003-invalid-email-validation.spec.js`

**Steps:**
  1. Submit an invalid email with a non-empty password.
    - expect: The invalid email is rejected.
    - expect: A clear validation message is displayed.
    - expect: Successful login does not occur.
    - expect: The password is not exposed.
    - expect: Functional and security coverage is exercised.

#### 1.4. TC-004 Incorrect credentials authentication error

**File:** `tests/vwo-login/tc-004-incorrect-credentials.spec.js`

**Steps:**
  1. Submit validly formatted but incorrect credentials.
    - expect: The user remains unauthenticated.
    - expect: A clear non-sensitive authentication error is displayed.
    - expect: The form remains available for retry.
    - expect: Functional and security coverage is exercised.

#### 1.5. TC-005 Password masking by default

**File:** `tests/vwo-login/tc-005-password-masking.spec.js`

**Steps:**
  1. Enter a password containing letters, numbers, and symbols.
    - expect: The password is masked by default.
    - expect: The password is absent from page text and the URL.
    - expect: Security and UI coverage is exercised.

#### 1.6. TC-006 Password visibility toggle

**File:** `tests/vwo-login/tc-006-password-visibility.spec.js`

**Steps:**
  1. Enable password visibility and then disable it again.
    - expect: The password is readable only while visibility is enabled.
    - expect: The password returns to a masked state when disabled.
    - expect: Functional, security, UI, and accessibility-control coverage is exercised.

#### 1.7. TC-007 Forgot-password flow

**File:** `tests/vwo-login/tc-007-forgot-password.spec.js`

**Steps:**
  1. Activate the forgot-password or equivalent recovery link.
    - expect: The recovery page or dialog opens.
    - expect: An email or username input and return-to-login path are available.
    - expect: Credentials are not exposed.
    - expect: Functional, security, UI, and accessibility navigation coverage is exercised.

#### 1.8. TC-008 Successful login

**File:** `tests/vwo-login/tc-008-successful-login.spec.js`

**Steps:**
  1. Submit approved non-production VWO test credentials.
    - expect: Login succeeds and redirects to the authenticated destination.
    - expect: Authenticated navigation or account UI is visible.
    - expect: The password is absent from the URL.
    - expect: Functional and security coverage is exercised.

#### 1.9. TC-009 HTTPS for login and recovery

**File:** `tests/vwo-login/tc-009-https.spec.js`

**Steps:**
  1. Open the login page and recovery flow.
    - expect: All login and recovery URLs use HTTPS.
    - expect: Security coverage is exercised.

#### 1.10. TC-010 Protected pages require authentication

**File:** `tests/vwo-login/tc-010-protected-pages.spec.js`

**Steps:**
  1. Open an authenticated VWO page in a fresh unauthenticated browser context.
    - expect: Access is denied or redirected to login.
    - expect: Security coverage is exercised.

#### 1.11. TC-011 Logout protects the session

**File:** `tests/vwo-login/tc-011-logout-session.spec.js`

**Steps:**
  1. Log in, log out, and revisit the authenticated page through browser history.
    - expect: The authenticated page is inaccessible after logout without logging in again.
    - expect: Security and functional coverage is exercised.

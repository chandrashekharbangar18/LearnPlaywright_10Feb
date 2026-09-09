# CURA Healthcare Successful Make Appointment

## Application Overview

Success-path test plan for booking an appointment in the Katalon Demo CURA Healthcare application. Start from a fresh browser context at https://katalon-demo-cura.herokuapp.com/. Use the supplied demo credentials and the requested appointment values.

## Test Scenarios

### 1. Successful Appointment Booking

**Seed:** `Lecture_Playwright_AI_Agents/web_vwo/seed.spec.js`

#### 1.1. Book a successful CURA healthcare appointment

**File:** `tests/cura/tc-001-successful-make-appointment.spec.js`

**Steps:**
  1. Open https://katalon-demo-cura.herokuapp.com/ in a fresh browser context.
    - expect: The CURA Healthcare Service landing page loads successfully.
    - expect: A Make Appointment control is visible and usable.
  2. Click Make Appointment.
    - expect: The login page is displayed.
    - expect: Username and password fields and a Login button are visible.
  3. Enter username John Doe and password ThisIsNotAPassword, then submit the login form.
    - expect: Authentication succeeds.
    - expect: The appointment form is displayed.
    - expect: The form contains Facility, hospital readmission, healthcare program, visit date, and comment controls, plus a Book Appointment action.
  4. Select Tokyo CURA Healthcare Center as the facility.
    - expect: Tokyo CURA Healthcare Center is selected.
  5. Leave Apply for hospital readmission unselected.
    - expect: The appointment form records hospital readmission as No.
  6. Select Medicare as the healthcare program.
    - expect: Medicare is selected.
  7. Enter 25/03/2026 in the visit date field.
    - expect: The visit date field contains 25/03/2026.
    - expect: The date is accepted without a validation error.
  8. Submit the appointment form using the Book Appointment action.
    - expect: An Appointment Confirmation page is displayed.
    - expect: The confirmation heading reads Appointment Confirmation.
    - expect: The confirmation shows Facility as Tokyo CURA Healthcare Center.
    - expect: The confirmation shows Apply for hospital readmission as No.
    - expect: The confirmation shows Healthcare Program as Medicare.
    - expect: The confirmation shows Visit Date as 25/03/2026.
    - expect: The appointment is booked successfully.

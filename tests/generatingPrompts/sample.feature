# Feature file generated from user story:
# As a user, I want to log into the Orange HRM application so that I can perform
# a validation task after successful login.
#
# Acceptance Criteria:
# 1. The user can login with valid credentials.
# 2. After successful login, the user can perform a validation task.

Feature: Login and post-login validation in Orange HRM
  As a user
  I want to log into the Orange HRM application
  So that I can perform a validation task after successful login

  Background:
    # Common precondition for every scenario below
    Given the user navigates to the Orange HRM login page

  # ---------------------------------------------------------------------------
  # Acceptance Criteria 1: User can login with valid credentials
  # ---------------------------------------------------------------------------

  @positive @smoke @login
  Scenario Outline: Successful login with valid registered credentials
    # Confirms a registered user can authenticate and reach the dashboard
    Given the user has a registered account with username "<username>" and password "<password>"
    When the user enters the username and password
    And the user clicks the login button
    Then the login should succeed
    And the user should be redirected to the dashboard page
    And the dashboard header should display "<expectedHeader>"

    Examples: Valid credential combinations
      | username    | password    | expectedHeader |
      | validUserA  | validPassA  | Dashboard      |
      | validUserB  | validPassB  | Dashboard      |

  @negative @login
  Scenario Outline: Login is rejected with invalid credentials
    # Ensures the system does not authenticate incorrect username/password combinations
    Given the user has the credentials username "<username>" and password "<password>"
    When the user enters the username and password
    And the user clicks the login button
    Then the login should fail
    And an authentication error message "<errorMessage>" should be displayed
    And the user should remain on the login page

    Examples: Invalid credential combinations
      | username    | password      | errorMessage         |
      | validUserA  | wrongPassword | Invalid credentials  |
      | wrongUser   | validPassA    | Invalid credentials  |
      | wrongUser   | wrongPassword | Invalid credentials  |

  @negative @login @validation
  Scenario Outline: Login is blocked when a mandatory field is left empty
    # Validates required-field enforcement before the credentials are even submitted
    Given the user leaves the "<emptyField>" field empty
    When the user clicks the login button
    Then the login should not be submitted
    And a required field validation message "<validationMessage>" should be displayed next to the "<emptyField>" field

    Examples: Missing mandatory fields
      | emptyField | validationMessage        |
      | username   | Username cannot be empty |
      | password   | Password cannot be empty |

  # ---------------------------------------------------------------------------
  # Acceptance Criteria 2: After successful login, the user can perform a
  # validation task
  # ---------------------------------------------------------------------------

  @positive @postlogin @validation
  Scenario Outline: Authenticated user performs a validation task successfully
    # Confirms that a valid session grants access to post-login validation actions
    Given the user has successfully logged in with username "<username>" and password "<password>"
    When the user performs the "<validationTask>" on the dashboard
    Then the "<validationTask>" should complete successfully
    And the outcome should confirm "<expectedOutcome>"

    Examples: Post-login validation tasks
      | username   | password   | validationTask              | expectedOutcome            |
      | validUserA | validPassA | verify dashboard widgets    | widgets are visible        |
      | validUserA | validPassA | verify logged-in user name  | user name is displayed     |

  @negative @postlogin @validation
  Scenario: Validation task is inaccessible without an authenticated session
    # Ensures unauthenticated access to post-login features is prevented
    Given the user is not logged in
    When the user attempts to navigate directly to the dashboard validation page
    Then access should be denied
    And the user should be redirected to the login page
    And an authentication required message should be displayed

@login @smoke
Feature: User Login
  As a registered user
  I want to log into the application
  So that I can access my account

  Background:
    Given I navigate to the login page

  @positive
  Scenario: Successful login with valid credentials
    When I enter username "standard_user"
    And I enter password "secret_sauce"
    And I click the login button
    Then I should be redirected to the home page
    And I should see a welcome message

  @negative
  Scenario: Login fails with invalid credentials
    When I enter username "invalid_user"
    And I enter password "wrong_password"
    And I click the login button
    Then I should see an error message "Username and password do not match"

  @negative
  Scenario: Login fails with empty credentials
    When I click the login button
    Then I should see an error message "Username is required"

  @data-driven
  Scenario Outline: Login with multiple user roles
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see the "<dashboard>" dashboard

    Examples:
      | username      | password     | dashboard |
      | standard_user | secret_sauce | Products  |
      | problem_user  | secret_sauce | Products  |
@regression
Feature: User Login
  As a registered user
  I want to log into the application
  So that I can access my account

  Background:
    Given I launch 'labs' page

  @integration
  Scenario: Successful login with valid credentials
    When I login as "admin"
    Then I should be logged in successfully

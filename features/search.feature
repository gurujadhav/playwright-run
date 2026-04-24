@inventory
Feature: Product Inventory
  As a logged-in user
  I want to browse and sort the product list
  So that I can find the items I need

  Background:
    Given I am logged in as "standard_user"
    And I am on the products page

  @smoke
  Scenario: Products page displays all items
    Then I should see products listed
    And the product list should contain "Sauce Labs Backpack"

  Scenario: Products can be sorted by price low to high
    When I sort products by "Price (low to high)"
    Then the products should be displayed in ascending price order

  Scenario: Products can be sorted by price high to low
    When I sort products by "Price (high to low)"
    Then the products should be displayed in descending price order

  Scenario: Products can be sorted alphabetically A to Z
    When I sort products by "Name (A to Z)"
    Then the first product name should come before the last alphabetically
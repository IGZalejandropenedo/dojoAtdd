Feature: Add item to checkout
  In order to know which is the total of a checkout
  As a clerk
  I want retrieve the current state of the checkout

  Scenario: Retrieve an existing checkout with one item
    Given an existing checkout with code "1"
    When a supermarket clerk adds the following items to the checkout "1"
    | product |
    | A       |
    And a supermarket clerk want consult the current state the checkout "1"
    Then the resulting value for checkout "1" will be "10"

  Scenario: Retrieve an existing checkout with several of the same item
    Given an existing checkout with code "1"
    When a supermarket clerk adds the following items to the checkout "1"
    | product |
    | A       |
    | A       |
    And a supermarket clerk want consult the current state the checkout "1"
    Then the resulting value for checkout "1" will be "14"

  Scenario: Retrieve an existing checkout with several of the same item
    Given an existing checkout with code "1"
    When a supermarket clerk adds the following items to the checkout "1"
    | product |
    | A       |
    | A       |
    | A       |
    And a supermarket clerk want consult the current state the checkout "1"
    Then the resulting value for checkout "1" will be "24"

  Scenario: Retrieve an existing checkout with several of the same item
    Given an existing checkout with code "1"
    When a supermarket clerk adds the following items to the checkout "1"
    | product |
    | A       |
    | B       |
    | A       |
    And a supermarket clerk want consult the current state the checkout "1"
    Then the resulting value for checkout "1" will be "19"

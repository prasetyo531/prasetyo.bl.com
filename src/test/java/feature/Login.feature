Feature: Login into account

  In order to perform successful login
  User input email and password

  @Android @Login @Positive
  Scenario Outline: Login using valid data
    Given User navigate to login screen
    When User input "<email>" and "<password>"
    And User click login button
    Then User will see user own "<email>" on homescreen

    Examples:
      |              email               |      password  |
      |    migration001@mailinator.com   |     test12345  |

  @Android @Login @Negative
  Scenario Outline: Login using invalid data
    Given User navigate to login screen
    When User input "<email>" and "<password>"
    And User click login button
    Then Display toast message "Wrong Email or Password" is displayed at bottom

    Examples:
      |              email               |      password  |
      |    migration001@mailinator.com   |     test12345  |
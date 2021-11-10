Feature: Create account

  In order to perform successful register
  User can register using name

  @Android @Register @Positive
  Scenario Outline: Register using valid data
    Given User navigate to register screen
    When User input "<name>", "<email>", "<password>" and "<confirmpassword>"
    And User click register button
    Then Display toast message "Registration Successful" is displayed at bottom

    Examples:
      |   name         |              email           |      password  |     confirmpassword     |
      |	  positifsatu  |    loginapk01@mailinator.com |     test12345  |       test12345         |

  @Android @Register @Negative
  Scenario Outline: Register using registered email
    Given User navigate to register screen
    When User input "<name>", "<email>", "<password>" and "<confirmpassword>"
    And User click register button
    Then Display toast message "Email Already Exists" is displayed at bottom

    Examples:
      |   name         |              email             |      password  |     confirmpassword     |
      |	  negativesatu |    loginapk01@mailinator.com   |     test12345  |       test12345         |

  @Android @Register @Negative
  Scenario Outline: Register using invalid format email
    Given User navigate to register screen
    When User input "<name>", "<email>", "<password>" and "<confirmpassword>"
    And User click register button
    Then Display toast message "Registration Successful" is displayed at bottom

    Examples:
      |   name           |      email      |      password  |     confirmpassword     |
      |	  negativedua 	 |    loginapk02   |     test12345  |       test12345         |
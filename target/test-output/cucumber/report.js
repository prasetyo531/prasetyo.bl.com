$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 1,
  "name": "Create account",
  "description": "\nIn order to perform successful register\nUser can register using name",
  "id": "create-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Register using valid data",
  "description": "",
  "id": "create-account;register-using-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Android"
    },
    {
      "line": 6,
      "name": "@Register"
    },
    {
      "line": 6,
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User input \"\u003cname\u003e\", \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Display toast message \"Registration Successful\" is displayed at bottom",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click login from register screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User input \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will see user own \"\u003cemail\u003e\" on homescreen",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "create-account;register-using-valid-data;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password",
        "confirmpassword"
      ],
      "line": 18,
      "id": "create-account;register-using-valid-data;;1"
    },
    {
      "cells": [
        "positifsatu",
        "loginapk01@mailinator.com",
        "test12345",
        "test12345"
      ],
      "line": 19,
      "id": "create-account;register-using-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 17939719038,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Register using valid data",
  "description": "",
  "id": "create-account;register-using-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Register"
    },
    {
      "line": 6,
      "name": "@Positive"
    },
    {
      "line": 6,
      "name": "@Android"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User input \"positifsatu\", \"loginapk01@mailinator.com\", \"test12345\" and \"test12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Display toast message \"Registration Successful\" is displayed at bottom",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click login from register screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User input \"loginapk01@mailinator.com\" and \"test12345\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User will see user own \"loginapk01@mailinator.com\" on homescreen",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinition.user_navigate_to_register_screen()"
});
formatter.result({
  "duration": 2583948014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "positifsatu",
      "offset": 12
    },
    {
      "val": "loginapk01@mailinator.com",
      "offset": 27
    },
    {
      "val": "test12345",
      "offset": 56
    },
    {
      "val": "test12345",
      "offset": 72
    }
  ],
  "location": "RegisterStepDefinition.user_input_something_something_something_and_something(String,String,String,String)"
});
formatter.result({
  "duration": 8423184701,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_register_button()"
});
formatter.result({
  "duration": 1099791862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registration Successful",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.display_toast_message_something_is_displayed_at_bottom(String)"
});
formatter.result({
  "duration": 699354212,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_from_register_screen()"
});
formatter.result({
  "duration": 6215436413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginapk01@mailinator.com",
      "offset": 12
    },
    {
      "val": "test12345",
      "offset": 44
    }
  ],
  "location": "LoginStepDefinition.user_input_something_and_something(String,String)"
});
formatter.result({
  "duration": 2314847507,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1054157401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginapk01@mailinator.com",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.user_will_see_user_own_something_on_homescreen(String)"
});
formatter.result({
  "duration": 1839913929,
  "status": "passed"
});
formatter.after({
  "duration": 2502930677,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "Register using invalid format email",
  "description": "",
  "id": "create-account;register-using-invalid-format-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Android"
    },
    {
      "line": 21,
      "name": "@Register"
    },
    {
      "line": 21,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User input \"\u003cname\u003e\", \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Display error message to enter valid email under email field",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "create-account;register-using-invalid-format-email;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "password",
        "confirmpassword"
      ],
      "line": 29,
      "id": "create-account;register-using-invalid-format-email;;1"
    },
    {
      "cells": [
        "negativedua",
        "loginapk02",
        "test12345",
        "test12345"
      ],
      "line": 30,
      "id": "create-account;register-using-invalid-format-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22063763402,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Register using invalid format email",
  "description": "",
  "id": "create-account;register-using-invalid-format-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@Register"
    },
    {
      "line": 21,
      "name": "@Android"
    },
    {
      "line": 21,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User input \"negativedua\", \"loginapk02\", \"test12345\" and \"test12345\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Display error message to enter valid email under email field",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinition.user_navigate_to_register_screen()"
});
formatter.result({
  "duration": 1419448991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "negativedua",
      "offset": 12
    },
    {
      "val": "loginapk02",
      "offset": 27
    },
    {
      "val": "test12345",
      "offset": 41
    },
    {
      "val": "test12345",
      "offset": 57
    }
  ],
  "location": "RegisterStepDefinition.user_input_something_something_something_and_something(String,String,String,String)"
});
formatter.result({
  "duration": 7187396829,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_register_button()"
});
formatter.result({
  "duration": 1180850982,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.display_error_message_to_enter_valid_email_under_email_field()"
});
formatter.result({
  "duration": 1306707498,
  "status": "passed"
});
formatter.after({
  "duration": 2505119330,
  "status": "passed"
});
});
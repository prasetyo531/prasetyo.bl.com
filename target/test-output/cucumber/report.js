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
formatter.examples({
  "line": 13,
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
      "line": 14,
      "id": "create-account;register-using-valid-data;;1"
    },
    {
      "cells": [
        "positifsatu",
        "loginapk01@mailinator.com",
        "test12345",
        "test12345"
      ],
      "line": 15,
      "id": "create-account;register-using-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9377467165,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
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
formatter.match({
  "location": "RegisterStepDefinition.user_navigate_to_register_screen()"
});
formatter.result({
  "duration": 1027814437,
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
  "duration": 4562626300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_register_button()"
});
formatter.result({
  "duration": 946507436,
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
  "duration": 498098217,
  "status": "passed"
});
formatter.after({
  "duration": 2504632045,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Register using invalid format email",
  "description": "",
  "id": "create-account;register-using-invalid-format-email",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Android"
    },
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"\u003cname\u003e\", \"\u003cemail\u003e\", \"\u003cpassword\u003e\" and \"\u003cconfirmpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Display error message to enter valid email under email field",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
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
      "line": 25,
      "id": "create-account;register-using-invalid-format-email;;1"
    },
    {
      "cells": [
        "negativedua",
        "loginapk02",
        "test12345",
        "test12345"
      ],
      "line": 26,
      "id": "create-account;register-using-invalid-format-email;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11222731304,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Register using invalid format email",
  "description": "",
  "id": "create-account;register-using-invalid-format-email;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Android"
    },
    {
      "line": 17,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User navigate to register screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
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
  "line": 21,
  "name": "User click register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Display error message to enter valid email under email field",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterStepDefinition.user_navigate_to_register_screen()"
});
formatter.result({
  "duration": 1063309111,
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
  "duration": 4830461630,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.user_click_register_button()"
});
formatter.result({
  "duration": 1575119885,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepDefinition.display_error_message_to_enter_valid_email_under_email_field()"
});
formatter.result({
  "duration": 196815138,
  "status": "passed"
});
formatter.after({
  "duration": 2503402630,
  "status": "passed"
});
});
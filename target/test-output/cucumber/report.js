$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "\nIn order to perform successful login\nUser input email and password",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login using invalid data",
  "description": "",
  "id": "login-into-account;login-using-invalid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Android"
    },
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User navigate to login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Display toast message \"Wrong Email or Password\" is displayed at bottom",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-into-account;login-using-invalid-data;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25,
      "id": "login-into-account;login-using-invalid-data;;1"
    },
    {
      "cells": [
        "migration001@mailinator.com",
        "test12345"
      ],
      "line": 26,
      "id": "login-into-account;login-using-invalid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11399521919,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login using invalid data",
  "description": "",
  "id": "login-into-account;login-using-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@Login"
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
  "name": "User navigate to login screen",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User input \"migration001@mailinator.com\" and \"test12345\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Display toast message \"Wrong Email or Password\" is displayed at bottom",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_navigate_to_login_screen()"
});
formatter.result({
  "duration": 708551581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "migration001@mailinator.com",
      "offset": 12
    },
    {
      "val": "test12345",
      "offset": 46
    }
  ],
  "location": "LoginStepDefinition.user_input_something_and_something(String,String)"
});
formatter.result({
  "duration": 1793422637,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1048386261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong Email or Password",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.display_toast_message_something_is_displayed_at_bottom(String)"
});
formatter.result({
  "duration": 438296159,
  "status": "passed"
});
formatter.after({
  "duration": 2500842923,
  "status": "passed"
});
});
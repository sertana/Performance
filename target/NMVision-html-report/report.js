$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("amazon.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# Amazon Website testing code"
    },
    {
      "line": 2,
      "value": "# Author: Sanjaya Basnet"
    },
    {
      "line": 3,
      "value": "# Date: 02/27/2020"
    }
  ],
  "line": 4,
  "name": "Search in Amazon.com",
  "description": "",
  "id": "search-in-amazon.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "\"Software Development\" term search in Amazon.com",
  "description": "",
  "id": "search-in-amazon.com;\"software-development\"-term-search-in-amazon.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Initialize the browser with Google Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigates to amazon.com",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User inputs \"Software Development\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Number of Results is a positive integer",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinitions.initialize_the_browser_with_Google_Chrome()"
});
formatter.result({
  "duration": 2849073544,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.user_navigates_to_amazon_com()"
});
formatter.result({
  "duration": 2380710936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Development",
      "offset": 13
    }
  ],
  "location": "AmazonStepDefinitions.user_inputs_in_the_search_box(String)"
});
formatter.result({
  "duration": 652947530,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.user_clicks_on_the_Search_Button()"
});
formatter.result({
  "duration": 1431943297,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.results_are_displayed()"
});
formatter.result({
  "duration": 378086360,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.number_of_Results_is_a_positive_integer()"
});
formatter.result({
  "duration": 122223123,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 245436233,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search box is left blank in Amazon.com",
  "description": "",
  "id": "search-in-amazon.com;search-box-is-left-blank-in-amazon.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Initialize the browser with Google Chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User navigates to amazon.com",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User clicks on the Search Button",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Search box is empty, browser should remain on amazon home page.",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinitions.initialize_the_browser_with_Google_Chrome()"
});
formatter.result({
  "duration": 1276236348,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.user_navigates_to_amazon_com()"
});
formatter.result({
  "duration": 2369256497,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.user_clicks_on_the_Search_Button()"
});
formatter.result({
  "duration": 1442975735,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.search_box_is_empty_browser_should_remain_on_amazon_home_page()"
});
formatter.result({
  "duration": 62421432,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 197297591,
  "status": "passed"
});
});
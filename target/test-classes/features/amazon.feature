# Amazon Website testing code
# Author: Sanjaya Basnet
# Date: 02/27/2020
Feature: Search in Amazon.com

Scenario: "Software Development" term search in Amazon.com
Given Initialize the browser with Google Chrome
When User navigates to amazon.com
When User inputs "Software Development" in the search box
When User clicks on the Search Button
Then Results are displayed
Then Number of Results is a positive integer
Then Close the browser

Scenario: Search box is left blank in Amazon.com
Given Initialize the browser with Google Chrome
When User navigates to amazon.com
When User clicks on the Search Button
Then Search box is empty, browser should remain on amazon home page.
Then Close the browser
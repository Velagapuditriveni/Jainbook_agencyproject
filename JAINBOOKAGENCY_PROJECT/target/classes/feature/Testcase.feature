@jainbookagency
Feature: Jainbook Website
@TC01_Jainbookagency_login
Scenario:
Login to the jainbookagency
Given the user launch the chrome application
When the user open the jainbookagency Home page 
Then the user login using username and password and then logout

@TC02_Jainbookagency_resetpage
Scenario:
Login and  reset the page
Given user launchs the chrome application 
When the user open the jainbookagency and login into the page
Then the user  enters book name in the text box and click on reset
Then the user logout from the page and close the browser
@TC03_Jainbookagency_searchthebook
Scenario:
Login and  Search book
Given user launches the chrome application
When the user clicks advanced search
Then the user fills the form and clicks on search button
Then  user logout the page and close the browser


@TC04_Jainbookagency_Addtocart
Scenario:
Login and Add to cart
Given launch the chrome application
When the user clicks add to cart
Then the user gets the cart details
Then Close the browser



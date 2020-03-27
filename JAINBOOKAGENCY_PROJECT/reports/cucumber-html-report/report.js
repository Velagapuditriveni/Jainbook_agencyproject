$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/Testcase.feature");
formatter.feature({
  "line": 2,
  "name": "Jainbook Website",
  "description": "",
  "id": "jainbook-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@jainbookagency"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "",
  "description": "Login to the jainbookagency",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TC01_Jainbookagency_login"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "the user launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user open the jainbookagency Home page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user login using username and password and then logout",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Login.the_user_launch_the_chrome_application()"
});
formatter.result({
  "duration": 17940398825,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Login.the_user_open_the_jainbookagency_Home_page()"
});
formatter.result({
  "duration": 8213509490,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Login.the_user_login_using_username_and_password_and_then_logout()"
});
formatter.result({
  "duration": 1608085892,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca id\u003d\"login\" href\u003d\"/login.aspx\"\u003e...\u003c/a\u003e is not clickable at point (1478, 32). Other element would receive the click: \u003cdiv class\u003d\"modal fade in\" id\u003d\"msgdiv\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" aria-hidden\u003d\"true\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.43.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:54998}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8e98ace77d9a52ed397474b891333899\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Jainbook_Loginpage.LoginDetails(Jainbook_Loginpage.java:63)\r\n\tat com.Stepdefinition.Jainbook_Login.the_user_login_using_username_and_password_and_then_logout(Jainbook_Login.java:28)\r\n\tat ✽.Then the user login using username and password and then logout(src/main/resources/feature/Testcase.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 11,
  "name": "",
  "description": "Login and  reset the page",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@TC02_Jainbookagency_resetpage"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user launchs the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user open the jainbookagency and login into the page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the user  enters book name in the text box and click on reset",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "the user logout from the page and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Areset.user_launchs_the_chrome_application()"
});
formatter.result({
  "duration": 4985614148,
  "status": "passed"
});
formatter.match({
  "location": "Jainbook_Areset.the_user_open_the_jainbookagency_and_login_into_the_page()"
});
formatter.result({
  "duration": 44884455672,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Login\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.43.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55036}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8d3eceecfff75d0384d1e13e7bebaa5a\n*** Element info: {Using\u003dlink text, value\u003dLogin}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.pages.Jainbook_Aresetpage.login(Jainbook_Aresetpage.java:62)\r\n\tat com.Stepdefinition.Jainbook_Areset.the_user_open_the_jainbookagency_and_login_into_the_page(Jainbook_Areset.java:21)\r\n\tat ✽.When the user open the jainbookagency and login into the page(src/main/resources/feature/Testcase.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jainbook_Areset.the_user_enters_book_name_in_the_text_box_and_click_on_reset()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jainbook_Areset.the_user_logout_from_the_page_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "Login and  Search book",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@TC03_Jainbookagency_searchthebook"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user launches the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "the user clicks advanced search",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "the user fills the form and clicks on search button",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user logout the page and close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Advancesearch.user_launches_the_chrome_application()"
});
formatter.result({
  "duration": 19639165193,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca id\u003d\"login\" href\u003d\"/login.aspx\"\u003e...\u003c/a\u003e is not clickable at point (1478, 32). Other element would receive the click: \u003cdiv class\u003d\"modal fade in\" id\u003d\"msgdiv\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" aria-hidden\u003d\"true\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.43.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55079}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c2013d957dff57b76f91705473d98362\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Jainbook_Advancesearchpage.login(Jainbook_Advancesearchpage.java:69)\r\n\tat com.Stepdefinition.Jainbook_Advancesearch.user_launches_the_chrome_application(Jainbook_Advancesearch.java:17)\r\n\tat ✽.Given user launches the chrome application(src/main/resources/feature/Testcase.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jainbook_Advancesearch.the_user_clicks_advanced_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jainbook_Advancesearch.the_user_fills_the_form_and_clicks_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jainbook_Advancesearch.user_logout_the_page_and_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "Login and Add to cart",
  "id": "jainbook-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@TC04_Jainbookagency_Addtocart"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "launch the chrome application",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the user clicks add to cart",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the user gets the cart details",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Jainbook_Addtocart.launch_the_chrome_application()"
});
formatter.result({
  "duration": 19093896924,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca id\u003d\"login\" href\u003d\"/login.aspx\"\u003e...\u003c/a\u003e is not clickable at point (1478, 32). Other element would receive the click: \u003cdiv class\u003d\"modal fade in\" id\u003d\"msgdiv\" tabindex\u003d\"-1\" role\u003d\"dialog\" aria-labelledby\u003d\"myModalLabel\" aria-hidden\u003d\"true\" style\u003d\"display: block; padding-right: 16px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027TRIVENI\u0027, ip: \u0027192.168.43.57\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\triveni\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55136}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 53b6533f68b101be9928c18a47aca6a5\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.pages.Jainbook_Addtocartpage.login(Jainbook_Addtocartpage.java:60)\r\n\tat com.Stepdefinition.Jainbook_Addtocart.launch_the_chrome_application(Jainbook_Addtocart.java:20)\r\n\tat ✽.Given launch the chrome application(src/main/resources/feature/Testcase.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Jainbook_Addtocart.the_user_clicks_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jainbook_Addtocart.the_user_gets_the_cart_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Jainbook_Addtocart.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});
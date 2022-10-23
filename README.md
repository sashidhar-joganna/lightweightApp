# lightweightApp

The lightweightApp can be accessed using the URL https://todomvc.com/examples/angular2/ 
  - This site creates a To Do list task items and users can use it to track the tasks and mark them as completed and removed wen the tasks are actually performed outside the application.

The UI tests are automated using webdriver io and Typescript

Project lightweightApp is an asignment to automate the ui for positive and negative scenarios
 - Spec: lightweight-positive-test.spec.ts - Contains positive test scenarios
 - Spec: lightweight-negative-test.spec.ts - Contains negative test scenarios

The components or the locators of the elements on the screen are stored in the pageobjects folder 
 - todo-list.components.ts

The wdio.conf.ts contains all the configurations of the Webdriverio (timeoutintervals, browser driver info, framework and more)

To run all the tests use the command
   npm run wdio 
    - This command runs all the spec.ts files found under the specs folder. 

There is no reporter tool associated in this project. However, it can be extended with any reporting tool that supports webdriver tests. In the log, the user can also see the results of the tests in an overview 
The log level is configured to info which helps the user running the test to see how the tests run during execution and the information logged helps the user understand the flow


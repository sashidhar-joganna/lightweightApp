import { ChainablePromiseElement } from 'webdriverio';
import browser from 'webdriverio/build/commands/browser';


export class ToDoListComponents {
  
 get toDoListInput() {
    return $("input[placeholder='What needs to be done?']");
 }   

 get createdTaskItem() {
    return $("div[class='view'] label");
 }

 get secondTaskItem() {
    return $$("div[class='view'] label")[1];
 }

 get editTaskItem() {
    return $("li[class='editing'] label");
 }

 get countOfTasks(){
    return $(".todo-count");
 }

 get firstTaskCompleted(){
    return $$("input[class='toggle']")[0];
 }

get clearCompletedTasksButton(){
    return $('[class="clear-completed"]');
}

}
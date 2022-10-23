import Page from  '../pageobjects/page';
import { ToDoListComponents } from '../pageobjects/todo-list.components';

describe('My landing application', () => {
    it('landing page is loaded', async () => {
       
       const LandingPage = new Page();
        await LandingPage.open();      
       
});
});

describe('Create a task and check Clear button is displayed', () => {

     it('When no tasks are marked complete the button to remove task should not be visible', async () => {
    
        const component = new ToDoListComponents();

        const createToDoTask = await component.toDoListInput;
        await createToDoTask.waitForDisplayed();
        await createToDoTask.scrollIntoView();
        await createToDoTask.click();
        await createToDoTask.setValue('First Task');
        await createToDoTask.keys('Enter');
        expect (await createToDoTask.getText()).toEqual('');

        const taskItem = await component.createdTaskItem;
        await taskItem.waitForDisplayed();
        await taskItem.scrollIntoView();
        expect(await taskItem.getText()).toEqual('First Task');

        const clearCompletedTasksButton = await component.clearCompletedTasksButton;
       expect(await clearCompletedTasksButton.isDisplayed).not.toBeTrue;
        
});
});

describe('Verify the count when selecting to todo item for completion', () => {

   it('Remaining items on the todo list should exclude the selected task for completion', async () => {
  
      const component = new ToDoListComponents();

      const selectLastTask = await component.firstTaskCompleted;
      await selectLastTask.scrollIntoView();
      await selectLastTask.click();
      
         
      const countOfTasks = await component.countOfTasks;
      await countOfTasks.waitForDisplayed();
      await countOfTasks.scrollIntoView();
      expect(await countOfTasks.getText()).not.toBe('1 item left');
      expect(await countOfTasks.getText()).toBe('0 items left');

      
});
});

describe('Update a task and verify that the old task name is not displayed', () => {

   it('old task name should not be displayed', async () => {
  
      const component = new ToDoListComponents();

        
             const taskItem = await component.createdTaskItem;
             await taskItem.waitForDisplayed();
             await taskItem.scrollIntoView();
             await taskItem.doubleClick();
             await taskItem.scrollIntoView();
             await taskItem.waitForEnabled();
             await taskItem.keys('Tab');
             await taskItem.keys('Backspace');
             await taskItem.keys('First Task Updated');
             await taskItem.keys('Enter');
             expect(await taskItem.getText()).not.toEqual('First Task');
      
});
});

describe('Mark the task completed and remove from the list', () => {

   it('should remove the completed task and no more tasks are displayed', async () => {
  
      const component = new ToDoListComponents();
       
      const selectLastTask = await component.selectLastTaskCompleted;
      await selectLastTask.scrollIntoView();
      //await selectLastTask.click();

      const clearSelectedTask = await component.clearCompletedTasksButton;
      await clearSelectedTask.waitForDisplayed();
      await clearSelectedTask.scrollIntoView();
      await clearSelectedTask.click();
      
      const remainingTaskItems = await component.createdTaskItem;
      expect(await remainingTaskItems.isDisplayed).not.toBeTrue;
      
      
});
});
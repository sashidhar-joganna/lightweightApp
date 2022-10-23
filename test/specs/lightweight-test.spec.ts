import Page from  '../pageobjects/page';
import { ToDoListComponents } from '../pageobjects/todo-list.components';

describe('My landing application', () => {
    it('landing page is loaded', async () => {
       
       const LandingPage = new Page();
        await LandingPage.open();      
       
});
});

describe('Create a To-Do Task No 1', () => {

     it('verify the task is created', async () => {
    
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
        
});
});

describe('Update the task: ', () => {

    it('task should be updated', async () => {
   
       const component = new ToDoListComponents();

        
       const taskItem = await component.createdTaskItem;
       await taskItem.waitForDisplayed();
       await taskItem.scrollIntoView();
       await taskItem.doubleClick();
       await taskItem.scrollIntoView();
       await taskItem.waitForEnabled();
      
       const editTask = await component.editTaskItem;
       await editTask.scrollIntoView();
       await editTask.keys('Tab');
       await editTask.keys('Backspace');
       await editTask.keys('First Task Updated');
       await editTask.keys('Enter');
       expect(await taskItem.getText()).toEqual('First Task Updated');
});
});

describe('Create a second Task and count the tasks', () => {

    it('verify the count of tasks is correct', async () => {
   
       const component =  new ToDoListComponents();

       const createToDoTask = await component.toDoListInput;
       await createToDoTask.waitForDisplayed();
       await createToDoTask.scrollIntoView();
       await createToDoTask.click();
       await createToDoTask.setValue('Second Task');
       await createToDoTask.keys('Enter');
       expect (await createToDoTask.getText()).toEqual('');

       const secondTaskItem = await component.secondTaskItem;
       await secondTaskItem.waitForDisplayed();
       await secondTaskItem.scrollIntoView();
      expect(await secondTaskItem.getText()).toEqual('Second Task');

       const countOfTasks = await component.countOfTasks;
       await countOfTasks.waitForDisplayed();
       await countOfTasks.scrollIntoView();
       expect(await countOfTasks.getText()).toBe('2 items left');
       
});
});

describe('Mark the first task completed and remove from the list', () => {

    it('should remove first completed task', async () => {
   
       const component = new ToDoListComponents();
        
       const selectFirstTask = await component.firstTaskCompleted;
    //    await selectFirstTask.waitForDisplayed();
       await selectFirstTask.scrollIntoView();
       await selectFirstTask.click();

       const clearSelectedTask = await component.clearCompletedTasksButton;
       await clearSelectedTask.waitForDisplayed();
       await clearSelectedTask.scrollIntoView();
       await clearSelectedTask.click();
       

       const countOfTasks = await component.countOfTasks;
       await countOfTasks.waitForDisplayed();
       await countOfTasks.scrollIntoView();
       expect(await countOfTasks.getText()).toBe('1 item left');
       
});
});
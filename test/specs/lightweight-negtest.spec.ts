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


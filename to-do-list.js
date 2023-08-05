const todoListArray = [
    {
        name: 'make dinner',
        dueDate: '2022-12-22'
    },

    {
        name: 'wash dishes',
        dueDate: '2022-12-22'
    }
];

    renderTodoList();

    function renderTodoList () {
        let todoListHTML = '';
        for (let i = 0; i <= todoListArray.length; i++) {
            const todoObject = todoListArray[i];
            const dueName = todoObject.name; 
            const dueDate = todoObject.dueDate; 
            // both name nd duedate is destructured into//
            // const { name, dueDate} = todoObject; //
            const html = 
            `<p>
                ${dueName} ${dueDate}
                <button onclick="

                    todoArray.splice(${i}, 1); 
                    renderTodoList();         
                    
                ">Delete</button> 
            </p>`;
            todoListHTML += html;
        }
    
        document.querySelector('.todolist')
        .innerHTML = todoListHTML; // put the paragraph inside the div //
    }    


function addTodo () {

    const inputElementWhenClicked = document.querySelector('.inputText');

    const name = inputElementWhenClicked.value;

    const dateInputElement = document.querySelector('.due-date');
    const theDueDate = dateInputElement.value;

    todoListArray.push({
        name: name,
        dueDate: theDueDate
    });

    inputElementWhenClicked.value = ''; // to make it clear the text after u have clicked add//

    renderTodoList();

}
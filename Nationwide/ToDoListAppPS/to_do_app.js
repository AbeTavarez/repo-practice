

$(() => {
    //* gets ADD BUTTON from HTML page
    const addBtn = $('#submit');
    
    //* adds event listener on the button
    addBtn.on('click', (e) => {
        e.preventDefault();

        // gets user input
        let userInput = $('#input-box');
        // gets to-di-list container
        const toDoList = $('#to-do-list')
        // create to-do-arrays to hold all to-dos
        const toDosArr = [];
        // appends user input to to-dos-array
        toDosArr.push(userInput.val());

        $.each(toDosArr, (idx, el) => {
            const toDo = $('<h2>').attr('id', idx).text(el);
            const btn = $('<button>').attr('type', 'button').text('COMPLETED');

            // appends the todo and btn to the todo-list
            toDoList.append(toDo, btn);
            //* ====== btn event listener
            btn.on('click', (e) => {
                // console.log(e.currentTarget).parent()
                const completed = $('#completed');
                completed.append(toDo);
                completed.append(btn.css('background-color', '#ED6495').text('REMOVE'));

                btn.on('click', (e) => {
                    btn.prev().remove()
                    e.target.remove()
                
                })
            });
            
        })
        
        

        // clears input
        userInput.val('');
    });
    
})
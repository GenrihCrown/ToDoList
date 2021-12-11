window.onload = () => {
    const new_task_button_to_do = document.querySelector('#new-task-button-to-do');
    const new_task_button_in_progress = document.querySelector('#new-task-button-in-progress');
    const new_task_button_done = document.querySelector('#new-task-button-done');
    const list_el = document.querySelector('#tasks')

    function newTask (e) {
        e.preventDefault();

        const task_el = document.createElement('div');
        task_el.classList.add('task');
        list_el.appendChild(task_el);

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content')
        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.value = 'New task';
        task_input_el.setAttribute('readonly', 'readonly');
        task_input_el.type = 'text';
        task_content_el.appendChild(task_input_el);

        const task_edit_button = document.createElement('button');
        task_edit_button.classList.add('edit');
        task_content_el.appendChild(task_edit_button);

        const task_delete_button = document.createElement('button');
        task_delete_button.classList.add('delete');
        task_content_el.appendChild(task_delete_button);

        const edit_classes_to_add = ['fas','fa-pen'];
        const edit_button_i = document.createElement('i');
        edit_classes_to_add.forEach((el) => {edit_button_i.classList.add(...edit_classes_to_add)});
        task_edit_button.appendChild(edit_button_i);

        const delete_classes_to_add = ['fas','fa-trash']
        const delete_button_i = document.createElement('i');
        delete_classes_to_add.forEach((el) => {delete_button_i.classList.add(...delete_classes_to_add)});
        task_delete_button.appendChild(delete_button_i);
    };

    new_task_button_to_do.addEventListener('click', newTask);

    new_task_button_in_progress.addEventListener('click', newTask);

    new_task_button_done.addEventListener('click', newTask);
}


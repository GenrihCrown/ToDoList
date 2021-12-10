window.addEventListener('load', () => {
    const new_task_button_to_do = document.querySelector('#new-task-button-to-do');
    const new_task_button_in_progress = document.querySelector('#new-task-button-in-progress');
    const new_task_button_done = document.querySelector('#new-task-button-done');
    const list_el = document.querySelector('tasks')

    new_task_button_to_do.addEventListener('click', (e) => {
        e.preventDefault();

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content')
        task_content_el.innerText = 'New task';

        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);
    })
    new_task_button_in_progress.addEventListener('click', (e) => {
        e.preventDefault();
    })
    new_task_button_done.addEventListener('click', (e) => {
        e.preventDefault();
    })
})


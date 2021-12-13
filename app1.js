window.onload = () => {
  const new_task_button_to_do = document.querySelector(
    '#new-task-button-to-do',
  );
  const new_task_button_in_progress = document.querySelector(
    '#new-task-button-in-progress',
  );
  const new_task_button_done = document.querySelector('#new-task-button-done');
  const to_do_list_el = document.querySelector('#to-do-tasks');
  const in_progress_list_el = document.querySelector('#in-progress-tasks');
  const done_list_el = document.querySelector('#done-tasks');

  function newTask(e, list_el) {
    e.preventDefault();

    const task_el = document.createElement('div');
    task_el.classList.add('task');
    list_el.appendChild(task_el);

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');
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

    const edit_classes_to_add = ['fas', 'fa-pen'];
    const edit_button_i = document.createElement('i');
    edit_classes_to_add.forEach(() => 
      edit_button_i.classList.add(...edit_classes_to_add)
    );
    task_edit_button.appendChild(edit_button_i);

    const delete_classes_to_add = ['fas', 'fa-trash'];
    const delete_button_i = document.createElement('i');
    delete_classes_to_add.forEach(() =>
      delete_button_i.classList.add(...delete_classes_to_add),
    );
    task_delete_button.appendChild(delete_button_i);

    task_edit_button.addEventListener('click', () => {
      task_input_el.removeAttribute('readonly');
      task_input_el.focus();
      task_input_el.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          task_input_el.setAttribute('readonly', 'readonly');
        }
      });
    });

    task_delete_button.addEventListener('click', ()=>list_el.removeChild(task_el));
  }

  new_task_button_to_do.addEventListener('click', (e) =>
    newTask(e, to_do_list_el),
  );

  new_task_button_in_progress.addEventListener('click', (e) =>
    newTask(e, in_progress_list_el),
  );

  new_task_button_done.addEventListener('click', (e) =>
    newTask(e, done_list_el),
  );
};

window.onload = () => {
  // функция добавляения таски должна 1) создать таску и 2) добавить её в список
  // она ничего не должна знать про внутренние операции по созданию таски
  const addTask = (e) => {
    e.preventDefault();
    // достаем нужный блок для списка тасок, ориентируясь в DOM по нажатой кнопке добавления
    const _addButton = e.currentTarget;
    const section = _addButton.parentNode;
    const tasks = getTasksBySection(section);

    // создаем новый инстанс одной таски (инпута с кнопками)
    const taskElement = createTaskElement();

    // добавляем в список сформированную потом и кровью таску =)
    tasks.appendChild(taskElement);
  };

  // достаем кнопки, добавляющие таски, из всех трех колонок
  const addButtons = document.getElementsByClassName('add');
  // добавляем подписку на каждую из них
  [...addButtons].forEach((addButton) =>
    addButton.addEventListener('click', addTask),
  );
  // ПОЧЕМУ подаем newTask в addEventListener без вызова и передачи параметра??
  // --- Дело в том, что листенер хочет, чтобы вторым аргументом мы передали просто какой-то callable (он может даже не принимать аргументов, но обычно мы хотим поработать с ивентом).
  // --- В самом обычном случае - это коллбэк вида  (e) => {...}.
  // --- То есть по сути мы можем его записать, как константу:
  // --- --- const myCallback = (e) => {...}
  // --- И тогда записи addEventListener('click', (e) => {...}) и addEventListener('click', myCallback) будут индентичны.

  // описываем HTML-внутренности таски, чтобы не создавать его заново каждый раз
  taskHTML = `
  <input type="text" class="text" value="New task" readonly>
  <button class="edit"><i class="fas fa-pen"></i></button>
  <button class="delete"><i class="fas fa-trash"></i></button>
  `;

  // три вспомогательные функции
  const getInputByTask = (currentTask) => currentTask.children[0];
  const getTasksBySection = (section) => section.children['tasks'];
  const getTasksByTask = (currentTask) => currentTask.parentNode;

  // фунцкия создания таски
  const createTaskElement = () => {
    // создаем оберточный блок div с классом 'task'
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    // впихиваем заранее подготовленную строку внутрь этого div'а
    taskElement.innerHTML = taskHTML;
    // распаковываем массив из 3-ёх дочерних элементов таски
    // (инпут нам в этом скоупе не нужен, поэтому его не будем даже объявлять)
    [, taskEditButton, taskDeleteButton] = taskElement.children;

    // вешаем подписку на кнопку редактирования
    taskEditButton.addEventListener(
      'click',
      ({currentTarget: editButton}) => {
        // достаем смежный с кнопкой редактирования инпут
        const currentTask = editButton.parentNode;
        const input = getInputByTask(currentTask);

        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener(
          'keypress',
          ({ key }) =>
            // вариация тернарника, используя 'сайд-эффект' логической операции &&
            key === 'Enter' && input.setAttribute('readonly', 'readonly'),
        );

        input.addEventListener(
            'blur', (e) => input.setAttribute('readonly', 'readonly'),);
      },
    );

    taskDeleteButton.addEventListener(
      'click',
      ({ currentTarget: deleteButton }) => {
        // достаем и удаляем соответствующую кнопке таску
        const currentTask = deleteButton.parentNode;
        removeTaskElement(currentTask);
      },
    );
    return taskElement;
  };

  // фунцкия удаления таски
  const removeTaskElement = (currentTask) => {
    const tasks = getTasksByTask(currentTask);
    tasks.removeChild(currentTask);
  };
};

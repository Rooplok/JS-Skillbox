(function () {

    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(id, name, done) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');


        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;



        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        return {
            item,
            doneButton,
            deleteButton,
            id,
            name,
            done
        };
    }



    function createTodoApp(container, title = 'Список дел', list_name) {

        let todoItems = [];

        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();



        container.append(todoAppTitle);
        container.append(todoItemForm.form);

        function setData(key, todoItems) {

            return localStorage.setItem(key, JSON.stringify(todoItems));
        }

        function getData(key) {
            return JSON.parse(localStorage.getItem(key));
        }


        function doButtonObr(todoItem) {
            todoItem.doneButton.addEventListener('click', function () {
                todoItem.item.classList.toggle('list-group-item-success');
                todoItems = todoItems.map(element => element.id === todoItem.id ? { ...element, done: !element.done } : element);
                setData(list_name, todoItems);
            });
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();

                }
                todoItems = todoItems.filter(element => element.id !== todoItem.id);
                setData(list_name, todoItems);
            });
        }

        let temp = getData(list_name);
        if (temp) {
            for (i in temp) {
                todoItems.push(temp[i]);
                let newItem = createTodoItem(temp[i].id, temp[i].name, temp[i].done);
                todoList.append(newItem.item);
                doButtonObr(newItem)
            }
        }
        container.append(todoList);





        todoItemForm.form.addEventListener('submit', function (e) {

            e.preventDefault();
            todoItemForm.button.disabled = todoItemForm.input.value;
            if (!todoItemForm.input.value) {
                return;
            }

            todoItemForm.input.addEventListener('input', () => {
                todoItemForm.button.disabled = !todoItemForm.input.value.length;
            })

            let id = getId();

            function getId() {
                if ((!todoItems[0])) {
                    return 1;
                }
                return todoItems.at(-1).id + 1;
            }

            let todoItem = createTodoItem(id, todoItemForm.input.value, false);
            doButtonObr(todoItem);
            todoItems.push({ id: todoItem.id, name: todoItem.name, done: todoItem.done });
            todoList.append(todoItem.item);
            todoItemForm.input.value = '';
            setData(list_name, todoItems);
        })
    }
    window.createTodoApp = createTodoApp;
})();
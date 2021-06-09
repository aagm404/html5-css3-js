// Criando um array de JSON
let data = [];

function renderToDo() {

    document.querySelector(".todo").innerHTML = "";

    data.forEach(jsonTask => {
        
        let li = document.createElement("li");
        
        li.innerHTML = `
        <input type="checkbox" id="task-${jsonTask.id}">
        <label for="task-${jsonTask.id}">${jsonTask.title}</label>
        <button type="button">x</button>
        `;
        
        li.querySelector("input").addEventListener("change", e => {
            
            if (e.target.checked) {
                li.classList.add("complete");
            } else {
                li.classList.remove("complete");
            }
        });

        li.querySelector("button").addEventListener("click", e => {
            /*
                O código abaixo pode ser colocado tudo em uma linha:
                todoId = e.target.parentNode.querySelector("input").id.split("-")[1];
            */
           let button = e.target;
           let li = button.parentNode;
           let input = li.querySelector("input");
           let id = input.id;
           let idArray = id.split("-");
           let todoId = idArray[1];
           
           
           let title = li.querySelector("label").innerText;

           if (confirm(`Deseja realmente excluir a tarefa ${title}?`)) {
               data = data.filter(task => task.id !== parseInt(todoId));
               renderToDo();
            }
        
        });
        
        document.querySelector(".todo").append(li);

    });
}

document.querySelector("#new-task").addEventListener("keyup", e => {

    if (e.key === "Enter") {

        data.push({
            id: data.length + 1,
            title: e.target.value
        });
        e.target.value = "";
        renderToDo();
    }
});

renderToDo();
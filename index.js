//métodos de recuperação de elementos html;
//recupera elementos html a partir do nome da tag (getelementby)


const todoForm = document.getElementById ('todo-form');
const todos = []

//**usamos uma função anônima para passá-la como parâmetro para outra 'function(){}'

// addeventListeneer serve para ouvir eventos de elementos html sempre que foram emitidos
todoForm.addEventListener(`submit`, function (evento) {
   //preventdefault cancela o comportamento padrão de um formulário que seria o recarregamento da pagina tentando enviar
    evento.preventDefault()

    //cancela a propagação de evento que foi emitido para os elementos pai, evitando que ouros eventos sejam emitidos
    evento.stopPropagation()
    const todoInput = document.querySelector('#todo')

    //a propriedade value represnta o atributo value dos elementos de formulário do html, para acessarmos o valor que esta dentro deles
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()
})

function renderizarTodos(){
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ''
//createElement é o método responsável por gerar novos elementos html dentro do js a partir do nome tags
    for (let tarefa of todos) {
        const divCard = document.createElement('div')
        divCard.classList.add('card', 'bg-warning')
        
        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex', 'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
//innerText é a propriedade que informa qual conteudo de texto esta dentro de um elemento html

        pTodoText.innerText = tarefa

        const btnDelete = document.createElement('button')
        btnDelete.classList.add('btn', 'delete-todo')
        btnDelete.addEventListener('click', () => {

          const index = todos.indexOf(tarefa)

//Splice serve p excluir um determinado valor do seu array a partir do seu indice
          todos.splice(index, 1)
          renderizarTodos()


        } )

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        //append serve p um ou mais elementos dentro do outro
        //appenchild serve p colocar novos elementos html dentro de outros
        btnDelete.appendChild(spanIcon)
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
}
import './style.css'

const app = document.querySelector('#app') as HTMLDivElement;

// const btnAjout = document.createElement("button") as HTMLButtonElement;

// btnAjout.classList.add("favorite")
// btnAjout.classList.add("styled")
// btnAjout.setAttribute("type","button")
// btnAjout.innerText = "Add to favorites"
// btnAjout.addEventListener("click", () => {

// });

// app.appendChild(btnAjout)

// const btn = document.querySelector("button")
// btn?.classList.remove('favorite')

const partie_haute = document.createElement('div')
partie_haute.classList.add("partie_haute")
partie_haute.setAttribute('id', '1ereboite')

const formulaire = document.createElement('input')
formulaire.setAttribute("type","text")
document.body.appendChild(formulaire)

const button = document.createElement('button')
button.innerText = 'nouvelle_tache'
document.body.appendChild(button)

partie_haute.appendChild(formulaire)
partie_haute.appendChild(button)
app.appendChild(partie_haute)

const partie_basse = document.createElement('div')
partie_basse.classList.add("partie_basse")
partie_basse.setAttribute('id', '2eboite')

const titrePartieBasse = document.createElement('h2')
titrePartieBasse.innerText = "Liste des tâches"
partie_basse.appendChild(titrePartieBasse)

const list = document.createElement('div')
list.classList.add('liste')
partie_basse.appendChild(list)
app.appendChild(partie_basse)

button.addEventListener("click",()=> {
  APICall_Create_Task(formulaire.value);
  afficher_nouvelle_tache()  
})

function afficher_nouvelle_tache (){
  console.log("input value", formulaire.value)
  
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const contenu =  document.createElement('div')
  contenu.classList.add('contenu')
  contenu.innerText = formulaire.value

  const check = document.createElement('input')
  check.setAttribute('type', "checkbox")
  check.addEventListener("change", () => {
    console.log('changed', check.checked)
    contenu.classList.toggle('check')
    
    // if(check.checked){
    //   contenu.classList.add('check')
    // }
    // else {
    //   contenu.classList.remove('check')
    // }
  })

  const buttonsup = document.createElement('button')
  buttonsup.classList.add('buttonsup')
  buttonsup.innerText = 'supprimer la tache'
  buttonsup.addEventListener("click", () => {
    console.log('a effacer')
    todo.remove()

    // delete(buttonsup)

    // Select the todo

    // selectedTodo.remove()
  })


  todo.appendChild(check)
  todo.appendChild(contenu)
  todo.appendChild(buttonsup)

  list.appendChild(todo)

  formulaire.value = ""

}


async function route() {
  const res = await fetch("http://localhost:3031/hello")
  const message = await res.text()
  console.log(message)
}

async function affiche_liste_des_taches() {
  const res = await fetch("http://localhost:3031/afflistetaches")
  const message = await res.text()
  console.log(message)
}

affiche_liste_des_taches()


async function APICall_Create_Task(value: string) {
  const res = await fetch("http://localhost:3031/add/"+value, {method : "POST"})
  const message = await res.text()
  console.log(message)
}

async function taches_existantes() {
  const res = await fetch("http://localhost:3031/todos")
  const message = await res.text()
  console.log(message)
  
}

taches_existantes()
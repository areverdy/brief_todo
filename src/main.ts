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

const btnAjout = document.createElement('input')
btnAjout.setAttribute("type","text")
document.body.appendChild(btnAjout)

const button = document.createElement('div')
button.innerHTML = 'nouvelle_tache'
document.body.appendChild(button)

partie_haute.appendChild(btnAjout)
partie_haute.appendChild(button)
app.appendChild(partie_haute)

const partie_basse = document.createElement('div')
partie_basse.classList.add("partie_basse")
partie_basse.setAttribute('id', '2ndboite')

const todo = document.createElement('div')
todo.classList.add("recap_des_taches")
todo.setAttribute('id','petiteboitds2ndboite')

const list = document.createElement('div')
list.innerHTML = 'liste_des_taches'
list.classList.add('class')
document.body.appendChild(list)

const check = document.createElement('div')
check.innerHTML = 'tache-validee'
check.classList.add('class')
document.body.append(check)

const buttonsup = document.createElement('div')
buttonsup.innerHTML = 'supprimer_la_tache'
buttonsup.classList.add('class')
document.body.append(buttonsup)

todo.appendChild(check)
todo.appendChild(list)
todo.appendChild(buttonsup)
partie_basse.appendChild(todo)
app.appendChild(partie_basse)

button.addEventListener("click",()=> {
  afficher_nouvelle_tache()
})

function afficher_nouvelle_tache (){
  
}






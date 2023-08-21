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

const btnAjout = document.createElement('div')
btnAjout.innerText = 'nom_de_la_tache'
btnAjout.classList.add('class')
document.body.appendChild(btnAjout)

const button = document.createElement('div')
button.innerHTML = 'nouvelle_tache'
button.classList.add('class')
document.body.appendChild(button)

const list = document.createElement('div')
list.innerHTML = 'liste_des_taches'
list.classList.add('class')
document.body.appendChild(list)




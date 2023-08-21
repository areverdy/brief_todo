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

const btnAjout = document.createElement('div')
btnAjout.innerText = 'nom_de_la_tache'
btnAjout.classList.add('class')
document.body.appendChild(btnAjout)

const button = document.createElement('div')
button.innerHTML = 'nouvelle_tache'
button.classList.add('class')
document.body.appendChild(button)

partie_haute.appendChild(btnAjout)
partie_haute.appendChild(button)
app.appendChild(partie_haute)

const partie_basse = document.createElement('div')
partie_basse.classList.add("partie_basse")
partie_basse.setAttribute('id', '2ndboite')

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
list.classList.add('class')
document.body.append(buttonsup)

partie_basse.appendChild(chek)
partie_basse.appendChild(list)
partie_basse.appendChild(buttonsup)
app.appendChild(partie_basse)







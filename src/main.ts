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

const btn = document.querySelector("button")
btn?.classList.remove('favorite')
function menu(name) {
    let main = document.getElementsByClassName("article-main");
    for (let m of main){
        m.style.display = "none";
    }
    let element = document.getElementById(name);
    element.style.display = "block";
}

let bt1 = document.getElementById("nav-bt1")
bt1.addEventListener("click", () => {menu("article-page-introduction")})

let bt2 = document.getElementById("nav-bt2")
bt2.addEventListener("click", () => {menu("article-pieces")})

let bt3 = document.getElementById("nav-bt3")
bt3.addEventListener("click", () => {menu("article-strategy")})

let bt4 = document.getElementById("nav-bt4")
bt4.addEventListener("click", () => {menu("article-openings")})

let bt5 = document.getElementById("nav-bt5")
bt5.addEventListener("click", () => {menu("article-endings")})

menu("article-page-introduction")
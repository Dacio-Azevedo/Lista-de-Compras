const input = document.querySelector("input");
const button = document.querySelector("#btn");
const list = document.querySelector(".item-list");

button.addEventListener("click", () => {
    let content = input.value;
    // console.log("teste");
    createListItem(content);

    input.value = "";
});

function createListItem(value) {
    let li = document.createElement("li");
    li.textContent = value;

    let button = document.createElement("button");
    button.textContent = "Remover";
    
    li.append(button);
    list.appendChild(li);

    button.addEventListener("click", removeItem);
}

function removeItem(e){
    e.target.parentElement.remove();
}


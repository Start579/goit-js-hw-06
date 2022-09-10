const refs = {
    abraCadabra: document.querySelector("#text"),
    controlSize: document.querySelector("#font-size-control"),
};
refs.controlSize.addEventListener("input", (event) => {
    refs.abraCadabra.style.fontSize = refs.controlSize.value + "px"; 
    });
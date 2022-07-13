let button = document.getElementById('btn');
let input = document.getElementById('text');
let check = document.getElementById('checkbox');


button.onclick = () => {
    let enteredText = input.value;

    if (!enteredText) {
        return false;
    }

    let newDiv = document.createElement("div");
    newDiv.className = 'new__tag';
    let newDivText = document.createElement('div');
    newDivText.className = 'text new-text';
    newDiv.append(newDivText);
    let newDivButton = document.createElement('button');
    newDivButton.className = 'close';
    newDivButton.innerHTML = '<img class="close-img" src="icons8-удалить-24.png">';
    newDiv.append(newDivButton);
    document.getElementById('tags').append(newDiv);
    newDivText.innerText = enteredText;
    newDiv.style.display = 'flex';
    input.value = '';
    newDivButton.onclick = () => {
        newDiv.remove();
    }
}

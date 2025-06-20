//----VARIABLES---
const buttons = Array.from(document.querySelectorAll('button[type=button]'));
const submitButton = document.querySelector('button[type=submit]');
const ratingContainer = document.getElementById('rating-container');
const responseContainer = document.getElementById('response-container');

//--- EVENTOS ---
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        deleteButtons()
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
    })
})

submitButton.addEventListener('click', (e) => {
    const selectedRating = getRatingValue()
    showResponse(selectedRating);
})


//--- FUNCIONES ---
function selectActiveButton() {
    return buttons.find((button) => button.classList.contains('active'));
}

function deleteButtons() {
    const selectedButton = selectActiveButton();
    if (selectedButton) {
        selectedButton.classList.remove('active');
        selectedButton.setAttribute('aria-pressed', 'false');
    }
}

function getRatingValue() {
    let selectedRating;
    const selectedButton = selectActiveButton();
    if (selectedButton) {
        selectedRating = selectedButton.innerText;
    } else {
        selectedRating = '0';
    }
    return selectedRating;
}

function showResponse(selectedRating) {
    if (selectedRating != '0') {
        ratingContainer.classList.add('is-hidden');
        responseContainer.classList.remove('is-hidden');
        responseContainer.classList.add('container');
        document.getElementById('text-response').textContent = selectedRating;
    }
}
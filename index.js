const modalEl = document.querySelector('#modal')
const closeEl = document.querySelector('#modal-close-btn')
const btnContainer = document.querySelector('#modal-choice-btns')

setTimeout(() => {
    modalEl.style.display = "inline"
}, 1500);

function closeModal() {
    modalEl.style.display = 'none'
}

closeEl.addEventListener('click', closeModal)

const loginForm = document.querySelector('#login-form')
const modalText = document.querySelector('#modal-text')
const declineBtn = document.querySelector('#decline-btn')

loginForm.addEventListener('submit', function(e) {
    e.preventDefault()

    const loginFormData = new FormData(loginForm)
    const name = loginFormData.get("name")
    

    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>
    ` 
    setTimeout(() => {
        document.querySelector('#uploadText').innerText = "Making the sale..."
    }, 1500);   
    
    setTimeout(() => {
        document.querySelector('#modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/bugatti.jpg">
        </div>
        `
        document.querySelector('#modal-close-btn').disabled = false
    }, 3000);
    
})

declineBtn.addEventListener('mouseover', function() {
    btnContainer.classList.toggle('reverse')
    
})


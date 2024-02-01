const { response } = require("express")

const scriptURL = 'https://script.google.com/macros/s/AKfycbz-15uQjlwk1lR-VDZgwubVexiJC9Mewj9r6xAS_DniZO2IBQUaiHsaUklQtf7rGscnUA/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thank you for"
    })
})

const init = () => {
    const inputForm = document.querySelector('form')

    inputForm.addEventListener('submit', e => {
        e.preventDefault()
        //console.log(e) // the e object
        //console.log(e.target) // this returns the DOM element targeted by our event. <form> in our case
        //console.log(e.target.children[1].value) // returns the value attribute

        const input = document.querySelector('input#searchByID')
        // console.log(input.value) //returns whatever string entered into the form

        const baseUrl = `http://localhost:3000/movies/${input.value}`
        fetch(baseUrl)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => {
                const title = document.querySelector('section#movieDetails h4')
                const summary = document.querySelector('section#movieDetails p')

                title.innerText = res.title
                summary.innerText = res.summary
            })
    })
  
}

document.addEventListener('DOMContentLoaded', init);
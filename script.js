const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type) {
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
        case 'radio': appendRadio(label)
            break
    }
}

const appendText = (label = "No Label") => {
    let element = document.createElement('input')

    element.setAttribute('type', 'text')
    element.setAttribute('class', 'form-control mt-2')
    element.setAttribute('placeholder', label)

    document.querySelector('#display').append(element)
}


function hover(element) {
    var mockup = '';
    var aux = element.textContent;
    var aux2 = document.getElementById('project-Title').textContent;
    switch(aux){
        case 'demos vía a la vida':
            mockup = './Mockups/MockUp Vial.png';
            document.getElementById('project-Title').style.right = "5.5em";
            break;
        case 'sapere aude':
            mockup = './Mockups/MockUp Sapere.png';
            document.getElementById('project-Title').style.right = "8em";
            break;
        case 'dendue':
            mockup = './Mockups/MockUp Dendue.png';
            document.getElementById('project-Title').style.right = "8em";
            break;
        case 'teaté':
            mockup = './Mockups/TEATE.png';
            document.getElementById('project-Title').style.right = "8em";
            break;
        default:
            console.log('Paila');
            break;
    }
    document.getElementById('project-Title').textContent = aux;
    element.textContent = aux2;
    document.getElementById('Mockup').setAttribute('src', mockup);
}

function changeproject(element){
    var url = '';
    var aux = element.textContent;
    switch (aux) {
        case 'demos vía a la vida':
            url = "vial.html";
            break;
        case 'sapere aude':
            url = "sapere.html";
            break;
        case 'dendue':
            url = "Dendue.html";
            break;
        case 'teaté':
            url = "teate.html";
            break;
        default:
            console.log('Paila');
            break;
    }
    location.replace(url);
}

function changeprojectimage(){
    var url = '';
    var aux = document.getElementById('project-Title').textContent;
    switch (aux) {
        case 'demos vía a la vida':
            url = "vial.html";
            break;
        case 'sapere aude':
            url = "sapere.html";
            break;
        case 'dendue':
            url = "Dendue.html";
            break;
        case 'teaté':
            url = "teate.html";
            break;
        default:
            console.log('Paila');
            break;
    }
    location.replace(url);
}
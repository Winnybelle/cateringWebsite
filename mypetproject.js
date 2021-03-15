//select html elements to validate form 
const form = document.querySelector('.right-column form');
const inputs = document.querySelectorAll('.right-column form input');
const button = document.querySelector('.formbtn');
 

//manipulating the form
form.addEventListener('submit', function (e) {        
    e.preventDefault();            
    inputs.forEach((input) => {          
        if (!input.value) {               
            input.parentElement.classList.add('error');
        }
        else {
            input.parentElement.classList.remove('error');
        }
        if (input.type == 'email') {
            if (validateEmail(input.value)) {
                input.parentElement.classList.remove('error');
            }
            else {
                input.parentElement.classList.add('error');
            }
        }
        
    })    

});
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}





























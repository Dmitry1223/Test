const btn = document.getElementById('button')

function sendRequest(body)
{const xhr = new XMLHttpRequest();
xhr.open('POST','https://60376bfd5435040017722533.mockapi.io/form')
xhr.addEventListener('load', () => {
console.log(xhr.responseText);
});

xhr.addEventListener('error', () => {
alert('error');
});

xhr.send(JSON.stringify(body));
}

document.forms.myForm.onsubmit = function(e) {
e.preventDefault();
var username = document.getElementById('username').value;
var phone = document.getElementById('tel').value;
var email = document.getElementById('email').value;
const requestBody = {
name: username ,
phone: phone ,
email: email ,
};
console.log(requestBody);
sendRequest(requestBody);
} 
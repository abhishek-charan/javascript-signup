 create = () =>{
//alert('working');

const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
//const ipAddress= document.ipAddress;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


if(firstName.value=== '' || firstName.value=== null)
{
    alert('please enter first name')
    firstName.focus();
    return;
 }

 if(lastName.value=== '' || lastName.value=== null)
{
    alert('please enter last name')
    lastName.focus();
    return;
}
 if(!email.value.match(validRegex))
{
    alert('please enter valid email address')
    email.focus();
    return false;
}

if(password.value=== '' || password.value=== null)
{
    alert('password field is empty')
    password.focus();
    return;
}
if(confirmPassword.value !== password.value)
{
    alert('password not matched')
    confirmPassword.focus();
    return true;
}
document.getElementById('form1').style.display='none';
document.getElementById('showData').style.display='block';
document.getElementById('result').style.display='block';
const allData =`Your full name is ${firstName.value + lastName.value}  <br>
Your email address is ${email.value}`
document.getElementById('showData').innerHTML=allData;
 }

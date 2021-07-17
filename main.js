function welcome() {
  console.log('Hello People!');
}

function validate(e) {
  e.preventDefault()
  const password= document.getElementsByName('Password')[0]["value"]
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  if (password.length < 8) {
    alert("Password should be of Atleast 8 Characters")
  }
  
  if (!password.includes(numbers)) {
    alert('Password should atleast contain 1 Number!!!')
  }
}
function submitData(name, email) {
  fetch("http://localhost:3000/users" ,{
    method: "POST",
    headers: {"Content-Type":"application/json",
    Accept: "application/json",
    },
    body:JSON.stringify({
      name: name,
      email: email,

    }),
  })
  .then(res =>res.json())
  .then(data =>{

    appendChildDOM(data)

    console.log(data)
  })
  .catch(errorMessage=>{
    document.body.innerHTML +=errorMessage;


  })
}
const form = document.querySelector('#form')
console.log(form)
form.addEventListener("submit", e => {
  e.preventDefault()
  
  
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  submitData(name, email)
})

function appendChildDOM(data){
  for (let i = 0; i < data.length; i++){
  const id = data.id
  const ptag = document.createElement('p')
  const div = document.querySelector('.append')
  div.innerHTML = ptag
}
}


 

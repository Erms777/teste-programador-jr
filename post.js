const axios = require('axios')

axios
  .post('http://ec2-52-91-68-80.compute-1.amazonaws.com:8000/api/test', {
    "nome": "Emerson"
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })

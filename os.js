const os = require('os')

const user = os.userInfo()

console.log(user)

const curos={
    name:os.type(),
    rel:os.release(),
    total:os.userInfo().username
}
console.log(curos)

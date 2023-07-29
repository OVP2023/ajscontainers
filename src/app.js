
const Character = require('./character.js')
const Team = require('./team.js')

const memberF = new Character('Ivan','Bowman')
const memberS = new Character('Ivan','Magician')
const memberT = new Character('George','Magician')
const fTeam = new Team()

console.log(fTeam)

fTeam.addAll(memberS,memberT) //добавление нового члена команды
console.log('после addAll',fTeam)
fTeam.addAll(memberS) //добавление нового члена команды
console.log('после addAll',fTeam)

fTeam.add(memberF)
console.log('после add',fTeam)
console.log('после toArray')
for (const elem of fTeam.toArray()){
    console.log(elem)
} 


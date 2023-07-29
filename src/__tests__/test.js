test('set', () => {
    const Character = require('../character.js')
    const Team = require('../team.js')
    
    const memberF = new Character('Ivan','Bowman')
    const memberS = new Character('Ivan','Magician')
    const memberT = new Character('George','Magician')
    const fTeam = new Team()
    fTeam.addAll(memberS,memberT) //добавление нового члена команды
    fTeam.addAll(memberS) //добавление нового члена команды
    fTeam.add(memberF)
 
    const received = fTeam.toArray()[2]

    expected = memberF
    
    expect(received).toEqual(expected)
});
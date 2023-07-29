const Character = require('./character.js')

class Team{
    constructor() {
        this.members = new Set();
    }
    add(newMember){
        if (this.members.has(newMember)){       
            throw new Error ("Этот участник уже в команде")         
        } else {
            this.members.add(newMember) 
        }
    }
    addAll(...newMembers){ 
        for (const member of newMembers) {
            this.members.add(member)
        }
    }
    toArray(){
        let arr = Array.from(this.members)
        return arr
    }

}
module.exports = Team

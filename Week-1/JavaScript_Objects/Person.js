class Person {
    constructor (name, parents) {
        this.name = name,
        this.parents =  parents
    }

    childOf ()  {
        return this.parents.map(parent => parent.name).join(' & ') || "unknown"
    }
}


const charles = new Person("Charles", [])
const diana = new Person("Diana", [])
const harry = new Person("Prince Harry", [charles, diana])
const meghan = new Person("Meghan", [])
const archie = new Person("Archie", [harry, meghan])

console.log(archie)
console.log(harry.childOf())
console.log(meghan.childOf())

console.log(archie.parents[0].parents[0].name)

///////////////////////////////////////////////////

// class Person{
//     constructor(name){
//         this.name = name,
//         this.parents = []
//     };

//     childOf(){
//         if(this.parents.length > 0){
//             return "My parents are " + this.parents.map(parents =>{
//                 return parents.name
//             }).join(' & ' );
//         }
//         else{
//             return "unknown :c";
//         }
//     }

//     addParent(parents){
//         this.parents.push(parents);
//     }
// };


// let Homer = new Person('Homer');

// let Lisa = new Person('Lisa');

// Lisa.addParent(Homer);

// console.log(Lisa.childOf());

module.exports = Person;
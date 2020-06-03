// const person = {
//    name: 'Andrew',
//    age: 26,
//    location: {
//        city: 'Philadephia',
//        temp:92
//     }    
// }

// const {name = 'Anonymous', age} = person
// const {city, temp:temperature} = person.location
// console.log(`${name} is ${age}`)  

// if(city && temperature){

// console.log(`It is ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name:publisherName = 'Hello' } = book.publisher

// console.log(publisherName)

//array destructuring

const address = ['1299 S Junior Street', 'Philadelphia','penshvelnia', '12901']

const [, city, state] = address
console.log(`You are in ${city}`)


const item = ['coffee(hot)','$2.00', '$2.50', '$2.75']
const [food, small, medium, large] = item

console.log(`A medium ${food} costs ${medium}`)
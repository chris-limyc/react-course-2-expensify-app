import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database()

export {firebase, database as default}



// database.ref('expenses').on('child_removed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
    
// })

// database.ref('expenses').on('child_changed', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) =>{
//     console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('value', (snapshot) =>{
//     const expenses = []

//     snapshot.forEach((childSnapshot) =>{
//      expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//      })
//     })
//     console.log(expenses)
    
// })
// database.ref('expenses')
// .once('value')
// .then((snapshot) =>{
//     const expenses = []
//     snapshot.forEach((childSnapshot) =>{
//      expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//      })
//     })

//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description: 'buy coffee',
//     note: 'coffee',
//     amount: 99,
//     createdAt:0
// })

// database.ref('notes/-M9744SeWexAvbrPjDNg').remove()

// database.ref('notes').push({
//     title: 'course topic',
//     body: 'python'
// })

// const notes = [{
//    id: '12',
//    title: 'first note',
//    body: 'This is my note' 
// }, {
//     id: '7ycnw',
//     title: 'another note',
//     body: 'This is my note' 
//  }]

//  database.ref('notes').set(notes)
// database.ref().on('value', (snapshot) =>{
//     const val = snapshot.val()
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)

//     },  (e) => {
//             console.log('error with fetching data', e)
//  })

//   const onValueChange = database.ref().on('value', (snapshot) =>{
//     console.log(snapshot.val())
//  }, (e) => {
//     console.log('error with fetching data', e)
//  })

// setTimeout(() =>{
//     database.ref('age').set(29)
//  },3500)

//  setTimeout(() =>{
//     database.ref().off(onValueChange)
//  },7000)

//  setTimeout(() =>{
//     database.ref('age').set(30)
//  },10500)

//    database.ref()
//    .once('value')
//    .then((snapshot) =>{
//        const val = snapshot.val()
//        console.log(val)
//     }).catch((e)  =>{
//         console.log('error fetching data', e)
//     })


//   database.ref().set({
//     name: 'Andrew Mead',
//     age: 26,
//     stressLevel: 6,
//     job: {
//        title: 'software developer',
//        company: 'google' 
//     },
//     location: {
//         city: 'Philadelphia',
//         country: 'United States'
//     }
//   }).then(()  =>{
//     console.log('data is saved')
// }).catch((e)  =>{
//     console.log('This failed', e)
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'seattle'
// })
//  database.ref('isSingle')
//  .remove()
//  .then(()=>{
//         console.log('remove successful')
//     }).catch((e)  =>{
//             console.log('failed remove', e)
//         })
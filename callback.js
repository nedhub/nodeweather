setTimeout(() => {
console.log("Two seconds are up")
}, 2000) 



const names = ['Andrew', 'Jen', 'Jess']

const shortNAMES = names.filter((name) => {
    return name.length <= 4
})


// const geocode = (address, callback) => {
//     // const data = {
//     //     latitude: 0,
//     //     longitude: 0,


//     // }

//     // return data
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         }

//         callback(data)

//         // return data
//     }, 2000)

// }

// geocode('Philadelphia', (data) => {
//     console.log(data)

// })

// addEventListener(1, 4, (sum) => {
//     console.log(sum)

// })



const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}



add(1, 4, (sum) => {
    console.log(sum)

})





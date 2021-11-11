// let backPack = []

// // backPack.push('sword')
// // backPack.push('shield')
// // backPack.push('food')

// backPack.push('sword', 'shield', 'food')

// // console.log(backPack)

// // let sword = backPack.shift()
// let sword = backPack.splice(0, 1)
// // backPack.unshift(sword[0])

// let furCoat = 'fur coat'

// backPack.push(furCoat)

// backPack.pop()

// let itemCount = backPack.length
// let backPack2 = backPack.splice(2, 3)

// backPack.push('flint', 'blanket', 'knife', 'toothbrush')

// // console.log(backPack[0])

//     // for (let i = 0; i < backPack.length; i++){
//     //     console.log(backPack[i])
//     // }

//     // for (let i = 0; i < backPack2; i++){
//     //     console.log(backPack2[i])
//     // }
//     console.log(backPack)
//     if (backPack.length >= 3){
//         for(let i = 0; i < 3; i++){
//             console.log(backPack[i])
//         }
//     }else{
//         for (let i = 0; i < backPack.length; i ++){
//             console.log(backpack[i])
//         }
//     }

// What is the final value of guessMe?

let guessMe = 54

while (guessMe < 100) {
    console.log('-------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        console.log('guess me is divisable by 4 or 5. added 25')
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        console.log('guess me is divisible by 3. subtracted 27')
        guessMe -= 27
    } else {
        console.log('otherwise: added 3')
        guessMe += 3
    }
    guessMe += 22
    console.log(`added 22, guess me is now ${guessMe}`)
    // console.log('guess me is now ' + guessMe)
}
console.log(guessMe)

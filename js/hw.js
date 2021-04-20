//Exercise #1 
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max", "HAS", "PuRple", "dog"]

let findWords = (dstring, dlist) => {
    let R = dstring.toLowerCase().split(/[ ,]+/)
    let S = dlist.map(i => i.toLowerCase())
    let matches = []
    for (let i = 0; i < S.length; i++) {
        if (R.includes(S[i])) {
            matches.push(S[i])
        }
    }
    if (matches.length == 0) {
        console.log('no matches here')
    }
    else {
        console.log('theres a match:')
        for (let i = 0; i < matches.length; i++) {
            console.log(matches[i])
        }
    }
}

findWords(dog_string, dog_names)

//Exercise #2 //
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"]

function Evens(list) {
    for (let i = 0; i < list.length; i++) {
        if (i % 2 == 0) {
            list.splice(i, 1, 'even index')
        }
    }
    return (list)
}

console.log(Evens(arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
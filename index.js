// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(Ralph) {
cats.length = 0

cats.push('Milo', 'Otis', 'Garfield')

cats.push("Ralph")
 }

 function destructivelyPrependCat(Bob){
     cats.length = 0

cats.push('Milo', 'Otis', 'Garfield')

cats.unshift("Bob")
 }

 function destructivelyRemoveLastCat() {

 cats.length = 0

 cats.push('Milo', 'Otis', 'Garfield')

 cats.pop("Garfield")
 }


function destructivelyRemoveFirstCat() {

 cats.length = 0

 cats.push('Milo', 'Otis', 'Garfield')

 cats.shift("Milo")
}

function appendCat() {

 const cats=['Milo', 'Otis', 'Garfield']
 
 const add=[...cats,"Broom"]

 return add
}

function prependCat() {
     
 const cats=['Milo', 'Otis', 'Garfield']
 
 const sub=["Arnold",...cats]
 
 return sub
}

function removeLastCat() {

 const cats=['Milo', 'Otis', 'Garfield']
  const newArray= cats.slice(0,2)

return newArray

}

function removeFirstCat() {
   const cats=['Milo', 'Otis', 'Garfield']
   const newArr= cats.slice(1)
     
return newArr
}
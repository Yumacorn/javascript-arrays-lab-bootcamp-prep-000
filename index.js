var kittens = ["Milo", "Otis", "Garfield"] //define your array here
// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

appendKitten("Rawr")

function appendKitten(name) {
  console.log(name)
  console.log(kittens)
  var kittensNew = kittens
  console.log(kittensNew)
  kittensNew.push(name)
  console.log(kittensNew)

  return kittensNew
}

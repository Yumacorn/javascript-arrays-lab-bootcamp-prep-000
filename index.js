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
  var kittensNew = kittens
  kittensNew = [...kittens, name]
  return kittensNew
}

function prependKitten(name) {
  var kittensNew = [name, ...kittens]
  return kittensNew
}

let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false

let def = "valeur par défaut"

console.log("Partie A")

console.log("nom ?? def ->", nom ?? def)
console.log("age ?? def ->", age ?? def)
console.log("ville ?? def ->", ville ?? def)
console.log("score ?? def ->", score ?? def)
console.log("actif ?? def ->", actif ?? def)

console.log("")

console.log("Partie B")

console.log("nom || def ->", nom || def)
console.log("age || def ->", age || def)
console.log("ville || def ->", ville || def)
console.log("score || def ->", score || def)
console.log("actif || def ->", actif || def)

console.log("")

console.log("Partie C")

let r1 = nom ?? def
let r1b = nom || def
console.log("nom : ?? et || ->", r1 === r1b ? "même résultat" : "résultat différent")

let r2 = age ?? def
let r2b = age || def
console.log("age : ?? et || ->", r2 === r2b ? "même résultat" : "résultat différent")

let r3 = ville ?? def
let r3b = ville || def
console.log("ville : ?? et || ->", r3 === r3b ? "même résultat" : "résultat différent")

let r4 = score ?? def
let r4b = score || def
console.log("score : ?? et || ->", r4 === r4b ? "même résultat" : "résultat différent")

let r5 = actif ?? def
let r5b = actif || def
console.log("actif : ?? et || ->", r5 === r5b ? "même résultat" : "résultat différent")

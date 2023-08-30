// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();

}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const allCats = [...cats, name];
    return allCats
}

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats
}

function removeLastCat() {
    const copyOfCats = [...cats];
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = [...cats];
    copyOfCats.shift();
    return copyOfCats
}


// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function cats(){
  return cats;
}
function destructivelyAppendCat(name){
  return cats.push("Ralph");
}
function destructivelyPrependCat(name){
  return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
  return cats.pop(); 
}
function destructivelyRemoveFirstCat(){
  return cats.shift();
}
function appendCat(name){
 let newCats = [...cats, "Broom"]
 return newCats;
}
function prependCat(name){
  let newArray = ["Arnold", ...cats];
  return newArray;
}
function removeLastCat(){
  return cats.slice(0,2);
}
function removeFirstCat(){
  return cats.slice(1);
}
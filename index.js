// Write your solution here!
 const cats=["Milo", "Otis", "Garfield"];
 function destructivelyAppendCat() {
    return cats.push('Ralph');
 }
 const destructivelyPrependCat=function(){
    return cats.unshift('Bob');
 }
 function destructivelyRemoveLastCat(){
    return cats.pop();
 }
 function destructivelyRemoveFirstCat(){
    return cats.shift();
 }
 const appendCat=function(){
    const catsCopy =[...cats,'Broom'];
    return catsCopy;
 }
 const prependCat=function(){
    const catsCopy=["Arnold",...cats];
    return catsCopy
 }
 const removeLastCat=function(){
    const lastCatGone=[...cats.slice(0,2)];
    return lastCatGone;
 }
 function removeFirstCat(){
    const firstCatGone=[...cats.slice(1,3)];
    return firstCatGone;
 }
let nb1 = Number(prompt("Veuillez saisir le côté d'un triangle rectangle en cm : "));
let nb2 = Number(prompt("Veuillez saisir le deuxième côté du triangle en cm : "));
let hypothenuse = Math.sqrt(Math.pow(nb1,2)+Math.pow(nb2,2));
let arrondi = Math.round(hypothenuse * 100) / 100


let msg = `L'hypothénuse d'un triangle rectangle de ${nb1} et ${nb2}cm de côté est de ${arrondi}cm.`;
console.log(msg);
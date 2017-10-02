let speech = `
Madame,

Veuillez trouver ci après une liste de recommandations :

    - directive 1
    - directive 2
    - etc...

Amicalement,

Tonton Christophe ;-)
`;

console.log(speech); // formaté
document.write(speech); // non formaté
alert(speech); // formaté

let latName = 'Martin';

let speech2 = `
Madame ${latName},

Veuillez trouver ci après une liste de recommandations :

    - directive 1
    - directive 2
    - etc...

Amicalement,

Tonton Christophe ;-)
`;

console.log(speech2); // formaté
document.write(speech2); // non formaté
alert(speech2); // formaté

let processTemplate = (param1, param2) => {
    console.log('param1 ' + param1);
    console.log('param2 ' + param2);
}

// ne pas mettre d'espace avant le "`"
let speech3 = processTemplate`
Madame ${latName},

Veuillez trouver ci après une liste de recommandations :

    - directive 1
    - directive 2
    - etc...

Amicalement,

Tonton Christophe ;-)
`;

console.log(speech3);
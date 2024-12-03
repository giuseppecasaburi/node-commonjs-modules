# Common Js modules
## Traccia
Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

**names.js**
1. Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
2. Esporta la funzione dal file.

**hobbies.js**
1. Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.
2. Esporta la funzione dal file.

**app.js**
1. Importa la tua funzione da names.js
2. Importa la tua funzione da hobbies.js
3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName e hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

## BONUS
-Trasformare la sintassi di commonJS in ES6 
-Usare la libreria chalk per colorare output
PS: ricordate di aggiungere .gitignore per non pushare la cartella node_modules
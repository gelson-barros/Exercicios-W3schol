//link de referencia: https://www.w3schools.com/js/exercise_js.asp

// Capitulo 1 - Exercicios de Variavel

// 01 Crie uma variável chamada carName, atribua o valor Volvo a ela
var carName = "Volvo";//let ou const
console.log(carName)
// 02 Crie uma variável chamada x, atribua o valor 50 a ela
let x = 50
console.log(x)
// 03 Exibe a soma de 5 + 10, usando duas variáveis: x e y
//a.html
//var x = 5;
//var y = 10;
//cria um elemento html
//document.getElementById("demo").innerHTML = x + y;

// 04 Crie uma variável chamada z, atribua a + b a ela e exiba o resultado em uma caixa de alerta.

var a = 5;
var b = 10;
 
var z = a + b;
console.log(z);

// 05 Em uma única linha, declare três variáveis ​​com os seguintes nomes e valores:
// firstName = "John";
// lastName = "Doe";
// age = 35;

var firstName = "John",lastName = "Doe", age = 35;

// Capitulo 2 - Exercicios

// 01 Multiplique 10 por 5 e alerte o resultado:

console.log(10 * 5);

// 02 divida 10 por 2 e alerte o resultado:

console.log(10 / 2);

// 03 Alerte o restante quando 15 for dividido por 9.

console.log(15 / 9);

// 04 Use o operador de atribuição correto que resultará em x sendo 15 (o mesmo que x = x + y).

x = 10;
y = 5;
x += y;
console.log(x)

// 05 Use o operador de atribuição correto que resultará em x sendo 50 (o mesmo que x = x * y).

x = 10;
y = 5;
x *= y;
console.log(x)

// Capitulo 3 - Exercicios tipos de dados

// 01 Use comentários para descrever o tipo de dados correto das seguintes variáveis:

var length = 16;          // number

var lastName = "Johnson"; // string

var g = {
  firstName: "John",
  lastName: "Doe"
};                        // object
console.log(g.firstName, g.lastName)

// Capitulo 4 - Exercicios de Funções

// 01 Execute a função chamada myFunction.

function myFunction() {
  console.log("Hello World!");
}
myFunction();

// 02 Crie uma função chamada "myFunction".

function myFunction() {
  console.log("Hello World!");
}

// 03 Faça a função retornar "Hello".
//b.html
//function myFunction() { 
//    return "Hello";
//}
//document.getElementById("demo").innerHTML = myFunction();

// 04 Faça com que a função exiba "Hello" no HTML interno de um elemento com o ID "demo".

// Capitulo 5 - Objectos

// 01 Alerte "John" extraindo informações do objeto person.

var person1 = {
    firstName: "John",
    lastName: "Doe",
};

console.log(person1.firstName)

// 02 Adicione a seguinte propriedade e valor ao objeto pessoa: country: Norway.

var person2 = {
    firstName: "John",
    lastName: "Doe",
    country: "Norway"

};

// 02 Crie um objeto chamado pessoa com nome = John, idade = 50. Em seguida, acesse o objeto a alertar (“João tem 50 anos”).

var pessoa = {
  nome: "John", 
  idade: 50
};
console.log( pessoa.nome + " tem  "+ pessoa.idade + " anos" );

// Capitulo 05 - Exercicio de eventos

// 01 O elemento <button> deve fazer algo quando alguém clica nele. Tente consertar!

// c.html
// <button onclick="alert('Hello')">Click me.</button>

// 02 Quando o botão é clicado, a função "myFunction" deve ser executada.

// d.html
// <button onclick="myFunction()">Click me.</button>

// 03 O elemento <div> deve ficar vermelho quando alguém move o mouse sobre ele.

//e.html
// <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

// Capitulo 06 - Exercicios String

// 01 Use a propriedade length para alertar sobre o comprimento do txt.

var txt = "Hello World!";
var ab = txt.length;
console.log(ab);

// 02 Use caracteres de escape para alertar `Nós somos "Vikings"`

var txt1 = 'Nós somos \"Vikings\"';
console.log(txt1);

// 03 Concatene as duas strings para alertar "Hello World!".

var str1 = "Hello ";
var str2 = "World!";
console.log(str1 + str2);

// Capitulo 07 - Exercicios metodos da string

// 01 Encontre a posição do caractere h na string txt.

var txt2 = "abcdefghijklm";
var pos = txt2.indexOf("h");
console.log(pos)

// 02 Use o método slice para retornar a palavra "bananas".

var txt3 = "I can eat bananas all day";
var x1 = txt3.slice(10, 17);
console.log(x1, txt3)

// 03 Use o método String correto para substituir a palavra "Hello" pela palavra "Welcome".

var txt4 = "Hello World";
txt4 = txt4.replace("Hello", "Welcome");
console.log(txt4)

// 04 Converta o valor de txt em maiúsculas.

var txt5 = "Hello World";
txt5 = txt5.toUpperCase();
console.log(txt5)

// 05 Converta o valor de txt para minúsculas.

var txt6 = "Hello World";
txt6 = txt6.toLowerCase();
console.log(txt6)

// Capitulo 08 Exercicios Array 

// 01 Obtenha o valor "Volvo" da gama de carros.

var cars1 = ["Saab", "Volvo", "BMW"];
var x1 = cars1[1];
console.log(x1);

// 02 Altere o primeiro item de carros para "Ford".

var cars2 = ["Volvo", "Jeep", "Mercedes"];
cars2[0] = "Ford";
console.log(cars2[0])

// 03 Alerte o número de itens em uma matriz, usando a propriedade Array correta.

var cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length);

// 04 Use o método Array correto para remover o último item do array frutas.

var fruits = ["Banana", "Orange", "Apple"];
fruits.pop();
console.log(fruits)

// 05 Use o método Array correto para adicionar "Kiwi" à matriz de frutas.

var fruits1 = ["Banana", "Orange", "Apple"];
fruits1.push("Kiwi");
console.log(fruits1);

// 06 Use o método splice () para remover "Orange" e "Apple" das frutas.

var fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits2.splice(1, 2));

// Capitulo 09 Exercicio de Array sort

// 01 Use o método Array correto para classificar a matriz de frutas em ordem alfabética

var fruits3 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits3.sort();
console.log(fruits3)

// Capitulo 10 Exercicio de Datas

// 01 Crie um objeto Date e alerte a data e a hora atuais.

var d1 = new Date();
console.log(d1);

// 02 Use o método de data correto para extrair o ano (quatro dígitos) de um objeto de data.

var d2 = new Date();
year = d2.getFullYear();
console.log(year);
// 03 Use o método Date correto para obter o mês (0-11) de um objeto de data.

var d = new Date();
month = d.getMonth();
console.log(month)

// 04 Use o método de data correto para definir o ano de um objeto de data para 2020

var d = new Date();
d.setFullYear(2020);
console.log(d.setFullYear(2017))


// Capitulo 11 Exercicios de Math

// 01 Use o método matemático correto para criar um número aleatório.

var r = Math.random();
console.log(r*10)

// 02 Use o método matemático correto para retornar o maior número de 10 e 20.

var x2 = Math.max(10, 20);
console.log(x2)

// 03 Use o método matemático correto para arredondar um número para o inteiro mais próximo.

var x3 = Math.round(5.7);
console.log(x3);

// 04 Use o método matemático correto para obter a raiz quadrada de 9.

var x4 = Math.sqrt(9);
console.log(x4);

// Capitulo 12 Exercicios de comparação

// 01 Escolha o operador de comparação correto para alertar verdadeiro, quando x é maior que y.

var m = 10;
var n = 5;
console.log(m > n);

// 02 Escolha o operador de comparação correto para alertar verdadeiro, quando x é igual a y.

var m1 = 10;
var n1 = 10;
console.log(m1 == n1);

// 03 Escolha o operador de comparação correto para alertar verdadeiro, quando x NÃO é igual a y.

var m2 = 10;
var n2 = 5;
console.log(m2 != n2);

// 04 Escolha o operador condicional (ternário) correto para alertar "Muito jovem" se a idade for inferior a 18 anos, caso contrário, alerte "Velho o suficiente".

var age = 16;
var voteable = age < 18 ? "Muito jovem" : "Velho o suficiente";
console.log(voteable);

// Capitulo 13 Exercicios de Condição

// 01 Corrija a instrução if para alertar "Hello World" se x for maior que y.
var e = 13
var f = 5
if (e > f) {
    console.log("Hello World");
}

// 02 Corrija a instrução if para alertar "Hello World" se x for maior que y, caso contrário, alertar "Goodbye".

if (e > f) {
    console.log("Hello World");
} else {
    console.log("Goodbye");
}

// Capitulo 14 Exercicios de Switch

// 01 Crie uma instrução switch que alertará "Olá" se as frutas forem "banana" e "Bem-vindo" se as frutas forem "maçã".
var fruits2 = "Banana"

switch (fruits2) {
  case "Banana":
      console.log("Hello");
      break;

  case "Apple":
      console.log("Welcome");
      break;
}

// 02 Adicione uma seção que irá alertar ("Neither") se frutas não são nem "banana" nem "apple".

switch (fruits) {
  case "Banana":
    console.log("Hello");
    break;
  case "Apple":
    console.log("Welcome");
    break;

  default:
    console.log("Neither");
}

// Capitulo 15 Exercicio de Loops

// 01 Crie um loop que vai de 0 a 9.

var i;
for (i = 0; i < 10; i++) {
    console.log(i);
}

// 02 Crie um loop que percorre cada item da matriz de frutas.

var fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
    console.log(x);
}

// Capitulo 16 Exercicios de Loops while

// 01 Crie um loop que execute desde que i seja menor que 10

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// 02 Crie um loop que execute enquanto i for menor que 10, mas aumente i com 2 a cada vez.

var i = 0;
while (i < 10) {
    console.log(i);

    i = i + 2;
}

// Capitulo 17 Exercicios de break loops

// 01 Faça o loop parar quando i for 5

for (i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

// 01 Faça o loop pular para a próxima iteração quando i for 5.

for (i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// Capitulo 18 Exercicios de DOM - HTML

// 01 Use o método getElementById para encontrar o elemento <p> e altere seu texto para "Hello".

//f.html
/*
<p id="demo"></p>
<script>document.getElementById("demo").innerHTML= "Hello";</script>
*/

// 02 Use o método getElementsByTagName para encontrar o primeiro elemento <p> e altere seu texto para "Olá".

//g.html
/*
<p id="demo"></p>

<script>
document.getElementsByTagName("p")[0].innerHTML= "Hello";
</script>
*/

// 03 Altere o texto do primeiro elemento que possui o nome de classe "teste".


/*
<p class="test"></p>
<p class="test"></p>

<script>
document.getElementsByClassName("test")[0].innerHTML= "Hello";
</script>
*/

// 04 Use HTML DOM para alterar o valor do atributo src da imagem.

/*
<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src= "pic_mountain.jpg";
</script>
*/

// 05 Use HTML DOM para alterar o valor do campo de entrada.

/*
<input type="text" id="myText" value="Hello">

<script>
document.getElementById("myText").value= "Have a nice day!";
</script>
*/

// 06 Altere a cor do texto do elemento <p> para "vermelho".

/*
<p id="demo"></p>

<script>
document.getElementById("demo").style.color= "red";
</script>
*/

// 07 Altere o tamanho da fonte do elemento p para 40 pixels.

/*
<p id="demo"></p>

<script>
document.getElementById("demo").style.fontSize="40px";
</script>
*/

// 08 Use a propriedade de exibição CSS para ocultar o elemento p.

/*
<p id="demo"></p>

<script>
document.getElementById("demo").style.display= "none";</script>
*/

// 09 Use o eventListener para atribuir um evento onclick ao elemento <button>.

/*
<button id="demo">Click me1</button>

<script>
document.getElementById("demo").addEventListener("click", myFunction);
</script>
*/
let count = [
{
    title: '2',
    items: 0,
},
{
    title: '3',
    items: 0,
},
{
    title: '4',
    items: 0,
},
{
    title: '5',
    items: 0,
},
{
    title: '6',
    items: 0,
},
{
    title: '7',
    items: 0,
},
{
    title: '8',
    items: 0,
},
{
    title: '9',
    items: 0,
},
{
    title: '10',
    items: 0,
},
{
    title: '11',
    items: 0,
},
{
    title: '12',
    items: 0,
},
]
console.log(count[0].title)

function append (div,resultado){
    const show = document.getElementById
}
const botao = document.getElementById("callDice").addEventListener('click', diceRoll)

const reset = document.getElementById("reset").addEventListener('click', function(){
const main = document.getElementById("main")
main.innerHTML = ''
for (let i = 0; i<count.length; i++){
    count[i].items = 0
}
})

function diceRoll (){
  for (let i = 0; i<1000; i++){
  const dado1 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  const dado2 = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  let resultado = dado1(1,6) + dado2(1,6)
  console.log(resultado)
  for (let j = 0; j < count.length; j++){
   if( resultado == count[j].title){
    count[j].items += 1
   }
  }
  }
  for (let k = 0; k <count.length; k++){
      const novadiv  =  document.createElement("div")
      let titulo = count[k].title
      let conteudo = count[k].items
      novadiv.style.width = `${count[k].items + 30}px`;
      novadiv.style.border = "1px solid #000000"
      novadiv.style.backgroundColor = '#3399ff';
      novadiv.innerText = titulo + "-" + conteudo
      const main = document.getElementById("main")
      main.appendChild(novadiv)
  }
}
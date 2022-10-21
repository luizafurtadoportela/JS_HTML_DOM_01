// Mudando a cor do body para verde
const body = document.querySelector('body') //querySelector É ultilizado para selecionar um elemento já existente no HTML
body.style.backgroundColor = 'green'

// Adicionando um titulo a página com JavaScript
const titulo = document.createElement('h1') //createElement É ultilizado para criar um elemento/TAG HTML
titulo.textContent = 'Eventos' // Definindo o valor desse elemento criado
body.appendChild(titulo) //Adicionando "um filho" Adicionando a TAG criada no meu body! SE EU NÃO COLOCAR NÃO VAI APARECER!!

// CSS do titulo criado anteriormente
titulo.style.cssText = 
`
color: white; 
text-align: center;
`

// Criando o subtutulo da página e Adicionando um CSS de cor branca
const subtitulo = document.createElement('h2')
subtitulo.textContent = 'Inline-Events'
body.appendChild(subtitulo) //Adicionando "um filho" Adicionando a TAG criada no meu body! SE EU NÃO COLOCAR NÃO VAI APARECER!!
subtitulo.style.color = 'white'

// Criando um botão e Adicionando propriedades CSS 
const botao = document.createElement('button')
botao.textContent = 'onClick'
body.appendChild(botao) //Adicionando "um filho" Adicionando a TAG criada no meu body! SE EU NÃO COLOCAR NÃO VAI APARECER!!
botao.style.cssText = 
`
width: 200px;
heigth: 50px;
border-radius: 10px;
border: solid black;
font-size: 18px;
`


// ------------------------------------------------------------------------------------------------------------------------------

subtitulo.setAttribute("onClick", "alert('Clicou no subtitulo')") //Mudando o valor de um atributo

botao.setAttribute("onClick", "subtitulo.style = 'color: yellow'") //Mudando o valor de um atributo

// Criando uma função para mudar a cor sempre que eu clicar no botao
function mudar_cor() {
    if (subtitulo.style.color == 'white') { //Se estiver branco mudar para vermeho
        subtitulo.style.color = 'red' 
    }
    else {
        subtitulo.style.color = 'white' //Se não, mudar para branco (LEMBRETE: INICIALMENTE É BRANCO!)
    }
}

botao.onclick = mudar_cor //SEMPRE QUE EU CLICAR NO BOTAO ESTAREI CHAMANDO A FUNÇÃO mudar_cor



// -------------------------------------------------------------------------------------------------------------------------------

const quadrado = document.createElement('div')
quadrado.style.cssText = 
`
width: 300px;
height: 300px;
background-color: #426dff;
margin: 30px 0 10px 0;
`
body.appendChild(quadrado)

// Criando um botão com função mudar_cor
const btn = document.createElement('button')
btn.textContent = "Mudar cor"
body.appendChild(btn)
btn.onClick = muda_cor


// Criando uma função para mudança de cor SEMPRE que eu CLICAR no btn

function muda_cor() {
    const rndCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
    body.appendChild(rndCol)
}


// ------------------------------------------------------------------------------------------------------

quadrado.textContent = "Mensagem" // Adicionando o texto "Mensagem" ao atributo quadrado


// Eventos do MOUSE (Entrada)
function entrou() {
    quadrado.textContent = "Entrou"
}

quadrado.onmouseenter = entrou // Chamando a função acima


// Eventos do MOUSE (SAIDA)
quadrado.onmouseleave = saiu 

function saiu() {
    quadrado.textContent = "Saiu"
}



// -----------------------------------------------------------------------------------------------------------

const selectInput = document.createElement('select')
selectInput.style.marginLeft = '30px' // Alinhando a TAG select

const option1 = document.createElement('option') // Criando as opções
const option2 = document.createElement('option')
const option3 = document.createElement('option')
const option4 = document.createElement('option')

option1.textContent = "red" // Adicionando texto em cada opção
option2.textContent = "blue"
option3.textContent = "white"
option4.textContent = "yellow"

selectInput.append(option1,option2,option3,option4) // Adicionando opções dentro da TAG select
selectInput.setAttribute ("onchange", "corEscolhida(selectInput.value)") // Mostrando o valor escolhido em option
body.appendChild(selectInput) 


// Criando uma função para mudar a cor quando clicar nas opções criadas acima
function corEscolhida(cor) {
    quadrado.style.backgroundColor = cor
}


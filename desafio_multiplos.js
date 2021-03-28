/*Código do Javascript ao qual estudei bastante tempo no desafio da semana 3.
Restringiu no caso de o usuário insirar o zero ou algum outro número negativo. Limitado no uso do botão.*/

console.clear()

/*
Utilizando o DOM - Document Object Model - para auxiliar na tela do html. 
*/

// const entradaUsuario = document.querySelector('.entrada-usuario')
const botaoCalcular = document.querySelector('.botao-calcular')
const resultado = document.querySelector('.resultado')


// Função para limpar os resultados da tela
function limparResultado() {
	resultado.innerHTML = ''
}

function limparInput(){
	document.querySelector('.entrada-usuario').value = ""
}

// Criado uma função para calcular os múltiplos do número escolhido pelo usuário (1 a 100).
function calcularMultiplos(entradaUsuario, maximoMultiplo){

	const stringParaNumero = Number(entradaUsuario)
	
	let multiplos = []
	
	for(let i = 0; i <= maximoMultiplo; i++){
		if(stringParaNumero * i <= maximoMultiplo){
			multiplos.push(stringParaNumero * i)
		}
	}
	
	return multiplos
}

/** 
* No clique do botão realiza-se os cálculos e colocado os resultados obtidos na tela em html.
*/
botaoCalcular.addEventListener('click', () => {
	
	const entradaUsuarioValor = document.querySelector('.entrada-usuario').value
	const strParaNumero = Number(entradaUsuarioValor)
	
	if(strParaNumero <= 0){
		limparResultado()
		limparInput()
		alert('Somente números positivos são permitidos.')
	}
	else {
		// Função para limpar os resultados
		limparResultado()

		// Criado um elemento h2
		let titulo = document.createElement("h2")

		// Colocado o título dentro do resultado
		resultado.append(`Números múltiplos de (${entradaUsuarioValor}) encontrados menores que 100.`, titulo)

		// Criado um elemento div para o resultado
		let multiplos = document.createElement('div')

		// Colocado os resultados dentro da classe resultado na tela
		resultado.append(multiplos, calcularMultiplos(entradaUsuarioValor, 100))
	}
})
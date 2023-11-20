let war = {
	name: "Danrlei",
	age: "28",
    type: {
    	0: ["guerreiro", "Usando espada"],
        1: ["mago", "Usando magia"],
        2: ["monge", "Usando artes marciais"],
        3: ["ninja ", "Usando shuriken"]
    }
}

batalha(war)

function batalha(war){
	console.log(`O Jogador ${war.name} está utilizando os personagens`)
    
    for(let index in war.type){
    	let[personagem, habilidade] = war.type[index]
        console.log(` ${personagem} para derrotar ORQs ${habilidade}`)
    }
}
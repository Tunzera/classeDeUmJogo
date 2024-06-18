class heroiCaracteristicas {
	constructor(nome, idade, tipo){
    	this.nome = nome
   		this.idade = idade  
    	this.tipo = tipo
        this.definirAtaque()
    }
    
    definirAtaque(){
    	if(this.tipo == "mago"){this.ataque = "magia"
      	}
		else if(this.tipo == "guerreiro" ){this.ataque = "espada"
   		}
		else if(this.tipo == "monge" ){this.ataque = "artes marciais"
    	}
		else if(this.tipo == "ninja" ){this.ataque = "shuriken"
   		}
    }
    
    escrever(){
    	console.log(`O ${this.tipo}, chamado ${this.nome}, atacou usando ${this.ataque}`)
    }
}
	let hero0 = new heroiCaracteristicas("Tunzera", 25, "mago")
    
hero0.escrever()
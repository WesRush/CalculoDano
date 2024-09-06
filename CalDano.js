let NomeCharATK, PoderATK, NomeCharDEF, LifeP, PoderDEF, escudo, dano

NomeCharATK = prompt("Digite o nome da(o) personagem de ataque:")
PoderATK = parseFloat(prompt(`Digite quanto poder a(o) personagem ${NomeCharATK} tem: `))
NomeCharDEF = prompt("Digite o nome da(o) personagem de defesa:")
LifeP = parseFloat(prompt(`Digite quantos de vida a(o) personagem ${NomeCharDEF} tem: `))
PoderDEF = parseFloat(prompt(`Digite os poder de defesa a(o) personagem ${NomeCharDEF} tem: `))
escudo = parseInt(prompt(`O(a) ${NomeCharDEF} tem escudo? \n1.Sim\n2.Não`))
dano= parseFloat((PoderATK - PoderDEF))

if (PoderATK>PoderDEF && escudo == 2){
    
    alert(`Status de ataque de ${NomeCharATK}\nPoder de ataque: ${PoderATK}\n
Contra ${NomeCharDEF} com ${PoderDEF} poder de defesa e ${LifeP} de pontos de vida sem escudo\n
Dano causado em ${NomeCharDEF} por ${NomeCharATK} foi de ${dano} de dano, restando ${(dano-LifeP)*(-1)} para finalizar`)

}else if(PoderATK>PoderDEF && escudo == 1){
    dano = parseFloat((PoderATK - PoderDEF)/2)
    alert(`Status de ataque de ${NomeCharATK}\nPoder de ataque: ${PoderATK}\n
Contra ${NomeCharDEF} com ${PoderDEF} poder de defesa e ${LifeP} de pontos de vida com escudo\n
Dano causado em ${NomeCharDEF} por ${NomeCharATK} foi de ${dano} de dano, restando ${(dano-LifeP)*(-1)} para finalizar`)
} else if(PoderATK<=PoderDEF){
    dano = 0
    alert(`Status de ataque de ${NomeCharATK}\nPoder de ataque: ${PoderATK}\n
Contra ${NomeCharDEF} com ${PoderDEF} poder de defesa e ${LifeP} de pontos de vida com escudo\n
Dano causado em ${NomeCharDEF} por ${NomeCharATK} foi de ${dano} de dano, ataque frustrado!`)
}else{
    alert("Entradas inválidas: Fechando o jogo!")
}

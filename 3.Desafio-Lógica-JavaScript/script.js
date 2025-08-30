let nomo_Jogador = ""
let nivel_XP = 0
let Elo = ''

const Dicionario_Elos_Max_pontos = {
    "Ferro": 1000,
    "Bronze": 2000,
    "Prata": 5000,
    "Ouro": 7000,
    "Platina": 8000,
    "Ascendente": 9000,
    "Imortal": 10000,
    "Radiante": 100000 

};
/* Adicionando um novo item
materiais["Prata"] = 3000;
materiais.Ouro = 4000;
*/

const chaves = Object.keys(Dicionario_Elos_Max_pontos);
const valores = Object.values(Dicionario_Elos_Max_pontos)

function AtualizarElo(nivel_XP){
    if (nivel_XP<=values[0]){
        return (Elo=chaves[0])
    }
    else if (nivel_XP<=values[1]){
        return (Elo=chaves[1])
    }
    else if (nivel_XP<=values[2]){
        return (Elo=chaves[2])
    }
    else if (nivel_XP<=values[3]){
        return (Elo=chaves[3])
    }
    else if (nivel_XP<=values[4]){
        return (Elo=chaves[4])
    }
    else if (nivel_XP<=values[5]){
        return (Elo=chaves[5])
    }
    else if (nivel_XP<=values[6]){
        return (Elo=chaves[6])
    }
    else{
        return (Elo=chaves[7])
    }
}
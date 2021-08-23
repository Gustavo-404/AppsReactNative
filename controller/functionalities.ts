

export default class Functionalities {
    
     public static randomPhrase(){
         
        let fruits: string[] = [
            'Defeitos e virtudes são apenas dois lados da mesma moeda.',
             'Siga os bons e aprenda com eles.',
              'Quem quer colher rosas deve suportar os espinhos.',
              'Não compense na ira o que lhe falta na razão.',
              'Se não puder fazer tudo, faça tudo que puder',
              'Que venham dias melhores',
              'O corpo alcança o que a mente acredita',
              'Nem tudo na vida são flores, mas, quando for, regue',
            ];

    const numero = Math.floor(Math.random()  * (fruits.length - 0 ) + 0)
    return fruits[numero]
    } 

    public static calcImc(peso: any, altura: any){

        var format = altura.altura.split(',')
        var p = parseFloat(peso.peso)
        var m = parseFloat(format[0])
        var c = parseFloat(format[1])

        var alt = (m*100 + c)/100;    
        var imc = p / (alt * alt);     
        var response

        if(imc < 20)
        {
            response='Você esta abaixo do peso!'
        } 
        else if(imc >20 && imc <= 25)
        {
            response="Peso Ideal"
        }
        else if(imc >25 && imc <= 30)
        {
            response="Sobrepeso"
        }
        else if(imc >30 && imc <= 35)
        {
            response="Obesidade Moderada"
        }
        else if(imc >35 && imc <= 40)
        {
            response="Obesidade Severa"
        }
        else if(imc >40 && imc <= 50)
        {
            response="Obesidade Morbida"
        }
        else
        {
            response='Gordo'
        }
        console.log(imc)
        return response
    }
    
}
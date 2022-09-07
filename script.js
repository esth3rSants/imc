let people = document.getElementById('nome')
let altura = document.getElementById('height')
let peso = document.getElementById('peso')
let r = document.getElementById('res')
let imc = 0
function calcular() {
  let pe = String(people.value)
  let h = Number(altura.value.replace(',', '.'))
  let p = Number(peso.value)
  let imc = p / (h ^ 2)
  let icmtxt = '0'

  if (people == 0 || h == 0 || p == 0) {
    window.alert('inserir um valor')
  } else {
    if (imc < 18.5) {
      icmtxt = `abaixo do peso, quadro considerado magreza.`
    } else {
      if (imc < 25) {
        icmtxt = `peso adequado`
      } else {
        if (imc < 30) {
          icmtxt = `sobrepeso`
        } else {
          icmtxt = `obesidade`
        }
      }
    }
  }
  r.innerHTML = `${pe} você tem ${h}m e pesa ${p} kg <br><br><br> O seu IMC é de 
  ${imc.toFixed(2)}, e seu diagnostico é de ${icmtxt}`
}
// terminar a parte que o valor retorna

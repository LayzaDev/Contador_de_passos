function contar() {
  // Criando as variáveis

  let started = document.getElementById('txtstart')
  let last = document.getElementById('txtend')
  let pace = document.getElementById('txtcount')

  let res = document.getElementById('res')

  // Condições

  if (
    started.value.length == 0 ||
    last.value.length == 0 ||
    pace.value.length == 0
  ) {
    res.innerHTML = 'Impossível fazer contagem, preencha todos os campos!'
  } else {
    res.innerHTML = 'Contagem: <br>'

    let s = Number(started.value)
    let l = Number(last.value)
    let p = Number(pace.value)

    if (p <= 0) {
      window.alert('[ERRO] Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (s < l) {
      //CONTAGEM CRESCENTE

      for (let c = s; c <= l; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      //CONTAGEM DECRESCENTE

      for (let c = s; c >= l; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}

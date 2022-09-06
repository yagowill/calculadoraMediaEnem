const btn = document.getElementById('BtnCalc')

btn.addEventListener('click', () => {
    const exibir = document.getElementById('resultadoNota')
    const media = {
        cHumanas: {
            nota: document.getElementById('CienciasHumanas').value,
            peso: document.getElementById('PesoCienciasHumanas').value,
            notaHumanas: function() {return this.nota * this.peso}
        },
        cNatureza: {
            nota: document.getElementById('CienciasDaNatureza').value,
            peso:document.getElementById('PesoCienciasDaNatureza').value,
            notaNatureza: function() {return this.nota * this.peso}
        },
        linguagens: {
            nota: document.getElementById('Linguagens').value,
            peso:document.getElementById('PesoLinguagens').value,
            notaLinguagens: function() {return this.nota * this.peso}

        }, 
        matematica: {
            nota: document.getElementById('Matematica').value,
            peso:document.getElementById('PesoMatematica').value,
            notaMatematica: function() {return this.nota * this.peso}

        },
        redacao: {
            nota: document.getElementById('Redacao').value,
            peso:document.getElementById('PesoRedacao').value,
            notaRedacao: function() {return this.nota * this.peso}
 
        }
    }

    function somanotas() {
        return (media.cHumanas.notaHumanas() + media.cNatureza.notaNatureza() + media.linguagens.notaLinguagens() + media.matematica.notaMatematica() + media.redacao.notaRedacao())
    }

    const notamedia = somanotas() / 5

    exibir.innerText = notamedia


     
})
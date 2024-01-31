const btn = document.getElementById('BtnCalc');

btn.addEventListener('click', () => {
    const exibir = document.getElementById('resultadoNota');

    const media = {
        cHumanas: {
            nota: parseFloat(document.getElementById('CienciasHumanas').value),
            peso: parseInt(document.getElementById('PesoCienciasHumanas').value),
            notaHumanas: function () { return this.nota * this.peso; }
        },
        cNatureza: {
            nota: parseFloat(document.getElementById('CienciasDaNatureza').value),
            peso: parseInt(document.getElementById('PesoCienciasDaNatureza').value),
            notaNatureza: function () { return this.nota * this.peso; }
        },
        linguagens: {
            nota: parseFloat(document.getElementById('Linguagens').value),
            peso: parseInt(document.getElementById('PesoLinguagens').value),
            notaLinguagens: function () { return this.nota * this.peso; }
        },
        matematica: {
            nota: parseFloat(document.getElementById('Matematica').value),
            peso: parseInt(document.getElementById('PesoMatematica').value),
            notaMatematica: function () { return this.nota * this.peso; }
        },
        redacao: {
            nota: parseFloat(document.getElementById('Redacao').value),
            peso: parseInt(document.getElementById('PesoRedacao').value),
            notaRedacao: function () { return this.nota * this.peso; }
        }
    };

    function somanotas() {
        return (
            media.cHumanas.notaHumanas() +
            media.cNatureza.notaNatureza() +
            media.linguagens.notaLinguagens() +
            media.matematica.notaMatematica() +
            media.redacao.notaRedacao()
        );
    }

    const notamedia = somanotas() / (
        media.cHumanas.peso +
        media.cNatureza.peso +
        media.linguagens.peso +
        media.matematica.peso +
        media.redacao.peso
    );

    exibir.innerText = Math.round(notamedia);
});

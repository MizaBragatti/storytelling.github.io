function calcularIdade() {
    const nascimento = new Date(1988, 6, 7); // Julho é mês 6 (zero-based)
    const hoje = new Date();
    let anos = hoje.getFullYear() - nascimento.getFullYear();
    let meses = hoje.getMonth() - nascimento.getMonth();
    let dias = hoje.getDate() - nascimento.getDate();

    if (dias < 0) {
        meses--;
        const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return `Tenho ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}

document.getElementById('minha-idade').textContent = calcularIdade();

function calcularTempoCasado() {
    const dataCasamento = new Date(2016, 10, 26); // Mês começa em 0 (Janeiro)
    const hoje = new Date();
    let anos = hoje.getFullYear() - dataCasamento.getFullYear();
    let meses = hoje.getMonth() - dataCasamento.getMonth();
    let dias = hoje.getDate() - dataCasamento.getDate();

    if (dias < 0) {
        meses--;
        // Corrige os dias pegando o último dia do mês anterior
        const ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    return `Estou casado há ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
}

document.getElementById('tempo-casado').textContent = calcularTempoCasado();
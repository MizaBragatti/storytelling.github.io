function calcularIdade() {
    const nascimento = new Date(1988, 6, 7); // Julho é 6 (zero-based)
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

    return { anos, meses, dias };
}

function mostrarIdade() {
    const idade = calcularIdade();
    document.getElementById('minha-idade').textContent =
        `Tenho ${idade.anos} ano(s), ${idade.meses} mês(es) e ${idade.dias} dia(s).`;

    const faltamAnos = 120 - idade.anos - (idade.meses > 0 || idade.dias > 0 ? 1 : 0);
    document.getElementById('falta-idade').textContent =
        `Faltam aproximadamente ${faltamAnos < 0 ? 0 : faltamAnos} ano(s) para atingir 120 anos (limite humano).`;
}

mostrarIdade();

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

function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}
const STORAGE_KEYS = {
    estoque: 'meuEstoqueInventarioV10',
    historico: 'meuEstoqueHistoricoV10',
    tema: 'temaEstoqueV10',
    categoria: 'estoqueCategoriaAtualV10',
    catalogo: 'meuEstoqueCatalogoV10'
};

const CATEGORIAS = ['congelados', 'resfriados', 'secos', 'brindes', 'embalagens', 'limpeza', 'uniformes', 'consumo'];

const CATEGORIAS_LABEL = {
    congelados: '🧊 Congelados',
    resfriados: '🧃 Resfriados',
    secos: '🥫 Secos',
    brindes: '🎁 Brindes',
    embalagens: '📦 Embalagens',
    limpeza: '🧽 Limpeza',
    uniformes: '👕 Uniformes',
    consumo: '🛠️ Uso/Consumo'
};

const CATALOGO_PADRAO = [
    { nome: 'TORTILLA TRIGO 8 CX18X20UND', qtdCaixa: 18, medidaItem: 20, unidade: 'UN', pesoCaixaKg: 16.90, categoria: 'congelados', minPadrao: 180 },

    { nome: 'ACAI CREME ASSEPTICO CX 2X5KG', qtdCaixa: 2, medidaItem: 5, unidade: 'KG', pesoCaixaKg: 10.13, categoria: 'resfriados', minPadrao: 10 },
    { nome: 'BEB LACTEA BAUN - CX 20L', qtdCaixa: 1, medidaItem: 20, unidade: 'L', pesoCaixaKg: 23.00, categoria: 'resfriados', minPadrao: 20 },
    { nome: 'BEB LACTEA CHOC - CX 20L', qtdCaixa: 1, medidaItem: 20, unidade: 'L', pesoCaixaKg: 22.70, categoria: 'resfriados', minPadrao: 20 },
    { nome: 'BEB LACTEA ENRIQUECIDA - CX 20L', qtdCaixa: 1, medidaItem: 20, unidade: 'L', pesoCaixaKg: 22.45, categoria: 'resfriados', minPadrao: 20 },
    { nome: 'CASCAO CX C/ 120UN', qtdCaixa: 120, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.20, categoria: 'resfriados', minPadrao: 120 },
    { nome: 'CASQUINHA MARVI 300UN', qtdCaixa: 300, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.70, categoria: 'resfriados', minPadrao: 300 },

    { nome: 'ADOCANTE SACHE CX1000X0,6G', qtdCaixa: 1000, medidaItem: 0.6, unidade: 'G', pesoCaixaKg: 0.75, categoria: 'secos', minPadrao: 300 },
    { nome: 'AMENDOIM TORRADO GRANUL CX6 PT', qtdCaixa: 6, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 6.64, categoria: 'secos', minPadrao: 3 },
    { nome: 'CALDA DE CHOCOLATE CX6X2,5KG', qtdCaixa: 6, medidaItem: 2.5, unidade: 'KG', pesoCaixaKg: 15.38, categoria: 'secos', minPadrao: 7.5 },
    { nome: 'CALDA DE MORANGO 8X1,6KG', qtdCaixa: 8, medidaItem: 1.6, unidade: 'KG', pesoCaixaKg: 13.43, categoria: 'secos', minPadrao: 6.4 },
    { nome: 'CANUDO BIO MILKSHAKE CX1000UND', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.20, categoria: 'secos', minPadrao: 300 },
    { nome: 'CHANTILLY SPRAY 250G CX12UND', qtdCaixa: 12, medidaItem: 250, unidade: 'G', pesoCaixaKg: 4.15, categoria: 'secos', minPadrao: 1000 },
    { nome: 'GANACHE DE PISTACHE 1UN X 4KG', qtdCaixa: 1, medidaItem: 4, unidade: 'KG', pesoCaixaKg: 4.15, categoria: 'secos', minPadrao: 4 },
    { nome: 'LEITE EM PO INTEGRAL FD 25U', qtdCaixa: 25, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 10.60, categoria: 'secos', minPadrao: 10 },
    { nome: 'MOLHO BIG BOB CX12X200G', qtdCaixa: 12, medidaItem: 200, unidade: 'G', pesoCaixaKg: 2.80, categoria: 'secos', minPadrao: 1000 },
    { nome: 'NESCAFE MATINAL CX24X40G', qtdCaixa: 24, medidaItem: 40, unidade: 'G', pesoCaixaKg: 1.15, categoria: 'secos', minPadrao: 400 },
    { nome: 'OVOMALTINE 12UNX750G', qtdCaixa: 12, medidaItem: 750, unidade: 'G', pesoCaixaKg: 9.50, categoria: 'secos', minPadrao: 3000 },
    { nome: 'PACOQUITA DESEMBALADA 6X1,25KG', qtdCaixa: 6, medidaItem: 1.25, unidade: 'KG', pesoCaixaKg: 8.11, categoria: 'secos', minPadrao: 3.75 },
    { nome: 'RECHEIO CHOC AVELA CX5X2,05KG', qtdCaixa: 5, medidaItem: 2.05, unidade: 'KG', pesoCaixaKg: 10.25, categoria: 'secos', minPadrao: 4.10 },
    { nome: 'RECHEIO LEITINHO CX8X1,01KG', qtdCaixa: 8, medidaItem: 1.01, unidade: 'KG', pesoCaixaKg: 8.80, categoria: 'secos', minPadrao: 4.04 },
    { nome: 'SUCRILHOS ORIG CX20X110G', qtdCaixa: 20, medidaItem: 110, unidade: 'G', pesoCaixaKg: 2.46, categoria: 'secos', minPadrao: 1100 },
    { nome: 'TUBETES ROL. WAFER BAU CX 1KG', qtdCaixa: 1, medidaItem: 1, unidade: 'KG', pesoCaixaKg: 1.15, categoria: 'secos', minPadrao: 1 },

    { nome: 'BRINDE KIT COPO CX50UN', qtdCaixa: 50, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.61, categoria: 'brindes', minPadrao: 10 },
    { nome: 'BRINDE SKATE CX100UND', qtdCaixa: 100, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.76, categoria: 'brindes', minPadrao: 20 },
    { nome: 'PELUCIA HELLO KITTY CX150UNID', qtdCaixa: 150, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 5.30, categoria: 'brindes', minPadrao: 30 },
    { nome: 'SQUEEZE MINIONS AMAR. CX50UND', qtdCaixa: 50, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.65, categoria: 'brindes', minPadrao: 10 },
    { nome: 'SQUEEZE MINIONS AZUL CX50UND', qtdCaixa: 50, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.65, categoria: 'brindes', minPadrao: 10 },

    { nome: 'CANUDO DE PAPEL 8MM CX1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.10, categoria: 'embalagens', minPadrao: 300 },
    { nome: 'CANUDO PREMIUM CX3000UN BIO', qtdCaixa: 3000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.80, categoria: 'embalagens', minPadrao: 500 },
    { nome: 'COLHER PREMIUM CX1000UND', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.46, categoria: 'embalagens', minPadrao: 300 },
    { nome: 'COPO CHOPP 440ML CX1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 6.43, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'COPO DESC 300ML PTX100UND', qtdCaixa: 100, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.60, categoria: 'embalagens', minPadrao: 100 },
    { nome: 'COPO PAPEL 440ML CX900UND', qtdCaixa: 900, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 9.40, categoria: 'embalagens', minPadrao: 180 },
    { nome: 'COPO PAPEL BIO 330ML CX1500UND', qtdCaixa: 1500, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 10.18, categoria: 'embalagens', minPadrao: 300 },
    { nome: 'COPO PAPEL BIO 550ML CX1000UND', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 11.63, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'COPO PAPEL BIO 770ML CX750UND', qtdCaixa: 750, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 11.39, categoria: 'embalagens', minPadrao: 150 },
    { nome: 'COPO REFRESH 440ML CX1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 5.84, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'COPO SHAK 330ML 1000UN CRIS', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.80, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'COPO SHAK 550ML 1000UN CRIS', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 8.20, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'COPO SHAK 770ML 600UN CRIS', qtdCaixa: 600, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 7.50, categoria: 'embalagens', minPadrao: 120 },
    { nome: 'GUARDANAPO CASQ. 18X20 5000UND', qtdCaixa: 5000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.73, categoria: 'embalagens', minPadrao: 1000 },
    { nome: 'GUARDANAPO ENV. 30X14 CX4000UN', qtdCaixa: 4000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.29, categoria: 'embalagens', minPadrao: 800 },
    { nome: 'PAZINHA PEQ CX3000UND', qtdCaixa: 3000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.40, categoria: 'embalagens', minPadrao: 600 },
    { nome: 'POTE INST/OVOMALTINE CX1000UND', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 9.15, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'POTE SUNDAE 200ML CX1000UNID', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.80, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'SUPORTE COPOS PCT300 UNID', qtdCaixa: 300, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 9.38, categoria: 'embalagens', minPadrao: 60 },
    { nome: 'TAMPA BICO 180ML CX2000UND', qtdCaixa: 2000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.24, categoria: 'embalagens', minPadrao: 400 },
    { nome: 'TAMPA BOLHA T-300 CX1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.30, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'TAMPA BOLHA T-440/500 CX1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.00, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'TAMPA BOLHA T-700 CX600UN', qtdCaixa: 600, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.53, categoria: 'embalagens', minPadrao: 120 },
    { nome: 'TAMPA SUNDAE CX1000UND', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 3.30, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'TAMPA T-400 1000UN', qtdCaixa: 1000, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 2.10, categoria: 'embalagens', minPadrao: 200 },
    { nome: 'TAMPA TERM CP 500/700 CX450UN', qtdCaixa: 450, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.45, categoria: 'embalagens', minPadrao: 90 },
    { nome: 'TAMPA TERMICA COPO 300ML CX600', qtdCaixa: 600, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.54, categoria: 'embalagens', minPadrao: 120 },

    { nome: 'DETERGENTE CONC. SP 1UN X 5L', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.15, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'DOSADOR PUMP 15ML QSR', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.20, categoria: 'limpeza', minPadrao: 1 },
    { nome: 'GEL HIGIENIZADOR 1UNXBB5L', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.32, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'GEL HIGIENIZADOR 4UN X 500ML', qtdCaixa: 4, medidaItem: 500, unidade: 'ML', pesoCaixaKg: 2.30, categoria: 'limpeza', minPadrao: 1000 },
    { nome: 'KAY 5 SANITIZE 1UN', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.00, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'KAY QSR DESENGORDURANTE 1UN', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.33, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'LIMPADOR DE PISOS 1UN X 2L', qtdCaixa: 1, medidaItem: 2, unidade: 'L', pesoCaixaKg: 2.26, categoria: 'limpeza', minPadrao: 2 },
    { nome: 'SAB LIQ CLIENTES 1UNXBB5L', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.43, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'SABONETE LIQ ANTISSEPT 1UNX5L', qtdCaixa: 1, medidaItem: 5, unidade: 'L', pesoCaixaKg: 5.30, categoria: 'limpeza', minPadrao: 5 },
    { nome: 'LUVA LATEX AMARELA M (PAR)', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.04, categoria: 'limpeza', minPadrao: 5 },

    { nome: 'AVENTAL QUIOSQUE TAM. UNICO', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.35, categoria: 'uniformes', minPadrao: 1 },
    { nome: 'BONE CINZA 1UND', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.50, categoria: 'uniformes', minPadrao: 2 },
    { nome: 'CAMISETA ATENDENTE 1UN G', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.20, categoria: 'uniformes', minPadrao: 2 },
    { nome: 'CAMISETA ATENDENTE 1UN M', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.20, categoria: 'uniformes', minPadrao: 2 },
    { nome: 'CAMISETA ATENDENTE 1UN P', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.20, categoria: 'uniformes', minPadrao: 2 },

    { nome: 'BOB TERMICA 80X40 CX30UND', qtdCaixa: 30, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.20, categoria: 'consumo', minPadrao: 10 },
    { nome: 'FILME PVC 0,40X800X0,10-1UN', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 4.11, categoria: 'consumo', minPadrao: 1 },
    { nome: 'PAPEL TOALHA INTERF SOFTPAPER', qtdCaixa: 1, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 1.70, categoria: 'consumo', minPadrao: 1 },
    { nome: 'REDE PRETA P/ CABELO PCT C/100', qtdCaixa: 100, medidaItem: 1, unidade: 'UN', pesoCaixaKg: 0.27, categoria: 'consumo', minPadrao: 20 }
];

let catalogoProdutos = [];
let estoque = [];
let historico = [];
let categoriaAtual = 'todos';
let ordemAtual = { coluna: 'nome', direcao: 'asc' };
let produtoAtualIndex = null;
let editandoIndex = null;

function criarIdProduto(nome = '') {
    return String(nome)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function normalizarNumero(valor, fallback = 0) {
    const numero = Number(valor);
    return Number.isFinite(numero) && numero >= 0 ? numero : fallback;
}

function formatarNumero(valor) {
    const numero = normalizarNumero(valor);
    return numero.toLocaleString('pt-BR', {
        minimumFractionDigits: Number.isInteger(numero) ? 0 : 2,
        maximumFractionDigits: 2
    });
}

function formatarPesoKg(valor) {
    return `${formatarNumero(valor)} kg`;
}

function normalizarProdutoBase(produto = {}) {
    const nome = String(produto.nome || '').trim();

    return {
        id: String(produto.id || criarIdProduto(nome)),
        nome,
        qtdCaixa: normalizarNumero(produto.qtdCaixa, 1),
        medidaItem: normalizarNumero(produto.medidaItem, 1),
        unidade: String(produto.unidade || 'UN').trim().toUpperCase(),
        pesoCaixaKg: normalizarNumero(produto.pesoCaixaKg, 0),
        categoria: CATEGORIAS.includes(produto.categoria) ? produto.categoria : 'secos',
        minPadrao: normalizarNumero(produto.minPadrao, 0)
    };
}

function normalizarItemEstoque(item = {}) {
    const base = normalizarProdutoBase(item);

    return {
        ...base,
        min: normalizarNumero(item.min ?? item.minPadrao, 0),
        totalEstoque: normalizarNumero(item.totalEstoque, 0)
    };
}

function normalizarListaCatalogo(lista) {
    return Array.isArray(lista)
        ? lista.map(normalizarProdutoBase).filter(item => item.nome)
        : [];
}

function normalizarListaEstoque(lista) {
    return Array.isArray(lista)
        ? lista.map(normalizarItemEstoque).filter(item => item.nome)
        : [];
}

function salvarDados() {
    localStorage.setItem(STORAGE_KEYS.catalogo, JSON.stringify(catalogoProdutos));
    localStorage.setItem(STORAGE_KEYS.estoque, JSON.stringify(estoque));
    localStorage.setItem(STORAGE_KEYS.historico, JSON.stringify(historico));
    localStorage.setItem(STORAGE_KEYS.categoria, categoriaAtual);
}

function carregarDados() {
    try {
        const catalogoSalvo = localStorage.getItem(STORAGE_KEYS.catalogo);
        const estoqueSalvo = localStorage.getItem(STORAGE_KEYS.estoque);
        const historicoSalvo = localStorage.getItem(STORAGE_KEYS.historico);

        catalogoProdutos = catalogoSalvo
            ? normalizarListaCatalogo(JSON.parse(catalogoSalvo))
            : normalizarListaCatalogo(CATALOGO_PADRAO);

        estoque = estoqueSalvo
            ? normalizarListaEstoque(JSON.parse(estoqueSalvo))
            : [];

        historico = historicoSalvo
            ? JSON.parse(historicoSalvo)
            : [];

        categoriaAtual = localStorage.getItem(STORAGE_KEYS.categoria) || 'todos';

        if (!catalogoSalvo) {
            salvarDados();
        }
    } catch {
        catalogoProdutos = normalizarListaCatalogo(CATALOGO_PADRAO);
        estoque = [];
        historico = [];
        salvarDados();
        mostrarToast('Catálogo restaurado. Inventário iniciado vazio.', 'warning');
    }
}

function registrarHistorico(descricao) {
    historico.unshift({
        data: new Date().toLocaleString('pt-BR'),
        descricao: String(descricao)
    });

    historico = historico.slice(0, 300);
    salvarDados();
}

function mostrarToast(mensagem, tipo = 'info', duracao = 4000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    const icones = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };

    toast.textContent = `${icones[tipo] || 'ℹ️'} ${mensagem}`;
    toast.className = 'toast';
    toast.classList.add(tipo, 'show');

    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, duracao);
}

function obterStatusProduto(produto) {
    const total = normalizarNumero(produto.totalEstoque);
    const min = normalizarNumero(produto.min);

    if (total <= min) {
        return { texto: 'Crítico', classe: 'status-critico', peso: 0 };
    }

    if (total <= min * 1.3) {
        return { texto: 'Atenção', classe: 'status-atencao', peso: 1 };
    }

    return { texto: 'OK', classe: 'status-ok', peso: 2 };
}

function totalPorCaixa(produto) {
    return normalizarNumero(produto.qtdCaixa) * normalizarNumero(produto.medidaItem);
}

function calcularDecomposicao(produto) {
    const total = normalizarNumero(produto.totalEstoque);
    const totalCaixa = totalPorCaixa(produto);

    if (totalCaixa <= 0 || produto.medidaItem <= 0) {
        return { caixasCheias: 0, avulsos: 0 };
    }

    const caixasCheias = Math.floor(total / totalCaixa);
    const restante = total - (caixasCheias * totalCaixa);
    const avulsos = Math.round((restante / produto.medidaItem) * 100) / 100;

    return { caixasCheias, avulsos };
}

function calcularPesoAproximadoPorContagem(produto, caixas, avulsos) {
    const pesoCaixaKg = normalizarNumero(produto.pesoCaixaKg);
    const qtdCaixa = normalizarNumero(produto.qtdCaixa, 1);

    if (pesoCaixaKg <= 0 || qtdCaixa <= 0) {
        return 0;
    }

    const pesoUnitarioKg = pesoCaixaKg / qtdCaixa;
    return (normalizarNumero(caixas) * pesoCaixaKg) + (normalizarNumero(avulsos) * pesoUnitarioKg);
}

function calcularPesoAproximadoProduto(produto) {
    const decomposicao = calcularDecomposicao(produto);
    return calcularPesoAproximadoPorContagem(produto, decomposicao.caixasCheias, decomposicao.avulsos);
}

function calcularResultadoContagem(produto, caixas, avulsos) {
    const totalMedida = (normalizarNumero(caixas) * totalPorCaixa(produto)) + (normalizarNumero(avulsos) * normalizarNumero(produto.medidaItem));
    const unidadesFisicas = (normalizarNumero(caixas) * normalizarNumero(produto.qtdCaixa)) + normalizarNumero(avulsos);
    const pesoAproximadoKg = calcularPesoAproximadoPorContagem(produto, caixas, avulsos);

    return { totalMedida, unidadesFisicas, pesoAproximadoKg };
}

function alternarModal(id, aberto) {
    const modal = document.getElementById(id);
    if (!modal) return;

    modal.style.display = aberto ? 'flex' : 'none';
    modal.setAttribute('aria-hidden', aberto ? 'false' : 'true');
    document.body.style.overflow = aberto ? 'hidden' : '';
}

function atualizarTabsAtivas() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === categoriaAtual);
    });
}

function renderizarCatalogoSelect() {
    const select = document.getElementById('produto-base');
    if (!select) return;

    select.replaceChildren();

    const optionInicial = document.createElement('option');
    optionInicial.value = '';
    optionInicial.textContent = 'Selecione um produto do catálogo';
    select.appendChild(optionInicial);

    [...catalogoProdutos]
        .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'))
        .forEach(produto => {
            const option = document.createElement('option');
            option.value = produto.id;
            option.textContent = `${produto.nome} • ${CATEGORIAS_LABEL[produto.categoria]}`;
            select.appendChild(option);
        });

    atualizarPreviewProduto();
}

function atualizarPreviewProduto() {
    const select = document.getElementById('produto-base');
    const preview = document.getElementById('produto-preview');
    const inputMin = document.getElementById('min');

    if (!select || !preview || !inputMin) return;

    const produto = catalogoProdutos.find(item => item.id === select.value);

    if (!produto) {
        preview.innerHTML = '<strong>Catálogo base:</strong> selecione um produto para ver quantidade por caixa, unidade e peso.';
        inputMin.value = '';
        return;
    }

    inputMin.value = produto.minPadrao > 0 ? produto.minPadrao : '';

    preview.innerHTML = `
        <strong>${produto.nome}</strong>
        <br>Categoria: ${CATEGORIAS_LABEL[produto.categoria]}
        <br>Qtd. por caixa: ${formatarNumero(produto.qtdCaixa)}
        <br>Medida por item: ${formatarNumero(produto.medidaItem)} ${produto.unidade}
        <br>Total por caixa: ${formatarNumero(totalPorCaixa(produto))} ${produto.unidade}
        <br>Peso por caixa: ${formatarPesoKg(produto.pesoCaixaKg)}
    `;
}

function renderizarCategorias() {
    const container = document.getElementById('category-summary');
    if (!container) return;

    container.replaceChildren();

    CATEGORIAS.forEach(categoria => {
        const itens = estoque.filter(item => item.categoria === categoria);
        const criticos = itens.filter(item => normalizarNumero(item.totalEstoque) <= normalizarNumero(item.min)).length;
        const pesoTotal = itens.reduce((acc, item) => acc + calcularPesoAproximadoProduto(item), 0);

        const card = document.createElement('article');
        card.className = 'cat-card';

        const nome = document.createElement('div');
        nome.className = 'cat-name';
        nome.textContent = CATEGORIAS_LABEL[categoria];

        const total = document.createElement('div');
        total.className = 'cat-total';
        total.textContent = `${itens.length} item(ns)`;

        const status = document.createElement('div');
        status.className = 'cat-status';
        status.textContent = `${criticos} crítico(s) · ${formatarPesoKg(pesoTotal)}`;

        card.append(nome, total, status);
        container.appendChild(card);
    });
}

function criarBotaoAcao(texto, classes, titulo, onClick) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = classes;
    btn.textContent = texto;
    btn.setAttribute('aria-label', titulo);
    btn.addEventListener('click', onClick);
    return btn;
}

function renderizarTabela() {
    const tbody = document.getElementById('lista-estoque');
    const busca = (document.getElementById('input-busca')?.value || '').toLowerCase().trim();
    if (!tbody) return;

    tbody.replaceChildren();

    const totalItens = estoque.length;
    const itensBaixo = estoque.filter(item => normalizarNumero(item.totalEstoque) <= normalizarNumero(item.min)).length;

    let produtosFiltrados = estoque.filter(produto => {
        const categoriaOk = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        const buscaOk = produto.nome.toLowerCase().includes(busca);
        return categoriaOk && buscaOk;
    });

    if (ordemAtual.coluna) {
        produtosFiltrados = [...produtosFiltrados].sort((a, b) => {
            let valorA;
            let valorB;

            if (ordemAtual.coluna === 'nome') {
                valorA = a.nome.toLowerCase();
                valorB = b.nome.toLowerCase();
            } else if (ordemAtual.coluna === 'estoque') {
                valorA = normalizarNumero(a.totalEstoque);
                valorB = normalizarNumero(b.totalEstoque);
            } else {
                valorA = obterStatusProduto(a).peso;
                valorB = obterStatusProduto(b).peso;
            }

            if (valorA < valorB) return ordemAtual.direcao === 'asc' ? -1 : 1;
            if (valorA > valorB) return ordemAtual.direcao === 'asc' ? 1 : -1;
            return 0;
        });
    }

    if (produtosFiltrados.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 7;
        td.style.textAlign = 'center';
        td.style.color = 'var(--text-muted)';
        td.style.padding = '2rem';
        td.textContent = 'Inventário vazio. Adicione produtos pelo catálogo.';
        tr.appendChild(td);
        tbody.appendChild(tr);
    }

    produtosFiltrados.forEach(produto => {
        const indexReal = estoque.indexOf(produto);
        const status = obterStatusProduto(produto);
        const decomposicao = calcularDecomposicao(produto);
        const total = normalizarNumero(produto.totalEstoque);
        const pesoAprox = calcularPesoAproximadoProduto(produto);

        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        const nomeStrong = document.createElement('strong');
        nomeStrong.textContent = produto.nome;
        const meta = document.createElement('div');
        meta.className = 'table-meta';
        meta.textContent = CATEGORIAS_LABEL[produto.categoria];
        tdNome.append(nomeStrong, meta);

        const tdEmbalagem = document.createElement('td');
        tdEmbalagem.textContent = `${formatarNumero(produto.qtdCaixa)} por caixa • ${formatarNumero(produto.medidaItem)} ${produto.unidade} por item`;

        const tdContagem = document.createElement('td');
        tdContagem.textContent = `${formatarNumero(decomposicao.caixasCheias)} cx + ${formatarNumero(decomposicao.avulsos)} un`;

        const tdEstoque = document.createElement('td');
        tdEstoque.innerHTML = `<strong>${formatarNumero(total)} ${produto.unidade}</strong>`;

        const tdPeso = document.createElement('td');
        tdPeso.textContent = formatarPesoKg(pesoAprox);

        const tdStatus = document.createElement('td');
        const badge = document.createElement('span');
        badge.className = `status-badge ${status.classe}`;
        badge.textContent = status.texto;
        tdStatus.appendChild(badge);

        const tdAcoes = document.createElement('td');
        tdAcoes.className = 'text-right';
        tdAcoes.append(
            criarBotaoAcao('⏱️', 'btn-acao btn-contar', `Contar ${produto.nome}`, () => abrirModal(indexReal)),
            criarBotaoAcao('⚙️', 'btn-acao', `Editar ${produto.nome}`, () => abrirModalEdicao(indexReal)),
            criarBotaoAcao('🗑️', 'btn-acao btn-remover', `Remover ${produto.nome}`, () => removerProduto(indexReal))
        );

        tr.append(tdNome, tdEmbalagem, tdContagem, tdEstoque, tdPeso, tdStatus, tdAcoes);
        tbody.appendChild(tr);
    });

    document.getElementById('stat-total').textContent = String(totalItens);
    document.getElementById('stat-baixo').textContent = String(itensBaixo);
    document.getElementById('stat-catalogo').textContent = String(catalogoProdutos.length);
    document.getElementById('table-count').textContent = `Mostrando ${produtosFiltrados.length} produto(s)`;

    renderizarCategorias();
    atualizarTabsAtivas();
}

function renderizarHistorico() {
    const tbody = document.getElementById('lista-historico');
    if (!tbody) return;

    tbody.replaceChildren();

    if (historico.length === 0) {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.colSpan = 2;
        td.style.textAlign = 'center';
        td.style.color = 'var(--text-muted)';
        td.style.padding = '2rem';
        td.textContent = 'Nenhuma alteração registrada.';
        tr.appendChild(td);
        tbody.appendChild(tr);
        return;
    }

    historico.forEach(item => {
        const tr = document.createElement('tr');

        const tdData = document.createElement('td');
        tdData.style.whiteSpace = 'nowrap';
        tdData.style.color = 'var(--text-muted)';
        tdData.textContent = item.data || '-';

        const tdDescricao = document.createElement('td');
        tdDescricao.textContent = item.descricao || '-';

        tr.append(tdData, tdDescricao);
        tbody.appendChild(tr);
    });
}

function verificarCriticos() {
    const criticos = estoque.filter(item => normalizarNumero(item.totalEstoque) <= normalizarNumero(item.min));
    if (!criticos.length) return;

    const nomes = criticos.slice(0, 4).map(item => item.nome).join(', ');
    const sufixo = criticos.length > 4 ? '...' : '';
    mostrarToast(`${criticos.length} item(ns) crítico(s): ${nomes}${sufixo}`, 'warning', 6000);
}

function filtrarCategoria(categoria) {
    categoriaAtual = categoria;
    salvarDados();
    renderizarTabela();
}

function alterarOrdem(coluna) {
    if (ordemAtual.coluna === coluna) {
        ordemAtual.direcao = ordemAtual.direcao === 'asc' ? 'desc' : 'asc';
    } else {
        ordemAtual.coluna = coluna;
        ordemAtual.direcao = 'asc';
    }

    renderizarTabela();
}

function toggleFormCadastro() {
    const formBody = document.getElementById('form-body');
    const btn = document.getElementById('btn-toggle-form');
    const icon = btn.querySelector('.form-toggle-icon');
    const label = btn.querySelector('.form-toggle-label');

    const aberto = formBody.classList.toggle('collapsed') === false;

    btn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    if (icon) icon.textContent = aberto ? '▼' : '▶';
    if (label) label.textContent = aberto ? 'Ocultar formulário' : 'Mostrar formulário';
}

function abrirModal(index) {
    produtoAtualIndex = index;
    const produto = estoque[index];
    if (!produto) return;

    const totalCaixa = totalPorCaixa(produto);
    const decomposicao = calcularDecomposicao(produto);

    document.getElementById('modal-titulo').textContent = `Contar: ${produto.nome}`;
    document.getElementById('modal-pacote-info').textContent =
        `1 caixa = ${formatarNumero(produto.qtdCaixa)} item(ns) = ${formatarNumero(totalCaixa)} ${produto.unidade}`;
    document.getElementById('modal-unidade-texto').textContent =
        `Cada unidade avulsa vale ${formatarNumero(produto.medidaItem)} ${produto.unidade}. Peso por caixa: ${formatarPesoKg(produto.pesoCaixaKg)}.`;
    document.getElementById('modal-un-final').textContent = produto.unidade;

    document.getElementById('qtd-pacotes').value = decomposicao.caixasCheias || '';
    document.getElementById('qtd-soltas').value = decomposicao.avulsos || '';
    document.getElementById('equivalencia-info').textContent = '';
    document.getElementById('modal-decomposicao').textContent = '';

    calcularModal();
    alternarModal('modal-contagem', true);
    setTimeout(() => document.getElementById('qtd-pacotes').focus(), 80);
}

function fecharModal() {
    alternarModal('modal-contagem', false);
    produtoAtualIndex = null;
}

function calcularModal() {
    if (produtoAtualIndex === null) return;

    const produto = estoque[produtoAtualIndex];
    const caixas = normalizarNumero(document.getElementById('qtd-pacotes').value);
    const avulsos = normalizarNumero(document.getElementById('qtd-soltas').value);
    const resultado = calcularResultadoContagem(produto, caixas, avulsos);

    document.getElementById('modal-total-calc').textContent = formatarNumero(resultado.totalMedida);
    document.getElementById('equivalencia-info').textContent =
        `Contagem física: ${formatarNumero(caixas)} caixa(s) + ${formatarNumero(avulsos)} unidade(s) avulsa(s) = ${formatarNumero(resultado.unidadesFisicas)} unidade(s).`;
    document.getElementById('modal-decomposicao').textContent =
        `Resultado: ${formatarNumero(resultado.totalMedida)} ${produto.unidade} • peso aproximado: ${formatarPesoKg(resultado.pesoAproximadoKg)}.`;
}

function salvarContagem() {
    if (produtoAtualIndex === null) return;

    const produto = estoque[produtoAtualIndex];
    const caixas = normalizarNumero(document.getElementById('qtd-pacotes').value);
    const avulsos = normalizarNumero(document.getElementById('qtd-soltas').value);
    const resultado = calcularResultadoContagem(produto, caixas, avulsos);

    produto.totalEstoque = resultado.totalMedida;

    registrarHistorico(
        `Contagem de ${produto.nome}: ${formatarNumero(caixas)} cx + ${formatarNumero(avulsos)} un = ${formatarNumero(resultado.totalMedida)} ${produto.unidade}`
    );

    salvarDados();
    renderizarTabela();
    renderizarHistorico();
    fecharModal();
    mostrarToast(`"${produto.nome}" atualizado.`, 'success');
}

function abrirModalEdicao(index) {
    editandoIndex = index;
    const produto = estoque[index];
    if (!produto) return;

    document.getElementById('edit-nome').value = produto.nome;
    document.getElementById('edit-embalagem').value = `${formatarNumero(produto.qtdCaixa)} por caixa • ${formatarNumero(produto.medidaItem)} ${produto.unidade}`;
    document.getElementById('edit-peso-caixa').value = formatarPesoKg(produto.pesoCaixaKg);
    document.getElementById('edit-min').value = produto.min;

    alternarModal('modal-edicao', true);
    setTimeout(() => document.getElementById('edit-min').focus(), 80);
}

function fecharModalEdicao() {
    alternarModal('modal-edicao', false);
    editandoIndex = null;
}

function removerProduto(index) {
    const produto = estoque[index];
    if (!produto) return;

    if (!window.confirm(`Remover "${produto.nome}" do inventário?`)) return;

    estoque.splice(index, 1);
    registrarHistorico(`Removeu do inventário: ${produto.nome}`);
    salvarDados();
    renderizarTabela();
    renderizarHistorico();
    mostrarToast(`"${produto.nome}" removido.`, 'success');
}

function exportarDados() {
    const dados = {
        versao: 10,
        exportadoEm: new Date().toISOString(),
        catalogo: catalogoProdutos,
        estoque,
        historico
    };

    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const dataArquivo = new Date().toLocaleDateString('pt-BR').replaceAll('/', '-');

    link.href = url;
    link.download = `estoque-backup-${dataArquivo}.json`;
    link.click();

    URL.revokeObjectURL(url);
    mostrarToast('Backup exportado.', 'success');
}

function importarDados(event) {
    const arquivo = event.target.files?.[0];
    if (!arquivo) return;

    const reader = new FileReader();
    reader.onload = e => {
        try {
            const dados = JSON.parse(e.target.result);

            if (!dados || !Array.isArray(dados.catalogo) || !Array.isArray(dados.estoque)) {
                mostrarToast('Arquivo inválido.', 'error');
                return;
            }

            if (!window.confirm('Substituir catálogo, inventário e histórico pelos dados importados?')) {
                return;
            }

            catalogoProdutos = normalizarListaCatalogo(dados.catalogo);
            estoque = normalizarListaEstoque(dados.estoque);
            historico = Array.isArray(dados.historico) ? dados.historico : [];

            salvarDados();
            renderizarCatalogoSelect();
            renderizarTabela();
            renderizarHistorico();
            verificarCriticos();
            mostrarToast('Importação concluída.', 'success');
        } catch (error) {
            mostrarToast(`Erro ao importar: ${error.message}`, 'error');
        } finally {
            event.target.value = '';
        }
    };

    reader.readAsText(arquivo);
}

function limparHistorico() {
    if (!historico.length) {
        mostrarToast('Histórico já está vazio.', 'info');
        return;
    }

    if (!window.confirm('Limpar todo o histórico?')) return;

    historico = [];
    salvarDados();
    renderizarHistorico();
    mostrarToast('Histórico limpo.', 'success');
}

function navegarPara(secaoId, botao) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    botao.classList.add('active');

    const secao = document.getElementById(secaoId);
    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    document.getElementById('sidebar')?.classList.remove('open');
}

function alternarTema() {
    const atual = document.documentElement.getAttribute('data-theme') || 'light';
    const novo = atual === 'dark' ? 'light' : 'dark';
    const icon = document.querySelector('#btn-theme-toggle .icon');

    document.documentElement.setAttribute('data-theme', novo);
    localStorage.setItem(STORAGE_KEYS.tema, novo);

    if (icon) {
        icon.textContent = novo === 'dark' ? '☀️' : '🌙';
    }
}

function bindEventos() {
    document.getElementById('btn-theme-toggle')?.addEventListener('click', alternarTema);
    document.getElementById('btn-export')?.addEventListener('click', exportarDados);
    document.getElementById('btn-import')?.addEventListener('click', () => {
        document.getElementById('import-file')?.click();
    });

    document.getElementById('import-file')?.addEventListener('change', importarDados);
    document.getElementById('btn-limpar-historico')?.addEventListener('click', limparHistorico);

    document.getElementById('btn-open-sidebar')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.add('open');
    });

    document.getElementById('btn-close-sidebar')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('open');
    });

    document.getElementById('btn-toggle-form')?.addEventListener('click', toggleFormCadastro);

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => navegarPara(btn.dataset.target, btn));
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => filtrarCategoria(btn.dataset.category));
    });

    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => alterarOrdem(th.dataset.sort));
    });

    document.getElementById('input-busca')?.addEventListener('input', renderizarTabela);
    document.getElementById('produto-base')?.addEventListener('change', atualizarPreviewProduto);

    document.getElementById('qtd-pacotes')?.addEventListener('input', calcularModal);
    document.getElementById('qtd-soltas')?.addEventListener('input', calcularModal);

    document.getElementById('btn-fechar-modal')?.addEventListener('click', fecharModal);
    document.getElementById('btn-cancelar-contagem')?.addEventListener('click', fecharModal);
    document.getElementById('btn-salvar-contagem')?.addEventListener('click', salvarContagem);

    document.getElementById('btn-fechar-edicao')?.addEventListener('click', fecharModalEdicao);
    document.getElementById('btn-cancelar-edicao')?.addEventListener('click', fecharModalEdicao);

    document.getElementById('form-estoque')?.addEventListener('submit', e => {
        e.preventDefault();

        const produtoId = document.getElementById('produto-base').value;
        const min = parseFloat(document.getElementById('min').value);
        const produtoBase = catalogoProdutos.find(item => item.id === produtoId);

        if (!produtoBase) {
            mostrarToast('Selecione um produto do catálogo.', 'error');
            return;
        }

        if (estoque.some(item => item.id === produtoBase.id)) {
            mostrarToast('Esse produto já está no inventário.', 'error');
            return;
        }

        const itemInventario = normalizarItemEstoque({
            ...produtoBase,
            min: min >= 0 ? min : produtoBase.minPadrao,
            totalEstoque: 0
        });

        estoque.unshift(itemInventario);
        registrarHistorico(`Adicionou ao inventário: ${produtoBase.nome}`);
        salvarDados();
        renderizarTabela();
        renderizarHistorico();
        mostrarToast(`"${produtoBase.nome}" adicionado.`, 'success');
    });

    document.getElementById('form-edicao')?.addEventListener('submit', e => {
        e.preventDefault();

        if (editandoIndex === null) return;

        const min = parseFloat(document.getElementById('edit-min').value);

        if (min < 0 || Number.isNaN(min)) {
            mostrarToast('Informe um estoque mínimo válido.', 'error');
            return;
        }

        const produto = estoque[editandoIndex];
        produto.min = min;

        registrarHistorico(`Alterou estoque mínimo de ${produto.nome} para ${formatarNumero(min)} ${produto.unidade}`);
        salvarDados();
        renderizarTabela();
        renderizarHistorico();
        fecharModalEdicao();
        mostrarToast('Estoque mínimo atualizado.', 'success');
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target !== modal) return;
            if (modal.id === 'modal-contagem') fecharModal();
            if (modal.id === 'modal-edicao') fecharModalEdicao();
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            fecharModal();
            fecharModalEdicao();
            document.getElementById('sidebar')?.classList.remove('open');
        }
    });
}

function aplicarTemaInicial() {
    const temaSalvo = localStorage.getItem(STORAGE_KEYS.tema) || 'light';
    const icon = document.querySelector('#btn-theme-toggle .icon');

    document.documentElement.setAttribute('data-theme', temaSalvo);
    if (icon) {
        icon.textContent = temaSalvo === 'dark' ? '☀️' : '🌙';
    }
}

function init() {
    aplicarTemaInicial();
    carregarDados();
    renderizarCatalogoSelect();
    bindEventos();
    renderizarTabela();
    renderizarHistorico();
    verificarCriticos();
}

document.addEventListener('DOMContentLoaded', init);
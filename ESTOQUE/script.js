const STORAGE_KEYS = {
    estoque: 'meuEstoqueInventarioV10',
    historico: 'meuEstoqueHistoricoV10',
    tema: 'temaEstoqueV10',
    categoria: 'estoqueCategoriaAtualV10',
    secao: 'estoqueSecaoAtivaV10',
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
let secaoAtiva = 'sec-dashboard';

function classeStatusParaFiltro(classeStatus = '') {
    if (classeStatus.includes('critico')) return 'critico';
    if (classeStatus.includes('atencao')) return 'atencao';
    return 'ok';
}

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
    localStorage.setItem(STORAGE_KEYS.secao, secaoAtiva);
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

        // Mantem abertura consistente no painel principal em qualquer dispositivo.
        categoriaAtual = 'todos';
        secaoAtiva = 'sec-dashboard';

        localStorage.setItem(STORAGE_KEYS.categoria, categoriaAtual);
        localStorage.setItem(STORAGE_KEYS.secao, secaoAtiva);

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

function calcularReposicaoProduto(produto) {
    const total = normalizarNumero(produto.totalEstoque);
    const min = normalizarNumero(produto.min);
    const reposicao = Math.max(0, min - total);

    return {
        total,
        min,
        reposicao,
        precisaReposicao: reposicao > 0
    };
}

function obterItensCompraSugerida() {
    return estoque
        .map(produto => ({
            ...produto,
            ...calcularReposicaoProduto(produto)
        }))
        .filter(item => item.precisaReposicao)
        .sort((a, b) => {
            const prioridadeA = obterStatusProduto(a).peso;
            const prioridadeB = obterStatusProduto(b).peso;

            if (prioridadeA !== prioridadeB) {
                return prioridadeA - prioridadeB;
            }

            if (b.reposicao !== a.reposicao) {
                return b.reposicao - a.reposicao;
            }

            return a.nome.localeCompare(b.nome, 'pt-BR');
        });
}

function escapaCsv(valor) {
    return `"${String(valor ?? '').replaceAll('"', '""')}"`;
}

function baixarArquivo(conteudo, nomeArquivo, tipoMime) {
    const blob = new Blob([conteudo], { type: tipoMime });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');

    link.href = url;
    link.download = nomeArquivo;
    link.click();

    URL.revokeObjectURL(url);
}

function atualizarSecaoAtiva(secaoId) {
    const secoes = document.querySelectorAll('.app-section');
    const botaoAtivo = document.querySelector(`.nav-item[data-target="${secaoId}"]`);

    secaoAtiva = secaoId;

    secoes.forEach(secao => {
        secao.classList.toggle('active', secao.id === secaoId);
    });

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item === botaoAtivo);
    });

    localStorage.setItem(STORAGE_KEYS.secao, secaoAtiva);
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

function atualizarResumoOperacional() {
    const pesoTotal = estoque.reduce((acc, item) => acc + calcularPesoAproximadoProduto(item), 0);
    const categoriasAtivas = new Set(estoque.map(item => item.categoria)).size;
    const ultimaAtualizacao = historico[0]?.data || 'Sem registros';

    const pesoEl = document.getElementById('stat-peso-total');
    const categoriasEl = document.getElementById('stat-categorias-ativas');
    const ultimaEl = document.getElementById('stat-ultima-atualizacao');

    if (pesoEl) pesoEl.textContent = formatarPesoKg(pesoTotal);
    if (categoriasEl) categoriasEl.textContent = String(categoriasAtivas);
    if (ultimaEl) ultimaEl.textContent = ultimaAtualizacao;
}

function renderizarGraficoOperacional() {
    const container = document.getElementById('operational-chart-wrap');
    if (!container) return;

    const dias = [];
    const hoje = new Date();
    for (let i = 6; i >= 0; i--) {
        const data = new Date(hoje);
        data.setDate(data.getDate() - i);
        dias.push(data);
    }

    const chaveDia = data => `${data.getFullYear()}-${data.getMonth()}-${data.getDate()}`;
    const serieSaidas = new Map(dias.map(data => [chaveDia(data), 0]));
    const serieReposicao = new Map(dias.map(data => [chaveDia(data), 0]));

    historico.forEach(item => {
        const match = String(item.data || '').match(/(\d{2})\/(\d{2})\/(\d{4})/);
        if (!match) return;

        const [, diaStr, mesStr, anoStr] = match;
        const chave = `${Number(anoStr)}-${Number(mesStr) - 1}-${Number(diaStr)}`;
        // aproximação: remoções contam como saída, demais ações como reabastecimento
        if (item.descricao?.startsWith('Removeu')) {
            if (serieSaidas.has(chave)) serieSaidas.set(chave, serieSaidas.get(chave) + 1);
        } else if (serieReposicao.has(chave)) {
            serieReposicao.set(chave, serieReposicao.get(chave) + 1);
        }
    });

    const eixoMax = 10;
    const largura = 100;
    const altura = 34;
    const passo = largura / (dias.length - 1);

    const pontosParaPath = serie => dias.map((data, i) => {
        const valor = Math.min(serie.get(chaveDia(data)) ?? 0, eixoMax);
        const x = i * passo;
        const y = altura - (valor / eixoMax) * altura;
        return `${x},${y}`;
    });

    const pathReposicao = pontosParaPath(serieReposicao);
    const pathSaidas = pontosParaPath(serieSaidas);
    const labels = dias.map(data => data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }));

    container.innerHTML = `
        <svg viewBox="0 -2 ${largura} ${altura + 14}" preserveAspectRatio="none" class="operational-chart-svg" role="img" aria-label="Vendas vs reabastecimento nos últimos 7 dias">
            <line x1="0" y1="${altura}" x2="${largura}" y2="${altura}" class="chart-axis" />
            <line x1="0" y1="${altura / 2}" x2="${largura}" y2="${altura / 2}" class="chart-axis chart-axis-mid" />
            <polyline points="${pathReposicao.join(' ')}" class="chart-line chart-line-primary" />
            <polyline points="${pathSaidas.join(' ')}" class="chart-line chart-line-secondary" />
        </svg>
        <div class="operational-chart-labels">${labels.map(rotulo => `<span>${rotulo}</span>`).join('')}</div>
        <div class="operational-chart-legend">
            <span class="legend-dot legend-primary"></span> Reabastecimento
            <span class="legend-dot legend-secondary"></span> Vendas
        </div>
    `;
}

function renderizarGraficosDashboard() {
    const donut = document.getElementById('status-donut');
    const legenda = document.getElementById('status-legend');
    const barras = document.getElementById('category-bars');

    if (!donut || !legenda || !barras) return;

    const contagemStatus = { ok: 0, atencao: 0, critico: 0 };
    estoque.forEach(produto => {
        const tipoStatus = classeStatusParaFiltro(obterStatusProduto(produto).classe);
        contagemStatus[tipoStatus] += 1;
    });

    const totalItens = estoque.length;
    const divisor = totalItens > 0 ? totalItens : 1;

    const porcentagemOk = (contagemStatus.ok / divisor) * 100;
    const porcentagemAtencao = (contagemStatus.atencao / divisor) * 100;
    const porcentagemCritico = (contagemStatus.critico / divisor) * 100;

    donut.style.setProperty('--ok', porcentagemOk.toFixed(2));
    donut.style.setProperty('--atencao', porcentagemAtencao.toFixed(2));
    donut.style.setProperty('--critico', porcentagemCritico.toFixed(2));
    donut.setAttribute('data-total', String(totalItens));

    legenda.replaceChildren();
    [
        { chave: 'ok', label: 'OK' },
        { chave: 'atencao', label: 'Atenção' },
        { chave: 'critico', label: 'Crítico' }
    ].forEach(item => {
        const linha = document.createElement('div');
        linha.className = 'legend-item';

        const esquerda = document.createElement('div');
        esquerda.className = 'legend-left';

        const dot = document.createElement('span');
        dot.className = `legend-dot ${item.chave}`;

        const texto = document.createElement('span');
        texto.textContent = item.label;

        esquerda.append(dot, texto);

        const valor = document.createElement('span');
        valor.className = 'legend-value';
        valor.textContent = `${contagemStatus[item.chave]} item(ns)`;

        linha.append(esquerda, valor);
        legenda.appendChild(linha);
    });

    barras.replaceChildren();
    const totaisCategoria = CATEGORIAS.map(categoria => ({
        categoria,
        total: estoque.filter(item => item.categoria === categoria).length
    }));

    const maiorTotal = totaisCategoria.reduce((max, item) => Math.max(max, item.total), 1);

    totaisCategoria.forEach(item => {
        const linha = document.createElement('div');
        linha.className = 'category-bar-row';

        const label = document.createElement('span');
        label.className = 'category-bar-label';
        label.textContent = CATEGORIAS_LABEL[item.categoria];

        const trilho = document.createElement('div');
        trilho.className = 'category-bar-track';

        const barra = document.createElement('div');
        barra.className = 'category-bar-fill';
        barra.style.width = `${(item.total / maiorTotal) * 100}%`;
        trilho.appendChild(barra);

        const valor = document.createElement('span');
        valor.className = 'category-bar-value';
        valor.textContent = `${item.total} item(ns)`;

        linha.append(label, trilho, valor);
        barras.appendChild(linha);
    });
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

    const temItens = estoque.length > 0;

    if (!temItens) {
        const vazio = document.createElement('div');
        vazio.className = 'empty-state-panel';
        vazio.textContent = 'Sem itens no inventário ainda. Adicione produtos para ver o resumo por categoria.';
        container.appendChild(vazio);
        return;
    }

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
    const filtroStatus = document.getElementById('filtro-status')?.value || 'todos';
    const valorFiltroMin = String(document.getElementById('filtro-estoque-min')?.value || '').trim();
    const valorFiltroMax = String(document.getElementById('filtro-estoque-max')?.value || '').trim();
    const filtroEstoqueMin = valorFiltroMin === '' ? NaN : normalizarNumero(valorFiltroMin, NaN);
    const filtroEstoqueMax = valorFiltroMax === '' ? NaN : normalizarNumero(valorFiltroMax, NaN);
    if (!tbody) return;

    tbody.replaceChildren();

    const totalItens = estoque.length;
    const itensBaixo = estoque.filter(item => normalizarNumero(item.totalEstoque) <= normalizarNumero(item.min)).length;

    let produtosFiltrados = estoque.filter(produto => {
        const categoriaOk = categoriaAtual === 'todos' || produto.categoria === categoriaAtual;
        const buscaOk = produto.nome.toLowerCase().includes(busca);
        const statusProduto = classeStatusParaFiltro(obterStatusProduto(produto).classe);
        const statusOk = filtroStatus === 'todos' || filtroStatus === statusProduto;
        const totalAtual = normalizarNumero(produto.totalEstoque);
        const faixaMinOk = Number.isNaN(filtroEstoqueMin) || totalAtual >= filtroEstoqueMin;
        const faixaMaxOk = Number.isNaN(filtroEstoqueMax) || totalAtual <= filtroEstoqueMax;
        return categoriaOk && buscaOk && statusOk && faixaMinOk && faixaMaxOk;
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
        tdNome.setAttribute('data-label', 'Produto');
        const nomeStrong = document.createElement('strong');
        nomeStrong.textContent = produto.nome;
        const meta = document.createElement('div');
        meta.className = 'table-meta';
        meta.textContent = CATEGORIAS_LABEL[produto.categoria];
        tdNome.append(nomeStrong, meta);

        const tdEmbalagem = document.createElement('td');
        tdEmbalagem.setAttribute('data-label', 'Embalagem');
        tdEmbalagem.textContent = `${formatarNumero(produto.qtdCaixa)} por caixa • ${formatarNumero(produto.medidaItem)} ${produto.unidade} por item`;

        const tdContagem = document.createElement('td');
        tdContagem.setAttribute('data-label', 'Contagem');
        tdContagem.textContent = `${formatarNumero(decomposicao.caixasCheias)} cx + ${formatarNumero(decomposicao.avulsos)} un`;

        const tdEstoque = document.createElement('td');
        tdEstoque.setAttribute('data-label', 'Total calculado');
        tdEstoque.innerHTML = `<strong>${formatarNumero(total)} ${produto.unidade}</strong>`;

        const tdPeso = document.createElement('td');
        tdPeso.setAttribute('data-label', 'Peso aprox.');
        tdPeso.textContent = formatarPesoKg(pesoAprox);

        const tdStatus = document.createElement('td');
        tdStatus.setAttribute('data-label', 'Status');
        const badge = document.createElement('span');
        badge.className = `status-badge ${status.classe}`;
        badge.textContent = status.texto;
        tdStatus.appendChild(badge);

        const tdAcoes = document.createElement('td');
        tdAcoes.setAttribute('data-label', 'Ações');
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
    const statCompras = document.getElementById('stat-compras');
    if (statCompras) statCompras.textContent = String(obterItensCompraSugerida().length);
    document.getElementById('stat-catalogo').textContent = String(catalogoProdutos.length);
    document.getElementById('table-count').textContent = `Mostrando ${produtosFiltrados.length} produto(s)`;

    const notifDot = document.getElementById('notification-dot');
    if (notifDot) notifDot.hidden = itensBaixo === 0;

    renderizarCategorias();
    renderizarGraficosDashboard();
    renderizarComprasSugeridas();
    renderizarAtividadeRecente();
    atualizarResumoOperacional();
    renderizarGraficoOperacional();
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

function renderizarComprasSugeridas() {
    const lista = obterItensCompraSugerida();
    const tbody = document.getElementById('lista-compras');
    const preview = document.getElementById('dashboard-purchases-preview');
    const totalProdutos = document.getElementById('stat-repor');
    const totalQuantidade = document.getElementById('stat-quantidade-repor');
    const totalCategorias = document.getElementById('stat-categorias-repor');

    const totalReposicao = lista.reduce((acc, item) => acc + item.reposicao, 0);
    const categoriasAfetadas = new Set(lista.map(item => item.categoria)).size;

    if (totalProdutos) totalProdutos.textContent = String(lista.length);
    if (totalQuantidade) totalQuantidade.textContent = formatarNumero(totalReposicao);
    if (totalCategorias) totalCategorias.textContent = String(categoriasAfetadas);

    if (tbody) {
        tbody.replaceChildren();

        if (!lista.length) {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.colSpan = 7;
            td.style.textAlign = 'center';
            td.style.color = 'var(--text-muted)';
            td.style.padding = '2rem';
            td.textContent = 'Nenhuma compra sugerida no momento.';
            tr.appendChild(td);
            tbody.appendChild(tr);
        } else {
            lista.forEach(produto => {
                const tr = document.createElement('tr');
                const status = obterStatusProduto(produto);
                const indiceReal = estoque.findIndex(item => item.id === produto.id);

                const tdNome = document.createElement('td');
                tdNome.setAttribute('data-label', 'Produto');
                tdNome.innerHTML = `<strong>${produto.nome}</strong>`;

                const tdCategoria = document.createElement('td');
                tdCategoria.setAttribute('data-label', 'Categoria');
                tdCategoria.textContent = CATEGORIAS_LABEL[produto.categoria];

                const tdAtual = document.createElement('td');
                tdAtual.setAttribute('data-label', 'Atual');
                tdAtual.textContent = `${formatarNumero(produto.total)} ${produto.unidade}`;

                const tdMin = document.createElement('td');
                tdMin.setAttribute('data-label', 'Mínimo');
                tdMin.textContent = `${formatarNumero(produto.min)} ${produto.unidade}`;

                const tdComprar = document.createElement('td');
                tdComprar.setAttribute('data-label', 'Comprar');
                tdComprar.innerHTML = `<strong>${formatarNumero(produto.reposicao)} ${produto.unidade}</strong>`;

                const tdStatus = document.createElement('td');
                tdStatus.setAttribute('data-label', 'Status');
                const badge = document.createElement('span');
                badge.className = `status-badge ${status.classe}`;
                badge.textContent = status.texto;
                tdStatus.appendChild(badge);

                const tdAcoes = document.createElement('td');
                tdAcoes.setAttribute('data-label', 'Ações');
                tdAcoes.className = 'text-right';
                tdAcoes.append(
                    criarBotaoAcao('⏱️', 'btn-acao btn-contar', `Contar ${produto.nome}`, () => abrirModal(indiceReal)),
                    criarBotaoAcao('⚙️', 'btn-acao', `Editar ${produto.nome}`, () => abrirModalEdicao(indiceReal))
                );

                tr.append(tdNome, tdCategoria, tdAtual, tdMin, tdComprar, tdStatus, tdAcoes);
                tbody.appendChild(tr);
            });
        }
    }

    if (preview) {
        preview.replaceChildren();

        if (!lista.length) {
            const vazio = document.createElement('div');
            vazio.className = 'suggested-empty';
            vazio.textContent = 'Tudo em dia. Não há itens para comprar agora.';
            preview.appendChild(vazio);
            return;
        }

        lista.slice(0, 4).forEach(produto => {
            const item = document.createElement('div');
            item.className = 'suggested-item';

            const meta = document.createElement('div');
            meta.className = 'suggested-item-meta';
            meta.innerHTML = `<strong>${produto.nome}</strong><span>${CATEGORIAS_LABEL[produto.categoria]}</span>`;

            const compra = document.createElement('div');
            compra.className = 'suggested-item-buy';
            compra.textContent = `Comprar ${formatarNumero(produto.reposicao)} ${produto.unidade}`;

            item.append(meta, compra);
            preview.appendChild(item);
        });
    }
}

function renderizarAtividadeRecente() {
    const container = document.getElementById('recent-activity');
    if (!container) return;

    container.replaceChildren();

    const recentes = historico.slice(0, 5);

    if (!recentes.length) {
        const vazio = document.createElement('div');
        vazio.className = 'recent-activity-empty';
        vazio.textContent = 'Sem movimentações recentes. As ações feitas no inventário vão aparecer aqui.';
        container.appendChild(vazio);
        return;
    }

    recentes.forEach(item => {
        const bloco = document.createElement('div');
        bloco.className = 'recent-activity-item';

        const data = document.createElement('strong');
        data.textContent = item.data || '-';

        const descricao = document.createElement('p');
        descricao.textContent = item.descricao || '-';

        bloco.append(data, descricao);
        container.appendChild(bloco);
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

function limparFiltros() {
    const inputBusca = document.getElementById('input-busca');
    const selectStatus = document.getElementById('filtro-status');
    const filtroEstoqueMin = document.getElementById('filtro-estoque-min');
    const filtroEstoqueMax = document.getElementById('filtro-estoque-max');

    if (inputBusca) inputBusca.value = '';
    if (selectStatus) selectStatus.value = 'todos';
    if (filtroEstoqueMin) filtroEstoqueMin.value = '';
    if (filtroEstoqueMax) filtroEstoqueMax.value = '';

    categoriaAtual = 'todos';
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

    if (!window.confirm(`Tem certeza que deseja remover "${produto.nome}" do inventário? Essa ação não pode ser desfeita.`)) return;

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

    const dataArquivo = new Date().toLocaleDateString('pt-BR').replaceAll('/', '-');

    baixarArquivo(JSON.stringify(dados, null, 2), `order2stock-backup-${dataArquivo}.json`, 'application/json');
    mostrarToast('Backup exportado.', 'success');
}

function exportarCSVInventario() {
    const cabecalho = ['Produto', 'Categoria', 'QtdCaixa', 'MedidaItem', 'Unidade', 'PesoCaixaKg', 'Minimo', 'TotalEstoque', 'Status'];
    const linhas = estoque.map(produto => {
        const status = obterStatusProduto(produto).texto;
        return [
            escapaCsv(produto.nome),
            escapaCsv(CATEGORIAS_LABEL[produto.categoria]),
            escapaCsv(formatarNumero(produto.qtdCaixa)),
            escapaCsv(formatarNumero(produto.medidaItem)),
            escapaCsv(produto.unidade),
            escapaCsv(formatarNumero(produto.pesoCaixaKg)),
            escapaCsv(formatarNumero(produto.min)),
            escapaCsv(formatarNumero(produto.totalEstoque)),
            escapaCsv(status)
        ].join(';');
    });

    const dataArquivo = new Date().toLocaleDateString('pt-BR').replaceAll('/', '-');
    baixarArquivo([cabecalho.join(';'), ...linhas].join('\n'), `order2stock-inventario-${dataArquivo}.csv`, 'text/csv;charset=utf-8');
    mostrarToast('Inventário exportado em CSV.', 'success');
}

function exportarCSVSugeridos() {
    const lista = obterItensCompraSugerida();
    const cabecalho = ['Produto', 'Categoria', 'Atual', 'Minimo', 'Comprar', 'Unidade'];
    const linhas = lista.map(produto => [
        escapaCsv(produto.nome),
        escapaCsv(CATEGORIAS_LABEL[produto.categoria]),
        escapaCsv(formatarNumero(produto.total)),
        escapaCsv(formatarNumero(produto.min)),
        escapaCsv(formatarNumero(produto.reposicao)),
        escapaCsv(produto.unidade)
    ].join(';'));

    const dataArquivo = new Date().toLocaleDateString('pt-BR').replaceAll('/', '-');
    baixarArquivo([cabecalho.join(';'), ...linhas].join('\n'), `order2stock-compras-sugeridas-${dataArquivo}.csv`, 'text/csv;charset=utf-8');
    mostrarToast('Compras sugeridas exportadas em CSV.', 'success');
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

            if (!window.confirm('A importação vai substituir catálogo, inventário e histórico atuais. Deseja continuar?')) {
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

function navegarPara(secaoId) {
    const secao = document.getElementById(secaoId);

    atualizarSecaoAtiva(secaoId);

    if (secao) {
        secao.scrollIntoView({ behavior: 'smooth', block: 'start' });
        secao.focus({ preventScroll: true });
    }

    document.getElementById('sidebar')?.classList.remove('open');
}

function irParaSecao(secaoId) {
    navegarPara(secaoId);
}

function acaoRapidaAdicionar() {
    const formBody = document.getElementById('form-body');
    const btnToggle = document.getElementById('btn-toggle-form');

    irParaSecao('sec-cadastro');

    if (formBody?.classList.contains('collapsed')) {
        toggleFormCadastro();
    }

    if (btnToggle) {
        btnToggle.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    setTimeout(() => {
        document.getElementById('produto-base')?.focus();
    }, 120);
}

function acaoRapidaInventario() {
    irParaSecao('sec-estoque');
    document.getElementById('input-busca')?.focus();
}

function acaoRapidaCriticos() {
    const selectStatus = document.getElementById('filtro-status');
    if (selectStatus) {
        selectStatus.value = 'critico';
    }

    categoriaAtual = 'todos';
    salvarDados();
    irParaSecao('sec-estoque');
    renderizarTabela();
    mostrarToast('Filtro aplicado: somente itens críticos.', 'warning', 2800);
}

function alternarTema() {
    const atual = document.documentElement.getAttribute('data-theme') || 'dark';
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
    document.getElementById('btn-notifications')?.addEventListener('click', verificarCriticos);
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
    document.getElementById('btn-limpar-filtros')?.addEventListener('click', limparFiltros);

    document.getElementById('btn-intro-purchases')?.addEventListener('click', acaoRapidaCriticos);
    document.getElementById('btn-intro-inventory')?.addEventListener('click', () => irParaSecao('sec-estoque'));
    document.getElementById('btn-intro-add')?.addEventListener('click', () => irParaSecao('sec-cadastro'));

    document.getElementById('btn-quick-add')?.addEventListener('click', acaoRapidaAdicionar);
    document.getElementById('btn-quick-inventory')?.addEventListener('click', acaoRapidaInventario);
    document.getElementById('btn-quick-critical')?.addEventListener('click', acaoRapidaCriticos);
    document.getElementById('btn-open-purchases-section')?.addEventListener('click', () => irParaSecao('sec-compras'));
    document.getElementById('btn-ir-inventario')?.addEventListener('click', () => irParaSecao('sec-estoque'));
    document.getElementById('btn-exportar-csv-lista')?.addEventListener('click', exportarCSVSugeridos);

    document.getElementById('btn-export-csv')?.addEventListener('click', exportarCSVInventario);

    document.querySelectorAll('[data-go-dashboard="true"]').forEach(btn => {
        btn.addEventListener('click', () => irParaSecao('sec-dashboard'));
    });

    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => navegarPara(btn.dataset.target));
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => filtrarCategoria(btn.dataset.category));
    });

    document.querySelectorAll('th.sortable').forEach(th => {
        th.addEventListener('click', () => alterarOrdem(th.dataset.sort));
    });

    document.getElementById('input-busca')?.addEventListener('input', renderizarTabela);
    document.getElementById('filtro-status')?.addEventListener('change', renderizarTabela);
    document.getElementById('filtro-estoque-min')?.addEventListener('input', renderizarTabela);
    document.getElementById('filtro-estoque-max')?.addEventListener('input', renderizarTabela);
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
    const temaSalvo = localStorage.getItem(STORAGE_KEYS.tema) || 'dark';
    const icon = document.querySelector('#btn-theme-toggle .icon');

    document.documentElement.setAttribute('data-theme', temaSalvo);
    if (icon) {
        icon.textContent = temaSalvo === 'dark' ? '☀️' : '🌙';
    }
}

function init() {
    aplicarTemaInicial();
    carregarDados();
    atualizarSecaoAtiva(secaoAtiva);
    renderizarCatalogoSelect();
    bindEventos();
    renderizarTabela();
    renderizarHistorico();
    verificarCriticos();

    const footerAno = document.getElementById('footer-ano');
    if (footerAno) footerAno.textContent = String(new Date().getFullYear());
}

document.addEventListener('DOMContentLoaded', init);
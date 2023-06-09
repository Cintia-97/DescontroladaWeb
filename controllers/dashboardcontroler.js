const axios = require('axios')

const dashboard = async (req, res, next) => {
    const {data} = await axios.get('http://localhost:3001/list');
    
    let saldo_atual = 0
    let total_despesas = 0
    let total_ganhos = 0
    let title_economia = ''
    
    for(let valor of data.dados){
        if (valor.origin === 'despesa') {
            total_despesas += Number(valor.value)
        }
        if (valor.origin === 'ganho') {
            total_ganhos += Number(valor.value)
        }
        saldo_atual = total_ganhos - total_despesas
    }

    if(total_ganhos > 0 ) title_economia = 'Voce esta economizando, continua assim'
    if(total_ganhos < 0 ) title_economia = 'Voce esta gastando mais do que ganha, cuidado!'
    if(total_ganhos === 0 ) title_economia = 'Voce esta gastando tudo que ganha, cuidado!'

    return {
        title_economia: title_economia,
        title: "Resumo de suas despesas e ganhos",
        saldo_atual: `R$ ${saldo_atual}`,
        total_despesas: `R$ ${total_despesas}`,
        total_ganhos: `R$ ${total_ganhos}`,
        items: data.dados

    }
}

const create = async (req, res, next) => {

    return {
        title: 'Registre um novo valor'
    }
}

const remove = async (req, res, next) => {
    const { data } = await axios.get('http://localhost:3001/list');

    console.log(data)
    data.dados = data.dados.filter((item) => {
        item._id = item._id.toString()
        item.origin = item.origin.toString()
        return item
    })

    return {
        title: 'Remover valor',
        items: data.dados
    }
}

module.exports = {
    dashboard,
    create,
    remove
}

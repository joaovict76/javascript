/**
 * Modelo de dados das notas
 * Criação da coleção
 */

// importação do recursos do mongoose
const { model, Schema } = require('mongoose')

//criação da estrutura da coleção 
const noteSchema = new Schema({
    texto:{
        type: String
    },
    cor: {
        type: String
    }
},{ versionKey: false})

//exportae o modelo de dados para o main
module.exports = model('Notas', noteSchema)
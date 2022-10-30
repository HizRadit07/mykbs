const { Engine } = require('json-rules-engine')

let engine = new Engine()

engine.addRule({
    conditions: {
        all: [
            {
                fact:"warna",
                operator:"equal",
                value:"bening"
            },
            {
                fact:"waktu",
                operator:"equal",
                value:"hanya_pagi"
            },
            {
                any:[
                    {
                        fact:"gejala",
                        operator:"contains",
                        value:"pilek"
                    },
                    {
                        fact:"gejala",
                        operator:"contains",
                        value:"bersin"
                    },
                    {
                        fact:"gejala",
                        operator:"contains",
                        value:"hidung_mampet"
                    },
                    {
                        fact:"gejala",
                        operator:"contains",
                        value:"gatal_mata"
                    },
                ]
            },
            {
                fact:"sisi",
                operator:"equal",
                value:"dua_sisi"
            },
        ]
    },
    event: {
        type: "rhinitis_alergi",
        params: {
            message: "Rhinitis alergi"
        }
    }
})

engine.addRule({
    conditions: {
        all:[
            {
                any:[
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"kuning" 
                    },
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"hijau" 
                    },
                ]
            },
            {
                fact:"waktu",
                operator:"equal",
                value:"sepanjang_hari"
            },
            {
                fact:"gejala",
                operator:"in",
                value:"nyeri_pangkal_hidung"
            },
            {
                any:[
                    {
                        fact:"sisi",
                        operator:"equal",
                        value:"dua_sisi"
                    },
                    {
                        fact:"sisi",
                        operator:"equal",
                        value:"satu_sisi" 
                    },
                ]
            },
            {
                fact:"tekstur",
                operator:"equal",
                value:"kental"
            }
        ]
    },
    event:{
        type: "sinusitis",
        params: {
            message: "Sinusitis"
        }
    }
})

engine.addRule({
    conditions:{
        all:[
            {
                any:[
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"kuning" 
                    },
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"darah" 
                    },
                ]
            },
            {
                fact:"waktu",
                operator:"equal",
                value:"sepanjang_hari"
            },
            {
                any:[
                    {
                        fact:"usia",
                        operator:"equal",
                        value:"usia_1" 
                    },
                    {
                        fact:"usia",
                        operator:"equal",
                        value:"usia_2" 
                    },
                ]
            },
            {
                fact:"tekstur",
                operator:"equal",
                value:"kental"
            },
            {
                fact:"bau",
                operator:"equal",
                value:"ada"
            }
        ]
    },
    event:{
        type: "benda_asing",
        params: {
            message: "Ada benda asing"
        }
    }
})

engine.addRule({
    conditions:{
        all:[
            {
                any:[
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"kuning" 
                    },
                    {
                        fact:"warna",
                        operator:"equal",
                        value:"darah" 
                    },
                ]
            },
            {
                fact:"waktu",
                operator:"equal",
                value:"sepanjang_hari"
            },
            {
                any:[
                    {
                        fact:"usia",
                        operator:"equal",
                        value:"usia_2" 
                    },
                    {
                        fact:"usia",
                        operator:"equal",
                        value:"usia_3" 
                    },
                ]
            },
            {
                fact:"tekstur",
                operator:"equal",
                value:"kental"
            },
        ]
    },
    event:{
        type: "polip",
        params: {
            message: "Polip"
        }
    }
})

module.exports = engine
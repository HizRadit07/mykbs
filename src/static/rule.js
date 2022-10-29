const { Engine } = require('json-rules-engine')

let engine = new Engine()
//rule 1, rhinitis alergi
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
                        fact:"bersin",
                        operator:"in",
                        value:"gejala"
                    },
                    {
                        fact:"hidung_mampet",
                        operator:"in",
                        value:"gejala"
                    },
                    {
                        fact:"gatal_mata",
                        operator:"in",
                        value:"gejala"
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
                fact:"nyeri_pangkal_hidung",
                operator:"in",
                value:"gejala"
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
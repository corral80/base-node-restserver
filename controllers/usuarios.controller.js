const { response, request } = require('express')

const usuariosGet = (req = request, res = response) =>{

    const {q,nombre = "NN",apikey} = req.query

    res.json({
        msg: 'get API - Controlador',
        q,
        nombre,
        apikey
    })
}

const usuariosPost = (req = request, res = response) =>{

    const {nombre, edad} = req.body
    
    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req = request, res = response) =>{

    const { id } = req.params
    
    res.json({
        msg: 'put API - Controlador',
        id
    })
}

const usuariosPatch = (req = request, res = response) =>{

    res.json({
        msg: 'patch API - Controlador'
    })
}

const usuariosDelete = (req = request, res = response) =>{

    res.json({
        msg: 'delete API - Controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
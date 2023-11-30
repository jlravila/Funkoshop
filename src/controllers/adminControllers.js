const adminControllers = {
    admin: (req, res) => res.send('Ruta de la pagina del administrador'),
    createGET:  (req, res) => res.send('Ruta que devuelve el usuario buscado'),
    createPOST: (req, res) => res.send('Ruta que devuelve al agregar el usuario'),
    editGET:  (req, res) => res.send('Ruta que devuelve el usuario'),
    editPUT: (req, res) => res.send('Ruta que devuelve al agregar un usuario'),
    delete: (req, res) => res.send('Ruta que borra el usuario')
}

module.exports = adminControllers;
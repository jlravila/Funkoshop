const authControllers = {
    loginGET: (req, res) => res.send('Ruta de la pagina de la sesión'),
    loginPOST:  (req, res) => res.send('Ruta que devuelve el logeo del usuario'),
    registerGET: (req, res) => res.send('Ruta del registro del usuario'),
    registerPOST: (req, res) => res.send('Ruta que devuelve el registro del usuario'),
    logout: (req, res) => res.send('Ruta del cierre de sesión del usuario')
}

module.exports = authControllers;
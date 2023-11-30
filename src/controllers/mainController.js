const mainControllers = {
    home: (req, res) => res.send('Ruta de la pagina de home'),
    contact: (req, res) => res.send('Ruta de la pagina de contacto'), 
    about: (req, res) => res.send('Ruta de la pagina sobre nosotros'),
    faqs: (req, res) => res.send('Ruta de la pagina de politicas de privacidad')
}

module.exports = mainControllers;
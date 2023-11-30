const shopControllers = {
    shop: (req, res) => res.send('Ruta de la pagina de shop'),
    itemGET: (req, res) => res.send('Ruta que devuelve el producto buscado'),
    itemPOST: (req, res) => res.send('Ruta que devuelve al agregar el producto'),
    cartGET: (req, res) => res.send('Ruta que devuelve el carrito'),
    cartPOST: (req, res) => res.send('Ruta que devuelve al agregar un producto al carrito')
}

module.exports = shopControllers;
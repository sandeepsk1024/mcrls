const Store = require('./store')
const getStructuredDataFromFlatData = (products) => {
    let store = new Store();

    products.forEach(product => {
        store.addItem(product.group, product.subgroup, product.item, product.cost)
    })

    return store.data
}

module.exports = getStructuredDataFromFlatData
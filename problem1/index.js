// const approach1Data = require('./approach1/data.json')
// const approach1Logic = require('./approach1')

// const output1 = approach1Logic(approach1Data);

// console.dir(output1, {depth: null})

// const approach2Data = require('./approach2/data.json')
// const approach2Logic = require('./approach2/storeLoader.flatProducts')

// const output2 = approach2Logic(approach2Data)
// console.dir(output2, {depth: null})


const approach3Data = require('./approach3/data.json')
const approach3Logic = require('./approach3/storeLoader.flatProducts')

const output3 = approach3Logic(approach3Data)
console.dir(output3, {depth: null})

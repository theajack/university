const UQuery = require('../npm/univ-query.min')

const arr = [
    UQuery('北京工').length,
    UQuery.isFake('北京大学'),
    UQuery.isFake('山西经济技术学院'),
    UQuery.isFake('伦敦东南商学院'),
    UQuery.isFake('anything')
]

if(arr.toString() !== '5,no,yes,yes,unknown'){
    throw new Error('Test failed: ', arr);
}

console.log('Test passed: ', arr);
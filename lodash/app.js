var fs = require('fs');
var _ = require('lodash');

function handleError(error) {
    if (error) {
        return console.log('mistake');
    }
    return console.log('File was saved');
}

function readFile(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

var categories = readFile('categories.json');
var products = readFile('products.json');

/*Native JS
var dataToWrite = _.cloneDeep(categories);
for (var i = 0; i < categories.length; i++) {
    var list = [];
    for (var j = 0; j < products.length; j++) {
        for (var k = 0; k < products[j].categories.length; k++) {
            if (products[j].categories[k] === categories[i].id) {
                list.push(products[j]);
            }
        }
    }
    dataToWrite[i].list = list;
}
*/
_.forEach(categories, function(category) {
    var list = [];
    _.forEach(products, function(product) {
        if (_.indexOf(product.categories, category.id, 0) + 1) {
            list.push(product);
        }
    })
    category.list = list;
});
console.log(categories);
fs.writeFile('result1.json', JSON.stringify(categories, ' ', 4), handleError);
//Javascript Object Notaion
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'programmer'}
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Road',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Kulsum begum',
        profession: 'Business'
    },
    isExpensive : false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
const converted = JSON.parse(shopStringified);

console.log(shopStringified);
console.log(converted.owner);
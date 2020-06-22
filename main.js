// import customer from JS list //

import customers from './customers.js'
// console.log(customers[0])
//Will neeed loop for array//

//Render one person//
// let firstCustomer = customers[0]
// console.log(firstCustomer.name.first)


function renderCus(customerArray){

for(let customer of customerArray) {

  //SELECT SECTION TO ADD INFO FROM JS TO HTML PAGE//
  let customerList = document.querySelector('.customer-list');

  //CREATED LIST ITEM FOR CUSTOEMR LIST//
  let customerLi = document.createElement('li');

  //ADDING INFO TO THE LIST ITEM CREATED VIA JS//
  let customerText = document.createTextNode(`${customer.name.first}`);

  //PUTTING CONTENT INTO LIST ITEM//
  customerLi.appendChild(customerText)

  //PUT LIST ITEM INTO SECTON//
  customerList.append(customerLi)

  } 
}

renderCus(customers)



// //Same as import but  for one person //
// let person={
//   name: 'Mrs Addision Graves',
//   address: '5740 Westheimer rd',
//   phone: '(995)-211-0296',
//   thumbnail: 'https://randomuser.me/api/portraits/med/women/41.jpg',
//   birthdate: '1979-09-14',
// }
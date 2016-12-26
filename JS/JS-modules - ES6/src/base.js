

//import { productId as id, productName as name } from './module1';

console.log('in base.js');

// console.log(productId);
// console.log(productName);

// console.log(id);
// console.log(name);


//---------------------------------------------

// import name, { productId as id} from './module1';
// console.log(name);
// console.log(id);

//---------------------------------------------

// import  { default as name, productId as id} from './module1';
// console.log(name);
// console.log(id);

//---------------------------------------------

// import { id, name } from './module1';
// console.log(name);
// console.log(id);

//---------------------------------------------

// import * as product from './module1';

// console.log(product.name);
// console.log(product.id);

//---------------------------------------------

// import { id } from './module1';
id = 0;
// console.log(id);

//---------------------------------------------

import product from './module1';

product = null; // cant replace reference , we can mutate its properties

product.id = 123;

console.log(product.id);

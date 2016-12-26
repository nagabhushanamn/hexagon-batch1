define(['./module1'], function (_module) {
  'use strict';

  var _module2 = _interopRequireDefault(_module);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  product = null; // cant replace reference , we can mutate its properties

  _module2.default.id = 123;

  console.log(_module2.default.id);
});
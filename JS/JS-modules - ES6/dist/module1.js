define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    console.log('in module1.js');

    // export let productId = 12;
    // export let productName = 'Laptop';

    // let productName = 'Laptop';

    // export default productName;


    //-----------------------------

    // let id = 12;
    // let name = "Laptop";

    // export { id, name };

    //-----------------------------

    let product = {
        id: 12,
        name: "Laptop"
    };

    exports.default = product;
});
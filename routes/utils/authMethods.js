const {
    isEmpty,
    isStrongPassword,
    isEmail,
    isAlpha,
    isAlphanumeric,
} = require("validator"); // DRY code - brings them all in, in one place

const checkIsEmpty = (target) => (isEmpty(target) ? true : false);

const checkIsStrongPassword = (password) =>
isStrongPassword(password) ? true : false;

const checkIsEmail = (email) => (isEmail(email) ? true : false);

const checkIsAlpha = (target) => (isAlpha(target) ? true : false);

const checkIsAlphanumeric = (target) => (isAlphanumeric(target) ? true : false);

module.exports = {
    checkIsEmpty,
    checkIsStrongPassword,
    checkIsEmail,
    checkIsAlpha,
    checkIsAlphanumeric,
};

// const { isEmpty, isStrongPassword, isEmail, isAlphaNumeric, } = require('validator');

// function checkIsEmpty(target) {
//     //write your own logic --> this is the long way
//     // if(isEmpty(target)) {
//     //     return true;
//     // } else {
//     //     return false
//     // }
//     // -> same as above, just cleaner code using ternary below
//     isEmpty(target) ? true : false;
// }


// function checkIsStrongPassword(password) {
//     //this is the long way 
//     // if(checkIsStrongPassword(password)) {
//     //     return true;
//     // } else {
//     //     return false;
//     // }
//     // -> same as above, just cleaner code using ternary below
//     isStrongPassword(password) ? true : false;
// }

// function checkIsEmail(email) {
//     isEmail(email) ? true : false; 
//     // you don't necessarily need the true false ternary statements from above, but it's there for readability
// }

// const checkIsAlphanumeric = (target) => (isAlphaNumeric(target) ? true : false);


// // shorter code ex: 
// // const { isEmpty, isStrongPassword, isEmail } = require("validator");

// // const checkIsEmpty = (target) => (isEmpty(target) ? true : false);

// // const checkIsStrongPassword = (password) =>
// //   isStrongPassword(password) ? true : false;

// // const checkIsEmail = (email) => (isEmail(email) ? true : false);

// // const checkIsAlphanumeric = (target) => (isAlphaNumeric(target) ? true : false);

// // module.exports = {
// //   checkIsEmpty,
// //   checkIsStrongPassword,
// //   checkIsEmail,
// // };


// module.exports = {
//     checkIsEmpty,
//     checkIsStrongPassword,
//     checkIsEmail,
//     checkIsAlphaNumeric,
// }; 
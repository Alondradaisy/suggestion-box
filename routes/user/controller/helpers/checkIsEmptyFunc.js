const { checkIsEmpty } = require("../../utils/authMethods");
//this function checks any incoming data is empty if is empty send error message back
//else go to the next middleware function next()
function checkIsEmptyFunc(req, res, next) {
    let inComingData = req.body;
    //let errorObj = {};
    const { errorObj } = res.locals;
    for (let key in inComingData) {
        if (checkIsEmpty(inComingData[key])) {
            errorObj[key] = `${key} cannot be empty`;
        }
    }
    next();
}
module.exports = checkIsEmptyFunc;
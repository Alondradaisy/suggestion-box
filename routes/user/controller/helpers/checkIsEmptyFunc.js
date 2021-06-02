const { checkIsEmpty } = require(“../../utils/authMethods”);

function checkIsEmptyFunc(req, res, next) {
    let errorObj = {};

    let inComingData = req.body;
    
    for (let key in inComingData) {
        if (checkIsEmpty(inComingData[key])) {
            errorObj[key] = `${key} cannot be empty`; //when you pass in errorObj, you always pass in the key value of the obj
        }
    }
    if (Object.keys(errorObj).length > 0) {
        return res.status(500).json({ message: “failure”, payload: errorObj });
    } else {
        next();
    }
}
module.exports = checkIsEmptyFunc;
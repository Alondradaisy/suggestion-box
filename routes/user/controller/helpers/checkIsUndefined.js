function checkIsUndefined(req, res, next) {
    if (Object.keys(req.body).length === 0) {
        return res.status(500).json({ message: “Please fill out the form” });
    } else {
        next(); // go to the next function
    }
}
module.exports = checkIsUndefined;
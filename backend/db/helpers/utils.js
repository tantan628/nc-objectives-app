const endpointsObj = require('../../endpoints.json');

exports.getEndpoints = (req, res, next) => {
    try {
        res.status(200).send({ endpoints: endpointsObj })
    } catch(err) {
        next(err)
    }
};
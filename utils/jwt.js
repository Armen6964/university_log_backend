const jwt = require('jsonwebtoken');
const fs = require('fs');
const { ERROR } = require("./index");

const { RSA_PRIVAYE_KEY, RSA_PUBLIC_KEY, JWT_EXPIRES_IN, JWT_ALGORITHM } = require("../config").JWT;

function getPrivateKey () {
    return fs.readFileSync(RSA_PRIVAYE_KEY, 'utf-8');
}

function getPublicKey () {
    return fs.readFileSync(RSA_PUBLIC_KEY, 'utf-8');
}

function validateToken (req, res, next) {

    let authorization = req.headers.authorization || "";

    let token = "";

    if (authorization.substring(0, 7) == "Bearer ") {
        token = authorization.substring(7);
    }

    Verify(token, req, res, next);

}

function Verify (token, req, res, next) {

    if (!token) return ERROR(res, "Forbidden", 403);

    let options = { algorithm: JWT_ALGORITHM };

    jwt.verify(token, getPublicKey(), options, async function (err, decode) {

        if (err) return ERROR(res, "Forbidden", 403);

        next();

    });
}

function signToken (data, exp) {

    return new Promise((resolve, rejecet) => {

        let options = {
            expiresIn: exp || JWT_EXPIRES_IN,
            algorithm: JWT_ALGORITHM,
        };

        if (exp) options.expiresIn = exp;

        jwt.sign(data, getPrivateKey(), options, (err, token) => {

            if (err) return rejecet(err);

            resolve(token);

        });
    });

}

module.exports = {
    signToken,
    validateToken
}

function SUCCESS (res, message, status = 200) {
    res.status(status);
    return res.json(message);
}

function ERROR (res, message, status = 500) {
    res.status(status);
    return res.json(message);
}

module.exports = {
    SUCCESS, ERROR
}
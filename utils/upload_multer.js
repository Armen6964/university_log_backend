const multer = require('multer');

module.exports = multer_upload = (config) => (req, res, next) => {

    let { dest, files } = config;

    let MimeTypes = {};

    if (!files || !Array.isArray(files)) {
        console.log("Multer upload error: files must by array");
        return next();
    }

    files.map((file) => {

        let { mimeTypes, name } = file;

        MimeTypes[name] = mimeTypes;

    });

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dest || 'public');
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + "." + file.originalname.split(".").pop());
        },
    });

    const validationError = 'File validation error';

    const fileFilter = (req, file, cb) => {

        let mimetypes = MimeTypes[file.fieldname];

        if (mimetypes && mimetypes.includes(file.mimetype) || !mimetypes) {
            cb(null, true);
        } else {
            cb(new Error(validationError));
        }

    }

    const upload = multer({ storage, fileFilter });

    upload.fields(files)(req, res, function (err) {

        if (err && err.message === validationError) {
            next(new Error(validationError));
        } else {
            next();
        }

    });

}
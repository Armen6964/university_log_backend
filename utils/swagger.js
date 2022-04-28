module.exports = (app) => {

    const expressJSDocSwagger = require('express-jsdoc-swagger');

    const options = {
        info: {
            version: '0.9.0',
            title: 'api',
            contact: {
                "name": "api",
                "url": "http://localhost",
                "email": "admin@admin.com"
            },
            description: "Api project"
        },
        security: {
            BearerAuth: {
                "type": "http",
                "scheme": "bearer"
            }
        },
        baseDir: __dirname,
        filesPattern: '../**/*.js',
        swaggerUIPath: '/api-docs',
        exposeSwaggerUI: true,
        exposeApiDocs: true,
        apiDocsPath: '/',
        notRequiredAsNullable: true,
        swaggerUiOptions: {},
        multiple: true,
    };

    expressJSDocSwagger(app)(options);

}
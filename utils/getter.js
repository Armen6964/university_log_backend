const Op = require("sequelize").Op;
const { ERROR } = require(".");

module.exports = (model, req, res, optionCb, cb, err) => {

    if (!err) {
        err = (err) => {
            return ERROR(res, err.message);
        }
    }

    let options = { where: {} };

    let query = req.query.query;

    if (query) {

        try {
            query = JSON.parse(query);
        } catch (e) {
            console.log(e);
            query = {};
        }

    } else {
        query = {};
    }

    let offset = 0;

    let {
        limit = 10,
        page = 1,
        pagination = true,
        filter,
        filter_in,
        filter_notin,
        search,
        sort,
        between
    } = query;

    try {

        limit = parseInt(limit);
        page = parseInt(page) - 1;
        offset = page * limit;

        if (filter) options.where = filter;

        if (filter_in) {

            for (let key in filter_in) {
                options.where[key] = { [Op.in]: filter_in[key] }
            }

        }

        if (filter_notin) {

            for (let key in filter_notin) {
                options.where[key] = { [Op.notIn]: filter_notin[key] }
            }

        }

        if (search) {

            let search_arr = [];

            for (let key in search) {

                search_arr.push({
                    [key]: { [Op.like]: "%" + search[key] + "%" }
                });

            }

            options.where = { ...options.where, [Op.or]: search_arr };
        }

        if (sort) options.order = [sort];

        if (between) {

            for (let key in between) {

                let from = null;
                let to = null;

                if (typeof between[key] != "object") {
                    from = between[key];
                } else {
                    from = between[key].from;
                    to = between[key].to;
                }

                if (from && to) {

                    options.where[key] = { [Op.between]: [from, to] }

                } else if (from && !to) {

                    options.where[key] = { [Op.gte]: from }

                } else if (!from && to) {

                    options.where[key] = { [Op.lte]: to }

                }
            }

        }

        if (optionCb && typeof optionCb === "function") {
            optionCb(options);
        }

    } catch (e) {
        options = {};
        console.log(e)
    }

    var find_type = "findAll";

    if (pagination) {
        options.limit = limit;
        options.offset = offset;
        find_type = "findAndCountAll";
        options.distinct = true;
    }

    model[find_type](options)
        .then((data) => {

            if (pagination) {

                data.page = page + 1;
                data.limit = limit;
                data.total = data.count;

            }

            cb(data);

        }).catch(err);

}
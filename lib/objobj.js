'use strict';

const isObject = (value) => {
    const type = typeof value;
    return !!value && (type === 'object' || type === 'function');
};

module.exports.set = (path = '', value, obj = {}) => {
    const paths = path.split('.').filter(item => item);
    const length = paths.length - 1;

    // Nothing to do
    if (paths.length === 0) {
        return obj;
    }

    // Shallow object
    if (paths.length === 1) {
        obj[paths[0]] = value;
        return obj;
    }

    // Deep object
    paths.reduce((a, v, index) => {
        if (index === length) {
            a[v] = value;
            return a[v];
        }

        if (!a[v] || !isObject(a[v])) {
            a[v] = {};
            return a[v];
        }

        return a[v];
    }, obj);

    return obj;
};
/*
module.exports.get = (path = '', obj = {}) => {

};
*/

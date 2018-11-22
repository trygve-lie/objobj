'use strict';

const isObject = (value) => {
    const type = typeof value;
    return !!value && (type === 'object' || type === 'function');
};

module.exports.set = (path = '', value, obj = {}) => {
    const props = path.split('.').filter(item => item);
    const length = props.length - 1;
    const o = obj;

    // Nothing to do
    if (props.length === 0) {
        return o;
    }

    // Shallow object
    if (props.length === 1) {
        o[props[0]] = value;
        return o;
    }

    // Deep object
    props.reduce((acc, v, index) => {
        const a = acc;

        if (index === length) {
            a[v] = value;
            return a[v];
        }

        if (!a[v] || !isObject(a[v])) {
            a[v] = {};
            return a[v];
        }

        return a[v];
    }, o);

    return o;
};

module.exports.get = (path = '', obj) => {
    const props = path.split('.').filter(item => item);
    return props.reduce((a, v) => {
        return (a && a[v]) ? a[v] : undefined;
    }, obj);
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexpExpressRegexp = /^\/\^\\\/(?:(:?[\w\\.-]*(?:\\\/:?[\w\\.-]*)*)|(\(\?:\(\[\^\\\/]\+\?\)\)))\\\/.*/;
const regexpExpressParam = /\(\?:\(\[\^\\\/]\+\?\)\)/g;
const getRouteMethods = function (route) {
    const methods = [];
    for (const method in route.methods) {
        if (method === '_all')
            continue;
        methods.push(method.toUpperCase());
    }
    return methods;
};
const hasParams = function (pathRegexp) {
    return regexpExpressParam.test(pathRegexp);
};
const parseExpressRoute = function (route, basePath) {
    return {
        path: basePath + (basePath && route.path === '/' ? '' : route.path),
        methods: getRouteMethods(route),
    };
};
const parseExpressPath = function (expressPathRegexp, params) {
    let parsedPath = regexpExpressRegexp.exec(expressPathRegexp);
    let parsedRegexp = expressPathRegexp;
    let paramIdx = 0;
    while (hasParams(parsedRegexp)) {
        parsedRegexp = parsedRegexp
            .toString()
            .replace(/\(\?:\(\[\^\\\/]\+\?\)\)/, `:${params[paramIdx].name}`);
        paramIdx++;
    }
    if (parsedRegexp !== expressPathRegexp) {
        parsedPath = regexpExpressRegexp.exec(parsedRegexp);
    }
    parsedPath = parsedPath[1].replace(/\\\//g, '/');
    return parsedPath;
};
var parseEndpoints = function (app, basePath, endpoints) {
    const stack = app.stack || (app._router && app._router.stack);
    endpoints = endpoints || [];
    basePath = basePath || '';
    stack.forEach(function (stackItem) {
        if (stackItem.route) {
            endpoints.push(parseExpressRoute(stackItem.route, basePath));
        }
        else if (stackItem.name === 'router' ||
            stackItem.name === 'bound dispatch') {
            if (regexpExpressRegexp.test(stackItem.regexp)) {
                const parsedPath = parseExpressPath(stackItem.regexp, stackItem.keys);
                parseEndpoints(stackItem.handle, `${basePath}/${parsedPath}`, endpoints);
            }
            else {
                parseEndpoints(stackItem.handle, basePath, endpoints);
            }
        }
    });
    return endpoints;
};
const getEndpoints = function (app) {
    return parseEndpoints(app);
};
const listEndpoints = function (app) {
    const endpoints = parseEndpoints(app);
    const rsp = {};
    endpoints.map(item => {
        if (rsp.hasOwnProperty(item.path)) {
            rsp[item.path] = rsp[item.path].concat(item.methods);
        }
        else {
            rsp[item.path] = item.methods;
        }
    });
    return rsp;
};
exports.default = listEndpoints;
//# sourceMappingURL=listEndpoints.js.map
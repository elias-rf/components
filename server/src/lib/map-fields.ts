function mapFieldsObj(obj, from, to) {
    return Object.keys(obj).reduce((resp, key) => {
        const indexKey = from.findIndex((item) => item === key);
        let newKey = key;
        if (indexKey >= 0) newKey = to[indexKey];
        if (typeof obj[key] !== "object") {
            resp[newKey] = obj[key];
        } else {
            if (Array.isArray(obj[key])) {
                resp[newKey] = mapFields(obj[key], from, to);
            } else {
                resp[newKey] = mapFieldsObj(obj[key], from, to);
            }
        }
        return resp;
    }, {});
}

function mapFields(obj, from, to) {
    if (Array.isArray(obj)) {
        return obj.map((item) => {
            return mapFieldsObj(item, from, to);
        });
    }
    return mapFieldsObj(obj, from, to);
}

export default mapFields;

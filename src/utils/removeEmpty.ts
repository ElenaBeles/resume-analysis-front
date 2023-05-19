export const removeEmpty = (obj: Object) => {
    let newObj = {};

    Object.keys(obj).forEach((key) => {
        // @ts-ignore
        if (obj[key] === Object(obj[key])) {
            // @ts-ignore
            newObj[key] = removeEmpty(obj[key])
        }
        // @ts-ignore
        else if (obj[key] !== undefined) newObj[key] = obj[key];
    });

    return newObj;
};
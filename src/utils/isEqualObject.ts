export const isEqualObject = (v1: Object, v2: Object) => {
    return JSON.stringify(v1) === JSON.stringify(v2);
}
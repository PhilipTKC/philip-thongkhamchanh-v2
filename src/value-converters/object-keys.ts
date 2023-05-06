export class ObjectKeysValueConverter {
    toView(obj: { [key: string]: number }) {
        const temp = [];

        for (const prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                temp.push(prop);
            }
        }

        return temp;
    }
}
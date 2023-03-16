export default function validate<T>(input: T, required?: (keyof T)[], regex?: [keyof T, RegExp][]): (keyof T)[] {
    const errors: (keyof T)[] = [];
    if (required) {
        for (const key of required) {
            if(input[key] === undefined || input[key] === null || input[key] === "") errors.push(key);
        }
    }

    if (regex) {
        for (const [key, regExp] of regex) {
            if (!regExp.test(input[key] as string)) errors.push(key);
        }
    }

    // 중복 제거
    const set = new Set(errors);

    return Array.from(set);
}

export const toContact = (contact: string) => {
    return `${contact.slice(0, 3)}-${contact.slice(3, 7)}-${contact.slice(7, 11)}`
}

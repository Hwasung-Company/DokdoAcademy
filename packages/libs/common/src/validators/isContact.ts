export default function isContact(value:string){
    const regExp = /^\d{2,3}-\d{3,4}-\d{4}$/;
    return regExp.test(value);
}

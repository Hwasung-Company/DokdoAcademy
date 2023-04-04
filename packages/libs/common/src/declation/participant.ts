export class Participant {
    name: string;
    sexuality: string;
    phone: string;
    birth: string;
    age: number;
    companyGroup: string;
    company: string;
    department: string;
    tag: string;
    position: string;
    companyContact: string;
    discount: string;
    deposit: string;
    paymentMethod: string;
    managerCompanyGroup: string;
    managerCompany: string;
    managerDepartment: string;
    managerName: string;
    managerContact: string;
    refundMethod: string;
    refundBank: string;
    refundAccount: string;
    refundName: string;
    roomMateTarget: string;
    etc: string;

    constructor(input: string[]) {
        if (input.length === 25) {
            this.name = input[0];
            this.sexuality = input[1];
            this.phone = input[2];
            this.birth = input[3];
            this.age = +input[4];
            this.companyGroup = input[5];
            this.company = input[6];
            this.department = input[7];
            this.tag = input[8];
            this.position = input[9];
            this.companyContact = input[10];
            this.discount = input[11];
            this.deposit = input[12];
            this.paymentMethod = input[13];
            this.managerCompanyGroup = input[14];
            this.managerCompany = input[15];
            this.managerDepartment = input[16];
            this.managerName = input[17];
            this.managerContact = input[18];
            this.refundMethod = input[19];
            this.refundBank = input[20];
            this.refundAccount = input[21];
            this.refundName = input[22];
            this.roomMateTarget = input[23];
            this.etc = input[24];
        } else {
            this.name = input[0];
            this.sexuality = input[1];
            this.phone = input[2];
            this.birth =
                (input[3] as string).length === 8
                    ? input[3]
                    : input[3].substring(0, 8);

            this.age = new Date().getFullYear() - +input[3].substring(0, 4) + 1;
            this.companyGroup = input[4];
            this.company = input[5];
            this.department = input[6];
            this.tag = '';
            this.position = input[7];
            this.companyContact = input[8];
            this.discount = input[9];
            this.deposit = '';
            this.paymentMethod = input[11];
            this.managerCompanyGroup = input[12];
            this.managerCompany = input[13];
            this.managerDepartment = input[14];
            this.managerName = input[15];
            this.managerContact = input[16];
            this.refundMethod = input[17];
            this.refundBank = input[18];
            this.refundAccount = input[19];
            this.refundName = input[20];
            this.roomMateTarget = input[21];
            this.etc = input[22];
        }
    }
}

export abstract class ParticipantC extends Participant {}

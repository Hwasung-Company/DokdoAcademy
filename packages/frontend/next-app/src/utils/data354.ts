import { Participant } from '@common/declation/participant';

export const data354 = {
    name: '제354기 독도아카데미',
    startDate: new Date('2023-04-12'),
    endDate: new Date('2023-04-14'),
};

class Group {
    name: string;
    participants: Participant[];
    bus: Bus;
    reservation: Reservation;

    constructor(
        name: string,
        participants: Participant[],
        bus: Bus,
        reservation: Reservation,
    ) {
        this.name = name;
        this.participants = participants;
        this.bus = bus;
        this.reservation = reservation;
    }
}

interface Bus {
    name: string;
    company: string;
    number: number;
    driverName: string;
    driverContact: string;
    plateNumber: string;
}

interface Reservation {
    restaurants: Restaurant[];
    hotels: Hotel[];
}

interface Restaurant {
    name: string;
    address: string;
    contact: string;
    menu: string;
    time: string;
    pricePerPerson: number;
    totalPrice: number;
}

interface Hotel {
    name: string;
    address: string;
    contact: string;
    roomNumber: string;
    participants: Participant[];
}

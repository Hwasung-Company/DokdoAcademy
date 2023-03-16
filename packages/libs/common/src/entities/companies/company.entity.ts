import {CoreEntity} from 'src/entities/core/core.entity'

export default abstract class Company implements CoreEntity {
    abstract name: string;
    abstract address: string;
    abstract contact: string;
    abstract phone: string;
    abstract email: string;
    abstract _id: string
    abstract createdAt: Date
    abstract updatedAt: Date
}

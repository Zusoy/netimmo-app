import { Model } from './Model';

/**
 * Owner Model
 */
export class Owner extends Model
{
    /**
     * Owner Last Name
     */
    public lastName: string;

    /**
     * Owner First Name
     */
    public firstName: string;

    /**
     * Owner Birth Date
     */
    public birthDate: Date;

    /**
     * Owner Address
     */
    public address: string;

    /**
     * Owner Complemetary Address
     */
    public addressComplementary: string;

    /**
     * Owner Postal Code
     */
    public postalCode: string;

    /**
     * Owner City
     */
    public city: string;


    constructor(firstName: string, lastName: string, birthDate: Date, address: string, postalCode: string, city: string)
    {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
    }


    /**
     * Get Owner ID
     */
    public getId(): number
    {
        return this.id;
    }


    public getBirthDate()
    {
        return this.birthDate.toString();
    }
}
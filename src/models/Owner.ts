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
    public postalCode: number;

    /**
     * Owner City
     */
    public city: string;


    /**
     * Get Owner ID
     */
    public getId(): number
    {
        return this.id;
    }
}
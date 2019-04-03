import { Model } from './Model';
import { Owner } from './Owner';

/**
 * Estate Model
 */
export class Estate extends Model
{
    /**
     * Estate Title
     */
    public title: string;

    /**
     * Estate Description
     */
    public description: string;

    /**
     * Estate Price
     */
    public price: number;

    /**
     * Estate Area (m²)
     */
    public area: number;

    /**
     * List of Owners
     */
    public owners: Owner[];

    /**
     * Estate Reference
     */
    public reference: string;

    /**
     * Estate Localisation Address
     */
    public address: string;

    /**
     * Estate Complementary Address informations
     */
    public addressComplementary: string;

    /**
     * Estate Postal Code
     */
    public postalCode: number;

    /**
     * Estate City
     */
    public city: string;

    /**
     * Estate Sector
     */
    public sector: string;

    /**
     * Estate Country
     */
    public country: string;

    /**
     * Estate Proximities
     */
    public proximities: string[];

    /**
     * Estate Longitude
     */
    public longitude: number;

    /**
     * Estate Latitude
     */
    public latitude: number;

    /**
     * Estate Picture URL
     */
    public picture: string;


    /**
     * Add Estate Owner
     * 
     * @param owner Owner to Add
     */
    public addOwner(owner: Owner): Estate
    {
        this.owners.push(owner);

        return this;
    }
}
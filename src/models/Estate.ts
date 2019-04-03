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
     * Owner ID
     */
    public owner: number;

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
    public postalCode: string;

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


    
    constructor(
        title: string, 
        description: string, 
        price: number,
        area: number,
        reference: string,
        address: string,
        postalCode: string,
        city: string,
        sector: string,
        country: string,
        picture: string,
        owner: number
    ) {
        super();

        this.title = title;
        this.description = description;
        this.price = price;
        this.area = area;
        this.reference = reference;
        this.address = address;
        this.postalCode = postalCode;
        this.city = city;
        this.sector = sector;
        this.country = country;
        this.picture = picture;
        this.owner = owner;
    }
}
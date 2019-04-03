import { AbstractFixture } from '../common/AbstractFixture';
import { Model } from 'src/models/Model';
import { Owner } from 'src/models/Owner';

/**
 * Owner Fixture
 */
export class OwnerFixture extends AbstractFixture
{
    /**
     * Get Fixture Owners Models
     */
    public loadModels(): Owner[]
    {
        var ownersData = [
            new Owner("Jean", "Petit", new Date("04/10/1997"), "2 Rue du Test", '49000', "Angers"),
            new Owner("Antoine", "BonJean", new Date("04/10/1987"), "2 Rue du Général", '49000', "Angers"),
            new Owner("Henry", "Denry", new Date("04/10/1997"), "2 Rue du Test", '49000', "Angers"),
        ];

        return ownersData;
    }
}
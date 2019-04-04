import { AbstractFixture } from '../common/AbstractFixture';
import { Estate } from 'src/models/Estate';
import { Owner } from 'src/models/Owner';

/**
 * Estate Fixture
 */
export class EstateFixture extends AbstractFixture
{
    /**
     * Load Estate Models
     */
    public loadModels(): Estate[]
    {
        return [
            new Estate(
                "Appartement T2",
                "Appartement T2 neuf dans Angers, près du centre",
                30000,
                35,
                "AA54",
                "35 Rue de la Boulangère",
                "49000",
                "Angers",
                "Habitation",
                "France",
                ""
            ),
            new Estate(
                "Appartement T2",
                "Appartement T2 neuf dans Angers, près du centre",
                30000,
                35,
                "AA54",
                "35 Rue de la Boulangère",
                "49000",
                "Angers",
                "Habitation",
                "France",
                ""
            ),
            new Estate(
                "Appartement T2",
                "Appartement T2 neuf dans Angers, près du centre",
                30000,
                35,
                "AA54",
                "35 Rue de la Boulangère",
                "49000",
                "Angers",
                "Habitation",
                "France",
                ""
            ),
        ];
    }
}
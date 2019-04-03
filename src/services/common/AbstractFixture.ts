import { Model } from 'src/models/Model';

/**
 * Abstract Fixture
 */
export abstract class AbstractFixture
{
    /**
     * Load Fixtures Items
     */
    abstract loadModels(): Model[];
}
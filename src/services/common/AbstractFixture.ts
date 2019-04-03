import { Model } from 'src/models/Model';

/**
 * Abstract Fixture
 */
export abstract class AbstractFixture
{
    constructor()
    {
        //save fixtures in local storage
        localStorage.setItem(
            this.getFixtureKey(),
            JSON.stringify(this.loadModels())
        );
    }


    /**
     * Load Fixtures Items
     */
    abstract loadModels(): Model[];

    /**
     * Get the Fixture Key
     */
    abstract getFixtureKey(): string;
}
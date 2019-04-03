import { Model } from 'src/models/Model';

/**
 * Service Interface that handle Application Items
 */
export interface ItemService
{
    /**
     * Service Item Models List
     */
    models: Model[];

    /**
     * Get Next ID
     */
    nextId(): number;

    /**
     * Find Model by ID
     * @param id Model ID
     */
    findById(id: number);

    /**
     * Get All Models
     */
    getAll(): Model[];

    /**
     * Add Model Item
     * @param model Model to Add into Service
     */
    add(model: Model): void;

    /**
     * Remove Model Item
     * @param id Model ID to Remove
     */
    remove(id: number): void;
}
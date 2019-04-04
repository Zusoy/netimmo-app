import { LocalStorageService } from './definition/LocalStorageService';
import { Estate } from 'src/models/Estate';
import { ItemService } from './definition/ItemService';
import { Injectable } from '@angular/core';
import {EstateFixture} from './fixtures/EstateFixture';
import {AppConfig} from '../app/app.config';

/**
 * Estate Service
 */
@Injectable({
    providedIn: 'root'
})
export class EstateService implements ItemService, LocalStorageService
{
    /**
     * Local Storage Key Name
     */
    public static readonly LocalStorageKey = "estates";

    /**
     * Estates List
     */
    public models: Estate[] = [];


    constructor()
    {
        const localData = JSON.parse(localStorage.getItem(EstateService.LocalStorageKey));

        if (localData != null && localData.length) {
            localData.map(estateData => {
                this.add(
                    estateData
                );
            });
        } else {
            if (AppConfig.USE_FIXTURES) {
                var fixture = new EstateFixture();
                this.models = fixture.loadModels();
                this.persist();
            }
        }
    }


    /**
     * Save Estates in Local Storage
     */
    public persist(): void
    {
        localStorage.setItem(
            EstateService.LocalStorageKey,
            JSON.stringify(this.models)
        );
    }


    /**
     * Add Estate
     */
    public add(estate): void
    {
        var id = this.nextId();
        var estateModel = new Estate(
            estate.title,
            estate.description,
            estate.price,
            estate.area,
            estate.reference,
            estate.address,
            estate.postalCode,
            estate.city,
            estate.sector,
            estate.country,
            estate.picture,
            estate.owner
        );
        estateModel.id = id;

        //todo : set other properties

        this.models.push(estateModel);
        this.persist();
    }


    /**
     * Remove Estate
     * @param id Estate ID to Remove
     */
    public remove(id: number): void
    {
        var estate = this.findById(id);

        if (estate == null) {
            return;
        }

        this.models.splice(this.models.indexOf(estate), 1);
        this.persist();
    }


    public update(id: number, estate): void
    {
        var estateModel: Estate = this.findById(id);

        if (estateModel == undefined || estateModel == null) {
            return;
        }

        estateModel.title = estate.title;
        estateModel.description = estate.description;
        estateModel.price = estate.price;
        estateModel.area = estate.area;
        estateModel.owner = estate.owner;
        estateModel.reference = estate.reference;
        estateModel.address = estate.address;
        estateModel.addressComplementary = estate.addressComplementary;
        estateModel.postalCode = estate.postalCode;
        estateModel.city = estate.city;
        estateModel.sector = estate.sector;
        estateModel.country = estate.country;
        estateModel.latitude = estate.latitude;
        estateModel.longitude = estate.longitude;
        estateModel.picture = estate.picture;

        this.persist();
    }


    /**
     * Get Next ID
     */
    public nextId(): number
    {
        return (this.models.length > 0)
            ? this.models[this.models.length -1].getId() + 1
            : 1;
    }


    /**
     * Find Estate by ID
     * @param id Estate ID to Find
     */
    public findById(id: number): Estate
    {
        return this.models.find(estate => {
            return (estate.getId() == id);
        });
    }


    public getAll(): Estate[]
    {
        return this.models;
    }
}
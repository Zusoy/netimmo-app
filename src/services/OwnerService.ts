import { LocalStorageService } from './definition/LocalStorageService';
import { Owner } from 'src/models/Owner';
import { ItemService } from './definition/ItemService';
import { Injectable } from '@angular/core';
import { OwnerFixture } from './fixtures/OwnerFixture';
import {AppConfig} from '../app/app.config';

/**
 * Owner Service
 */
@Injectable({
    providedIn: 'root'
})
export class OwnerService implements LocalStorageService, ItemService
{
    /**
     * Local Storage Key Name
     */
    public static readonly LocalStorageKey = "owners";

    /**
     * Current Application Owners List
     */
    public models: Owner[] = [];

    
    constructor()
    {
        const localData = JSON.parse(localStorage.getItem(OwnerService.LocalStorageKey));
        if (localData != null && localData.length) {
            localData.map(ownerData => {
                this.add(
                    ownerData
                );
            });
        } else {
            if (AppConfig.USE_FIXTURES) {
                //use fixture
                var fixture = new OwnerFixture();
                this.models = fixture.loadModels();
                this.persist();
            }
        }
    }


    /**
     * Save Owner in Local Storage
     */
    public persist(): void
    {
        localStorage.setItem(
            OwnerService.LocalStorageKey,
            JSON.stringify(this.models)
        );
    }


    /**
     * Add Owner
     * @param owner Owner to Add 
     */
    public add(owner): void
    {
        var id = this.nextId();
        var ownerModel = new Owner(
            owner.firstName,
            owner.lastName,
            owner.birthDate,
            owner.address,
            owner.postalCode,
            owner.city
        );
        ownerModel.id = id;

        this.models.push(ownerModel);
        this.persist();
    }


    /**
     * Remove Owner
     * @param id Owner ID to Remove
     */
    public remove(id: number): void
    {
        var owner = this.findById(id);

        if (owner == null) {
            return;
        }

        this.models.splice(this.models.indexOf(owner), 1);
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
     * Find Owner by ID
     * @param id Owner ID to Find
     */
    public findById(id: number): Owner
    {
        return this.models.find(owner => {
            return (owner.getId() == id);
        });
    }


    public getAll(): Owner[]
    {
        return this.models;
    }
}
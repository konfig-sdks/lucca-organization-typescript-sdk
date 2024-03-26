/*
Organization structure API

Welcome on the documentation for the Organization Structure API


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface AxisTreeless
 */
export interface AxisTreeless {
    /**
     * 
     * @type {number}
     * @memberof AxisTreeless
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof AxisTreeless
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof AxisTreeless
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof AxisTreeless
     */
    'multilingualName': string;
    /**
     * 
     * @type {number}
     * @memberof AxisTreeless
     */
    'position'?: number;
    /**
     * 
     * @type {any}
     * @memberof AxisTreeless
     */
    'parentAxisId'?: any;
    /**
     * 
     * @type {boolean}
     * @memberof AxisTreeless
     */
    'isActive'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AxisTreeless
     */
    'isReadOnly'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AxisTreeless
     */
    'isNNRelation'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AxisTreeless
     */
    'level'?: number;
}


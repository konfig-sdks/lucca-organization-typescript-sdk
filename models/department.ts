/*
Organization structure API

Welcome on the documentation for the Organization Structure API


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { User } from './user';

/**
 * Departments, to which users must be attached, are used by the different Lucca solutions for different purposes:  * Define access scopes: for example to restrict the visibility of absences in the Timmi Absences schedule. * Filtering data in a report: our different reports generally allow to filter data according to the legal entity, the SSC, but also the department of the user. * Build the organization chart in Poplee Core HR. The departments are represented as a hierarchical tree with a parent/child relationship.  *NB:* You can have up to 9 levels of departments, and up to 99 departments under a single parent department. However, limiting the number of levels to 7 is recommended.
 * @export
 * @interface Department
 */
export interface Department {
    /**
     * 
     * @type {number}
     * @memberof Department
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Department
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof Department
     */
    'code': string;
    /**
     * Position of the departement in the hierarchical tree
     * @type {string}
     * @memberof Department
     */
    'hierarchy'?: string;
    /**
     * Position of the parent department in the hierarchical tree
     * @type {string}
     * @memberof Department
     */
    'parentId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Department
     */
    'isActive'?: boolean;
    /**
     * Department\'s general position in the hierarchy
     * @type {number}
     * @memberof Department
     */
    'position'?: number;
    /**
     * level of the Department. Deduce from Position.
     * @type {number}
     * @memberof Department
     */
    'level'?: number;
    /**
     * Order of the current Department among the children of the Parent Department
     * @type {number}
     * @memberof Department
     */
    'sortOrder'?: number;
    /**
     * ID of the User who is the head of the department
     * @type {number}
     * @memberof Department
     */
    'headID'?: number;
    /**
     * 
     * @type {User}
     * @memberof Department
     */
    'head'?: User;
    /**
     * Users of the department, including inactive users.
     * @type {Array<User>}
     * @memberof Department
     */
    'users'?: Array<User>;
    /**
     * Only active users of the department
     * @type {Array<User>}
     * @memberof Department
     */
    'currentUsers'?: Array<User>;
    /**
     * Number of active users in the department
     * @type {number}
     * @memberof Department
     */
    'currentUsersCount'?: number;
}


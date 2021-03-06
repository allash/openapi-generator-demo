// tslint:disable
/// <reference path="./custom.d.ts" />
/**
 * NestJS demo
 * DTO generator demo
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

// derp

/**
 * 
 * @export
 * @interface DtoLoginRequest
 */
export interface DtoLoginRequest {
    /**
     * 
     * @type {string}
     * @memberof DtoLoginRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DtoLoginRequest
     */
    password: string;
}
/**
 * 
 * @export
 * @interface DtoLoginResponse
 */
export interface DtoLoginResponse {
    /**
     * 
     * @type {string}
     * @memberof DtoLoginResponse
     */
    token: string;
    /**
     * 
     * @type {DtoUserResponse}
     * @memberof DtoLoginResponse
     */
    user: DtoUserResponse;
}
/**
 * 
 * @export
 * @interface DtoUserResponse
 */
export interface DtoUserResponse {
    /**
     * 
     * @type {string}
     * @memberof DtoUserResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof DtoUserResponse
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoUserResponse
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof DtoUserResponse
     */
    phone?: string;
}

/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {DtoLoginRequest} dtoLoginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(dtoLoginRequest: DtoLoginRequest, options: any = {}): RequestArgs {
            // verify required parameter 'dtoLoginRequest' is not null or undefined
            if (dtoLoginRequest === null || dtoLoginRequest === undefined) {
                throw new RequiredError('dtoLoginRequest','Required parameter dtoLoginRequest was null or undefined when calling authLoginPost.');
            }
            const localVarPath = `/auth/login`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof dtoLoginRequest !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(dtoLoginRequest !== undefined ? dtoLoginRequest : {}) : (dtoLoginRequest || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {DtoLoginRequest} dtoLoginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(dtoLoginRequest: DtoLoginRequest, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<DtoLoginResponse> {
            const localVarAxiosArgs = AuthApiAxiosParamCreator(configuration).authLoginPost(dtoLoginRequest, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {DtoLoginRequest} dtoLoginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authLoginPost(dtoLoginRequest: DtoLoginRequest, options?: any) {
            return AuthApiFp(configuration).authLoginPost(dtoLoginRequest, options)(axios, basePath);
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 
     * @param {DtoLoginRequest} dtoLoginRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public authLoginPost(dtoLoginRequest: DtoLoginRequest, options?: any) {
        return AuthApiFp(this.configuration).authLoginPost(dtoLoginRequest, options)(this.axios, this.basePath);
    }

}



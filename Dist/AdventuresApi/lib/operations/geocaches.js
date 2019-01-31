"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/geocachesMappers");
const Parameters = require("../models/parameters");
/** Class representing a Geocaches. */
class Geocaches {
    /**
     * Create a Geocaches.
     * @param {AdventuresApiClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    getGeocaches(adventureId, options, callback) {
        return this.client.sendOperationRequest({
            adventureId,
            options
        }, getGeocachesOperationSpec, callback);
    }
    get(adventureId, geocacheId, options, callback) {
        return this.client.sendOperationRequest({
            adventureId,
            geocacheId,
            options
        }, getOperationSpec, callback);
    }
    getGeocacheByBeacon(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, getGeocacheByBeaconOperationSpec, callback);
    }
    enterFindCode(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, enterFindCodeOperationSpec, callback);
    }
}
exports.Geocaches = Geocaches;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getGeocachesOperationSpec = {
    httpMethod: "GET",
    path: "Api/Adventures/{adventureId}/Geocaches",
    urlParameters: [
        Parameters.adventureId
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "GeocacheModel"
                        }
                    }
                }
            }
        },
        401: {},
        default: {}
    },
    serializer
};
const getOperationSpec = {
    httpMethod: "GET",
    path: "Api/Adventures/{adventureId}/Geocaches/{geocacheId}",
    urlParameters: [
        Parameters.adventureId,
        Parameters.geocacheId
    ],
    responses: {
        200: {
            bodyMapper: Mappers.GeocacheModel
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const getGeocacheByBeaconOperationSpec = {
    httpMethod: "POST",
    path: "Api/Geocaches/GetGeocacheByBeacon",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.GetGeocacheByBeaconModel, { required: true })
    },
    responses: {
        200: {
            bodyMapper: Mappers.GeocacheWithAdventureIdModel
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const enterFindCodeOperationSpec = {
    httpMethod: "POST",
    path: "Api/Geocaches/EnterFindCode",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.EnterFindCodeModel, { required: true })
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Number"
                }
            }
        },
        401: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=geocaches.js.map
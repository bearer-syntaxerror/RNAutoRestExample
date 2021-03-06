"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/adventuresGpxMappers");
const Parameters = require("../models/parameters");
/** Class representing a AdventuresGpx. */
class AdventuresGpx {
    /**
     * Create a AdventuresGpx.
     * @param {AdventuresApiClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    get(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, getOperationSpec, callback);
    }
}
exports.AdventuresGpx = AdventuresGpx;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec = {
    httpMethod: "GET",
    path: "api/AdventuresGpx/{id}",
    urlParameters: [
        Parameters.id0
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "String"
                }
            }
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=adventuresGpx.js.map
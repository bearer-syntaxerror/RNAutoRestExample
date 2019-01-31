"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/adventureStatisticsOperationsMappers");
const Parameters = require("../models/parameters");
/** Class representing a AdventureStatisticsOperations. */
class AdventureStatisticsOperations {
    /**
     * Create a AdventureStatisticsOperations.
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
exports.AdventureStatisticsOperations = AdventureStatisticsOperations;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec = {
    httpMethod: "GET",
    path: "api/AdventureStatistics/{id}",
    urlParameters: [
        Parameters.id0
    ],
    responses: {
        200: {
            bodyMapper: Mappers.AdventureStatistics
        },
        401: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=adventureStatisticsOperations.js.map
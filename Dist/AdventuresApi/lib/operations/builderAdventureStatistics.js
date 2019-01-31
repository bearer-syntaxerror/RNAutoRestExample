"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/builderAdventureStatisticsMappers");
const Parameters = require("../models/parameters");
/** Class representing a BuilderAdventureStatistics. */
class BuilderAdventureStatistics {
    /**
     * Create a BuilderAdventureStatistics.
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
    removeDuplicateLogs(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, removeDuplicateLogsOperationSpec, callback);
    }
}
exports.BuilderAdventureStatistics = BuilderAdventureStatistics;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec = {
    httpMethod: "GET",
    path: "api/builder/AdventureStatistics/{id}",
    urlParameters: [
        Parameters.id0
    ],
    queryParameters: [
        Parameters.adventurePlayerCount,
        Parameters.geocachePlayerCount
    ],
    responses: {
        200: {
            bodyMapper: Mappers.AdventureStatistics
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const removeDuplicateLogsOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/AdventureStatistics/RemoveDuplicateLogs",
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
//# sourceMappingURL=builderAdventureStatistics.js.map
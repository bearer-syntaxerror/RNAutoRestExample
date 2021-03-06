"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/adventuresMappers");
const Parameters = require("../models/parameters");
/** Class representing a Adventures. */
class Adventures {
    /**
     * Create a Adventures.
     * @param {AdventuresApiClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    search(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, searchOperationSpec, callback);
    }
    enterInviteCode(inviteCode, options, callback) {
        return this.client.sendOperationRequest({
            inviteCode,
            options
        }, enterInviteCodeOperationSpec, callback);
    }
    getAdventureIdBySmartLink(smartLink, options, callback) {
        return this.client.sendOperationRequest({
            smartLink,
            options
        }, getAdventureIdBySmartLinkOperationSpec, callback);
    }
    getAdventureBasicInfo(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, getAdventureBasicInfoOperationSpec, callback);
    }
    get(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, getOperationSpec, callback);
    }
}
exports.Adventures = Adventures;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const searchOperationSpec = {
    httpMethod: "GET",
    path: "Api/Adventures/Search",
    queryParameters: [
        Parameters.optionsoriginlatitude,
        Parameters.optionsoriginlongitude,
        Parameters.optionsoriginaltitude
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
                            className: "AdventureModel"
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
const enterInviteCodeOperationSpec = {
    httpMethod: "POST",
    path: "Api/Adventures/EnterInviteCode",
    requestBody: {
        parameterPath: "inviteCode",
        mapper: {
            required: true,
            serializedName: "inviteCode",
            type: {
                name: "String"
            }
        }
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Uuid"
                }
            }
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const getAdventureIdBySmartLinkOperationSpec = {
    httpMethod: "POST",
    path: "Api/Adventures/GetAdventureIdBySmartLink",
    requestBody: {
        parameterPath: "smartLink",
        mapper: {
            required: true,
            serializedName: "smartLink",
            type: {
                name: "String"
            }
        }
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Uuid"
                }
            }
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const getAdventureBasicInfoOperationSpec = {
    httpMethod: "POST",
    path: "Api/Adventures/GetAdventureBasicInfo",
    requestBody: {
        parameterPath: "id",
        mapper: {
            required: true,
            serializedName: "id",
            type: {
                name: "Uuid"
            }
        }
    },
    responses: {
        200: {
            bodyMapper: Mappers.AdventureBasicInfoModel
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
const getOperationSpec = {
    httpMethod: "GET",
    path: "api/Adventures/{id}",
    urlParameters: [
        Parameters.id0
    ],
    responses: {
        200: {
            bodyMapper: Mappers.AdventureModel
        },
        401: {},
        404: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=adventures.js.map
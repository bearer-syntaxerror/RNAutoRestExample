"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const Mappers = require("../models/builderAdventuresMappers");
const Parameters = require("../models/parameters");
/** Class representing a BuilderAdventures. */
class BuilderAdventures {
    /**
     * Create a BuilderAdventures.
     * @param {AdventuresApiClientContext} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    getAll(options, callback) {
        return this.client.sendOperationRequest({
            options
        }, getAllOperationSpec, callback);
    }
    post(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, postOperationSpec, callback);
    }
    get(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, getOperationSpec, callback);
    }
    put(id, model, options, callback) {
        return this.client.sendOperationRequest({
            id,
            model,
            options
        }, putOperationSpec, callback);
    }
    deleteMethod(id, options, callback) {
        return this.client.sendOperationRequest({
            id,
            options
        }, deleteMethodOperationSpec, callback);
    }
    updateGeocacheIndex(id, oldIndex, newIndex, options, callback) {
        return this.client.sendOperationRequest({
            id,
            oldIndex,
            newIndex,
            options
        }, updateGeocacheIndexOperationSpec, callback);
    }
    assignGeocacheToAdventure(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, assignGeocacheToAdventureOperationSpec, callback);
    }
    removeGeocacheFromAdventure(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, removeGeocacheFromAdventureOperationSpec, callback);
    }
    cloneAdventure(model, options, callback) {
        return this.client.sendOperationRequest({
            model,
            options
        }, cloneAdventureOperationSpec, callback);
    }
}
exports.BuilderAdventures = BuilderAdventures;
// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getAllOperationSpec = {
    httpMethod: "GET",
    path: "api/builder/adventures",
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
const postOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/adventures",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.AdventureModel, { required: true })
    },
    responses: {
        201: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Uuid"
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
    path: "api/builder/adventures/{id}",
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
const putOperationSpec = {
    httpMethod: "PUT",
    path: "api/builder/adventures/{id}",
    urlParameters: [
        Parameters.id0
    ],
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.AdventureModel, { required: true })
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Object"
                }
            }
        },
        204: {},
        401: {},
        default: {}
    },
    serializer
};
const deleteMethodOperationSpec = {
    httpMethod: "DELETE",
    path: "api/builder/adventures/{id}",
    urlParameters: [
        Parameters.id0
    ],
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Object"
                }
            }
        },
        204: {},
        401: {},
        default: {}
    },
    serializer
};
const updateGeocacheIndexOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/adventures/UpdateGeocacheIndex",
    queryParameters: [
        Parameters.id0,
        Parameters.oldIndex,
        Parameters.newIndex
    ],
    responses: {
        200: {},
        401: {},
        default: {}
    },
    serializer
};
const assignGeocacheToAdventureOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/adventures/AssignGeocacheToAdventure",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.AssignGeocacheToAdventureModel, { required: true })
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Object"
                }
            }
        },
        204: {},
        401: {},
        default: {}
    },
    serializer
};
const removeGeocacheFromAdventureOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/adventures/RemoveGeocacheFromAdventure",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.RemoveGeocacheFromAdventureModel, { required: true })
    },
    responses: {
        200: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Object"
                }
            }
        },
        204: {},
        401: {},
        default: {}
    },
    serializer
};
const cloneAdventureOperationSpec = {
    httpMethod: "POST",
    path: "api/builder/adventures/CloneAdventure",
    requestBody: {
        parameterPath: "model",
        mapper: Object.assign({}, Mappers.CloneAdventureModel, { required: true })
    },
    responses: {
        201: {
            bodyMapper: {
                serializedName: "parsedResponse",
                type: {
                    name: "Uuid"
                }
            }
        },
        401: {},
        default: {}
    },
    serializer
};
//# sourceMappingURL=builderAdventures.js.map
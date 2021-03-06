"use strict";
/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("@azure/ms-rest-js");
const packageName = "";
const packageVersion = "";
class AdventuresApiClientContext extends msRest.ServiceClient {
    /**
     * Initializes a new instance of the AdventuresApiClientContext class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param [options] The parameter options
     */
    constructor(credentials, options) {
        if (credentials === null || credentials === undefined) {
            throw new Error('\'credentials\' cannot be null.');
        }
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            const defaultUserAgent = msRest.getDefaultUserAgentValue();
            options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
        }
        super(credentials, options);
        this.baseUri = options.baseUri || this.baseUri || "https://labs-api-staging.geocaching.com";
        this.requestContentType = "application/json; charset=utf-8";
        this.credentials = credentials;
    }
}
exports.AdventuresApiClientContext = AdventuresApiClientContext;
//# sourceMappingURL=adventuresApiClientContext.js.map
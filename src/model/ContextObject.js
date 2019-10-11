const uuid = require('uuid/v1');

export class ContextObject {
    constructor(user, authToken, endpoint, typeOfRequest, body) {
        this.transactionId = uuid();
        this.user = user;
        this.authToken = authToken;
        this.endpoint = endpoint;
        this.typeOfRequest = typeOfRequest;
        this.body = body;
    }

    getTransactionId() {
        return this.transactionId;
    }

    getUser() {
        return this.user;
    }

    getAuthToken() {
        return this.authToken;
    }
    
    getEndpoint() {
        return this.endpoint;
    }

    getTypeOfRequest() {
        return this.typeOfRequest;
    }

    getBody() {
        return this.body;
    }

    setUser(user) {
        this.user = user;
    }

    setAuthToken(token) {
        this.authToken = token;
    }

    setEndpoint(endpoint) {
        this.endpoint = endpoint;
    }

    setTypeOfRequest(request) {
        this.typeOfRequest = request;
    }

    setBody(body) {
        this.body = body;
    }
}
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 0] = "GET";
    RequestType[RequestType["POST"] = 1] = "POST";
    RequestType[RequestType["PUT"] = 2] = "PUT";
    RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType || (RequestType = {}));
console.log(RequestType.DELETE);

import util from "util";
export default (function (restClient) {
    var module = {};
    module.list = function (categoryId) {
        var endpointUrl = util.format('/categories/%d/products', categoryId);
        return restClient.get(endpointUrl);
    };
    return module;
});

import util from "util";
export default (function (restClient) {
    var module = {};
    module.list = function (searchCriteria) {
        var query = 'searchCriteria=' + searchCriteria;
        var endpointUrl = util.format('/products?%s', query);
        return restClient.get(endpointUrl);
    };
    module.renderList = function (searchCriteria, currencyCode = 'USD', storeId = 1) {
        var query = 'searchCriteria=' + searchCriteria;
        var endpointUrl = util.format('/products-render-info?%s&storeId=%d&currencyCode=' + encodeURIComponent(currencyCode), query, storeId);
        return restClient.get(endpointUrl);
    };
    module.create = function (productAttributes) {
        return restClient.post('/products', productAttributes);
    };
    module.update = function (productSku, productAttributes) {
        var endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
        return restClient.put(endpointUrl, productAttributes);
    };
    module.delete = function (productSku) {
        var endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
        return restClient.delete(endpointUrl);
    };
    return module;
});

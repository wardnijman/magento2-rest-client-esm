import util from "util";
export default (function (restClient) {
    var module = {};
    module.countries = function () {
        var endpointUrl = util.format('/directory/countries');
        return restClient.get(endpointUrl);
    };
    module.currency = function () {
        var endpointUrl = util.format('/directory/currency');
        return restClient.get(endpointUrl);
    };
    return module;
});

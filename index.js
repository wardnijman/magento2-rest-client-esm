import { RestClient as RestClient$0 } from "./lib/rest_client.js";
import categories from "./lib/categories.js";
import attributes from "./lib/attributes.js";
import products from "./lib/products.js";
import productMedia from "./lib/product_media.js";
import categoryProducts from "./lib/category_products.js";
import configurableChildren from "./lib/configurable_children.js";
import configurableOptions from "./lib/configurable_options.js";
import taxRates from "./lib/tax_rates.js";
import taxRules from "./lib/tax_rules.js";
import stockItems from "./lib/stock_items.js";
import customers from "./lib/customers.js";
import directory from "./lib/directory.js";
import cart from "./lib/cart.js";
import orders from "./lib/orders.js";
import reviews from "./lib/reviews.js";
'use strict';
var RestClient = { RestClient: RestClient$0 }.RestClient;
const MAGENTO_API_VERSION = 'V1';
export const Magento2Client = function (options) {
    var instance = {
        addMethods(key, module) {
            var client = RestClient(options);
            if (module) {
                if (this[key])
                    this[key] = Object.assign(this[key], module(client));
                else
                    this[key] = module(client);
            }
        }
    };
    options.version = MAGENTO_API_VERSION;
    var client = RestClient(options);
    instance.attributes = attributes(client);
    instance.categories = categories(client);
    instance.products = products(client);
    instance.productMedia = productMedia(client);
    instance.categoryProducts = categoryProducts(client);
    instance.configurableChildren = configurableChildren(client);
    instance.configurableOptions = configurableOptions(client);
    instance.stockItems = stockItems(client);
    instance.taxRates = taxRates(client);
    instance.taxRules = taxRules(client);
    instance.customers = customers(client);
    instance.cart = cart(client);
    instance.orders = orders(client);
    instance.directory = directory(client);
    instance.reviews = reviews(client);
    return instance;
};

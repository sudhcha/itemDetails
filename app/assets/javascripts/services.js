'use strict';

/** itemModel service, provides chat rooms (could as well be loaded from server) */
angular.module('itemDetails.services', []).service('itemModel', function () {
    var getOptions = function () {
        return [ {name: 'Assortment', value: 'assortment'}, {name: 'Price', value: 'price'} ];
    };
    return { getOptions: getOptions };
});
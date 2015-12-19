(function (enplug) {
    'use strict';

    var methodPrefix = 'account';

    /**
     * @class
     * @extends Sender
     */
    function AccountSender() {

        // Call parent constructor
        enplug.classes.Sender.call(this, methodPrefix);

        this.getAccount = function (onSuccess, onError) {
            return this.method({
                name: 'getAccount',
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.getDisplayGroup = function (onSuccess, onError) {
            return this.method({
                name: 'getDisplay',
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.getInstances = function (accountId, onSuccess, onError) {
            this.validate(accountId, 'string', '');
            return this.method({
                name: 'getInstances',
                params: accountId,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.getAssets = function (onSuccess, onError) {
            return this.method({
                name: 'getAssets',
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.getDefaultAssets = function (onSuccess, onError) {
            return this.method({
                name: 'getDefaultAssets',
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.createAsset = function (name, value, onSuccess, onError) {
            this.validate(name, 'string', '');
            this.validate(value, 'object', '');
            return this.method({
                name: 'createAsset',
                params: [name, value],
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.createAssetFromDefault = function (defaultAssetId, onSuccess, onError) {
            this.validate(defaultAssetId, 'string', '');
            return this.method({
                name: 'createAssetFromDefault',
                params: defaultAssetId,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.updateAsset = function (id, value, onSuccess, onError) {
            this.validate(id, 'string', '');
            this.validate(value, 'object', '');
            return this.method({
                name: 'updateAsset',
                params: [id, value],
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.bulkCreateAssets = function (assets, onSuccess, onError) {
            this.validate(assets, 'array', '');
            return this.method({
                name: 'bulkCreateAssets',
                params: assets,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.bulkUpdateAssets = function (assets, onSuccess, onError) {
            this.validate(assets, 'array', '');
            return this.method({
                name: 'bulkUpdateAssets',
                params: assets,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.bulkRemoveAssets = function (assetIds, onSuccess, onError) {
            this.validate(assetIds, 'array', '');
            return this.method({
                name: 'bulkRemoveAssets',
                params: assetIds,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.removeAsset = function (id, onSuccess, onError) {
            this.validate(id, 'string', '');
            return this.method({
                name: 'removeAsset',
                params: [id],
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.getThemes = function (onSuccess, onError) {
            return this.method({
                name: 'getThemes',
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.createTheme = function (newTheme, onSuccess, onError) {
            this.validate(newTheme, 'object', '');
            return this.method({
                name: 'createTheme',
                params: newTheme,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.removeTheme = function (themeId, onSuccess, onError) {
            this.validate(themeId, 'string', '');
            return this.method({
                name: 'removeTheme',
                params: themeId,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        this.activateTheme = function (themeId, onSuccess, onError) {
            this.validate(themeId, 'string', '');
            return this.method({
                name: 'activateTheme',
                params: themeId,
                successCallback: onSuccess,
                errorCallback: onError
            });
        };

        /**
         * @deprecated
         */
        this.getDisplay = this.getDisplayGroup;
    }

    AccountSender.prototype = Object.create(enplug.classes.Sender.prototype);

    enplug.classes.AccountSender = AccountSender;
    enplug.account = new AccountSender();
}(window.enplug));

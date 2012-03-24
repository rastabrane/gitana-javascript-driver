(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.AutoClientMapping = Gitana.AbstractPlatformObject.extend(
    /** @lends Gitana.AutoClientMapping.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractPlatformObject
         *
         * @class AutoClientMapping
         *
         * @param {Gitana.WebHost} webhost
         * @param [Object] object json object (if no callback required for populating)
         */
        constructor: function(webhost, object)
        {
            this.base(webhost.getPlatform(), object);

            this.objectType = "Gitana.AutoClientMapping";


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // PRIVILEGED METHODS
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            /**
             * Gets the Gitana Web Host object.
             *
             * @inner
             *
             * @returns {Gitana.WebHost} The Gitana Web Host object
             */
            this.getWebHost = function() { return webhost; };

            /**
             * Gets the Gitana Web Host id.
             *
             * @inner
             *
             * @returns {String} The Gitana Web Host id
             */
            this.getWebHostId = function() { return webhost.getId(); };
        },

        /**
         * @OVERRIDE
         */
        getUri: function()
        {
            return "/webhosts/" + this.getWebHostId() + "/autoclientmappings/" + this.getId();
        },

        getMappingUri: function()
        {
            return this.get("uri");
        },

        getMappingApplicationId: function()
        {
            return this.get("applicationId");
        },

        getMappingClientKey: function()
        {
            return this.get("clientKey");
        }
    });

})(window);

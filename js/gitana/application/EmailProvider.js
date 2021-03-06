(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.EmailProvider = Gitana.AbstractPlatformObject.extend(
    /** @lends Gitana.EmailProvider.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractPlatformObject
         *
         * @class EmailProvider
         *
         * @param {Gitana.Application} application
         * @param [Object] object json object (if no callback required for populating)
         */
        constructor: function(application, object)
        {
            this.base(application.getPlatform(), object);

            this.objectType = function() { return "Gitana.EmailProvider"; };


            //////////////////////////////////////////////////////////////////////////////////////////////
            //
            // PRIVILEGED METHODS
            //
            //////////////////////////////////////////////////////////////////////////////////////////////

            /**
             * Gets the Gitana Application object.
             *
             * @inner
             *
             * @returns {Gitana.Application} The Gitana Application object
             */
            this.getApplication = function() { return application; };

            /**
             * Gets the Gitana Application id.
             *
             * @inner
             *
             * @returns {String} The Gitana Application id
             */
            this.getApplicationId = function() { return application.getId(); };
        },

        /**
         * @override
         */
        clone: function()
        {
            return new Gitana.EmailProvider(this.getApplication(), this);
        },

        /**
         * @OVERRIDE
         */
        getType: function()
        {
            return Gitana.TypedIDConstants.TYPE_EMAIL_PROVIDER;
        },

        /**
         * @OVERRIDE
         */
        getUri: function()
        {
            return "/applications/" + this.getApplicationId() + "/emailproviders/" + this.getId();
        },

        /**
         * Sends the given email using this email provider.
         *
         * @param email
         * @return {*}
         */
        send: function(email)
        {
            var self = this;

            var emailId = null;
            if (Gitana.isString(email))
            {
                emailId = email;
            }
            else
            {
                emailId = email.getId();
            }

            var uriFunction = function()
            {
                return self.getUri() + "/send?email=" + emailId;
            };

            return this.chainPostEmpty(null, uriFunction);
        },

        /**
         * Tests whether the email provider works.
         *
         * @param from
         * @param to
         * @returns {*}
         */
        test: function(from, to)
        {
            var self = this;

            var uriFunction = function()
            {
                return self.getUri() + "/test?from=" + from + "&to=" + to;
            };

            return this.chainPostEmpty(null, uriFunction);
        }

    });

})(window);

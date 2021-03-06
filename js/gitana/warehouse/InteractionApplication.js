(function(window)
{
    var Gitana = window.Gitana;
    
    Gitana.InteractionApplication = Gitana.AbstractReportableWarehouseObject.extend(
    /** @lends Gitana.InteractionApplication.prototype */
    {
        /**
         * @constructs
         * @augments Gitana.AbstractReportableWarehouseObject
         *
         * @class InteractionApplication
         *
         * @param {Gitana.Warehouse} warehouse
         * @param [Object] object json object (if no callback required for populating)
         */
        constructor: function(warehouse, object)
        {
            this.base(warehouse, object);

            this.objectType = function() { return "Gitana.InteractionApplication"; };
            this.interactionObjectTypeId = "application";
        },

        /**
         * @OVERRIDE
         */
        getType: function()
        {
            return Gitana.TypedIDConstants.TYPE_INTERACTION_APPLICATION;
        },

        /**
         * @OVERRIDE
         */
        getUri: function()
        {
            return "/warehouses/" + this.getWarehouseId() + "/applications/" + this.getId();
        },

        /**
         * @override
         */
        clone: function()
        {
            return this.getFactory().interactionApplication(this.getWarehouse(), this);
        },

        getTimestampStart: function()
        {
            return this.get("timestamp")["start"];
        },

        getTimestampEnd: function()
        {
            return this.get("timestamp")["end"];
        },



        //////////////////////////////////////////////////////////////////////////////////////////
        //
        // INTERACTIONS
        //
        //////////////////////////////////////////////////////////////////////////////////////////

        /**
         * Lists the interactions.
         *
         * @param pagination
         *
         * @chained interaction map
         */
        listInteractions: function(pagination)
        {
            return this.queryInteractions(null, pagination);
        },

        /**
         * Queries for interactions.
         *
         * @chained interaction map
         *
         * @param {Object} query
         * @param [Object] pagination pagination (optional)
         */
        queryInteractions: function(query, pagination)
        {
            if (!query)
            {
                query = {};
            }
            query["interactionApplicationId"] = this.getId();

            return this.subchain(this.getWarehouse()).queryInteractions(query, pagination);
        },

        /**
         * Lists the sessions.
         *
         * @param pagination
         *
         * @chained interaction map
         */
        listSessions: function(pagination)
        {
            return this.querySessions(null, pagination);
        },

        /**
         * Queries for sessions.
         *
         * @chained interaction map
         *
         * @param {Object} query
         * @param [Object] pagination pagination (optional)
         */
        querySessions: function(query, pagination)
        {
            if (!query)
            {
                query = {};
            }
            query["interactionApplicationId"] = this.getId();

            return this.subchain(this.getWarehouse()).queryInteractionSessions(query, pagination);
        },

        /**
         * Lists the pages.
         *
         * @param pagination
         *
         * @chained interaction map
         */
        listPages: function(pagination)
        {
            return this.queryPages(null, pagination);
        },

        /**
         * Queries for pages.
         *
         * @chained interaction map
         *
         * @param {Object} query
         * @param [Object] pagination pagination (optional)
         */
        queryPages: function(query, pagination)
        {
            if (!query)
            {
                query = {};
            }
            query["interactionApplicationId"] = this.getId();

            return this.subchain(this.getWarehouse()).queryInteractionPages(query, pagination);
        }

    });

})(window);

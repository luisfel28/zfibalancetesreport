sap.ui.define([

    "sap/ui/core/mvc/Controller"
    
    ], function(Controller){
            "use strict";
        var oController ={
            onInit:function(){},

            onPress: function(evt) {
                var sServiceURL = this.getView().getModel().sServiceUrl;
                var vGuid = this.getView().getModel().getProperty("guid", evt.getSource().getBindingContext());
                var vURLPrefix = window.location.href.split("/")[2];
                var tab = window.open("https://" + vURLPrefix + "/sap/opu/odata/SAP/ZGW_BALANCETES_SRV/zentCSVSet(guid'" + vGuid + "')/$value","_blank");
            }, 

            adaptNavigationParameterExtension:function(oSelectionVariant, oObjectInfo){}
            };
            return oController; 

});
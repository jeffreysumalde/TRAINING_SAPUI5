sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("simpleform.controller.View1", {
        onInit() {
       },
        
       onPress: function(){
        var oForm = this.byId("form0");
        var getname = this.byId('select1');
        var value = getname.setSelectedKey(null); //Clear dropdown
        oForm.getContent().forEach(function(control) {
            if (control.isA("sap.m.Input")) {
                control.setValue(""); // Clears all input fields
            }
        })
       }
        
    });
});
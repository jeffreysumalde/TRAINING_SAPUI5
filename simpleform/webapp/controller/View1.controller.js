sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("simpleform.controller.View1", {
        onInit() {
       },
        
        onPress: function () {
            var formEL = document.getElementById('form0');
            if (formEL) {              
           // formEL.reset();
            formEL.reset();        
            }
        },

        onPress: function (evt) {
            var name = document.getElementById('name');
            if (name) {  
           name.setValue("");
            }
        }    
        
    });
});
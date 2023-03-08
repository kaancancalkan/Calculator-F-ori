sap.ui.define(
  ["sap/ui/core/mvc/Controller",  "sap/ui/model/json/JSONModel"],
 
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("fiori.calculator.controller.Main", {
      onInit: function () {},
      calculate: function () {
        var input1 = this.byId("input1"),
          input2 = this.byId("input2"),
          operator = this.byId("Operator"),
          sValue = parseInt(input1.getValue(),10),
          sValue2 = parseInt(input2.getValue(),10),
          sOperator = operator.getSelectedKey(),
          iResult = 0;
        switch(sOperator){
            case '+':
                iResult = sValue + sValue2;
            break ;
            case '-':
                iResult = sValue -  sValue2;
            break ;  
            case '/':
                iResult = sValue / sValue2;
            break ;  
            case '*':
                iResult = sValue * sValue2;
            break ;      
        }
        alert("The Result is" + iResult);
      },
    });
  }
);

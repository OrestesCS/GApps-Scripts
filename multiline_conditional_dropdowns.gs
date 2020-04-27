//This is a function that triggers only on a cell edit

function onEdit(e) {

//We want this to trigger only on the active sheet that has names 'blogposts'
  var sheet = SpreadsheetApp.getActiveSheet();


  if(sheet.getName()=='blogposts'){
    
    var range = e.range;
    
    //After getting the cell edited, we get its value, on what column and on what row it is    
    var val = range.getValue();
    var column = range.getColumn();
    var rowe = range.getRow();  
    
    //We want to trigger changes only when a celll on the sixth column is edited
    if (column==6){
      
    var cell = SpreadsheetApp.getActive().getRange("G"+rowe).clear();  
      
    //Control flow based on column 'Topic'/sixth/F, this will get different ranges of calues from sheet called Values
    if (val == "Operations"){
      var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('C3:C11');
    }
     else if (val == "Development") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('D3:D11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }
     else if (val == "Architecture") {
       var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('E3:E11');
      //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
    }
      else if (val == "Observability_Analysis") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('F3:F11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }  
      else if (val == "Provisioning") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('G3:G11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }
      else if (val == "Runtime") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('H3:H11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }
      else if (val == "Orchestration_Management") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('I3:I11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      } 
      else if (val == "App_Definition_Deployment") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('J3:J11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }      
      else if (val == "Other") {
        var ranges = SpreadsheetApp.getActiveSpreadsheet(). getSheetByName("Values").getRange('K3:K11');
        //var ranges = SpreadsheetApp.getActive().getRange('Z13:Z19');
      }    
    
    //Variable to store WHERE to enter the data validation, will alway be on G column and the row where the first dropdown 
    //was picked so to add this on the right, the rowe part makes it possible to apply this across all rows
    var cell = SpreadsheetApp.getActive().getRange("G"+rowe);
    
    // Builds the range of values depending on the selection of first dropdown lines 20 to 54  
    var rule = SpreadsheetApp.newDataValidation().requireValueInRange(ranges).build();
      
    //Adds the data validations to the cell in question   
    cell.setDataValidation(rule);
    
      
    }
  }


}

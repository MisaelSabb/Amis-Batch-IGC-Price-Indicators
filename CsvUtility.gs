var CsvUtility=new function(){  
  //---------------------------------------------------------
  /**
  * upload CSV Data  to  FIREBASE function     
  * @param  {string} auth token     
  * @param  {string} user uid on firebase
  * @param  {ARRAY} csvData
  */
  //---------------------------------------------------------
  this.elaborateData=function(userToken,uid, values) {
    
    //retrive config
    var batchCSVMappingNode= 'config/batchConfig/igcPriceIndicators/CSVMappingOrderFields';
    var batchCSVMapping = FirebaseConnector.getFireBaseDataParsed(batchCSVMappingNode, userToken);
    
    //the saving node
    var dataNode= 'dataIgcPriceIndicators';
    
    var lenght = values.length;    
    
    //inizialize the json array
    var jsonArray = []
    
   
    
    for(var i=1; i<lenght;i++){
      Logger.log(values[i]);
      //jsonRow
      var jsonRow={};
      Logger.log(batchCSVMapping);
      jsonRow.Date=values[i][batchCSVMapping.Date];
      jsonRow.Indicator_Category=values[i][batchCSVMapping.Indicator_Category];
      jsonRow.Indicator_Category_Code=values[i][batchCSVMapping.Indicator_Category_Code];
      jsonRow.Indicator_Name=values[i][batchCSVMapping.Indicator_Name];
      jsonRow.Indicator_Code=values[i][batchCSVMapping.Indicator_Code];
      jsonRow.Source=values[i][batchCSVMapping.Source];
      jsonRow.Value=values[i][batchCSVMapping.Value];
      jsonRow.Measurement_Unit=values[i][batchCSVMapping.Measurement_Unit];      
      jsonArray.push(jsonRow);
      //break;
    }    
    
    
    //save data in FIREBASE
    FirebaseConnector.writeOnFirebase(jsonArray,dataNode,userToken);
    
  }
  //---------------------------------------------------------
  // END Fetch Sheet Data from FIREBASE function
  //--------------------------------------------------------- 
}

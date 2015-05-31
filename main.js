window.onload = function(){
   $(".splash").slideUp(10000);//Simple Splash Screen

  var op = document.getElementById("outResult");
  var output = [];
  var textToSearch;
  var filesInput = document.getElementById("files");
  var files;   
     
     
  divSearch.addEventListener("click", function(){
    textToSearch = document.getElementById("ipSearch").value.toLowerCase();
    
        document.getElementById("files").click();
  });
  
  ipSearch.addEventListener("blur", function(){
    textToSearch = document.getElementById("ipSearch").value.toLowerCase();
    if(textToSearch!==""){
      output.length = 0;
    op.innerHTML="";
      for (var i = 0; i < files.length; i++) {
          setupReader(files[i]);
      }
    }
  });
  
  filesInput.addEventListener("change", function(event) {
    files = event.target.files;
    output.length = 0;
    op.innerHTML="";
    
      for (var i = 0; i < files.length; i++) {
          setupReader(files[i]);
      }
    
  });   
     
  function setupReader(file) {
      var name = file.name;
      var type = file.type;
      var reader = new FileReader(); 
       
      reader.onload = function(e) {  
         if(file.type.match('text.*'))
        {
          // get file content 
          if(textToSearch!==""){
          var text = reader.result.toLowerCase(); 
          if(text.includes(textToSearch)){
            output.push("<li class='list-group-item'><span class='badge green'><span class='glyphicon glyphicon-ok'></span></span><strong>" + name + "</strong></li>");
          }else{
            output.push("<li class='list-group-item'><span class='badge red'><span class='glyphicon glyphicon-remove'></span></span><strong>" + name + "</strong></li>");
          }
          }else{
            output.push("<li class='list-group-item'><span class='badge blue'><span class='glyphicon glyphicon-search'></span></span><strong>" + name + "</strong></li>");
          }
          op.innerHTML = '<ul class="list-group">' + output.join('') + '</ul>';
        }else{
          
           output.push("<li class='list-group-item'><span class='badge blue'><span class='glyphicon glyphicon-search'></span></span><strong>" + name + "</strong>   <span class='redcolor'> Invalid file type:</span> <br/> <span style='font-size: 10px;' class='redcolor'>" + type + "</span></li>");
          op.innerHTML = '<ul class="list-group">' + output.join('') + '</ul>';
          
        }
      
      };
      reader.readAsText(file, "UTF-8");
       
  }   
};
 










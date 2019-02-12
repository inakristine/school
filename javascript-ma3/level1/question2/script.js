var myObj, index, outPut = "";
    
    
myObj = {
  
  "video": [{"id":"12312412312",
     "name":"Ecuaciones Diferenciales", "url":"/video/math/edo/12312412312",
     "author":{
         "data":[{
             "name_author":"Alejandro Morales",
             "url":"/author/alejandro-morales",
             "type":"master"
         }]
     }
    }]
}

    
for (index in myObj.video) {
    outPut += myObj.video[index].id +"<br>"+
              myObj.video[index].name +"<br>"+
              myObj.video[index].url +"<br>";
 }
document.getElementById("arrayText").innerHTML = outPut;
    
document.getElementById("newarrayText").innerHTML = myObj.video[index].author.data[index].name_author + "<br>" + myObj.video[index].author.data[index].url + "<br>" + myObj.video[index].author.data[index].type + "<br>";
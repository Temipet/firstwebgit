function validateForm(){
    var x= document.forms["myForm"]
    ["fname"].values;
    if(x==null||x==""){
        alert("Name must be filled out");
        return false;
    }
}
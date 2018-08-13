jQuery.noConflict();
$(document).ready(function(){
    $("#defaultcontent").click(function(){
        $("#customer-care-content").load("defaultcontent.txt");
    });
});
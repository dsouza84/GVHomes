jQuery.noConflict();
jQuery(document).ready(function(){
  jQuery("#defaultcontent").on('click touchstart', function(){
    jQuery("#customer-care-content").load("https://s3-us-west-1.amazonaws.com/gvhomes/files/customer_care/defaultcontent.txt");
  });
});
jQuery(document).ready(function(){
  jQuery("#caring").on('click touchstart', function(){
    jQuery("#customer-care-content").load("https://s3-us-west-1.amazonaws.com/gvhomes/files/customer_care/caringforyourhome.txt");
  });
});
jQuery(document).ready(function(){
  jQuery("#howto").on('click touchstart', function(){
    jQuery("#customer-care-content").load("https://s3-us-west-1.amazonaws.com/gvhomes/files/customer_care/howto.txt");
  });
});
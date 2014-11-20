$(document).ready(function () {
    $('#tabs')
    .tabs()
    .addClass('ui-tabs-vertical ui-helper-clearfix');

    customerData();
  });

function customerData(){
	$.ajax({
		url : "customer.xml",
		dataType : "xml",
		success : function(data) {

			$(data).find("employee").each(function(){

				var addInfo ='<li>Name: '+$(this).find("name").text()+'</li>'
                       		'<li>Age: '+$(this).find("age").text()+'</li>'
                       		'<li>Company: '+$(this).find("company").text()+'</li>';
 
			  				$("ul").append(addInfo);
			});
		},
		error: function() { 
			$("ul").children().remove(); 
			$("ul").append("<li>There was an error in ur code!</li>"); 
		}
	});
}
alert("Hello! I am an alert box!")
 $(document).ready(function() {              
	          	  $('#h').hide()
   
								   $('#bt1').click(function() {
									 $('#h').show()
                   })
			       
				    $('#bt').click(function() {
                          $("#bt").hide()
                   })
                         $('#bt1').click(function() {
									 $('#bt').show()
                   })
});

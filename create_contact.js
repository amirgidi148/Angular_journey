$(document).ready(function() {
			function createContact(json) {
			 alert(JSON.stringify(json));
			}

			$('#createcontact').click(function(e) {
				$.ajax({
				     url:"http://rivkas-redmine.herokuapp.com/contacts/test?project_id=test&"+$('input').serialize(),
				     dataType: 'jsonp',
				     success:function(json){
				     	$('#success').html('Contact Added Successfully');
				     },
				     error:function(e){
				     	$('#success').html('Error adding contact - TRY AGAIN');
				     	console.log(e);
				         alert("Error");
				     },
				});
			});
		});

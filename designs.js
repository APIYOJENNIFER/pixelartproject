function makeGrid(rows, cols) {

	
	$('tr').remove(); 

	for (var i = 1; i <= rows; i++) {
		$('#pixelCanvas').append('<tr id=table' + i  + '></tr>');

		for (var j = 1; j <= cols; j++) {
			$('tr:last').append('<td></td>');

			
			$('td').attr('class', 'cells');
		}
	}	

	
	$('.cells').click(function(event) {
		var paint = $('#colorPicker').val();
		$(event.target).css('background-color',paint);
	});
}



$('#sizePicker').submit(function (grid) {
	
	grid.preventDefault(); 

	
	var height = $('#inputHeight').val();
	var width = $('#inputWeight').val();

	
	makeGrid(height, width);		
});




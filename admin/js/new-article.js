$(document).ready(function() {
	// $(".chosen-select").chosen();  this single line already works
	var config = {
		'.chosen-select': {},
		'.chosen-select-deselect': {
			allow_single_deselect: true
		},
		'.chosen-select-no-single': {
			disable_search_threshold: 10
		},
		'.chosen-select-no-result': {
			no_result_text: 'Oops, nothing found!'
		},
		'.chosen-select-width': {
			width: '95%'
		}
	};
	for (var selector in config) {
		$(selector).chosen(config[selector]);
	}

	//for summernote
	$('.summernote').summernote({
		height:200
	});
});

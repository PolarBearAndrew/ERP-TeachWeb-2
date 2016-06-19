
$(document).ready(docReady);

function docReady() {

	var id = $.UrlParam("id");
	var index = id - 1;

	if(index >= vedios.length) {
		return false;
	}

	if(id) {

		$('#notify').remove();
		$('#selector').val(id);

		// shoe vedio
		var v = vedios[index];
		$('#vedioTitle').text(v.title);
		$('#vedioSubTitle').text(v.subTitle);
		$('#vedioTag').text(v.tag);
		$('#vedioIframe').attr('src', v.url);
		// console.log('vedio', v);

		// show all
		$('#wrapper').css('display', 'block');
	}
	return false;
}

$('html').on('change', '#selector', function(event){
	var value = $(event.target).val();
	// console.log('value', value);
	var page = location.pathname.substring(location.pathname.lastIndexOf('/'), location.pathname.length);
	window.location = "." + page + "?id=" + value;
	return false;
});

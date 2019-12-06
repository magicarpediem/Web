$("ul").on("click", "li", function () {
	$(this).toggleClass("crossedOff");
});

$("ul").on("click", "span", function () {
	$(this).parent().fadeOut(500, function () {
		$(this).remove()
	})
	event.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
	if (e.which === 13) {
		var inputText = $(this).val();
		$(this).val("");
		$("ul").append("<li class=\"list-group-item\"><span><i class=\"fas fa - trash\"></i></span> " + inputText + "</li>");
	}
});
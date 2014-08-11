$(function(){
	$('#carousel').on('slide.bs.carousel', function () {
		var self = $(this);
		var id = self.find(".item.active").attr("id");
		$(".subitem").removeClass('active');
		$("#subitem_" + id).addClass("active");
	});
	$("body").on("click", '.carousel-mover', function(){
		var self = $(this);
		var index = self.attr("data-index");
		$("#carousel").carousel(parseInt(index));
		$('.carousel-mover').removeClass("active");
		console.log(self);
		self.addClass("active");
	});
});


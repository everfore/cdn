$(function() {
	$("pre").each(function(index, elem) {
		var content = $(this).text();
		console.log(content);
		var numctx = "<div class='line'>";
		var lines = content.split("\n");
		var result = '';
		var ctx = '<code>';
		if (lines.length<4) {return}
		for (var i = 0; i < lines.length-1; i++) {
			numctx += "<div class='linenum'>" + (i+1) + "</div>";
			var c = lines[i];
			if (c=="") {c="<br>";}
			if (i%2==0) {
				ctx+= "<div class='lineA'>" + c+"</div>";
			}else{
				ctx+= "<div class='lineB'>" + c+"</div>";
			}
		}
		numctx += "</div>";
		ctx += "</code>"
		result += numctx + ctx;
		$(this).html(result);
	});
	
})
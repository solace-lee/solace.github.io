var database = {};

$(window).load(function() {
	$.getJSON("jason/database.json", function(data) {
		database = data;
		var $left = $('.left');
		if(database.length < 5) {
			$.each(database, function(index, info) {
				var article = '<div class="article"><div class="title"><a href="">' + info['title'] + '</a></div><div class="info"><div class="time">' + info['date'] + '</div><div class="tag">' + info['label'] + '</div></div><div class="txt">' + info['content'] + '</div><div class="more" onclick="more(this)">MORE ></div><div class="hide" onclick="hide(this)">HIDE ></div></div>';
				$left.append(article);
			});
		} else {
			for(var i = 0; i < 5; i++) {
//				console.log(database[i].title);
				var limit = '<div class="article"><div class="title"><a href="">' + database[i].title + '</a></div><div class="info"><div class="time">' + database[i].date + '</div><div class="tag">' + database[i].label + '</div></div><div class="txt">' + database[i].content + '</div><div class="more" onclick="more(this)">MORE ></div><div class="hide" onclick="hide(this)">HIDE ></div></div>';
				$left.append(limit);
			}
		}
		//		var line=data[0];
		//		var article='<div class="article"><div class="title"><a href="main.html">node.js入门-1-简介</a></div><div class="info"><div class="time">2018-7-16</div><div class="tag">node.js</div></div><div class="txt">Node.js 前言 Node.js之父 Ryan Dahl : 2009年推出Node.js, 2012年退出Node.js, 转战Go语言 Node.js出现的背景</div><div class="more" onclick="more(this)">MORE ></div><div class="hide" onclick="hide(this)">HIDE ></div></div>';
		//		$left.append(article);
		//		$.each(data, function(infoindex,info) {
		//			$left.append('<div class="title"><a href="'+info["code_link"]+'">'+info["title"]+'</a></div>');
		//		});
	})
})

$('.minimenu').click(function() {
	$('.minimenu').css('display', 'none');
})

function menu() {
	$('.minimenu').css('display', 'block');
}

function more(e) {
	e.style.display = "none";
	$(e).parent().find('.txt').css('display', 'block');
	$(e).parent().find('.hide').css('display', 'block');
}

function hide(e) {
	e.style.display = "none";
	$(e).parent().find('.txt').css('display', '-webkit-box');
	$(e).parent().find('.more').css('display', 'block')
}
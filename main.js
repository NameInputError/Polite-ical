var dataImage = "";
var msg = "";
var lib = "";
var con = "";
var cWords = [];
var customImage = "";
var nImg = false;
var stopParse = false;

$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});

function image() {
	if (dataImage != "") {
		var customImg = document.createElement('img');
		customImg.src = "data:image/png;base64," + dataImage;
		return customImg;
	} else if (nImg == true) {
		var naziImg = document.createElement('img');
		naziImg.src = chrome.extension.getURL('nazi.gif');
		return naziImg;
	} else {
		return false;
	}
}

function letTheCleansingBegin(cType) {
	var img = image();
	if (lib) {
		$(cType + ":contains('obozo')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});

		$(cType + ":contains('libtard')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});

		$(cType + ":contains('odumbo')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('obamanation')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});

		$(cType + ":contains('king obama')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('libs')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('dimocrat')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('obum')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('worst president')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('oblamer')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('owebama')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('barrack hussein')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('libturd')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('lamestream')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		/* this is almost always used pejoratively" */
		$(cType + ":contains('community organizer')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('liberal')").each(function() {
			if ($(this).html().indexOf("retard") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("sheep") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("fuck") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("idiot") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("stupid") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("kool") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
		});
		
		$(cType + ":contains('obama')").each(function() {
			if ($(this).html().indexOf("inept") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("incompetent") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("kenya") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("communist") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("marxist") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("disgrace") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("failure") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
		});
	}
	
	if (con) {
		$(cType + ":contains('teabag')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});

		$(cType + ":contains('teatard')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});

		$(cType + ":contains('republicant')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('republitard')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		
		$(cType + ":contains('tea-bag')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('gun nut')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('faux news')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
		
		$(cType + ":contains('repug')").each(function() {
			if ($(this).html().indexOf("repugs") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
			if ($(this).html().indexOf("repugnants") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
		});
		
		$(cType + ":contains('conservative')").each(function() {
			if ($(this).html().indexOf("idiot") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("stupid") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("fuckin") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			/* for comments about 'drinking the kool-aid' (various spellings) */
			if ($(this).html().indexOf("kool") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("sheep") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
		});
		
		$(cType + ":contains('republican')").each(function() {
			if ($(this).html().indexOf("idiot") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("stupid") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("fuckin") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			/* for comments about 'drinking the kool-aid' (various spellings) */
			if ($(this).html().indexOf("kool") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			if ($(this).html().indexOf("sheep") >= 0) {
				$(this).text(msg);
				if (img) {
					$(this).append(image);
				}
			}
			
		});
	}
	
	for (i = 0; i < cWords.length; i++) {
		var word = cWords[i];
		
		$(cType + ":contains('" + word + "')").each(function() {
			$(this).text(msg);
			if (img) {
				$(this).append(image);
			}
		});
	}
}

function callHandler(site) {
	var cType = "";
	if (site.indexOf('www.youtube.com') > -1) {
		cType = '.Ct';
	} else if (site.indexOf('www.huffingtonpost.com') > -1) {
		cType = '.postText';
	} else if (site.indexOf('www.washingtonpost.com') > -1) {
		cType = '.echo-streamserver-controls-stream-item-text';
	} else {
		cType = 'p';
	}
	letTheCleansingBegin(cType);
}

function main() {
	
	var site = window.location.href;
	callHandler(site);
	// for ajax content with variable loading times
	$(document).on( "click", function() {
		if (stopParse == true) { 
		return; 
		}
		stopParse = true;
		var yCount = 0;
		var timer = setInterval(function() { 
			callHandler(site);
			yCount++;
			if (yCount > 4) {
				stopParse = false;
				clearInterval(timer);
			}
		}, 1000)
	});
}

$(document).ready(function(){         
    chrome.storage.local.get(['msg', 'liberal', 'conservative', 'cWords', 'imgData'], function(items) {
	lib = items.liberal;
	con = items.conservative;
	if (items.msg == 'coulter') {
		msg = "I hate America.";
	} else if (items.msg == "classic") {
		msg = "";
		nImg = true;
	} else if (items.msg == "cImg") {
		dataImage = items.imgData;
		msg = "";
	} else if (items.msg == "blank") {
		msg = "";
	} else {
		msg = items.msg;
	}
	cWords = items.cWords;
	main();
  });
});
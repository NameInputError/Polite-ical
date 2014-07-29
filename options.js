var file = "";
document.getElementById('customMsg').style.display = "none";
document.getElementById('imgfile').style.display = "none";

document.getElementById('msg').addEventListener('click', function() {
	if (document.getElementById('msg').value == 'cMsg') {
	picture.src = "";
	document.getElementById('customMsg').style.display = "inline";
	document.getElementById('hateAmerica').innerHTML = "";
	document.getElementById('imgfile').style.display = "none";
	document.getElementById('previewSpan').style.display = "none";
	}
	if (document.getElementById('msg').value == 'classic') {
	var iconUrl = chrome.extension.getURL("nazi.gif"); 
	picture.src = iconUrl;
	document.getElementById('customMsg').style.display = "none";
	document.getElementById('hateAmerica').innerHTML = "";
	document.getElementById('imgfile').style.display = "none";
	document.getElementById('previewSpan').style.display = "none";
	}
	if (document.getElementById('msg').value == 'coulter') { 
	picture.src = "";
	document.getElementById('customMsg').style.display = "none";
	document.getElementById('hateAmerica').innerHTML = "I hate America. <br><br>";
	document.getElementById('imgfile').style.display = "none";
	document.getElementById('previewSpan').style.display = "none";
	}
	if (document.getElementById('msg').value == 'cImg') { 
	picture.src = "";
	document.getElementById('customMsg').style.display = "none";
	document.getElementById('imgfile').style.display = "inline";
	document.getElementById('hateAmerica').innerHTML = "";
	document.getElementById('previewSpan').style.display = "block";
	}
	if (document.getElementById('msg').value == 'blank') {
	picture.src = "";
	document.getElementById('customMsg').style.display = "none";
	document.getElementById('hateAmerica').innerHTML = "";
	document.getElementById('imgfile').style.display = "none";
	document.getElementById('previewSpan').style.display = "none";
	}
	});
	
function save_options() {
  var isLiberal = document.getElementById('liberal').checked;
  var isConservative = document.getElementById('conservative').checked;
  var msg = document.getElementById('msg').value;
  var customElements = document.getElementsByClassName('cFlags');
  var customArray = [];
  if (msg == 'cMsg') {
	  msg = document.getElementById('customMsg').value;
	}
  
  if (document.getElementById('cFlag').value != "") {
	var nullOffset = 0;
	for (i = 0; i < customElements.length; i++) {
		if (customElements[i].value == "") {
			nullOffset++;
			continue;
		}
		customArray[i - nullOffset] = customElements[i].value;
	}
  }
  
  if (document.getElementById('msg').value != 'cImg') {
	chrome.storage.local.set({
    'imgData': ""
  });
  }
  
  chrome.storage.local.set({
    'liberal': isLiberal,
	'conservative': isConservative,
    'msg': msg,
	'cWords': customArray
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    bubbleStatus: "cheese",
    bubbleMsg: "I hate America."
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
  });
}

window.onload = function()
{
    document.getElementById('save').addEventListener('click', save_options);
}
	
document.getElementById('liberal').addEventListener('click',
    function() {
	document.getElementById('conservative').nextElementSibling.innerHTML = "Gun Nut"
});

document.getElementById('conservative').addEventListener('click',
    function() {
	document.getElementById('liberal').nextElementSibling.innerHTML = "Hippy"
});

document.getElementById('cWords').addEventListener('click', function() {
	var newCustom = document.createElement("input");
	newCustom.type = "text";
	newCustom.className = "cFlags";
	var br = document.createElement("br");
	document.getElementById('status').insertBefore(newCustom);
	document.getElementById('status').insertBefore(br);
});


function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to guess the
    // original format, but be aware the using "image/jpg" will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}


function handleFileSelect(evt) {
	file = event.target.files[0];
	var reader = new FileReader();
	reader.onload = (function(theFile) {
        return function(e) {
			if (document.getElementById('previewSpan')) {
			console.log(document.getElementById('previewSpan'));
			var prev = document.getElementById('previewSpan');
			prev.parentNode.removeChild(prev);
			}
			var span = document.createElement('span');
			span.id = "previewSpan";
            span.innerHTML = ['<br><img class="thumb" id="preview" src="', e.target.result,
				'" title="', escape(theFile.name), '"/>'].join('');
			document.getElementById('list').insertBefore(span, null);
		    var bannerImg = document.getElementById('preview');
			imgData = getBase64Image(bannerImg);
			chrome.storage.local.set({
				'imgData': imgData
			}, function() {
				
			});
        };
    })(file);
    reader.readAsDataURL(file);
}
	
document.getElementById('imgfile').addEventListener('change', handleFileSelect, false);
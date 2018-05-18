var input= document.getElementById('new-comment').value;
$(document).on('keyup',{maxlength} function(e){
	var howLong= $(this),
	maxlength= howLong.attr('maxlength'),
	maxlengthint= parseInt(maxlength),
	twittComment= howLong.val(),
	currentCharacters= howLong.val().length;
	remainCharacters= maxlengthint-currentCharacters,
  span= howLong.prev('label').find('span');
	if(document.addEventListener && !window.requestAnimationFrame){
			if(remainCharacters >= -1){
					remainCharacters =0;
			}
	}
	espan.html(remainCharacters);
	if(!!maxlength) {
	  var notification= howLong.val();
		if(notification.length >= maxlength){
			howLong.removeClass().addClass('red');
			howLong.val(text.substring(0, maxlength));
			e.preventDefault();
		} else if(notification.length < maxlength) {
			howLong.removeClass().addClass('gray');
		}
	}
});

var dataConteiner= document.getElementById('user-info');
var userSaveData= document.getElementById('button');
userSaveData.addEventListener('click', function(e) {
	e.preventDefault();
	var printingInfo= document.getElementById('user-info').value
	if(printingInfo.length == 0 || printingInfo == null) {
	  alert('Debes ingresar tus datos');
	  return false;
	}
		var savingInfo= document.createTextNode('user-info').value;
		var textConteiner= document.createElement('p');
		var newContainer= document.createElement('div');

	textConteiner.appendChild('printingInfo');
	newContainer.appendChild('textConteiner');
	dataConteiner.appendChild('newContainer');

});

/*var button = document.getElementById('coment-save');
button.addEventListener('click', function(){

	var newTwitt = document.getElementById('new-comment').value;
  document.getElementById('new-comment').value = '';

var twitter = document.getElementById('comment-saver-parent');

var newTwitts = document.createElement('div');

if(newTwitt.length == 0 || newTwitt == null) {
  alert('Debes ingresar un mensaje');
  return false;}

var textNewComment = document.createTextNode(newTwitt);

var commentNewConteiner = document.createElement('p');
commentNewConteiner.appendChild(textNewComment);
textNewComment.appendChild(newTwitts);

twitter.appendChild(newTwitts);
});*/

  function get_word() {
  	let num_word = Math.floor(Math.random()*3);
  	return choice[num_word];
  };


    var randoms = words;
function getRandomNum() {
	var rnd = Math.floor(Math.random()*randoms.length);
	var toReturn = randoms[rnd];
	randoms.splice(rnd,1);
	return toReturn;
};





let num_word_1 = getRandomNum(), 

	num_word_2 = getRandomNum(), 

	num_word_3 = getRandomNum();


choice = [num_word_1, num_word_2, num_word_3];


let this_word = get_word();

 
 $('#anser').text(this_word);


let word_1 = num_word_1;

let word_2 = num_word_2;

let word_3 = num_word_3;


let img_1 = 'img/'+word_1+'.jpg';

let img_2 = 'img/'+word_2+'.jpg';

let img_3 = 'img/'+word_3+'.jpg';


im_arr = [img_1, img_2, img_3];


$('.f1').attr('src', img_1);

$('.f2').attr('src', img_2);

$('.f3').attr('src', img_3);



$('.a_hr').attr('href','#');


$('.wert').append("<input id='voice' onclick='responsiveVoice.speak(`" + this_word + "`);' type='button'  value='🔊'/> ");


let a_f_ob = {
	[img_1] :'a_1',
	[img_2] :'a_2',
	[img_3] :'a_3'
};


for (var i = -1; i <= 3; i++) {
	 if (this_word === choice[i]){
	 		
	 			for (var ii = 0 ; ii <= 3; ii++) {
	 				if (im_arr[ii] ==='img/'+this_word+'.jpg') {
	 					
	 				let a_no_trup =  a_f_ob[im_arr[ii]];

	 				$('.' + a_no_trup).attr('href','');
	 				}
	 			};
	 }
};


$('.trans').click(function(){
  $(this).css('background', 'white');
  setTimeout(function qwe() {
    	$('.trans').css('background', 'black')
    },1200);
	// clearTimeout(timesut);
});


$('.ansew_ru').text(rru_words[this_word]);


// function send(w_form) {
// 	let w_en = w_form.en_name.value;
// 	let w_ru = w_form.ru_name.value;
// 	let f_jpg = $("#w_form input[name=file_jpg]").val();
	
// 	if (w_en == '' || w_en == ' ') {
// 		alert('no english wors')
// 		}
// 	else if (w_ru == '' || w_ru == ' ') {
// 		alert('no russan word')
// 		}
// 	else if (f_jpg == '') {
// 		alert('no picture')
// 	}else{}
// }


// words.push($('#e_w').val());
  function get_word() {
  	let num_word = Math.floor(Math.random()*4);
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

	num_word_4 = getRandomNum();


choice = [num_word_1, num_word_2, num_word_3, num_word_4];


let this_word = get_word();

 
 $('#anser').text(this_word);


let word_1 = num_word_1;

let word_2 = num_word_2;

let word_3 = num_word_3;

let word_4 = num_word_4;


let img_1 = 'img/'+word_1+'.jpg';

let img_2 = 'img/'+word_2+'.jpg';

let img_3 = 'img/'+word_3+'.jpg';

let img_4 = 'img/'+word_4+'.jpg';


im_arr = [img_1, img_2, img_3, img_4];


$('.f1').attr('src', img_1);

$('.f2').attr('src', img_2);

$('.f3').attr('src', img_3);

$('.f4').attr('src', img_4);



$('.a_hr').attr('href','#');


$('.wert').append("<input id='voice' onclick='responsiveVoice.speak(`" + this_word + "`);' type='button'  value='🔊'/> ");


let a_f_ob = {
	[img_1] :'a_1',
	[img_2] :'a_2',
	[img_3] :'a_3',
	[img_4] :'a_4'
};


for (var i = -1; i <= 4; i++) {
	 if (this_word === choice[i]){
	 		
	 			for (var ii = 0 ; ii <= 4; ii++) {
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
    },2500);
	// clearTimeout(timesut);
});


$('.ansew_ru').text(rru_words[this_word]);


$('#today_words').text(words.length + 2)

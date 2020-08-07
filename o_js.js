let col = console.log;
let al = alert;


function speak(text) {
  const message = new SpeechSynthesisUtterance();
  message.lang = "en-EN";
  message.text = text;
  window.speechSynthesis.speak(message);
}


let w1, w2, w3, w4;


function getRandomIntInclusive(oter,min, max,src_1,src_2,src_3) {
  for (var gtti = 0; gtti < oter; gtti++) {
      var rnd = Math.floor(Math.random()  * (max - min)) + min; //Максимум и минимум включаются
      let num_word = words[rnd];
      let free ='img/'+ num_word +'.jpg'
      if (free == src_1) continue;
      if (free == src_2) continue;
      if (free == src_3) continue;
      return free
      break
     }
}


function this_word() {
var random_word = Math.floor(Math.random()*4);
arr = [$('.f1').attr('src'), $('.f2').attr('src'), $('.f3').attr('src'), $('.f4').attr('src')];
let ww = arr[random_word];
wew = ww;
return ww.slice(4,-4);
}


function this_w() {
 return $('#anser').text();
}


function num_id_resh(argument) {
 let wew = $('.f1').attr('src'), wee = $('.f2').attr('src'), ewe = $('.f3').attr('src'), eew = $('.f4').attr('src'), real = $('#anser').text();
  if ($('#anser').text() == wew.slice(4,-4)) { 
    document.getElementById("sub_1").href=""; 
  }
  else if ($('#anser').text() == wee.slice(4,-4)) { 
     document.getElementById("sub_2").href=""; 
  }
  else if ($('#anser').text() == ewe.slice(4,-4)) { 
     document.getElementById("sub_3").href=""; 
  }
  else if ($('#anser').text() == eew.slice(4,-4)) { 
     document.getElementById("sub_4").href=""; 
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let min_num = words.length - 40, max_num = words.length,                    oter = max_num - min_num;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.f1').attr('src', getRandomIntInclusive(oter, min_num, max_num));

$('.f2').attr('src', getRandomIntInclusive(oter, min_num, max_num,$('.f1').attr('src')));

$('.f3').attr('src', getRandomIntInclusive(oter, min_num, max_num,$('.f1').attr('src'),$('.f2').attr('src')));

$('.f4').attr('src', getRandomIntInclusive(oter, min_num, max_num,$('.f1').attr('src'),$('.f2').attr('src'),$('.f3').attr('src')));


$('#anser').text(this_word());


$('.ansew_ru').text(rru_words[this_w()]);


num_id_resh();


let this_word_num;


for (var iq = 0; iq < words.length; iq++) {
     if (words[iq] == this_w()) { this_word_num = iq; break} 
}


$('#word_num').text(this_word_num);

$('#message').attr('value' ,this_w())


// if ( (($('body').width())-18) < 1205) {
//  $('.wert').append("<input id='voice' onclick='responsiveVoice.speak(`" + this_w() + "`);' type='button'  style='border: 1px solid #000;padding: 5px 5px 5px 40px; margin-top:15px; height: 40px;  background: url(img/icons/sound.jpg) no-repeat 3px 1px;    background-size:100%; }'/> ");
// }


// if ( (($('body').width())-18) > 1205) {
// $('.wert').append("<input id='voice' onclick='responsiveVoice.speak(`" + this_w() + "`);' type='button'  style='border: 1px solid #000;padding: 5px 5px 5px 20px; margin-top:15px; height: 20px;  background: url(img/icons/sound.jpg) no-repeat 3px 1px;    background-size:100%; }'/> ");
// }


$('.trans').click(function(){
  $(this).css('background', 'white');
  setTimeout(function qwe() {
    	$('.trans').css('background', 'black')
    },2500);
});


$('#today_words').text(words.length - 1);


        document.getElementById('2_resultр').style.backgroundColor = '#FFEA62';
        document.getElementById('2_result_trans').style.backgroundColor = '#FFEA62';


        document.getElementById('3_resultр').style.backgroundColor = '#E7FF94';
        document.getElementById('3_result_trans').style.backgroundColor = '#E7FF94';


        document.getElementById('4_resultр').style.backgroundColor = '#F9FFC7';
        document.getElementById('4_result_trans').style.backgroundColor = '#F9FFC7';


        document.getElementById('5_resultр').style.backgroundColor = 'white';
        document.getElementById('5_result_trans').style.backgroundColor = 'white';


function keyup() {
	 var reqest = document.getElementById('www').value;
    	rew = reqest.split('');//[d,g,w,s,g,e]
    document.querySelectorAll('[id="1_resultр"]').forEach(function(input) { input.value = reqest;

    	for (var iii = 0; iii < words.length; iii++) {
	   
    	if (input.value == words[iii]) {

      	document.getElementById('sa1').style.display = 'block';
      	document.getElementById('1_resultр').style.backgroundColor = 'yellow';
      	document.getElementById('1_result_trans').style.backgroundColor = 'yellow';
        document.querySelectorAll('[id="1_result_trans"]').forEach(function(input) { input.value = rru_words[words[iii]] })
      	break
      }
      else{
      	document.getElementById('sa1').style.display = 'none';
      }


    	}
    });

//////////////////////////////////////////


for (var t = 0; t < words.length; t++) {
             words_array_words = words[t].split(' ');//[dfd,fdfds,gd,s,dsd,fd,dffsfd,]
// alert(words_array_words)


if (words_array_words.length > 1) {


  for (var e = 0; e < words_array_words.length; e++) {
                note_words_array_words =  words_array_words[e].split('');
// alert(note_words_array_words)
                if (rew[0] ===  note_words_array_words[0]  && rew.length == 1) {

         document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
      }
    else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew.length == 2) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew[2] ===  note_words_array_words[2] && rew.length == 3) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }
    else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew[2] ===  note_words_array_words[2] && rew[3] ===  note_words_array_words[3] && rew.length == 4) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew[2] ===  note_words_array_words[2] && rew[3] ===  note_words_array_words[3] && rew[4] ===  note_words_array_words[4] && rew.length == 5) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew[2] ===  note_words_array_words[2] && rew[3] ===  note_words_array_words[3] && rew[4] ===  note_words_array_words[4] && rew[5] ===  note_words_array_words[5]  && rew.length == 6) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }else if (rew[0] ===  note_words_array_words[0] && rew[1] ===  note_words_array_words[1] && rew[2] ===  note_words_array_words[2] && rew[3] ===  note_words_array_words[3] && rew[4] ===  note_words_array_words[4] && rew[5] ===  note_words_array_words[5]&& rew[6] ===  note_words_array_words[6] && rew.length == 7) {
     document.querySelectorAll('[id="5_resultр"]').forEach(function(input) { input.value = words[t];})
        document.querySelectorAll('[id="5_result_trans"]').forEach(function(input) { input.value = rru_words[words[t]] })
       document.getElementById('sa5').style.display = 'block';
       break
    }

    if (reqest == '' || reqest == ' ') {
      document.getElementById('sa5').style.display = 'none';
      break
    }



    }



}
}



  /////alert()///////////////////////////////
      		for (var qq = 0; qq < words.length; qq++) {

      			 words_array = words[qq].split('');//[d,s,d,a,g,r]

      		 	
  			if (rew[0] ===  words_array[0] && rew.length == 1) {


  	    document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
     }
      else if (rew[0] ===  words_array[0] && rew[1] ===  words_array[1] && rew.length == 2) {
      	document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
      }
  	else if (rew[0] ===  words_array[0] && rew[1] ===  words_array[1] && rew.length == 2) {
  		document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array[0] && rew[1] ===  words_array[1] && rew[2] ===  words_array[2] && rew.length == 3) {
  		document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array[0] && rew[1] ===  words_array[1] && rew[2] ===  words_array[2] && rew[3] ===  words_array[3] && rew.length == 4) {
  		document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array[0] && rew[1] ===  words_array[1] && rew[2] ===  words_array[2] && rew[3] ===  words_array[3] && rew[4] ===  words_array[4] && rew.length == 5) {
  		document.querySelectorAll('[id="2_resultр"]').forEach(function(input) { input.value = words[qq];})
          document.querySelectorAll('[id="2_result_trans"]').forEach(function(input) { input.value = rru_words[words[qq]] })
        	document.getElementById('sa2').style.display = 'block';
        	if (reqest === words[qq]) {document.getElementById('sa2').style.display = 'none';}
        	break
  	}
        else{
        	document.getElementById('sa2').style.display = 'none';
        }
  }
      		
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  	   for (var qqq = 0; qqq < words.length; qqq++) {

  	   		if (words[qqq] !== words[qq]) {
      			 words_array_trhri = words[qqq].split('');//[d,s,d,a,g,r]


      		 	
  			if (rew[0] ===  words_array_trhri[0] && rew.length == 1) {


  	    document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
     }
      else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew.length == 2) {
      	document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
      }
  	else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew.length == 2) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew.length == 3) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew.length == 4) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew.length == 5) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew.length == 6) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew.length == 7) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew.length == 8) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew.length == 9) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew.length == 10) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew[10] ===  words_array_trhri[10] && rew.length == 11) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew[10] ===  words_array_trhri[10] && rew[11] ===  words_array_trhri[11] && rew.length == 12) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew[10] ===  words_array_trhri[10] && rew[11] ===  words_array_trhri[11]  && rew[12] ===  words_array_trhri[12] && rew.length == 13) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew[10] ===  words_array_trhri[10] && rew[11] ===  words_array_trhri[11]  && rew[12] ===  words_array_trhri[12] && rew[13] ===  words_array_trhri[13] && rew.length == 14) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else if (rew[0] ===  words_array_trhri[0] && rew[1] ===  words_array_trhri[1] && rew[2] ===  words_array_trhri[2] && rew[3] ===  words_array_trhri[3] && rew[4] ===  words_array_trhri[4] && rew[5] ===  words_array_trhri[5] && rew[6] ===  words_array_trhri[6] && rew[7] ===  words_array_trhri[7] && rew[8] ===  words_array_trhri[8] && rew[9] ===  words_array_trhri[9] && rew[10] ===  words_array_trhri[10] && rew[11] ===  words_array_trhri[11]  && rew[12] ===  words_array_trhri[12] && rew[13] ===  words_array_trhri[13] && rew[14] ===  words_array_trhri[14] && rew.length == 15) {
  		document.querySelectorAll('[id="3_resultр"]').forEach(function(input) { input.value = words[qqq];})
          document.querySelectorAll('[id="3_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqq]] })
        	document.getElementById('sa3').style.display = 'block';
        	if (reqest === words[qqq]) {document.getElementById('sa3').style.display = 'none';}
        	break
  	}else{
        	document.getElementById('sa3').style.display = 'none';
        }			} else{
        				document.getElementById('sa3').style.display = 'none';				
        }
  }
  // ///////////////////////
  	   for (var qqqq = 0; qqqq < words.length; qqqq++) {

  	   		if (words[qqqq] !== words[qq] && words[qqqq] !== words[qqq]) {
      			 f_words_array_trhri = words[qqqq].split('');//[d,s,d,a,g,r]


      		 	
  			if (rew[0] ===  f_words_array_trhri[0] && rew.length == 1) {


  	    document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
     }
      else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew.length == 2) {
      	document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
      }
  	else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew.length == 2) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew.length == 3) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew.length == 4) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}
  	else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew.length == 5) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew.length == 6) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew.length == 7) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew.length == 8) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew.length == 9) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew.length == 10) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew[10] ===  f_words_array_trhri[10] && rew.length == 11) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew[10] ===  f_words_array_trhri[10] && rew[11] ===  f_words_array_trhri[11] && rew.length == 12) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew[10] ===  f_words_array_trhri[10] && rew[11] ===  f_words_array_trhri[11]  && rew[12] ===  f_words_array_trhri[12] && rew.length == 13) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew[10] ===  f_words_array_trhri[10] && rew[11] ===  f_words_array_trhri[11]  && rew[12] ===  f_words_array_trhri[12] && rew[13] ===  f_words_array_trhri[13] && rew.length == 14) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else if (rew[0] ===  f_words_array_trhri[0] && rew[1] ===  f_words_array_trhri[1] && rew[2] ===  f_words_array_trhri[2] && rew[3] ===  f_words_array_trhri[3] && rew[4] ===  f_words_array_trhri[4] && rew[5] ===  f_words_array_trhri[5] && rew[6] ===  f_words_array_trhri[6] && rew[7] ===  f_words_array_trhri[7] && rew[8] ===  f_words_array_trhri[8] && rew[9] ===  f_words_array_trhri[9] && rew[10] ===  f_words_array_trhri[10] && rew[11] ===  f_words_array_trhri[11]  && rew[12] ===  f_words_array_trhri[12] && rew[13] ===  f_words_array_trhri[13] && rew[14] ===  f_words_array_trhri[14] && rew.length == 15) {
  		document.querySelectorAll('[id="4_resultр"]').forEach(function(input) { input.value = words[qqqq];})
          document.querySelectorAll('[id="4_result_trans"]').forEach(function(input) { input.value = rru_words[words[qqqq]] })
        	document.getElementById('sa4').style.display = 'block';
        	if (reqest === words[qqqq]) {document.getElementById('sa4').style.display = 'none';}
        	break
  	}else{
        	document.getElementById('sa4').style.display = 'none';
        }			} else{
        				document.getElementById('sa4').style.display = 'none';				
        }
  }

}

let znach, disp_1, disp_2, disp_3, disp_4, disp_5;





 $( "#www" ).blur(function(){ // задаем функцию при потери фокуса элементом <input>
      

         znach = $('#www').val();

         if (document.getElementById('sa1').style.display == 'block') {
                disp_1 = 'block';
         }
         else{
            disp_1 = 'none';
         }
         if (document.getElementById('sa2').style.display == 'block') {
                disp_2 = 'block';
         }
         else{
            disp_2 = 'none';
         }
         if (document.getElementById('sa3').style.display == 'block') {
                disp_3 = 'block';
         }
         else{
            disp_3 = 'none';
         }
         if (document.getElementById('sa4').style.display == 'block') {
                disp_4 = 'block';
         }
         else{
            disp_4 = 'none';
         }
         if (document.getElementById('sa5').style.display == 'block') {
                disp_5 = 'block';
         }
         else{
            disp_5 = 'none';
         }

          $( ".search_anser" ).hide();
           $('#www').val('')
    });

$( "#www" ).focus(function(){ 
      $('#www').val(znach);

      document.getElementById('sa1').style.display = disp_1;
      document.getElementById('sa2').style.display = disp_2;
      document.getElementById('sa3').style.display = disp_3;
      document.getElementById('sa4').style.display = disp_4;
      document.getElementById('sa5').style.display = disp_5;


    });


// let width = document.body.clientWidth; // ширина  
// let height = document.body.clientHeight; // высота
// // al($('body').width())

if ( (($('body').width())-18) < 1205 && (($('body').width())-18) > 817) {
// col(width);
	let img_width = (($('body').width())/2)-30 ;

	let img_height = (3 * img_width) / 4;

	$('.cd_img').width( img_width );

	$('.cd_img').height( img_height );

// $('.wert').append("<input id='voice' onclick='responsiveVoice.speak(`" + this_word + "`);' type='button'  style='border: 1px solid #000;padding: 5px 5px 5px 40px; margin-top:15px; height: 100px;  width: 100px;  background: url(img/icons/sound.jpg) no-repeat 3px 1px;    background-size:100%; }'/> ");
	// col( img_width, img_height	 );
}

var c = document.querySelector('#switch-1');
c.onclick = function() {
 if (c.checked) {
  iframe.insertAdjacentHTML('beforebegin', '<!--noindex--><iframe id="iframe_if" src="https://wooordhunt.ru/dic/content/en_ru" scrolling="auto"> </iframe><!--/noindex-->');
  $('#iframe_if').hide();
  $('#iframe_if').show(100)
 } else {
  $('#iframe_if').hide(100);
  setTimeout( function (){document.getElementById('iframe_if').parentNode.removeChild(document.getElementById('iframe_if')); },1000)
 }
}

const btnSpeakBig = document.querySelector("#BigBottom");
const btnSpeak = document.querySelector("#speak");
const txtMessage = document.querySelector("#message");

btnSpeak.addEventListener("click", () => { speak(txtMessage.value); });	
btnSpeakBig.addEventListener('click', () => { speak(txtMessage.value); });


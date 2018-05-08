window.onload =function onload(){

$('#displayall').html('');
$.ajax({
type: 'GET',
url: 'https://api.twitch.tv/kraken/streams',
headers: {
'Client-ID': 'rylt5wcnbm3pnw0awupoiponkjlrjj'
},
success: processData
});

}

function processData (apiResult){
for (var i = 0 ; i<apiResult.streams.length ; i++ ){
if(apiResult.streams[i].stream_type == 'live'){
$('#displayall').append('<div class="alert alert-success" role="alert"><img src="'+apiResult.streams[i].channel.logo+'"><a href="'+apiResult.streams[i].channel.url+'" class="alert-link">Online  </a><strong>'+apiResult.streams[i].channel.display_name +' '+ apiResult.streams[i].channel.game+': </strong><br>'+apiResult.streams[i].channel.status +'</div>');
}

else{
$('#displayall').append('<div class="alert alert-dark" role="alert"><img src="'+apiResult.streams[i].channel.logo+'"><a href="'+apiResult.streams[i].channel.url+'" class="alert-link">Offline  </a><strong>'+apiResult.streams[i].channel.display_name +' '+ apiResult.streams[i].channel.game);

}

}

}



$(document).ready(function(){


$('#option1').click(function(){
onload();
});

	$('#option2').click(function(){
		$.ajax({
type: 'GET',
url: 'https://api.twitch.tv/kraken/streams',
headers: {
'Client-ID': 'rylt5wcnbm3pnw0awupoiponkjlrjj'
},
success: showonline
});
});

function showonline(apiResult){
$('#displayall').html('');
for (var i = 0 ; i<apiResult.streams.length ; i++ ){
if(apiResult.streams[i].stream_type == 'live'){
$('#displayall').append('<div class="alert alert-success" role="alert"><img src="'+apiResult.streams[i].channel.logo+'"><a href="'+apiResult.streams[i].channel.url+'" class="alert-link">Online  </a><strong>'+apiResult.streams[i].channel.display_name +' '+ apiResult.streams[i].channel.game+': </strong><br>'+apiResult.streams[i].channel.status +'</div>');
}

else continue;

}
}


$('#option3').click(function(){
$.ajax({
type: 'GET',
url: 'https://api.twitch.tv/kraken/streams',
headers: {
'Client-ID': 'rylt5wcnbm3pnw0awupoiponkjlrjj'
},
success: showoffline
});
});

function showoffline(apiResult){

$('#displayall').html('');
for (var i = 0 ; i<apiResult.streams.length ; i++ ){
if(apiResult.streams[i].stream_type == 'live')
continue;
else{
$('#displayall').append('<div class="alert alert-dark" role="alert"><img src="'+apiResult.streams[i].channel.logo+'"><a href="'+apiResult.streams[i].channel.url+'" class="alert-link">Offline  </a><strong>'+apiResult.streams[i].channel.display_name +' '+ apiResult.streams[i].channel.game);

}
}
}

});

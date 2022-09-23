
function displayImage(data){
    // console.log(data);

    $('#img').attr('src',data.url);
    $('#date').text(data.date);
    $('#title').text(data.title);
    $('#explanation').text(data.explanation);
    
}


function fetchApodFromNasa(){

    let apiurl = 'https://api.nasa.gov/planetary/apod';
    let apikey = 'dbAG80Z5zzaKsIHIhNTPcW2g3SYQNwAGLQZwuv6o';

    $.ajax({
        method: 'GET',
        url: apiurl,
        success: displayImage,
        data: {
            date: $('#date-input').val(),
            api_key: apikey,
        }
    }).fail(function(){
        alert('Oops!\nFuture Data is not Available');
        console.log('error occures');
    })

}



$('#button').on('click',fetchApodFromNasa);
fetchApodFromNasa();
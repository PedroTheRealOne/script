var requestURL = 'https://trello.com/c/yvhOZt8W/1-vingadores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

function getValue(){

    var checks = document.getElementsByClassName('checklist');
    str = '';

    for(i = 0; i < 6; i++){

        if(checks[i].checked == true){
            str += checks[i].value + " ";
        }

    }

}



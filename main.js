var TAB = "\t";
var CURRENTLIST="none";

function appending(element){
    var listgroup = document.getElementById("albumlist");
    //Append the element in page (in span).  
    listgroup.appendChild(element);
};

function CreateListButton(songtitle,ytSrc){
    var element = document.createElement("li");
    //Assign different attributes to the element. 
    element.setAttribute('class','list-group-item btn btn-default playSong');
    element.setAttribute('id','playSong');
    element.setAttribute('type','button');
    element.setAttribute('onclick',ytSrc);
    element.appendChild(document.createTextNode(songtitle));
    // 2. Append somewhere
    var foo = document.getElementById("albumlist");
    //Append the element in page (in span).  
    foo.appendChild(element);
};

document.getElementById("Tourist-leMC").onclick = function() {
        if(CURRENTLIST=="none"){
        CreateListButton('En Route' + '\t'  + '3:43',"changeVideo('shpmMmeE7Vk');");
        CreateListButton('Bilan' + '\t'  + '3:40');
        CreateListButton('Verhalen van de wijk' + '\t'  + '4:37');
        CreateListButton('De Troubadours' + '\t'  + '4:03');
        CreateListButton('Miljonaire' + '\t'  + '3:43');
        CreateListButton('Adieu' + '\t'  + '3:08');
        CreateListButton('Koning Liefde' + '\t'  + '3:22');
        CreateListButton('Tot Hiertoe Alles Goe' + '\t'  + '3:21');
        CreateListButton('Meester Kunstenaar' + '\t'  + '3:35');
        CreateListButton('Chanter' + '\t'  + '3:58');
        CreateListButton('Horizon' + '\t'  + '3:33');
        CreateListButton('Deze Nacht' + '\t'  + '3:41');
        CURRENTLIST="Tourist-leMC";
        }
        else if(CURRENTLIST!="Tourist-leMC"){
            var myNode = document.getElementById("albumlist");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            CreateListButton('En Route' + '\t'  + '3:43',"changeVideo('shpmMmeE7Vk');");
            CreateListButton('Bilan' + '\t'  + '3:40');
            CreateListButton('Verhalen van de wijk' + '\t'  + '4:37');
            CreateListButton('De Troubadours' + '\t'  + '4:03');
            CreateListButton('Miljonaire' + '\t'  + '3:43');
            CreateListButton('Adieu' + '\t'  + '3:08');
            CreateListButton('Koning Liefde' + '\t'  + '3:22');
            CreateListButton('Tot Hiertoe Alles Goe' + '\t'  + '3:21');
            CreateListButton('Meester Kunstenaar' + '\t'  + '3:35');
            CreateListButton('Chanter' + '\t'  + '3:58');
            CreateListButton('Horizon' + '\t'  + '3:33');
            CreateListButton('Deze Nacht' + '\t'  + '3:41');
            CURRENTLIST="Tourist-leMC";
        };
};

document.getElementById("EdSheeran").onclick = function() {
    if(CURRENTLIST=="none"){
    CreateListButton('Eraser' + '\t'  + '3:48',"changeVideo('shpmMmeE7Vk');");
    CreateListButton('Castle on the hill' + '\t'  + '4:21');
    CreateListButton('Dive' + '\t'  + '3:58');
    CreateListButton('Shape of You' + '\t'  + '3:54');
    CreateListButton('Perfect' + '\t'  + '4:23');
    CreateListButton('Galway Girl' + '\t'  + '2:51');
    CreateListButton('Happier' + '\t'  + '3:28');
    CreateListButton('New Man' + '\t'  + '3:09');
    CreateListButton('Hearts Don`t Break Around Here' + '\t'  + '4:08');
    CreateListButton('What Do I Know?' + '\t'  + '3:57');
    CreateListButton('How Would You Feel(Paean)' + '\t'  + '4:41');
    CreateListButton('Supermarket Flowers' + '\t'  + '3:41');
    CreateListButton('Barcelona' + '\t'  + '3:11');
    CreateListButton('Bibia Be Ye Ya' + '\t'  + '2:57');
    CreateListButton('Nancy Mulligan' + '\t'  + '3:00');
    CreateListButton('Save Myself' + '\t'  + '4:07');
    CURRENTLIST="EdSheeran";
    }
    else if(CURRENTLIST!="EdSheeran"){
        var myNode = document.getElementById("albumlist");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        CreateListButton('Eraser' + '\t'  + '3:48',"changeVideo('shpmMmeE7Vk');");
        CreateListButton('Castle on the hill' + '\t'  + '4:21');
        CreateListButton('Dive' + '\t'  + '3:58');
        CreateListButton('Shape of You' + '\t'  + '3:54');
        CreateListButton('Perfect' + '\t'  + '4:23');
        CreateListButton('Galway Girl' + '\t'  + '2:51');
        CreateListButton('Happier' + '\t'  + '3:28');
        CreateListButton('New Man' + '\t'  + '3:09');
        CreateListButton('Hearts Don`t Break Around Here' + '\t'  + '4:08');
        CreateListButton('What Do I Know?' + '\t'  + '3:57');
        CreateListButton('How Would You Feel(Paean)' + '\t'  + '4:41');
        CreateListButton('Supermarket Flowers' + '\t'  + '3:41');
        CreateListButton('Barcelona' + '\t'  + '3:11');
        CreateListButton('Bibia Be Ye Ya' + '\t'  + '2:57');
        CreateListButton('Nancy Mulligan' + '\t'  + '3:00');
        CreateListButton('Save Myself' + '\t'  + '4:07');
        CURRENTLIST="EdSheeran";
    };
};

document.getElementById("Bazart").onclick = function() {
    if(CURRENTLIST=="none"){
    CreateListButton('Echo' + '\t'  + '3:28',"changeVideo('shpmMmeE7Vk');");
    CreateListButton('Chaos' + '\t'  + '3:19');
    CreateListButton('Tunnels' + '\t'  + '3:11');
    CreateListButton('Lux' + '\t'  + '3:39');
    CreateListButton('Nacht' + '\t'  + '3:17');
    CreateListButton('Goud' + '\t'  + '3:02');
    CreateListButton('Kloon' + '\t'  + '3:03');
    CreateListButton('Open' + '\t'  + '3:47');
    CreateListButton('Voodoo' + '\t'  + '3:30');
    CreateListButton('Zonder' + '\t'  + '4:03');
    CURRENTLIST="Bazart";
    }
    else if(CURRENTLIST!="Bazart"){
        var myNode = document.getElementById("albumlist");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        CreateListButton('Echo' + '\t'  + '3:28',"changeVideo('shpmMmeE7Vk');");
        CreateListButton('Chaos' + '\t'  + '3:19');
        CreateListButton('Tunnels' + '\t'  + '3:11');
        CreateListButton('Lux' + '\t'  + '3:39');
        CreateListButton('Nacht' + '\t'  + '3:17');
        CreateListButton('Goud' + '\t'  + '3:02');
        CreateListButton('Kloon' + '\t'  + '3:03');
        CreateListButton('Open' + '\t'  + '3:47');
        CreateListButton('Voodoo' + '\t'  + '3:30');
        CreateListButton('Zonder' + '\t'  + '4:03');
        CURRENTLIST="Bazart";
    };
};

$(function(){
    $('#AlbumModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var artist = button.data('id');
        var modal = $(this);
        modal.find('.modal-title').text('Super Awsome Album from ' + artist);
    });
});

function changeVideo(videoId) {
    var ytString = "https://www.youtube.com/embed/" + videoId;
    document.getElementById('videoPlayer').src = ytString;
}

var TAB = "\t";
var CURRENTLIST="none";

function CreateListButton(songtitle,ytSrc){
    var element = document.createElement("button");
    //Assign different attributes to the element. 
    element.setAttribute('class','btn btn-primary list-group-item  playSong');
    element.setAttribute('type','button');
    element.setAttribute('aria-pressed','false');
    element.setAttribute('onclick',ytSrc);
    element.appendChild(document.createTextNode(songtitle));
    // 2. Append somewhere
    var foo = document.getElementById("albumlist");
    //Append the element in page (in span).  
    foo.appendChild(element);
};

document.getElementById("Tourist-leMC").onclick = function() {
        if(CURRENTLIST=="none"){
            changeVideo('C4icVAL7OM4');
            CreateListButton('En Route' + '\t'  + '3:43',"changeVideo('C4icVAL7OM4');");
            CreateListButton('Bilan' + '\t'  + '3:40',"changeVideo('a1rFcTyAwoE');");
            CreateListButton('Verhalen van de wijk' + '\t'  + '4:37',"changeVideo('RDzcGEVvGL9zo');");
            CreateListButton('De Troubadours' + '\t'  + '4:03',"changeVideo('az8UME0yM1M');");
            CreateListButton('Miljonaire' + '\t'  + '3:43',"changeVideo('WxLS6dY3V0Q');");
            CreateListButton('Adieu' + '\t'  + '3:08',"changeVideo('P3JTqr2oZio');");
            CreateListButton('Koning Liefde' + '\t'  + '3:22',"changeVideo('XuyN4XzqSIA');");
            CreateListButton('Tot Hiertoe Alles Goe' + '\t'  + '3:21',"changeVideo('undefined');");
            CreateListButton('Meester Kunstenaar' + '\t'  + '3:35',"changeVideo('Lz1BDiS_1I0');");
            CreateListButton('Chanter' + '\t'  + '3:58',"changeVideo('undefined');");
            CreateListButton('Horizon' + '\t'  + '3:33',"changeVideo('shpmMmeE7Vk');");
            CreateListButton('Deze Nacht' + '\t'  + '3:41',"changeVideo('LTHhumEFUpg');");
        CURRENTLIST="Tourist-leMC";
        }
        else if(CURRENTLIST!="Tourist-leMC"){
            var myNode = document.getElementById("albumlist");
            while (myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            changeVideo('C4icVAL7OM4');
            CreateListButton('En Route' + '\t'  + '3:43',"changeVideo('C4icVAL7OM4');");
            CreateListButton('Bilan' + '\t'  + '3:40',"changeVideo('a1rFcTyAwoE');");
            CreateListButton('Verhalen van de wijk' + '\t'  + '4:37',"changeVideo('RDzcGEVvGL9zo');");
            CreateListButton('De Troubadours' + '\t'  + '4:03',"changeVideo('az8UME0yM1M');");
            CreateListButton('Miljonaire' + '\t'  + '3:43',"changeVideo('WxLS6dY3V0Q');");
            CreateListButton('Adieu' + '\t'  + '3:08',"changeVideo('P3JTqr2oZio');");
            CreateListButton('Koning Liefde' + '\t'  + '3:22',"changeVideo('XuyN4XzqSIA');");
            CreateListButton('Tot Hiertoe Alles Goe' + '\t'  + '3:21',"changeVideo('undefined');");
            CreateListButton('Meester Kunstenaar' + '\t'  + '3:35',"changeVideo('Lz1BDiS_1I0');");
            CreateListButton('Chanter' + '\t'  + '3:58',"changeVideo('undefined');");
            CreateListButton('Horizon' + '\t'  + '3:33',"changeVideo('shpmMmeE7Vk');");
            CreateListButton('Deze Nacht' + '\t'  + '3:41',"changeVideo('LTHhumEFUpg');");
            CURRENTLIST="Tourist-leMC";
        };
        document.getElementById("biografie").innerHTML = "Tourist LeMC (vaak kortweg Tourist genoemd), pseudoniem van Johannes Faes (Schoten, 1984), is een Belgische hiphop- en kleinkunstartiest.Zijn grootste muzikale invloed is de Franse hiphopscene van eind jaren negentig. Zijn muziek wordt gekenmerkt door invloeden uit de reggae, maar vooral ook uit de kleinkunst en folk.";
        document.getElementById("buyAlbum").setAttribute('href',"https://itunes.apple.com/be/album/en-route/id967234387?l=nl");        
};

document.getElementById("EdSheeran").onclick = function() {
    if(CURRENTLIST=="none"){
    changeVideo('OjGrcJ4lZCc');
    CreateListButton('Eraser' + '\t'  + '3:48',"changeVideo('OjGrcJ4lZCc');");
    CreateListButton('Castle on the hill' + '\t'  + '4:21',"changeVideo('K0ibBPhiaG0');");
    CreateListButton('Dive' + '\t'  + '3:58',"changeVideo('Wv2rLZmbPMA');");
    CreateListButton('Shape of You' + '\t'  + '3:54',"changeVideo('JGwWNGJdvx8');");
    CreateListButton('Perfect' + '\t'  + '4:23',"changeVideo('iKzRIweSBLA');");
    CreateListButton('Galway Girl' + '\t'  + '2:51',"changeVideo('87gWaABqGYs');");
    CreateListButton('Happier' + '\t'  + '3:28',"changeVideo('8TpcBDJZsJA');");
    CreateListButton('New Man' + '\t'  + '3:09',"changeVideo('EwzD8U4u76k');");
    CreateListButton('Hearts Don`t Break Around Here' + '\t'  + '4:08',"changeVideo('20pAJPNaAyw');");
    CreateListButton('What Do I Know?' + '\t'  + '3:57',"changeVideo('6B9J3lEyffA');");
    CreateListButton('How Would You Feel(Paean)' + '\t'  + '4:41',"changeVideo('ZZMZiBCRX4c');");
    CreateListButton('Supermarket Flowers' + '\t'  + '3:41',"changeVideo('bIB8EWqCPrQ');");
    CreateListButton('Barcelona' + '\t'  + '3:11',"changeVideo('OVO4LhrOFiY');");
    CreateListButton('Bibia Be Ye Ye' + '\t'  + '2:57',"changeVideo('7t3Re2VIbHE');");
    CreateListButton('Nancy Mulligan' + '\t'  + '3:00',"changeVideo('VFlZXlfda6Y');");
    CreateListButton('Save Myself' + '\t'  + '4:07',"changeVideo('qXM0JdAwabU');");
    CURRENTLIST="EdSheeran";
    }
    else if(CURRENTLIST!="EdSheeran"){
        var myNode = document.getElementById("albumlist");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        changeVideo('OjGrcJ4lZCc');        
        CreateListButton('Eraser' + '\t'  + '3:48',"changeVideo('OjGrcJ4lZCc');");
        CreateListButton('Castle on the hill' + '\t'  + '4:21',"changeVideo('K0ibBPhiaG0');");
        CreateListButton('Dive' + '\t'  + '3:58',"changeVideo('Wv2rLZmbPMA');");
        CreateListButton('Shape of You' + '\t'  + '3:54',"changeVideo('JGwWNGJdvx8');");
        CreateListButton('Perfect' + '\t'  + '4:23',"changeVideo('iKzRIweSBLA');");
        CreateListButton('Galway Girl' + '\t'  + '2:51',"changeVideo('87gWaABqGYs');");
        CreateListButton('Happier' + '\t'  + '3:28',"changeVideo('8TpcBDJZsJA');");
        CreateListButton('New Man' + '\t'  + '3:09',"changeVideo('EwzD8U4u76k');");
        CreateListButton('Hearts Don`t Break Around Here' + '\t'  + '4:08',"changeVideo('20pAJPNaAyw');");
        CreateListButton('What Do I Know?' + '\t'  + '3:57',"changeVideo('6B9J3lEyffA');");
        CreateListButton('How Would You Feel(Paean)' + '\t'  + '4:41',"changeVideo('ZZMZiBCRX4c');");
        CreateListButton('Supermarket Flowers' + '\t'  + '3:41',"changeVideo('bIB8EWqCPrQ');");
        CreateListButton('Barcelona' + '\t'  + '3:11',"changeVideo('OVO4LhrOFiY');");
        CreateListButton('Bibia Be Ye Ye' + '\t'  + '2:57',"changeVideo('7t3Re2VIbHE');");
        CreateListButton('Nancy Mulligan' + '\t'  + '3:00',"changeVideo('VFlZXlfda6Y');");
        CreateListButton('Save Myself' + '\t'  + '4:07',"changeVideo('qXM0JdAwabU');");
        CURRENTLIST="EdSheeran";
    };
    document.getElementById("biografie").innerHTML ="Edward Christopher Sheeran (Halifax, 17 februari 1991) is een Brits singer-songwriter. Hij tekende in 2011 een contract bij Asylum/Atlantic Records. Sheeran brak door in juni 2011 met zijn debuutsingle The A Team en scoorde daarna ook grote hits met onder andere Thinking out loud (2014) en Shape of you (2017).";
    document.getElementById("buyAlbum").setAttribute('href',"https://itunes.apple.com/nl/album/deluxe/id1193701079");
    
};

document.getElementById("Bazart").onclick = function() {
    if(CURRENTLIST=="none"){
    changeVideo('42WoxJbRfVk');
    CreateListButton('Echo' + '\t'  + '3:28',"changeVideo('42WoxJbRfVk');");
    CreateListButton('Chaos' + '\t'  + '3:19',"changeVideo('HdI_R7vbL-o');");
    CreateListButton('Tunnels' + '\t'  + '3:11',"changeVideo('L5-31_F3O1A');");
    CreateListButton('Lux' + '\t'  + '3:39',"changeVideo('RVFE36F-3iU');");
    CreateListButton('Nacht' + '\t'  + '3:17',"changeVideo('MBzieRDfaJA');");
    CreateListButton('Goud' + '\t'  + '3:02',"changeVideo('pew1rERKHMo');");
    CreateListButton('Kloon' + '\t'  + '3:03',"changeVideo('WCtZXhpihNM');");
    CreateListButton('Open' + '\t'  + '3:47',"changeVideo('m-2xT5ZnKiw');");
    CreateListButton('Voodoo' + '\t'  + '3:30',"changeVideo('VR_dsj6Iyrg');");
    CreateListButton('Zonder' + '\t'  + '4:03',"changeVideo('WrTAiIgJbks');");
    CURRENTLIST="Bazart";
    }
    else if(CURRENTLIST!="Bazart"){
        var myNode = document.getElementById("albumlist");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
        changeVideo('42WoxJbRfVk');
        CreateListButton('Echo' + '\t'  + '3:28',"changeVideo('42WoxJbRfVk');");
        CreateListButton('Chaos' + '\t'  + '3:19',"changeVideo('HdI_R7vbL-o');");
        CreateListButton('Tunnels' + '\t'  + '3:11',"changeVideo('L5-31_F3O1A');");
        CreateListButton('Lux' + '\t'  + '3:39',"changeVideo('RVFE36F-3iU');");
        CreateListButton('Nacht' + '\t'  + '3:17',"changeVideo('MBzieRDfaJA');");
        CreateListButton('Goud' + '\t'  + '3:02',"changeVideo('pew1rERKHMo');");
        CreateListButton('Kloon' + '\t'  + '3:03',"changeVideo('WCtZXhpihNM');");
        CreateListButton('Open' + '\t'  + '3:47',"changeVideo('m-2xT5ZnKiw');");
        CreateListButton('Voodoo' + '\t'  + '3:30',"changeVideo('VR_dsj6Iyrg');");
        CreateListButton('Zonder' + '\t'  + '4:03',"changeVideo('WrTAiIgJbks');");
        CURRENTLIST="Bazart";
    };
    document.getElementById("biografie").innerHTML ="Bazart is een indie-popgroep uit België. De band maakt Nederlandstalige muziek. Bazart werd opgericht door zanger Mathieu Terryn en zanger/gitarist Simon Nuytten.Naar eigen zeggen probeert de band kleinkunst in de Vlaamse betekenis populair te maken onder het Belgische publiek.Bazart werd genomineerd voor zeven MIA’s in 2016 en verzilverde er vijf: “Hit van het jaar”, “Beste Nederlandstalig”, “Beste doorbraak”, “Beste pop” en “Beste groep”. Enkel in de categorieën “Beste album” en “Beste live-act” grepen ze naast de hoofdprijs.";
    document.getElementById("buyAlbum").setAttribute('href',"https://itunes.apple.com/be/album/echo/id1153215092?l=nl");
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

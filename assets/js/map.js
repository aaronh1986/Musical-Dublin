const dublinCity = { lat: 53.350140, lng: -6.255155}; //The coordinates of Dublin City Centre
     
//Create the map and give it a default position
function initMap() {
const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: dublinCity
  });

   // List of all marker coordinates inserted on the map 
      const myCoordinates = [
          {"name": "National Concert Hall", "lat": 53.334653, "lng": -6.258785, "information": `NCH is Ireland's primary
                                                                                venue for Classical music and is home to the
                                                                                RTE Symphony Orchestra. See weekly concerts in styles
                                                                                ranging from Baroque to Contemporary Classical.
                                                                                The venue also regularly hosts travelling Jazz, World
                                                                                and Irish Traditional shows.`}, //National Concert Hall
          {"name": "Vicar Street", "lat": 53.342609,"lng": -6.277989, "information": `Vicar Street has, for well over 30 years,
                                                                                      been the staple venue in Ireland for
                                                                                      Rock and Pop concerts. See artists ranging
                                                                                      from Christy Moore to Mastodon to Devo.
                                                                                      Enjoy a drink pre show at any of the 5 bars 
                                                                                      at the venue.`}, //Vicar Street
          {"name": "Academy", "lat": 53.348034, "lng": -6.262003, "information": `A relatively new venue on the Dublin scene, The Academy
                                                                                  has quickly established itself as a quality venue
                                                                                  for Rock and Pop music in Ireland. Recent concerts include
                                                                                  Mayhem and Jeff Beck.`}, //The Academy
          {"name": "Arthurs", "lat": 53.343167, "lng": -6.28168, "information": `Arthurs is Dublin's go to spot for Jazz & Blues in the capital.
                                                                                 Taking over the reins after the unfortunate closure of JJ. Smyth's,
                                                                                  Arthurs has fast established itself as a venue attracting quality
                                                                                  foreign groups like Jonathan Kreisberg's quartet and homegrown
                                                                                  talent such as Ronan Guilfoyle and Greg Felton.`}, //Arthurs Blues & Jazz
          {"name": "3Arena", "lat": 53.347496, "lng": -6.228508, "information": `The 3Arena is Irelands largest venue and go to spot for the world's biggest
                                                                                  bands. Big names to have played here include U2, Soundgarden and Queens
                                                                                  of the Stoneage. The venue also hosts a range of other types of shows
                                                                                  including kids concerts like Hannah Montana and Peppa Pig.`}, //Three Arena
          {"name": "Newpark/Rock Jam", "lat": 53.289883, "lng": -6.171961, "information": `Newpark Music Centre is an internationally recognised
                                                                                           third level course specialising in
                                                                                           Jazz performance. Teaching staff here includes
                                                                                           luminaries on the Irish and International scenes
                                                                                           like Ronan Guilfoyle and Tommy Halferty. 
                                                                                           
                                                                                           The school is also the location of Rock Jam, a 
                                                                                           school offering lessons in a band performance setting
                                                                                           where students learn to play as part of a band rather
                                                                                           than one on one classes. The school is primarily
                                                                                           aimed at ages 5-18.`}, //Newpark Music Centre & Rock Jam(Also held in Newpark Music Centre)
          {"name": "UCD", "lat": 53.294747, "lng": -6.184702, "information": `The course at UCD provides an in-depth study into
                                                                              Classical Music in both Theory and Composition.
                                                                              The course also includes a study in various musical traditions
                                                                              including Indian Carnatic music and Irish Traditional music.`}, //UCD 
          {"name": "BIMM", "lat": 53.339906, "lng": -6.273719, "information": "BIMM opened in 2010 and has fast become Ireland's"}, //BIMM
          {"name": "Rock School", "lat": 53.385592, "lng": -6.140353, "information": `Frank Kearns Rock School offers lessons to all ages and
                                                                                      on all instruments. Lessons are conducted
                                                                                      in a one to one setting ranging from 30 minute to 
                                                                                      hour long classes.`}, //Frank Kearns Rock School
          {"name": "XMusic", "lat": 53.317752, "lng": -6.360684, "information": `XMusic is a `}, //XMusic
          {"name": "Music Maker", "lat": 53.343126, "lng": -6.262568, "information": "Music Maker...."}, //Music Maker
          {"name": "Waltons", "lat": 53.394871, "lng": -6.394655, "information": "Waltons...."}, //Waltons School of Music
          {"name": "Goodwins", "lat": 53.348098, "lng": -6.268734, "information": "Goodwins is..."}, //Goodwins Music 
          {"name": "McNeela", "lat": 53.394518, "lng": -6.145391, "information": "McNeela...."}, //McNeela Irish Music Instruments
    ];
    
   var InfoObj = [];

    //Loop over and insert myCoordinates onto map & name of venue
    for (let i = 0; i < myCoordinates.length; i++) {
        const contentString = '<h3>' + myCoordinates[i].name + '</h3>' + 
                         '<p>' + myCoordinates[i].information + '</p>' +
                         '<a href="https://developers.google.com/maps/documentation/javascript/overview">' + "Click Here" + '</a>';
     
        const marker = new google.maps.Marker({
        position: new google.maps.LatLng(myCoordinates[i].lat, myCoordinates[i].lng),
        map: map,  //This is the map that the markers will be attached to, the value is the variable "map"
        title: myCoordinates[i].name, //Will add business name when icon is hovered over
        animation: google.maps.Animation.DROP,
    });

    const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 500
    });

    marker.addListener("click", function(){
        closeOtherInfo();
        infowindow.open(map, marker);
        InfoObj[0] = infowindow;
    });
    }

    function closeOtherInfo() {
        if (InfoObj.length > 0) {
          InfoObj[0].set("marker", null);
          InfoObj[0].close();
          InfoObj.length = 0;
        }
    }
}

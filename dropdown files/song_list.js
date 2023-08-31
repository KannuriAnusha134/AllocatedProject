//song list
let All_song = [
   {
     name: "Faded.mp3",
     path: "music/Faded.mp3",
     img: "images/faded.png",
     singer: "Alan walker"
   },
   {
     name: "fallingdown",
     path: "music/fallingdown.mp3",
     img: "images/fallingdown.jpg",
     singer: "Wild cards"
   },
   {
     name: "Rather Be",
     path: "music/Rather Be.mp3",
     img: "images/ratherbe.jpg",
     singer: "Clean bandit"
   },
   {
     name: "stay",
     path: "music/stay.mp3",
     img: "images/stay.png",
     singer: "justin bieber"
   },
   {
    name: "I found a love",
     path: "music/Darling Just Hold My Hand(PagalWorld).mp3",
     img: "images/i found love.jpg",
     singer: "Ed sheeran"
   },
   {
    name: "my heart stereo",
    path: "music/My heart stereo.mp3",
    img: "images/stereo.jpeg",
    singer: "gym class heroes"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');
//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/
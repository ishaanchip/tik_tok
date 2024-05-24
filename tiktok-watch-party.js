//initial base elements (video links and html items)
let videoLinks = [
   "v12044gd0000chilvrjc77ucrc21br4g.mp4",
   "v12044gd0000cn8iuf7og65o1iekftc0.mp4",
   "v12044gd0000cohbcavog65uhifsgheg.mp4",
   "v12044gd0000comft8fog65v5m1emfj0.mp4",
   "v12044gd0000cov7jt7og65ls0rpnr9g.mp4",
]

let leftArrow = document.getElementById("left-arrow");

let rightArrow = document.getElementById("right-arrow");

let tikTokAreas = document.getElementById("tiktok-watch-party");

let testButton  = document.getElementById('test-button');

//variables & function to navigate videos
let videoIndex = 0;

function navigateVideos(){
    if (videoIndex > videoLinks.length-1|| videoIndex < 0){
        testButton.style.display = 'none';
        videoIndex = 0;
    }
    if (videoIndex == videoLinks.length-1){
        testButton.style.display = 'block';
    }
    tikTokAreas.innerHTML = 
    `
          <video controls autoplay class="tiktok" src="tiktoks/${videoLinks[videoIndex]}"  type="video/mp4">
          </video>
    `
};
navigateVideos();

leftArrow.addEventListener('click',function(){
    videoIndex--;
    navigateVideos();
});

rightArrow.addEventListener('click',function(){
    videoIndex++;
    navigateVideos();
});
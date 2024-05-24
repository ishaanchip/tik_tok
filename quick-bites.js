let quickBites = document.getElementById("quick-bites");

let tikTokData = [
      ['TikTok Destroys the Mental Health of its Users','In the advisory of Dr.Vivek Murthy, a U.S Surgeon General, it showed that “close to half of adolescents say that social media makes them feel bad about their body image” (Siegel).'],
      
      ['TikTok is Essentially the Same as Casino Gambling (Atleast to our Brains)','“Analysis of social media apps reveals that they are designed to function like slot machines — the ‘swipe down’ feature required to refresh one’s feed mirrors pulling a slot machine lever, and the variable pattern of reward in the form of entertaining videos on TikTok simulates the intermittent reward pattern of winning or losing on a slot machine; this pattern keeps individuals engaged under the impression that the next play might be ‘the one’” (Petrillo).'
      ],
      
      ['TikTok Strips the Pleasure out of Real-Life Interactions', 'The brain craves for dopamine as it is directly related to pleasure and happiness in the mind; because TikTok can easily satiate the dopamine drive of the human, people will constantly look back to the source to meet their dopamine needs. However, the yearning for substance (in this case dopamine) will only increase as time goes on as it does for any other addictive such as alcohol, nicotine, or weed. This results in TikTok users not being able to feel as much pleasure and happiness in other interactions as they are used to because the dopamine bar for pleasure has been raised so high due to TikTok usage. So, in order to get their fill of dopamine, users of TikTok must resort  to using the app more and more , “feeding into a social media addiction” (Fernandez). '],
      
      ['TikTok is Engineered to Destroy the very Cognitive Abilities of its Users', 'When the user takes in so much dopamine from  TikTok, with its micro videos, the attention spans and  memory capabilities of users will greatly falter as the mind  is solely being trained to react and recall  this short form content. To make things even worse, the brain cannot even fully digest the former video as it is met instantly with the next giving the brain zero time to convert the event into memory.']
      
    ]




tikTokData.forEach(element=>{
  quickBites.innerHTML +=
    `<div class="quick-bite"> 
    <h1>
        
        ${element[0]}
        <i class="fa-solid fa-chevron-left" onclick="toggleArrow(this)"></i>
      </h1>
      
      <p>${element[1]}</p>
      </div>
      `
  
});


function toggleArrow(button){
 if (button.parentNode.parentNode.children[1]
   .style.display == 'block'){
   button.parentNode.parentNode.children[1]
   .style.display = 'none';
    button.classList.remove("arrow-toggle-reveal");
   button.classList.add("arrow-toggle-hide");
   
 }
  else{   
    button.parentNode.parentNode.children[1]
   .style.display = 'block';
 button.classList.remove("arrow-toggle-hide");
 button.classList.add("arrow-toggle-reveal");
  }
  
  
}
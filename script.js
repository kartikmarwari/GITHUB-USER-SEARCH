 let searchbtn=document.querySelector(".search");
let usernameinp=document.querySelector(".nameinp");
let card=document.querySelector(".card");

function getprofileData(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if (!raw.ok) throw new Error("user not found");
        return raw.json();
    });
}

 

function decorateProfileData(detail){
    console.log(detail);
   let data=`<div class="lf"><img class="pf" src=" ${detail.avatar_url}" alt=""></div>

<div class="rh">
    <h1>${detail.name} </h1>
<p>bio: ${detail.bio}</p> <br>
<p>followers:${detail.followers}</p>
<h1>Public repository: ${detail.public_repos}</h1>
  <a href="${detail.html_url}">Profile link</a>
</div>`

card.innerHTML=data;
   
}
 
searchbtn.addEventListener("click",function(){
      event.preventDefault(); 
    let username =usernameinp.value.trim();
if(username.length>0){
getprofileData(username).then(data=>{decorateProfileData(data);
});
}
else{
    alert("wite goodname");
}
});


getprofileData("async").then(function (data) {
    console.log(data);
});
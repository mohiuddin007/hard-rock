let searchBox=document.getElementById('input-value')
let searchBtn=document.getElementById('searchSongBtn')
let songList = document.getElementById("songList")
let lyricsSongSuggestionList = document.getElementById("fancyResultList")

searchBox.addEventListener("keypress",event=>{
    if(searchBox.value.length>0){
        searchBox.style.color="black"
    }

let api=`https://api.lyrics.ovh/suggest/${event.target.value+event.key}`


fetch(api)
    .then(res=>res.json())
    .then(data=>{
        
        for(let i=1; i<=7; i++){
           document.getElementById("title"+i).innerText=data.data[i].title
           document.getElementById("artist"+i).innerText=data.data[i].artist.name


           let title=data.data[i].title
            let artist=data.data[i].artist.name
            document.getElementById("clickLyrics"+i).addEventListener("click",(event)=>{
               let api2=`https://api.lyrics.ovh/v1/${artist}/${title}`
                fetch(api2)
                .then(res=>res.json())
                .then(data=>{
                    let str=data.lyrics.split(" ")
                    let [a,b,c]=str
                    if(str.length>10){
                        document.getElementById("songTitle").innerText=`${a} ${b} ${c}`
                    }else{
                        document.getElementById("songTitle").innerText=`${a}`
                    }
                    document.getElementById("show-lyrics").innerText=data.lyrics
                })
                document.getElementById("singleLyrics").style.display="block"
            })
        }
        songList.style.display="block"
    })
})

// all matched lyrics

searchBtn.addEventListener('click',event=>{
    if(searchBox.value.length<1){
        let searchBox = document.getElementById("input-value")
        searchBox.value="type a lyrics name"
        searchBox.style.color="red"
        document.getElementById("lyricsSongSuggestionList").style.display="none"
        
    }else{
        searchBox.style.color="black"
    let api = `https://api.lyrics.ovh/suggest/${searchBox.value}`
    document.getElementById("show-lyrics").style.display="none"
    
    fetch(api)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.data.length)
        if(data.data.length==0){
            document.getElementById("alertUnavailable").innerHTML=`<h4 style="color:red; text-align:center">We are so sorry that <br>
            this lyrics is not available, now</h4>`
        }else{
            for(let i=1; i<=data.data.length; i++){
            
                document.getElementById("lyricsTitle"+i).innerHTML=data.data[i].title
                document.getElementById("lyricsArtist"+i).innerHTML=data.data[i].artist.name
                lyricsSongSuggestionList.style.display="block"
                let count=1;
                document.getElementById("getLyricsBtn"+i).addEventListener("click",event=>{
                    
                    
                    let textContent=document.getElementById("show-lyrics")
    
                    let title=data.data[i].title
                    let artist=data.data[i].artist.name
                    let api2=`https://api.lyrics.ovh/v1/${artist}/${title}`
                    fetch(api2)
                    .then(res=>res.json())
                    .then(data=>{
                        // console.log(data.lyrics)
                        if(data.lyrics==undefined){
                            textContent.innerHTML=`<p style="color:red; text-align:center;">At this time, this lyrics is not available , Please try again later</p>`
                                textContent.style.display="block"
                                
                        }else{
                            if(count%2!==0){
                                textContent.innerHTML=data.lyrics
                                textContent.style.display="block"
                                
                                count++
                               }else{
                                textContent.style.display="none"
                                count++
                               }
                            
                        }
                        
                    })
                    
                })
                
            }
        }
    })
    
    songSuggestionList.style.display="none"

}
   
})



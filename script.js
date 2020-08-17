


function clickOnSearchBtn() {
    const songName = document.getElementById('input-value').value;
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        // allWork(data);
       for (let i = 0; i < 10; i++) {
           console.log(i);
            document.getElementById('title+i').innerText = data.data[i].title;        
       }
    // document.getElementById('title1').innerText = data.data[0].title;
   })
}


// function allWork(data) {
//     const title = document.getElementById('first-song').innerText = data.data[0].title;
//     const artist = document.getElementById('first-name').innerText = data.data[0].artist.name;
//      document.getElementById('clickLyrics').addEventListener('click', function () {
//      fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
//       .then(res => res.json())
//       .then(result => {
//          console.log(result);
//          document.getElementById('song-name').innerText = title;
//          document.getElementById('show-lyrics').innerText = result.lyrics;
//         })
//      })

//      const title1 = document.getElementById('second-song').innerText = data.data[1].title;
//     const artist1 = document.getElementById('second-name').innerText = data.data[1].artist.name;
//      document.getElementById('clickLyrics').addEventListener('click', function () {
//      fetch(`https://api.lyrics.ovh/v1/${artist1}/${title1}`)
//       .then(res => res.json())
//       .then(result => {
//           alert('btn clicked')
//          console.log(result);
//          document.getElementById('song-name').innerText = title1;
//          document.getElementById('show-lyrics').innerText = result.lyrics;
//         })
//      })

// }




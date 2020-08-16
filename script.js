


function clickOnSearchBtn() {
    const songName = document.getElementById('input-value').value; 
    fetch(`https://api.lyrics.ovh/suggest/${songName}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        allWork(data);
        clickLyrics(data);
   })
}


function allWork(data) {
    document.getElementById('first-song').innerText = data.data[0].title;
    document.getElementById('first-name').innerText = data.data[0].artist.name;
  

}

// document.getElementById('clickFirstLyrics').addEventListener('click', (data) => {
//     document.getElementById('show-lyrics').innerText = data.data[0].link;

// })
function clickLyrics(data) {
    document.getElementById('show-lyrics').innerText = data.data[0].link;
}

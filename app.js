// NASA API = https://api.nasa.gov/planetary/apod?api_key=dPdPSJldELdz2FThThVbVNdzFSEj7LAY9I0xsalx

function displayData() {
  let spaceimg = document.getElementById('spaceimg');
  let date = document.getElementById('date');
  let explanation = document.getElementById('explanation');
  let author = document.getElementById('author')
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=dPdPSJldELdz2FThThVbVNdzFSEj7LAY9I0xsalx"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let author_ = data.copyright;
      let date_ = data.date;
      let explanation_ = data.explanation;
      let image_ = data.hdurl;
      
      spaceimg.innerHTML = image_;
      explanation.innerHTML = explanation_;
      date.innerHTML = date_;
      author.innerHTML = author_;
      spaceimg.src = image_;
        
    })
}
displayData()

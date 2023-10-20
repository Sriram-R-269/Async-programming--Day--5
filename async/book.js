const duckDiv = document.getElementById("random-duck")
async function duck(){
// weather api
  let response = await fetch("https://openlibrary.org/people/mekBot/books/currently-reading.json");
    // fetch
  let data =  await response.json();
  duckDiv.innerHTML = `${JSON.stringify(data)}`;
    //alert(`${JSON.stringify(data)}`);
    // return
}
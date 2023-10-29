const duckDiv = document.getElementById("random-duck")
async function duck(){
// weather api
  let response = await fetch("https://bible-api.com/john 3:16");
    // fetch
  let data =  await response.json();
  duckDiv.innerHTML = `${JSON.stringify(data)}`;
    //alert(`${JSON.stringify(data)}`);
    // return
}

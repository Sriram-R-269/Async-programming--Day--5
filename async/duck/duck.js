const duckDiv = document.getElementById("random-duck")
async function duck(){
// weather api
  let response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects");
    // fetch
  let data =  await response.json();
  duckDiv.innerHTML = `${JSON.stringify(data)}`;
    alert(`${JSON.stringify(data)}`);
    // return
}
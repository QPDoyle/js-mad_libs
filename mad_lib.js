
function generateMadLibs() {
    const friendNameInput = document.getElementById('friendName');
    const friendName = friendNameInput.value;

    const stateNameInput = document.getElementById('stateName');
    const stateName = stateNameInput.value;

    const typeOfBirdInput = document.getElementById('typeOfBird');
    const typeOfBird = typeOfBirdInput.value;

    const adjInput = document.getElementById('adj');
    const adj = adjInput.value;

    const numInput = document.getElementById('num');
    const num = numInput.value;

    // friendName, stateName, typeOfBird, adj, num
    console.log('working', friendName);
    const paragraph = document.getElementById("mad-libs");

   // const paragraphContent = `Text ${variableName} text text`; 

    paragraph.textContent = ("Today I went on a hike with my friend ").concat(friendName, ". On our hike in ", stateName, 
    " We saw a ", typeOfBird, ". We rushed to take a photo of the bird but it came out ", adj, 
    ". We then realized we were lost and it took ", num, " hours to get back!");
    return 0;
}
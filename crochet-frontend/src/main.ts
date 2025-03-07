async function fetchMessage(){
    try{
        // Use fetch() to send a GET request to the backend at port 5500
        const response = await fetch('http://localhost:5500/');
        // Convert the response text
        const message = await response.text();
        // Find the paragraph element by its ID and update its content with the fetched message
        const messageElement = document.getElementById('message');

        if(messageElement){
            messageElement.innerText = message;
        }
    }catch(error){
        console.error('Error!!', error);
    }
}

fetchMessage();
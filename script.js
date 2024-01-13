
const apiKey = 'AIzaSyAcyUkVNyx2vBlpnx-GDSX3kua_6wfNjo0';
const channelId = 'UCVTOPLNZHSQZj6qrzQ5qTug';

function onYouTubeIframeAPIReady() {
    //console.log('hitin')
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1&type=video&eventType=live`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.items && data.items.length > 0) {
                const liveVideoId = data.items[0].id.videoId;
                console.log(liveVideoId);
                // Embed the live video within the playerContainer div
                const playerContainer = document.getElementById('playerContainer');
                const iframe = document.createElement('iframe');
                iframe.width = '640';
                iframe.height = '390';
                iframe.src = `https://www.youtube.com/embed/${liveVideoId}?autoplay=1`;
                iframe.allow = 'autoplay; encrypted-media';
                playerContainer.appendChild(iframe);
            } else {
                console.error('No live videos found on the specified channel.');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
        });
}

// onYouTubeIframeAPIReady();

function onPlayerReady(event) {
    // Player is ready, you can add any additional logic here
}

function onPlayerStateChange(event) {
    // Handle player state changes if needed
}
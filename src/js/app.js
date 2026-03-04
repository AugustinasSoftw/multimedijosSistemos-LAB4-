const video = document.getElementById('webcam');
const canvas = document.getElementById('face-canvas');
const context = canvas.getContext('2d');

// 1. WEBRTC: Request access to the webcam
navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        // If the user says "Yes", pipe the camera stream into the HTML video tag
        video.srcObject = stream;
    })
    .catch(function(err) {
        console.error("Camera access denied or error: ", err);
    });

// 2. TRACKING.JS: Set up the face tracking AI
const tracker = new tracking.ObjectTracker('face');
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

// Tell the tracker to watch our <video> element
tracking.track('#webcam', tracker);

// 3. DRAWING: Every time the AI finds a face, trigger this function
tracker.on('track', function(event) {
    // Wipe the canvas clean every frame so boxes don't smear across the screen
    context.clearRect(0, 0, canvas.width, canvas.height);

    // If it finds faces, loop through them and draw a box
    event.data.forEach(function(rect) {
        context.strokeStyle = '#00ff00'; // Neon green box
        context.lineWidth = 4;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);
        
        context.font = '18px Arial';
        context.fillStyle = '#00ff00';
        context.fillText('Face Detected', rect.x, rect.y - 10);
    });
});
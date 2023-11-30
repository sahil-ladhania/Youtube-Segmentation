// Targeting DOM.
let video = document.querySelector('#video');
// Finding Total Duration.
const totalDuration = Math.floor(video.duration);
console.log(`Total Video Duration : ${totalDuration} sec`);
// Setting Segment Duration.
let outroDuration = 5;
let introDuration = 5;
let finalDuration = 9;
// Store Segment Data Empty Array.
let segmentData = [];
// Get The Video Length And Calculate The Time For Each Segment.
for(let i = 0 ; i <= totalDuration ; i++){
    if((i > 0) && (i <= outroDuration)){
        // Task 1: Store Outro Segment Data
        // Create an object with start time, end time, and label
        let outroObject = {
            startTime : i,
            endTime : i + 1,
            label : 'Outro'
        }
        // Push the object to the segmentData array
        segmentData.push(outroObject);
    }
    else if((i > outroDuration) && (i <= outroDuration + introDuration)){
        // Task 2: Store Intro Segment Data
        // Create an object with start time, end time, and label
        let introObject = {
            startTime : i,
            endTime : i + 1,
            label : 'Intro'
        }
        // Push the object to the segmentData array
        segmentData.push(introObject);
    }
    else if((i > outroDuration + introDuration) && (i <= outroDuration + introDuration + finalDuration)){
        // Task 3: Store Final Segment Data
        // Create an object with start time, end time, and label
        let finalObject = {
            startTime : i,
            endTime : i + 1,
            label : 'Final'
        }
        // Push the object to the segmentData array
        segmentData.push(finalObject);
    }
}
console.log(segmentData);
// Creating a Function For Rendering Segments.
const renderSegments = () => {
    
}
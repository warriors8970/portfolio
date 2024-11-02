function openFolder(folderId) {
    document.getElementById(folderId).style.display = "flex";
}

function closeFolder(folderId) {
    document.getElementById(folderId).style.display = "none";
}

function openProjectDetails(folderId) {
    closeFolder('projects-popup'); // Close the main projects popup
    openFolder(folderId); // Open the specific project details popup
}

function openProjectUsage(folderId) {
    closeFolder('project1-details-popup'); // Close project details
    openFolder(folderId); // Open usage popup
}

// Close the modal if the user clicks outside the modal content
window.onclick = function(event) {
    let modals = document.getElementsByClassName('popup');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

function setProgress(widgetIndex, percentage) {
    const totalLength = 219.9; // Circumference based on r=35
    const offset = totalLength - (totalLength * percentage / 100);
    
    const progressCircle = document.querySelectorAll('.progress')[widgetIndex];
    const percentageDisplay = document.querySelectorAll('.percentage')[widgetIndex];

    progressCircle.style.strokeDashoffset = offset;
    percentageDisplay.textContent = `${percentage}%`;
}

// Example usage
setProgress(0, 78); // Set CPU to 27%
setProgress(1, 56); // Set Memory to 20%
setProgress(2, 68);  // Set Disk to 0%
setProgress(3, 50);  // Set Network to 5%

function zoomImage(imageSrc) {
    // Get the modal and image element
    const modal = document.getElementById('zoom-modal');
    const zoomedImage = document.getElementById('zoomed-image');
    
    // Set the source of the zoomed image to the clicked image source
    zoomedImage.src = imageSrc;
    
    // Display the modal
    modal.style.display = 'flex';
}

// Function to close the zoom modal
function closeZoom(event) {
    // Close the modal if the target is the modal background or close icon
    if (event.target.id === 'zoom-modal' || event.target.classList.contains('close-modal')) {
        document.getElementById('zoom-modal').style.display = 'none';
    }
}

// Adding an event listener to the modal to allow closing when clicking outside the image
document.getElementById('zoom-modal').addEventListener('click', closeZoom);

document.addEventListener('DOMContentLoaded', function () {
    const analog = document.getElementById('analog');
    const start_btn = document.getElementById('start-btn');
    const stop_btn = document.getElementById('stop-btn');
    const content3 = document.querySelector('.content3');

    let timecontainer = document.createElement('span');
    timecontainer.classList.add("time-container");
    analog.appendChild(timecontainer);

    function updateTime() {
        let date = new Date();
        let timestamp = date.toLocaleString('en-us', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        timecontainer.innerHTML = timestamp;
    }

    updateTime(); // Initial call to display the time immediately
    let intervalId = setInterval(updateTime, 1000); // Update the time every second

    stop_btn.addEventListener('click', function () {
        clearInterval(intervalId); // Stop the interval
        let date = new Date();
        let timestamp = date.toLocaleString('en-us', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        let newTimeContainer = document.createElement('span');
        newTimeContainer.classList.add("time-container");
        newTimeContainer.innerHTML = timestamp;
        
        const delete_btn = document.createElement('button');
        delete_btn.setAttribute('id', 'delete-timestamp');
        delete_btn.textContent = "Delete"
        delete_btn.addEventListener('click', function() {
            content3.removeChild(newTimeContainer)
        })
        newTimeContainer.appendChild(delete_btn)
        content3.appendChild(newTimeContainer);
    });
});
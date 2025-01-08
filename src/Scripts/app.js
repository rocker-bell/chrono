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
    setInterval(updateTime, 1000); // Update the time every second

    function loadTimestamps() {
        let datalist = JSON.parse(localStorage.getItem('time-container')) || [];
        datalist.forEach(data => {
            let newTimeContainer = document.createElement('span');
            newTimeContainer.classList.add("time-container");
            newTimeContainer.innerHTML = `<strong>id:</strong> ${data.id} - <strong>timestamp:</strong> ${data.timestamp}`;

            const delete_btn = document.createElement('button');
            delete_btn.setAttribute('id', 'delete-timestamp');
            delete_btn.textContent = "Delete";
            delete_btn.addEventListener('click', function () {
                datalist = datalist.filter(item => item.id !== data.id);
                localStorage.setItem("time-container", JSON.stringify(datalist));
                content3.removeChild(newTimeContainer);
            });

            newTimeContainer.appendChild(delete_btn);
            content3.appendChild(newTimeContainer);
        });
    }

    loadTimestamps(); // Load saved timestamps on page load

    stop_btn.addEventListener('click', function () {
        let datalist = JSON.parse(localStorage.getItem('time-container')) || [];
        let date = new Date();
        let timestamp = date.toLocaleString('en-us', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        });
        let data = { id: datalist.length + 1, timestamp: timestamp };
        datalist.push(data);
        localStorage.setItem("time-container", JSON.stringify(datalist));

        let newTimeContainer = document.createElement('span');
        newTimeContainer.classList.add("time-container");
        newTimeContainer.innerHTML = `<strong>id:</strong> ${data.id} - <strong>timestamp:</strong> ${data.timestamp}`;

        const delete_btn = document.createElement('button');
        delete_btn.setAttribute('id', 'delete-timestamp');
        delete_btn.textContent = "Delete";
        delete_btn.addEventListener('click', function () {
            datalist = datalist.filter(item => item.id !== data.id);
            localStorage.setItem("time-container", JSON.stringify(datalist));
            content3.removeChild(newTimeContainer);
        });

        newTimeContainer.appendChild(delete_btn);
        content3.appendChild(newTimeContainer);
    });
});
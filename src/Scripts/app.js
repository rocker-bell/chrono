// document.addEventListener('DOMContentLoaded', function () {
//     const analog = document.getElementById('analog');
//     const start_btn = document.getElementById('start-btn');
//     const stop_btn = document.getElementById('stop-btn');
//     const content3 = document.querySelector('.content3');

//     let timecontainer = document.createElement('span');
//     timecontainer.classList.add("time-container");
//     analog.appendChild(timecontainer);
//     let datalist = JSON.parse(localStorage.getItem('time-container')) || [];

//     function updateTime() {
//         let date = new Date();
//         let timestamp = date.toLocaleString('en-us', {
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric'
//         });
//         timecontainer.innerHTML = timestamp;
//     }

//     updateTime(); // Initial call to display the time immediately
//     setInterval(updateTime, 1000); // Update the time every second

//     function loadTimestamps() {
//         datalist.forEach(data => {
//             render(data);
//         });
//     }

//     loadTimestamps(); // Load saved timestamps on page load

//     stop_btn.addEventListener('click', function () {
//         let date = new Date();
//         let timestamp = date.toLocaleString('en-us', {
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric'
//         });
//         let data = { id: datalist.length + 1, timestamp: timestamp };
//         datalist.push(data);
//         localStorage.setItem("time-container", JSON.stringify(datalist));

//         render(data);
//     });

//     function render(data) {
//         let newTimeContainer = document.createElement('div');
//         newTimeContainer.classList.add("newtime-container");
//         newTimeContainer.innerHTML = `<strong>id:</strong> ${data.id} <strong>timestamp:</strong> ${data.timestamp}`;
//         newTimeContainer.setAttribute('draggable', true);
//         newTimeContainer.setAttribute('data-id', data.id);

//         const delete_btn = document.createElement('button');
//         delete_btn.setAttribute('id', 'delete-timestamp');
//         delete_btn.textContent = "Delete";
//         delete_btn.addEventListener('click', function () {
//             datalist = datalist.filter(item => item.id !== data.id);
//             localStorage.setItem("time-container", JSON.stringify(datalist));
//             content3.removeChild(newTimeContainer);
//         });

//         newTimeContainer.appendChild(delete_btn);
//         content3.appendChild(newTimeContainer);

//         // Drag and drop for desktop
//         newTimeContainer.addEventListener('dragstart', function (e) {
//             e.dataTransfer.setData("text/plain", data.id);
//         });

//         newTimeContainer.addEventListener('dragover', function (e) {
//             e.preventDefault();
//         });

//         newTimeContainer.addEventListener('drop', function (e) {
//             e.preventDefault();
//             const id = e.dataTransfer.getData("text/plain");
//             const draggableElement = document.querySelector(`.newtime-container[data-id='${id}']`);
//             if (draggableElement && draggableElement !== newTimeContainer) {
//                 content3.insertBefore(draggableElement, newTimeContainer.nextSibling);
//             }
//         });

//         // Touch events for mobile
//         newTimeContainer.addEventListener('touchstart', handleTouchStart, false);
//         newTimeContainer.addEventListener('touchmove', handleTouchMove, false);
//         newTimeContainer.addEventListener('touchend', handleTouchEnd, false);

//         let touchStartX = 0;
//         let touchStartY = 0;

//         function handleTouchStart(e) {
//             const touch = e.touches[0];
//             touchStartX = touch.clientX;
//             touchStartY = touch.clientY;
//             e.target.style.opacity = '0.5';
//         }

//         function handleTouchMove(e) {
//             e.preventDefault();
//             const touch = e.touches[0];
//             const touchMoveX = touch.clientX;
//             const touchMoveY = touch.clientY;
//             e.target.style.transform = `translate(${touchMoveX - touchStartX}px, ${touchMoveY - touchStartY}px)`;
//         }

//         function handleTouchEnd(e) {
//             e.target.style.opacity = '1';
//             e.target.style.transform = 'none';
//             const touch = e.changedTouches[0];
//             const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
//             if (dropTarget && dropTarget.classList.contains('newtime-container') && dropTarget !== e.target) {
//                 content3.insertBefore(e.target, dropTarget.nextSibling);
//             }
//         }
//     }
// });


document.addEventListener('DOMContentLoaded', function () {
    const analog = document.getElementById('analog');
    const start_btn = document.getElementById('start-btn');
    const stop_btn = document.getElementById('stop-btn');
    const content3 = document.querySelector('.content3');

    let timecontainer = document.createElement('span');
    timecontainer.classList.add("time-container");
    analog.appendChild(timecontainer);
    let datalist = JSON.parse(localStorage.getItem('time-container')) || [];

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
        datalist.forEach(data => {
            render(data);
        });
    }

    loadTimestamps(); // Load saved timestamps on page load

    stop_btn.addEventListener('click', function () {
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

        render(data);
    });

    function render(data) {
        let newTimeContainer = document.createElement('div');
        newTimeContainer.classList.add("newtime-container");
        newTimeContainer.innerHTML = `<strong>id:</strong> ${data.id} <strong>timestamp:</strong> ${data.timestamp}`;
        newTimeContainer.setAttribute('draggable', true);
        newTimeContainer.setAttribute('data-id', data.id);

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

        // Drag and drop for desktop
        newTimeContainer.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData("text/plain", data.id);
        });

        newTimeContainer.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        newTimeContainer.addEventListener('drop', function (e) {
            e.preventDefault();
            const id = e.dataTransfer.getData("text/plain");
            const draggableElement = document.querySelector(`.newtime-container[data-id='${id}']`);
            if (draggableElement && draggableElement !== newTimeContainer) {
                content3.insertBefore(draggableElement, newTimeContainer.nextSibling);
                updateOrder();
            }
        });

        // Touch events for mobile
        newTimeContainer.addEventListener('touchstart', handleTouchStart, false);
        newTimeContainer.addEventListener('touchmove', handleTouchMove, false);
        newTimeContainer.addEventListener('touchend', handleTouchEnd, false);

        let touchStartX = 0;
        let touchStartY = 0;

        function handleTouchStart(e) {
            const touch = e.touches[0];
            touchStartX = touch.clientX;
            touchStartY = touch.clientY;
            e.target.style.opacity = '0.5';
        }

        function handleTouchMove(e) {
            e.preventDefault();
            const touch = e.touches[0];
            const touchMoveX = touch.clientX;
            const touchMoveY = touch.clientY;
            e.target.style.transform = `translate(${touchMoveX - touchStartX}px, ${touchMoveY - touchStartY}px)`;
        }

        function handleTouchEnd(e) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'none';
            const touch = e.changedTouches[0];
            const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
            if (dropTarget && dropTarget.classList.contains('newtime-container') && dropTarget !== e.target) {
                content3.insertBefore(e.target, dropTarget.nextSibling);
                updateOrder();
            }
        }
    }

    function updateOrder() {
        const newOrder = [];
        content3.querySelectorAll('.newtime-container').forEach((element, index) => {
            const id = parseInt(element.getAttribute('data-id'));
            const data = datalist.find(item => item.id === id);
            if (data) {
                newOrder.push(data);
            }
        });
        datalist = newOrder;
        localStorage.setItem('time-container', JSON.stringify(datalist));
    }
});
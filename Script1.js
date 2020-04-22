document.addEventListener('DOMContentLoaded', event => {
    let button = document.getElementById('ShowUSBDevices')

    button.addEventListener('click', async () => {

        navigator.usb.getDevices().then(devices => {
            devices.map(device => {
                console.log(device.productName);
                console.log(device.manufacturerName);
            });
        })
        console.log('done');
    })
})

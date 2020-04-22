document.addEventListener('DOMContentLoaded', event => {
    let button = document.getElementById('ShowUSBDevices')

    button.addEventListener('click', async () => {

        let device;
        try {
            device = await navigator.usb.requestDevice();
        } catch (err) {
            // No device was selected.
            console.log('No Devcice Found');
        }

        if (device !== undefined) {
            // Add |device| to the UI.
            console.log(device.productName);
            console.log(device.manufacturerName);
        }
        console.log('Done');
    })
})

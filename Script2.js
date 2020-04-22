document.addEventListener('DOMContentLoaded', event => {
    let button = document.getElementById('ShowUSBDevices')

    button.addEventListener('click', async () => {

        let device;
        try {
            device = await navigator.usb.requestDevice({
                filters: [{
                    vendorId: 0x0801,
					productId: 0x2020
                }]
            });
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

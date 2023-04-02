export default function getDeviceId() {

    let device_id = localStorage.getItem('device_id');

    if (!device_id) {
        device_id = crypto.randomUUID();
        localStorage.setItem('device_id', device_id);
    }

    return device_id;
}

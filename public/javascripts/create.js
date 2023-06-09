
async function create() { 
    const form = document.querySelector('form');
    const data = Object.fromEntries(new FormData(form).entries());

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3001/spent");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    const body = `name=${data.name}&value=${data.value}&date=${data.date}&origin=${data.origin}`;
    xhr.send(body);

    return location.href='./'
}

async function remove(id, origin) {
    console.log(id, origin)
    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", 'http://localhost:3001/spent');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

    const body = `id=${id}&type=${origin}`;
    xhr.send(body);

    return location.reload()
}
window.onload = () => {
    fetch('//auto-certify.liyanjie.net/latestVersion.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json()).then(data => {
        let download = document.getElementById("Download");
        download.href = `//auto-certify.liyanjie.net/download/${data.version}.zip"`;
        download.download = `AutoCertify.${data.version}.zip`;
        download.querySelector('span').innerText = `立即下载 (最新版${data.version})`;
    }).catch(error => console.log(error));
}
window.onload = () => {
    document.querySelectorAll('a[download]')
        .forEach(item => {
            fetch(`./${item.id}/latestVersion.json`)
                .then(response => response.json())
                .then(data => {
                    item.href = data.DownloadUrl;
                    item.download = `AutoCertify-${item.id}-v${data.Version}.zip`;
                    item.querySelector('span').innerText = `${item.id} v${data.Version}`;
                })
                .catch(error => console.log(error));
        });
}
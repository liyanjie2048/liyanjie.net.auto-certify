window.onload = () => {
    document.querySelectorAll('a[download]')
        .forEach(item => {
            const id = item.id;
            fetch(`./${id}/latestVersion.json`)
                .then(response => response.json())
                .then(data => {
                    item.href = data.DownloadUrl;
                    item.download = `AutoCertify-${id}-v${data.Version}.zip`;
                    item.querySelector('span').innerText = `${id} v${data.Version}`;
                })
                .catch(error => console.log(error));
        });
}
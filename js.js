window.onload = () => {
    document.querySelectorAll('a[download]')
        .forEach((item, i, p) => {
            const id = item.id;
            fetch(`https://auto-certify.liyanjie.net/${id}/latestVersion.json`)
                .then(response => response.json())
                .then(data => {
                    item.href = data.DownloadUrl;
                    item.download = `AutoCertify-${id}-${data.Version}.zip`;
                    item.querySelector('span').innerText = `${id} ${data.Version}`;
                })
                .catch(error => console.log(error));
        });
}
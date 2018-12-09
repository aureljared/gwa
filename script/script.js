/*
    Pisay GWA promotional website
    Copyright 2018- Jared Dantis.
*/

$(function(){
    // Remove download button if on iOS
    // Detection from https://stackoverflow.com/a/9039885/3350320
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if (iOS)
        $('#android-dl').remove();
    else
        updateApkUri();

    // Update copyright year
    var year = new Date().getFullYear();
    if (year > 2018)
        $('#year').text('-' + year);
});

function updateApkUri() {
    var baseUri = 'https://api.github.com/repos/illustra/gwa-android/releases/latest';
    $.getJSON(baseUri, function(data){
        var apkUri = data.assets[0].browser_download_url;
        $('#android-dl').attr('href', apkUri);
    });
}
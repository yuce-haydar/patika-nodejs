let args=process.argv.splice(2,3)
function AlanHesapla(cap) {
    let alan=3*cap**2
    console.log(`yarıcapı ${cap} olan daierenin alanı ${alan}`)
}
AlanHesapla(args[0],args[1])
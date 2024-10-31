    var controls = document.getElementsByClassName('copyToClipboard');
    var codesText = '';

    for (var i = 0; i < controls.length; i++) {
        var code = controls[i].innerHTML.trim();
        codesText += code + '\n'; // Her kodu bir satıra ekle
    }

    console.log(codesText); // Kodları satır satır yazdır






    
    setInterval(() => {
        const filledBar = document.querySelector('#filledBar');
        console.log('Yüzde: ' + filledBar.style.width);
    }, 100); // Her 100 milisaniyede bir işlemi tekrar eder
    



    setInterval(() => {
        console.clear()
        const filledBar = document.querySelector('#filledBar');
        console.log('Yüzde: ' + filledBar.style.width + " ----- " + ((filledBar.style.width.replace('%', '')) / 0.09182699999999999) + " / " + (100 / 0.09182699999999999));    
    }, 2000); // Her 100 milisaniyede bir işlemi tekrar eder





    // Başlangıç zamanı
    const startTime = new Date();

    setInterval(() => {
        console.clear();
        
        // filledBar öğesini seçme
        const filledBar = document.querySelector('#filledBar');

        var barWidth = filledBar.style.width.replace('%', '')
        
        // Yüzde ve genişlik oranı hesaplama
        console.log('Yüzde: ' + barWidth + "% ----- " + 
                    (barWidth / 0.09182699999999999) + " / " + 
                    (100 / 0.09182699999999999));
        
        // Şu anki zaman
        const currentTime = new Date();
        
        // Geçen süreyi hesapla
        const elapsedTime = currentTime - startTime;
        
        // Saate, dakikaya ve saniyeye dönüştürme
        const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
        
        // Geçen süreyi yazdırma
        console.log(`Geçen süre: ${hours} saat, ${minutes} dakika, ${seconds} saniye`);
        
    }, 2000); // Her 2000 milisaniyede (2 saniye) bir işlemi tekrar eder



    // &low-price=30&high-price=225


    // &s=exact-aware-popularity-rank&c=ts&qid=1729325471&ts_id=3248802011&ref=sr_st_exact-aware-popularity-rank&



    // &s=exact-aware-popularity-rank&c=ts&qid=1729325471&ts_id=3248802011&ref=sr_st_exact-aware-popularity-rank&low-price=30&high-price=225&page=2&ref=sr_pg_2

    // &rh=n%3A3248802011%2Cp_72%3A1248915011&dc&ds=v1%3AV2d4hGW18MkaobHaHuJFcCdEiBjefG0mfbqbv6M37M4&s=exact-aware-popularity-rank&c=ts&qid=1729325471&ts_id=3248802011&ref=sr_st_exact-aware-popularity-rank&low-price=30&high-price=225&page=2&ref=sr_pg_2
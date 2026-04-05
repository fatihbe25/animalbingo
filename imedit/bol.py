import os
from PIL import Image

def resmi_bol(resim_yolu, cikis_klasoru):
    # Çıkış klasörünü oluştur
    if not os.path.exists(cikis_klasoru):
        os.makedirs(cikis_klasoru)

    try:
        # Resmi aç
        img = Image.open(resim_yolu)
        genislik, yukseklik = img.size
        print(f"Resim boyutu: {genislik}x{yukseklik}")

        # Grid yapısı (Resmindeki düzene göre)
        sutun_sayisi = 5
        satir_sayisi = 4

        # Her bir hücrenin boyutu
        hucre_genislik = genislik / sutun_sayisi
        hucre_yukseklik = yukseklik / satir_sayisi

        sayac = 1
        for satir in range(satir_sayisi):
            for sutun in range(sutun_sayisi):
                
                # Kesme koordinatları (sol, üst, sağ, alt)
                sol = sutun * hucre_genislik
                ust = satir * hucre_yukseklik
                sag = (sutun + 1) * hucre_genislik
                alt = (satir + 1) * hucre_yukseklik

                # Hücreyi kes
                hucre = img.crop((sol, ust, sag, alt))
                
                # Kaydet
                dosya_adi = f"hayvan_{sayac}.jpg"
                hucre_yolu = os.path.join(cikis_klasoru, dosya_adi)
                hucre.save(hucre_yolu)
                print(f"{dosya_adi} oluşturuldu.")
                sayac += 1

        print(f"\nBaşarılı! 20 resim '{cikis_klasoru}' klasörüne çıkarıldı.")

    except Exception as e:
        print(f"Hata: {e}")

# Dosya adını ve hedefi buraya yaz
resmi_bol("bingo_karti.jpg", "images")
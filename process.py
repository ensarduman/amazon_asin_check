import requests
import concurrent.futures
import time

# Kodların bulunduğu dosya
input_file = "codes.txt"
# Hata alan kodların yazılacağı dosya
output_file = "failed_codes.txt"

# Mevcut bir dosya varsa sıfırlamak için dosyayı boşalt
with open(output_file, 'w') as f:
    pass

# Kodları satır satır oku
with open(input_file, 'r') as f:
    codes = f.readlines()

# Headers ile tarayıcıdan geliyormuş gibi davran
headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-GB,en;q=0.9,tr-TR;q=0.8,tr;q=0.7,en-US;q=0.6',
    'cache-control': 'max-age=0',
    'cookie': 'csm-sid=098-8520375-0005817',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
}

# Sayaçlar
total_codes = len(codes)
success_count = 0
failure_count = 0

# Her bir kod için GET isteği yap
def check_code(code):
    global success_count, failure_count
    code = code.strip()
    url = f"https://www.amazon.ca/dp/{code}?th=1&psc=1"
    max_retries = 4
    retries = 0

    while retries <= max_retries:
        try:
            response = requests.get(url, headers=headers)
            if response.status_code == 200:
                print(f"Success: {code} (Deneme: {retries + 1})")
                success_count += 1
                break
            elif response.status_code == 404:
                retries += 1
                if retries > max_retries:
                    print(f"Hata: {code} HttpError: 404 (Not Found) Url: {url} (Deneme: {retries})")
                    failure_count += 1
                    with open(output_file, 'a') as f:
                        f.write(code + "\n")
            else:
                print(f"Hata: {code} HttpError: {response.status_code} Url: {url}")
                failure_count += 1
                break
        except requests.RequestException as e:
            retries += 1
            if retries > max_retries:
                print(f"Hata: {code} Url: {url} (Deneme: {retries})")
                failure_count += 1

        if retries <= max_retries:
            time.sleep(1)  # Her deneme arasında 1 saniye bekleme

    print(f"Toplam: {total_codes}, Tamamlanan: {success_count + failure_count}, Başarılı: {success_count}, Hatalı: {failure_count}")

# Paralel çalıştırma
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    executor.map(check_code, codes)

print(f"Hata alan kodlar {output_file} dosyasına kaydedildi.")

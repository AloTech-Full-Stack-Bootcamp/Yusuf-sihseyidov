## Soru 1: Bir dosyayı okumak için readFile fonksiyonunu çalıştırdım fakat bir durumda okuma işlemine gerek kalmadı bu yüzden işlemi iptal etmek istiyorum. Programın devamında dosya okuma işlemini nasıl iptal edebilirim? 
- Dosya okuma işlemi `AbortSignal` kullanılarak iptal edilebilir

## Soru 2: readFile fonksiyonu dosyayı bütün halinde okuyup memory’ye alır. Programın daha az memory kullanmasını sağlamak için alternatif olarak neler kullanılabilir? 
- Programın daha az memory kullanmasını sağlamak için `fs.createReadStream` kullanılabilir


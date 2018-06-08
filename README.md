# React & Redux Eğitimi
React & Redux dersleri.

![React js eğitim seti](https://mehmetseven.net/content/images/2018/05/react-js-mehmet-seven-3.jpg)

Kurs `Udemy` üzerinde yayınlanacak. Şuan 11 saat olan ve ufak tefek eksikler tamamlandıktan sonra 12 ila 15 saat bandında bir kurs olacak efenim. Videolar tamamen `60fps` ve `1080p` kalitede hazırlandı. Ayrıca ses profesyonel mikrofon ve ses kartı ile kaydedildi.

Malum Türkçe React ve Redux dersleri ile alakalı kaynak bulmak oldukça güç. Ben de bu açığı kapatmak adına bu kursu hazırladım.

React ve Redux'ı her yönüyle öğreneceğiniz, sıfırdan başlayan bir eğitim. Zaten kursun adı da **"Sıfırdan Her Yönüyle React & Redux"**. Daha önce hiç `React` ile ilgilenmemiş olanlar da rahatlıkla bu kursu edinip öğrenmeye başlayabilirler.

## Neleri Konuşuyoruz?
Her zaman beklentilerin üzerinde kurs vermeyi hedefledim. Yani bu da demek oluyor ki, sadece React ve Redux öğrenmeyeceksiniz. Bu teknolojiler ile entegre çalışabilecek veya bu teknolojiler ile birlikte kullandığınızda ortaya daha iyi işler çıkarabileceğinize inandığım teknolojilerden de bahsettim.

Tüm öğrendiklerimizi de havada bırakmayıp projeler ile iyice pekiştirdik. Projelere çok fazla önem verdim. Kursun yaklaşık 4 saatlik kısmını projeler oluşturuyor.


## Temel Dersler
Bir teknolojiyi her yönüyle öğrenirken en önemli nokta temel dersler. Eğer kullandığınız teknolojinin hangi amaca hizmet ettiğini, hangi sorunu çözmek için ortaya çıktığını bilmeden sırf popüler diye kullanırsanız inanın bana kaliteli işler çıkmıyor. İşte bu noktada "React Nedir?", "Redux Nedir?" ve hangi amaca hizmet etmek için, hangi sorunu çözerek ortaya çıkmışlar detaylı olarak anlattım.

Kodlarımızı tamamen EcmaScript 6 standartlarına uygun olarak yazdık. EcmaScript 6 temellerinden ve modül sisteminden de ayrıca bahsettim.

React'in temelini oluşturan `Component`, `Props`, `State`, `React Lifecycle`, `React Router` gibi kavramları özenerek anlattım.

## Redux
Redux, çoğu zaman anlaması ve uygulaması zor olduğu söylenen bir yapı. Ben bu sorunu konunun sıralı bir şekilde anlatılmamasına bağlıyorum. Sıralı olarak üzerine konarak anlatılan bir kursta oldukça anlaşılır bir yapı.

Redux nedir? Neden ihtiyaç duyarız gibi kilit bir soruyu cevapladıktan sonra, Redux data flow'u tanımlayarak `Action`, `Reducer`, `Dispatcher`, `Store`, `Provider` gibi redux'ın en kilit kavramlarını tek tek anlattım.

`Redux-thunk middleware` ile async action'ları nasıl yönetip kullanabileceğinize gerek Redux'ın temellerinde gerek proje derslerinde sık sık değinerek akılda kalıcı olarak kalmasını sağladım. 

Siz kurs içerisinde fark etmiyorsunuz ancak ben aynı şeyi farklı videolarda sık sık tekrarlıyorum. Bir şeyin akılda kalması da tekrara bağlı zaten. 

## React & Redux Movieapp Projesi

Takdir edersiniz ki öğrenilenleri pekiştirmenin en iyi yöntemi örnek proje geliştirmek. Biz de bu eğitimde React ve Redux ile örnek bir proje geliştirdik. 

Single page uygulama geliştirilen ortamlarda aslında en büyük ihtiyacınız `CRUD` işlemlerini başarılı bir şekilde yapmak. Projenin büyük yoğunluğu bu tarafta oluyor çünkü. 

Hazırladığımız bu proje CRUD işlemlerini yapabildiğiniz single page bir uygulama aslında.

`Node.JS` ile yazdığımız Restful servisi `React & Redux` ile kullandık. Backend servisleri ile nasıl çalışabileceğinizi burada çok çok iyi anlayacaksınız.

Projenin Kaynak kodları [şurada](https://github.com/meseven/react-redux-egitim-seti/tree/master/react-redux-movie-app).


## Sever Side Rendering

Malum, single page web uygulaması yazdığınızda her şey iyi güzel ancak bir dert var ki başa bela. O da SEO. Arama motorlarında iyi bir puana sahip olmak istediğinizde SPA web sayfaları size bunu sağlamıyor. Ancak bunun da çözümü var elbette. O da `Server Side Rendering`.

"Server Side Rendering Nedir? Neden ihtiyaç duyulur?" gibi soruları detaylı olarak anlattım.

## Next.JS
Server Side Rendering'in ne olduğunu anladıktan sonra `SSR` konusunda en iyi altyapıyı sağlayan [Next.JS](https://nextjs.org/)'i öğrenmeye başladık.

Next.JS'in sahip olduğu `Routing`, `Styled Component`, `HMR`, `Isomorphic Fetch`, `Prefetch` gibi kavramları enine boyuna anlattım.

Ayrıca custom routing işlemlerinde de `Express.JS` kullanarak konuyu destekledim.

Bu bölümden sonra günümüzün en modern web teknolojilerinden biri olan `Next.JS` ile `SSR` destekli `React` uygulamaları geliştirebileceksiniz.


## Progressive Web Uygulamaları ve JavaScript Service Workers
Progressive Web Uygulamaları, belki şuan'a kadar pek duymadığınız ama önümüzdeki on yıl içerisinde en çok duyacağınız kavramlarından biri.

Bir web site düşünün ki internet bağlantısı olmasa dahi çalışabilsin. Bize bunu kazandıran `Service Workers` denilen yapı. Internetin çekmediği metrolarda insanların web sitenizi kullanmasını ister misiniz? İşte bu konuyu da kursta anlattım. Faydalanacağınıza eminim.

## Deploy
Projenizi yaptıktan sonra en sancılı süreçlerden biri bu olabiliyor. Nereye deploy edeceğiz? Nasıl yöneteceğiz gibi sorular kafanızda sürekli dolaşıyordur eminim.

`React & Redux` ve `Next.JS` projelerinizi deploy edebileceğiniz. Üç ayrı sistemden bu eğitimde bahsettim. 

`Surge.sh`, `Netlify` ve `Now` üzerine `React` uygulamalarınızı nasıl sancısız bir şekilde deploy edip yönetebileceğinizi detaylı olarak bulacaksınız.


## Sonuç
Mesele sadece geliştirmek değil arkadaşlar! Mesele eğlenerek geliştirmek. İşte bu teknolojiler sayesinde eğlenerek geliştireceksiniz. Sizi bilmem ama ben böyle modern web teknolojileri ile proje geliştirince mutlu oluyorum.

Çok özendim bu kursa, umarım maximum faydayı sağlarım size.
Ben bu kursu bitirdikten sonra sizin için artık hiçbir şeyin eskisi olmayacağına kefilim :)

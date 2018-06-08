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

## Müfredat
* **Bölüm 1: Giriş**
 * **Ders 1:** React.JS Nedir ?
 * **Ders 2:** React.JS Hangi Sorunu Çözer
 * **Ders 3:** Virtual Dom nedir ?
 * **Ders 4:** React'ı Kullanmak Ne Zaman Mantıklı ?
 * **Ders 5:** Two-Way Data Binding Nedir ?
 * **Ders 6:** One-Way Data Binding Nedir ?
 * **Ders 7:** Component Nedir ?
 * **Ders 8:** JSX Nedir ?
* **Bölüm 2: Kurulumlar**
 * **Ders 9:** Node.JS Kurulumu
 * **Ders 10:** React Dev Tools
 * **Ders 11:** WebStorm
 * **Ders 12:** WebStorm React Live Templates
* **Bölüm 3: EcmaScript 6 Bilinmesi Gerekenler**
 * **Ders 13:** Spread Operator
 * **Ders 14:** Array Map
 * **Ders 15:** Array Filter
 * **Ders 16:** Object.assign
* **Bölüm 4: EcmaScript 6 Modül Sistemi**
 * **Ders 17:** Modül Oluşturmak 
 * **Ders 18:** Varsayılan Modül Belirlemek
 * **Ders 19:** as Keyword'ü ile Yeniden İsimlendirme
 * **Ders 20:** Çok Fonksiyonlu Modüllerde as Operatörü
 * **Ders 21:** Temiz Modül Yazmak
* **Bölüm 5: Component'ler (Bileşenler)**
 * **Ders 22:** Create-react-app ile Hello World!
 * **Ders 23:** Component Oluşturmak ve Kullanmak
 * **Ders 24:** Component Oluşturmak ve Kullanmak - 2
 * **Ders 25:** Özel Tanımlı Keyword'ler
 * **Ders 26:** Componentler'de Değişken Kullanmak
* **Bölüm 6: Props'lar ile Çalışmak**
 * **Ders 27:** Props nedir? Nasıl Kullanılır?
 * **Ders 28:** Props Kullanımı - 2
 * **Ders 29:** Props Kullanımı - 3
 * **Ders 30:** Props Kullanımı - 4
 * **Ders 31:** Döngülerde "key" Kullanımı
 * **Ders 32:** React Developer Tools
 * **Ders 33:** propTypes: Nedir? Nasıl kullanılır?
 * **Ders 34:** propTypes: "isRequired" Tanımı
 * **Ders 35:** propTypes: "oneOfType" Tanımı
 * **Ders 36:** propTypes: "oneOfType" için isRequired Kullanımı
 * **Ders 37:** propTypes: "shape" Tanımı
 * **Ders 38:** defaultProps Tanımı
 * **Ders 39:** Constructor Metodu
* **Bölüm 7: State'ler ile Çalışmak**
 * **Ders 40:** State nedir? Nasıl Oluşturulur?
 * **Ders 41:** setState Kullanımı
 * **Ders 42:** Re-Render Mantığını Anlamak
 * **Ders 43:** Counter Uygulaması
 * **Ders 44:** Stateful ve Stateless  Componentler
* **Bölüm 8: Telefon Rehberi Uygulaması**
 * **Ders 45:** Giriş
 * **Ders 46:** "Contacts" ve "List" Componentleri'nin Hazırlanması
 * **Ders 47:** Form Component'inin Hazırlanması
 * **Ders 48:** Contacts State'inin Hazırlanması
 * **Ders 49:** Contacts State Konumunun Değiştirilmesi
 * **Ders 50:** Form State'inin Yazılması
 * **Ders 51:** addContact Methodunun Yazılması
 * **Ders 52:** Filter Fonksiyonun Yazılması
 * **Ders 53:** Contacts Komponentinin Stateless Tanımlanması
* **Bölüm 9: React Lifecycle (Yaşam Döngüsü)**
 * **Ders 54:** Constructor
 * **Ders 55:** componentWillMount()
 * **Ders 56:** componentDidMount()
 * **Ders 57:** componentDidMount() Hiyerarşisi Hakkında
 * **Ders 58:** componentWillReceiveProps()
 * **Ders 59:** shouldComponentUpdate()
 * **Ders 60:** componentWillUpdate()
 * **Ders 61:** componentDidUpdate()
 * **Ders 62:** componentWillUnmount()
* **Bölüm 10: Fetching**
 * **Ders 63:** JavaScript Native "fetch" Fonksiyonu
 * **Ders 64:** "Loading..." Gösterimi
 * **Ders 65:** Axios
* **Bölüm 11: React Router**
 * **Ders 66:** BrowserRouter ve Exact Özelliği
 * **Ders 67:** Strict Özelliği
 * **Ders 68:** Component Özelliği
 * **Ders 69:** Route'a Parametre Göndermek
 * **Ders 70:** Link Objesi
 * **Ders 71:** NavLink Objesi
 * **Ders 72:** Redirect Objesi
 * **Ders 73:** Switch ile Hata Sayfası Yapımı
 * **Ders 74:** Component'leri Dışarıda Yazmak
* **Bölüm 12: İleri Component Kullanımları**
 * **Ders 75:** Higher Order Components
 * **Ders 76:** Reusable Higher Order Components
 * **Ders 77:** Pure Component
 * **Ders 78:** Hot Module Replacement
 * **Ders 79:** Children API
* **Bölüm 13: Redux**
 * **Ders 80:** Redux Nedir? Neden İhtiyaç Duyarız?
 * **Ders 81:** Redux Data Flow (Action, Reducer, Dispatcher,  Store)
 * **Ders 82:** Store Oluşturmak
 * **Ders 83:** dispatch() Metodu ile Store'u Güncellemek
 * **Ders 84:** Store Subscribe Metodu
 * **Ders 85:** combineReducers ile Multi Reducer Kullanımı
 * **Ders 86:** Reducer'a Initial State Vermek
 * **Ders 87:** Redux Dev Tools
 * **Ders 88:** Provider Nedir?
 * **Ders 89:** Dizin Yapısının Oluşturulması
 * **Ders 90:** Connect ile Component'den Store'a Bağlantı Sağlamak
 * **Ders 91:** mapStateToProps
 * **Ders 92:** Action dispatch Etmek
 * **Ders 93:** mapDispatchToProps
 * **Ders 94:** Component'e Props Geçmek
 * **Ders 95:** mergeProps
 * **Ders 96:** Redux Thunk Middleware: Kurulum
 * **Ders 97:** Async Actions
 * **Ders 98:** Async Action Dispatch İşlemi
 * **Ders 99:** Async/Await Yapısı ile Servis Çağrımı
* **Bölüm 14: İleri Redux**
 * **Ders 100:** Immutable vs Mutable
 * **Ders 101:** Immutable Array
 * **Ders 102:** Redux Logger Middleware
 * **Ders 103:** Async Actions Pattern
 * **Ders 104:** Async Actions Pattern: Redux Promise Middleware
* **Bölüm 15: React & Redux Single Page Movieapp Projesi**
 * **Ders 105:** Proje Tanıtımı ve React Uygulamasının Ayağa Kaldırılması
 * **Ders 106:** Proje Dizinlerinin Oluşturulması
 * **Ders 107:** Redux Kurulumu: Store'u ve Root Reducer'ı Oluşturmak
 * **Ders 108:** Redux Kurulumu: Thunk Middleware ve Redux Dev Tools
 * **Ders 109:** Redux Kurulumu: Provider
 * **Ders 110:** React Router Kurulumu
 * **Ders 111:** MoviesPage Component Redux Store Bağlantısı
 * **Ders 112:** MoviesList Component'inin Hazırlanması
 * **Ders 113:** Semantic.UI Kit: Kurulum
 * **Ders 114:** Semantic.UI Kit: Tema Düzenlemeleri
 * **Ders 115:** Semantic.UI Kit: Bug Fix
 * **Ders 116:** Semantic.UI Kit: Bug Fix 2
 * **Ders 117:** Footer Component'inin Yazılması
 * **Ders 118:** Header Component'inin Yazılması
 * **Ders 119:** Semantic.UI Kit: Son İşlemler
 * **Ders 120:** Node.JS Backend'in Kurulması
 * **Ders 121:** Movies Action'ının Yazılması: fetchMovies()
 * **Ders 122:** Movies Reducer`ının Yazılması
 * **Ders 123:** MoviesList PropType Tanımının Güncellenmesi
 * **Ders 124:** Redux Logger Middleware Kurulumu
 * **Ders 125:** Movies Reducer'ının Yazılması: "FETCH_MOVIES_ERROR"
 * **Ders 126:** Redux Promise Middleware
 * **Ders 127:** Filmlerin Listelemesinin Yapılması
 * **Ders 128:** Filmlerin Listelemesinin Yapılması - 2
 * **Ders 129:** Loading Indicator'un Hazırlanmasi
 * **Ders 130:** Routing: Menüde Active Class Gösterimi
 * **Ders 131:** New Movie Sayfasının Hazırlanması
 * **Ders 132:** NewMovieForm Component'in Hazırlanması
 * **Ders 133:** NewMovieForm Component'in Hazırlanması - 2
 * **Ders 134:** NewMovieForm Validasyon İşlemleri
 * **Ders 135:** NewMovieForm Validasyon İşlemleri - 2
 * **Ders 136:** newMovie Sayfası Reducer Tanımının Yapılması
 * **Ders 137:** onNewMovieSubmit Action'ın Hazırlanması
 * **Ders 138:** onNewMovieSubmit Error Handle
 * **Ders 139:** Redirect ile Yönlendirme İşleminin Yapılması
 * **Ders 140:** Edit ve Delete Butonlarının Hazırlanması
 * **Ders 141:** Movie Edit: 1 - Route İşlemleri
 * **Ders 142:** Movie Edit: 2 - Inputların Doldurulması
 * **Ders 143:** Movie Edit: 3 - FETCH_MOVIE
 * **Ders 144:** Movie Edit 4 - Loading Gösterimi
 * **Ders 145:** Movie Edit 5 - Update
 * **Ders 146:** Delete Movie - 1
 * **Ders 147:** Delete Movie - 2
 * **Ders 148:** Redirect Bug Fix
 * **Ders 149:** Anasayfa Tasarımının Yapılması
* **Bölüm 16: Deploy**
 * **Ders 150:** Surge.sh: Deploy İşlemleri
 * **Ders 151:** Surge.sh: Route Problemi ve Çözümü
 * **Ders 152:** Surge.sh: Deploy Script'inin Yazılması
 * **Ders 153:** Netlify: Nedir? Manuel Deploy Nasıl Yapılır?
 * **Ders 154:** Netlify: Continuos Deployment
* **Bölüm 17: Next.JS ile Server Side Rendering**
 * **Ders 155:** Next.JS: Nedir?
 * **Ders 156:** Next.JS: Kurulum
 * **Ders 157:** Next.JS: Pages
 * **Ders 158:** Next.JS: Components
 * **Ders 159:** Next.JS: Link
 * **Ders 160:** Next.jS: Routing Query String
 * **Ders 161:** Next.JS: Routing As Özelliği
 * **Ders 162:** Next.JS: Layout
 * **Ders 163:** Next.JS: Head Component'i
 * **Ders 164:** Next.JS: Built-in Styled CSS
 * **Ders 165:** Next.JS: Express.JS ile Custom Route'lar Oluşturmak
 * **Ders 166:** Next.JS: Hot Module Reloading
 * **Ders 167:** Next.JS: Isomorphic Fetch
 * **Ders 168:** Next.JS: Stateful Componentler'de Isomorphic Fetch
 * **Ders 169:** Next.JS: Prefetch
 * **Ders 170:** Next.JS: Prefetch onMouseEnter
 * **Ders 171:** Progressive Web: Service Workers Nedir?
 * **Ders 172:** Progressive Web: Next.JS: Offline
* **Bölüm 18: Next.JS Deploy**
 * **Ders 173:** Now: Nedir? Nasıl Kullanılır? Deploy Nasıl Yapılır?



## Sonuç
Mesele sadece geliştirmek değil arkadaşlar! Mesele eğlenerek geliştirmek. İşte bu teknolojiler sayesinde eğlenerek geliştireceksiniz. Sizi bilmem ama ben böyle modern web teknolojileri ile proje geliştirince mutlu oluyorum.

Çok özendim bu kursa, umarım maximum faydayı sağlarım size.
Ben bu kursu bitirdikten sonra sizin için artık hiçbir şeyin eskisi olmayacağına kefilim :)

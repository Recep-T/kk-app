import React, { useState } from 'react';
import { BookOpen, X, ChevronRight, Quote } from 'lucide-react';

const SecondArticleCard = () => {
  const [showFull, setShowFull] = useState(false);

  // Metnin harfi harfine orijinal hali
  const content = `Muhterem Fethullah Gülen Hocaefendi, Ramazan ayı münasebetiyle yaptığı özel sohbette şunları söyledi:

Ramazan, her şeyden önce Kur’an-ı Kerim’in indiği ay olması itibarıyla kutlu zaman dilimidir.
Ramazan-ı şerîf, bilindiği gibi, Kur’an-ı Kerim’in nâzil olduğu ay olması itibarıyla mübarektir. Denebilir ki, Efendimiz ile alakalı bir sözde ifade edildiği ve “O’nun vilâdeti, dünyaya teşrifleri, insanlığın yeniden dünyaya gelişi demektir.” dendiği gibi bir kutsiyet söz konusudur. Bu açıdan da Kur’an-ı Kerim ile -esas- insanların insan olması söz konusu ise, insanlığın Cenâb-ı Hakk’a yönelmesi Kur’an sayesinde oluyor ise, onun nazil olduğu ay Ramazan-ı Şerif, belki en kutlu bir zaman dilimi demektir. Belki onun her gecesi, ayrı bir Kadir gibidir; fakat Sâhib-i Şeriat tarafından bir gecesine tahsis edilmiş Kadir Gecesi.

Şimdi onun -bir yönüyle- arefesinde bulunuyoruz; işte iki-üç gün sonra… Belki gölgesi şu anda başımızın üzerinde, yavaş yavaş hissetmeye çalışıyoruz ama dehrin hadiseleri karşısında belki böyle gönülden sahipleneceğimiz şekilde değil. Belki o duyguyu şimdi tetiklemek lazım insanlarda. Adeta hiçbir virüs insanlığa musallat olmamış, hiçbir veba ve tâûn insanlığa musallat olmamış… Her şey yerli yerinde, aynen zamanda hadiseler süt-liman… Dolayısıyla biz böyle bir hava içinde Ramazan-ı Şerifi karşılıyoruz; inşaallah orucunu tutacağız, terâvihini kılacağız, sadaka-ı fıtrını vereceğiz… إِلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ وَالْعَمَلُ الصَّالِحُ يَرْفَعُهُ “… Pak söz O’na yükselir ve meşrû, sağlam, yerinde ve ıslaha yönelik aksiyon o sözü yükseltir.” (Fâtır, 35/10) buyurulduğu gibi, o güzel işler, bir de amel-i sâlih ile esasen Cenâb-ı Hakk’a yükselecek, nezd-i Ulûhiyette yerini alacak, kıymetine göre takdir görecek. Öyle olacak… Hadiseleri nazar-ı itibara almayarak esasen…

Fakat muktezâ-ı beşeriyet… İzzet Molla’nın sözünü çok tekrar etmişimdir: “Ben usanmam -gözümün nuru- cefâdan ama / Ne de olmasa cefâdan usanır, candır bu!..” Şimdi bela başınızda sürekli böyle esiyor ve savuruyor sizi, her birinizi bir yere saçıyor. Dolayısıyla her gün bir yerde bir feryad yükseliyor; bir âhuzâr, bir inilti yükseliyor. Böyle bir tablo karşısında insanın, bütün bunları duymadan/hissetmeden Ramazan’ı kendine mahsus neşvesiyle duyması, onu her zaman yaşadığı o iştiyak ile yaşaması zor olabilir. Değişik vesileler ile zannediyorum ifade edilmiştir; “Ramazan ufku” esasen… Ramazan’da bizim çevremizi okumamız.. Ramazan’da kendimizi okumamız.. Ramazan’da eşya ve hadiselere bakmamız.. Ramazan’da önümüzü görmemiz.. Ramazan ile geriye bakmamız, geriyi bugün ile beraber mütalaa etmemiz, filan… Onu böyle bir bayram neşvesi içinde duyma… “Herhalde şimdi olmaz!” falan diyoruz; fakat işte dişini sıkıp bence bu kadar kritik durumlara rağmen, Ramazan’ı yine kendine has o derinliği ile duymak, çok önemlidir.

Belki aczimizi, fakrımızı, zaafımızı duyarak, aynı zamanda hatalarımızın/günahlarımızın yüzümüze çarpılması karşısında daha derinden Cenâb-ı Hakk’a teveccüh ederek, bir arınma mülahazası ile, arınma fikri ile bunları duyabiliriz. Yani, hadiseler her ne kadar amansız olursa olsun, bir kısım şeyler ne kadar imansız olursa olsun, insan, dişini sıkınca ve o Ramazan mülahazasını yürekten -böyle- nazar-ı itibara alınca, herhalde o takılabileceği şeylere takılmadan aşar, Allah’ın izni-inayeti ile. Onu hakikaten “kutlu bir zaman dilimi” halinde duyabilir. Her akşam, yeniden, bir kere daha Kevser yudumluyor gibi, her sahurda bir yönüyle bir “ba’s-u ba’de’l-mevt”e ulaşmış gibi yeniden Zât-ı Ulûhiyet ile ayrı bir münasebete geçer, Allah’ın izni-inayeti ile. Duyar onu; olumsuz şeyleri duymayı da belki çok erteler, onları öteler bir yönüyle; esas, Ramazan’ı kendi hususiyetleri ile yaşamaya çalışır, Allah’ın izni-inayetiyle. Bu açılardan diyoruz: Kutlu zaman dilimi.

Ramazan, aynı zamanda kendimizi dinleme zamanıdır.
Bir açıdan da Ramazan’a “kendimizi dinleme zamanı” diyoruz. O da hani ayrı bir tabir; çok defa belki kendi derinliğiyle onu da anlayamayabiliriz. Kendimizi dinleme, esasen bir yönüyle bir inzivaya çekilmiş gibi; işte aç durma, susuz durma, Cenâb-ı Hakk’a teveccüh etme… Bir de o mülahaza ile “kendimizi dinleme” çok önemli bir şey. İnsanın kendini dinlemesi, esasen, “Nesin sen?” sorusunun cevabını düşünmesi… Allah’ın kulu… Cenâb-ı Hakk’a karşı bir kısım mükellefiyetler ile muvazzafsın, bunları yerine getireceksin; gerçek kıymetin o sayede inkişaf edecek; kendini derinlemesine duyacaksın, kulluğunu derinlemesine hiseceksin; o kulluğuna bağlı olarak Cenâb-ı Hakk’a karşı derin bir saygı hissi ile O’na teveccüh edeceksin… Bu şekilde kendini dinleme, bir inziva hayatı yaşama, bir halvet hayatı yaşama ve öteden gelen şeyleri dinleme adına da çok önemlidir.

Evet, kapıyı o istikamette aralarsa, insan, bütün çirkinliklere rağmen, çok farklı şeyler, insanı bayıltan, kendinden geçiren, âdetâ en derin bir musiki hissi ile çok derin şeyler duyabilir; Allah’ın izniyle, inayetiyle. Kendini dinlediği takdirde…

Ramazan, zamanı bir başka duyuştur.
Ramazan, aynı zamanda böyle bir dinleme faslıdır. Belki ötelerden gelen değişik dalga boyundaki şeyleri dinleme… Aynı zamanda Kur’an adesesiyle bakıp, Kur’an merceğiyle bakıp, Kur’an’ın iniş merceğiyle bakıp hâdiseleri çok farklı görme, kendini ona göre konumlandırma, Allah’ın izni-inayetiyle, ona göre değerlendirme… Konumuna göre kendisi için bazı şeyler takdir etme, biçme, kesme filan… Bir yerden başka bir yere kendini koyma, alıp-koyma… Bütün bunlar, Ramazan sayesinde olabilecek şeylerdendir.

Böyle derinlemesine bakınca, insan, zaman üstü oluyor belki. Zaman üstü olunca da zamanı çok farklı derinlikleriyle duyuyor, Allah’ın izni-inayetiyle. Lâhutî derinlikleriyle duyuyor.

İşte “dehr” dediğimiz şey… Dehr, hakikatte Zât-ı Ulûhiyete ait bir tecelli… Farklı ifade ediliyor da ben böyle deme lüzumunu duyuyorum: Zât-ı Ulûhiyete ait farklı bir tecelli. Onu öyle derinlemesine duyuyoruz; zamanı derinlemesine duyuyor, zamanın kıymetini anlıyoruz; zamanın insana kazandırdığı şeyleri duyuyor, ân-ı seyyâlesinin ebedî bir ömre bedel olduğunu, ebedî bir ömür değerinde olduğunu duyuyoruz Ramazan-ı şerifte. Ramazan, bütün bu vâridât ile geliyor, insanın başına kendi sağanaklarını boşaltıyor. İnşaallah yine öyle olur.

“Ey iman edenler! Siz kendinizi düzeltmeye bakın! Siz doğru yolda olduktan sonra sapanlar size zarar veremez.”
Günümüzde içinde bulunduğumuz bir kısım dâhiyeler, belâlar, musibetler… Hani başta birilerinin zulmüne maruz kalma, haksızlıklara maruz kalma… Bunları görmezden gelmek çok zordur. Ama elden geldiğince görmezden gelmeye çalışmalı; meseleyi Allah’a havale etmeli. Allah, âdil-i mutlaktır.

Böyle, “Falan size şunu yaptı, filan size bunu yaptı!” Kalkıp böyle herkese kendinize göre bir ceza vermeye kalkarsanız, yerinde olmaz o bir kere, siz o cezayı veremezsiniz. Bazen o ceza, o kadar büyüktür ki, siz onu vermeye kalktığınız zaman, daire-i Ulûhiyete müdahale etmiş olursunuz, saygısızlıkta bulunmuş olursunuz. Bir de insanî kıvamınız açısından, insanî ufkunuz açısından o cezayı veremezsiniz.

Herkes karakterinin gereğini sergiler. Karakteri kötülüklere açık bir insana, zorla iyilik yaptırtamazsınız; bir kere yaptırtsanız bile, bir başka zaman yine karşınıza kötülük duyguları ile çıkar; bir defasında belki insanca davranır, on defa karakterine göre hareket eder. Dolayısıyla, o türlü şeyler ile meşgul olduğunuz zaman, meşgul olacağınız şeyleri ihmal etmiş olursunuz. Bu türlü böyle dünyaya ait dertler olan şeyler ile çok meşgul olmamalı. Vardı, hani bir vecizede vardı: “Derdi dünya olanın, dünya kadar derdi olur!” Bence dünyaya ait hiçbir meseleyi dert edinmemek lazım; nasıl olsa gelip-geçicidir bunlar. Onlara ehemmiyet verir, onları gözünüzde büyütürseniz, onların altında kalır ezilirsiniz.

Elden geldiğince o mevzuda temkinli olmalı ve görmezden gelmeli onları. Karakterlerinin gereğini yapıyor… كُلٌّ يَعْمَلُ عَلَى شَاكِلَتِهِ “Her insan kendi seciye ve karakterine göre davranır.” (İsrâ, 17/84) يَا أَيُّهَا الَّذِينَ آمَنُوا عَلَيْكُمْ أَنْفُSكُمْ لاَ يَضُرُّكُمْ مَنْ ضَلَّ إِذَا اهْتَدَيْتُمْ “Ey iman edenler! Siz kendinizi düzeltmeye bakın! Siz doğru yolda olduktan sonra sapanlar size zarar veremez.” (Mâide, 5/105) “Kendinize bakın!” diyor Kur’an-ı kerim. Kendi kusurlarınızı görmeye çalışın. Falan size zulmettiği zaman bile, “Acaba biz, Rabbimize karşı vazife ve sorumluluklarımızın hangisinde kusur yaptık ki, Cenâb-ı Hak, birilerini bize musallat etti!” Şu virüsü musallat eder Allah, zelzeleyi musallat eder, fay kırılmasını musallat eder, çekirgeyi musallat eder, güvercini musallat eder, eder eder, Allah celle celâluhu.

Ancak Allah’ın (celle celâluhu) “imhal”leri vardır; “ihmal”leri değil, “imhal”leri vardır. Mehil verir, Erhamü’r-Râhimîn’dir O (celle celâluhu), Rabbü’l-âlemîn’dir. Herkes böyle bir kusur işlediğinde onu hemen cezalandırırsa, yeryüzünde -yine Kur’an-ı Kerim’in değişik yerlerde farklı ifadelerle beyan buyurduğu gibi- yürüyen bir tane canlı kalmaz. Evet, çünkü herkes şöyle-böyle bir günah işler, bir zulümde bulunur. Dolayısıyla Allah onu cezalandırınca, o gider; şunu cezalandırınca, o gider; bunu cezalandırınca, o gider; hiç kimse kalmaz. Oysaki öyle değil. Allah’ın (celle celâluhu) imhalleri vardır ki insan kendine gelsin, aklını başına alsın, o kusurdan vazgeçsin, sevaba yönelsin, arınmaya koşsun, Allah (celle celâluhu) da onu bağışlasın, affetsin. اَللَّهُمَّ إِنَّكَ عَفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَACْفُ عَنَّا، يَا أَرْحَمَ الرَّاحِمِينَ * اَللَّهُمَّ اغْفِرْ لَنَا وَارْحَمْنَا، يَا غَفَّارُ، يَا سَتَّارُ، اِغْفِرْ لَنَا ذُنُوبَنَا كُلَّهَا، وَاسْتُرْ عُيُوبَنَا كُلَّهَا “Allahım, şüphesiz Sen affetmek şanından olan Afüvv, ikram u ihsan denince akla gelen yegâne Kerim’sin; affetmeyi çok seversin. Bizi affeyle, ey Erhamerrahimîn. Bizi yarlığa, merhamet buyur bize. Ey Gaffâr, ey Settâr, günahlarımızın tamamını mağfiret buyur; bütün ayıplarımızı setreyle.”

“Bu virüs de beni çok ağlattı; arkadaşlarıma her gün diyorum: Dünyanın değişik yerlerinde dua, teveccüh, münâcaat koroları oluşturun; Cenâb-ı Hakk’a toptan teveccüh edin!..”
Hatta bu arada şunu da diyebilirim: Şimdi şu anda bir virüs… Bunun beni ne kadar ağlattığını, Allah bilir. Her gün belki arkadaşlarıma diyorum: Dünyanın değişik yerlerinde dua, teveccüh, münâcaat koroları oluşturun; Cenâb-ı Hakk’a toptan teveccüh edin!.. Üstadımızın buyurduğu gibi: “Nasıl sadaka belayı ref’ eder; aynen öyle, ekseriyetin hâlisâne duası da ferec-i umumîyi cezbeder.” “Cezb” tabirini kullanıyor, “cezbeder” diyor.

Dolayısıyla, değişik yerlerde -böyle- dua koroları oluşturmak suretiyle Cenâb-ı Hakk’a teveccühte bulunarak, insanlığa musallat ettiği şu şeyi bir an evvel kaldırmasını O’ndan dilemek… Bu, hem bütün insanlık için bir moral olur… “Hakikaten böyle bir açık kapı varmış meğer!” derler. Hem başkalarına da bir yol-yöntem öğretmiş olursunuz. Bakın, şimdi Yahudi, Hıristiyan, Hıristiyanlığın değişik mezhepleri, Yahudilerin değişik mezhepleri filan, sizin arkadaşlarınız ile değişik yerlerde secdeye kapanıyorlar, dua ediyorlar; “Allah’ım! İnsanlığı bu dâhiyeden, bu beladan, bu mesâibden halâs eyle!” diyorlar. Cenâb-ı Hak size bir başka yol ile bir sevap kazandırıyor, bunu yapmak suretiyle sevap kazandırıyor.

Bu da böyle üç aylarda başladı; Recep, Şaban ve Ramazan işte geldi. Ramazan geldi-dayandı ama salgın/musibet devam ediyor. “Onun farklı versiyonları arkadan gelecek!” filan diyor bazıları. “Mutasyonlarla, değişikliklere uğrayarak, farklı bir formda yeniden karşınıza çıkacak, bu defa farklı şekilde sizi tırpanlayacak, hafizanallah, yere serecek!” diyorlar. Bütün bunlar karşısında o “Kuvve-i Kâhire”ye, “Kuvve-i Bâhire”ye, “İrâde-i Şâmile”ye, “İrâde-i Muhîte”ye teveccüh etmekten başka çareniz yok. Cenâb-ı Hakk’a teveccüh edeceksiniz; “Allah’ım! Sav bunları!” falan diyeceksiniz.

Böyle mübarek aylarda, insanlık için, kendiniz için bu türlü tazarru ve niyazlarda bulunma mevzuu çok önemli bir şey. Allah, ona denk getirdi; hem Ramazan’ın sevabı, hem orucun sevabı, hem geceleri kalkıp ihya etmenin sevabı.. unutulmuş teheccüdleri kılmanın sevabı.. secdeyi derinlemesine duymanın, hadiste buyurulduğu üzere O’na (celle celâluhu) en yakın olma hâlini duymanın sevabı… Hakikaten başınızı yere koyduğunuzda, O’na en yakın olduğunuzu hissederek, “Allah’ım! Ne olur şunu lütfeyle, bunu lütfeyle!” deme mevzuu, Cenâb-ı Hakk’ın ayrı bir lütfu, ayrı bir ihsanı oluyor size.

Bela ve musibetleri asla başkalarına fatura etmemeliyiz; bilakis kendimizden bilip hemen istiğfar ve tevbeye yönelmeliyiz!..
Bu arada, “Falanlar filanlara zulmetmişlerdi de, filanlar haksızlıkta bulunmuşlardı da, dolayısıyla onların bu zulümlerinden dolayı geldi!” gibi düşünce ve sözler ile bunları başkalarına fatura etmek suretiyle işin içinden sıyrılmaya çalışmamak lazım. Bu türlü bela ve musibetlerde -antrparantez arz ediyorum- elden geldiğince, insan, her şeyi kendinden bilmeli.

Niye bu bela ve musibetler geldi? “Benim yüzümden olabilir. Ben, Cenâb-ı Hakk’ın bana lütfettiği o imkanları tam, yerinde, rantabl olarak değerlendirmedim. Onun için Cenâb-ı Hak, beni bu türlü şeyler ile yeniden bir arınmaya sevk ediyor: ‘Aklını başına topla, bak, Ben varım!’ diyor.” demeli ve böyle düşünmeli!..

Yoksa böyle belalar ve musibetler geldiğinde, “Falanların yüzünden geldi, bak onlar da işte burada kıvranıyorlar!” falan demek, Allah’a karşı ayrı bir saygısızlıktır. Suçu başkalarında arama, yine kendini pâk, temiz, müzekkâ görme, doğru değildir. Tezkiye-i nefissiz, tezkiye-i nefiste bulunma mevzuu, çok ciddi bir yanlıştır. (Yani, tezkiyesiz nefs-i emmâresi bulunanın, nefsinin tezkiyesinden dem vurması, büyük bir hatadır.) Müzekkâ olmadığından, sen, kendini o temiz insan görmemelisin. Müzekkâ olma mevzuu da tabi ayrı bir husus; işte o büyüklere mahsus, bizi aşan bir konu.

Antrparantez dedim. Hani günümüzde, bugünlerde, içinde yaşadığımız günlerde bu türlü şeyler de, mülahazalar da çok önemli. Evet, böyle fikren, zihnen, kelâm-ı nefsiyle, insanlardan intikam alıyor gibi konuşma, falan… “Alın, çekin işte; Allah (celle celâluhu) nasıl hakkınızdan geliyor sizin!” filan deme… Belki Allah onların da, bizim de canımızı alır; onları da bizi de cezalandırır, eder… Öyle değil de esasen meseleyi kendimize bağlayarak “Bizim yüzümüzden oldu, Allahu a’lem. Cenâb-ı Hak, bizi de bağışlasın, başkalarını da bağışlasın!” demeli.

Efendim, bir-iki gün evvel bir zat vefat etti. Bir-iki gün ona çok ağlayarak dua ettim burada. Fakat değişik vesileler ile hep ifadesi şu olmuştu o hazretin: “Ben kendimi bildiğimden bu yana hep bunlar ile meşgul oldum, hep bunları meşgul ettim, bunları ben tanıttım; bunların hakkından gelmeye çalıştım!” falan. Şimdi “Ya Rabbi, Sana geliyor bu; namaz kılıyordu, oruç tutuyordu, bir sürü insana da dini-diyaneti anlatıyordu; ne olur, şu bize yaptığı şeylerden dolayı bunu cezalandırma; ne olur, bahtına düştüm Senin!” deyip durdum. Evet, Allah şahit… İnsan olmak başka bir meseledir; bu da “büyük olmak” değil, sadece “insan olmak”tır; bu, başka bir meseledir. O da “insana saygı” ile başlar, “insana saygı” ile devam eder, “insana saygı” ile biter. İnsan, “ahsen-i takvîm”e mazhardır; Cenâb-ı Hakk’ın acîb bir sanatı, şâyân-ı takdir bir sanatıdır. Ona ne kadar hürmet edilse değer, saygı duyulsa, değer. O (celle celâluhu), Habîr u Basîr, her şeyden haberdardır.

Ramazan, Kur’an ayıdır; bu mübarek zaman diliminde Allah’ın kelamına dikkatle yönelirseniz, mutlaka onun teveccühüyle mukabele görürsünüz.
Hani değişik vesileler ile arz etmişimdir: Doktor İkbal diyor ki: “Hep Kur’an-ı Kerim’i kemâl-i hassasiyetle okurdum.” Hakikaten de öyle okuyordur. Mesela İngiltere’de -zannediyorum- on altı sene kadar kalmış, teheccüdü bir kere kaçırmamış. Oysaki teheccüd, Türkiye’de unutulmuş; “teheccüd” diye bir namaz var mı, yok mu? Kaçırmamış onu orada. Hep Kur’an-ı Kerim’i okuyor, kemâl-i hassasiyetle. “Babam diyordu ki bana: Oğlum, Hazreti Muhammed’e (sallallâhu aleyhi ve sellem) inmiş Kur’an’ı, O’na inmiş bir Kur’an gibi değil, sana inmiş bir Kur’an gibi oku!” Öyle diyor. Şimdi işin esası, o; hep kendini muhatap olarak ele alma orada… Ama her şeyiyle kendini muhatap olarak alma… “Efendimiz’e ne demiş ise Cenâb-ı Hak, bana diyor bunu; fakat zılliyet planında, izafi planda bana diyor Allah (celle celâluhu) bunu!” Buna kimsenin itiraz etmeye hakkı da yoktur. Bu, öteden beri de öyle anlaşılmıştır.

Şimdi zannediyorum toplumumuzda bu ruh öldürüldü tamamen. Kur’an-ı Kerim, birilerinin küstahlık yapıp ağızlarından kaçırdıkları gibi “On dört asır evvel gökten indiği zannedilen Kur’an-ı Kerim.” olarak görülüyor. Efendim, bunların, ona öyle bakanların, o Kur’an-ı Kerim’in, o mucizevâri, muciz-beyân beyanı kendi derinlikleri ile duymaları mümkün değildir. Bir kere çok okuma, sürekli okuma, lâ-akall… Ee günümüzde -bilmiyorum- senede bir kere Kur’an-ı Kerim’i hatmeden var mı? Ramazan’da inşallah, hiç olmazsa bir kere Ramazan’da… Selef-i Sâlihîn -bildiğiniz gibi- Ramazan’ın dışında, on-on beş günde bir hatim yapıyorlar. Ramazan gelince, üç günde bir yapıyorlar. Ramazan’ın son on gününde, Kadir gecesine rastlar diye, her gün bir kere Kur’an-ı Kerim’i hatmediyorlar. Onu da yine rical oğlu rical (er oğlu erler)de, onların hayat tarzlarına, üsluplarına bakınca onlarda görebiliyorsunuz. Onlar, onu o şekilde yerine getiriyorlar. Bu, öldürülmüş bir ruh, bir manadır; bize dair öldürülmüş bir ruh, bir manadır.

Bu, telkin edilmeli esasen. Aynı zamanda bizi büyüleyen şeyler nelerdir, onları da vurgulamalı, arada vurgulamalı. Hani benim gibi bir ümmî bile Kur’an-ı Kerim’i okurken… Önümde Kur’an-ı Kerim, namaz kılarken bakıyorum ona… Bazen o, siyak-sibak itibarıyla öyle büyüleyici bir şey geliyor ki bana, orada, böyle namazın içinde, külahımı atasım geliyor.

Ee benim gibi bir insan, yarım-yamalak Müslüman o kadar hissediyorsa, demek ki böyle bütün gönlüyle ona teveccüh eden bir insan, الم*ذَلِكَ الْكِتَابُ لاَ رَيْبَ فِيهِ هُدًى لِلْمُتَّقِينَ “Elif, lâm, mim. İşte Kitap! Şüphe yoktur onda. Rehberdir müttakîlere!..” (Bakara, 2/1-2) ayetinden مِنَ الْجِنَّةِ وَالنَّاسِ‘ye kadar mushafın bütününü bir haritada, bir tabloda görüyor gibi bakıp onu Cenâb-ı Hakk’ın karşısında tekrar ediyor gibi… “Senin beyanın Allah’ım! Bunu ifade ediyorum ben: Kabul ettim, aynıyla bunu kabul ettim!” falan diyor gibi… Kendini öyle, o konumda hissetmesi neticesinde çok farklı şeyler duyar.

Bir de yürekten ona teveccüh edenler… Onun (Kur’an’ın) insana teveccühü vardır. Teveccüh, teveccüh doğurur. Teveccüh ederseniz, teveccühe vesile olur o teveccüh. Dolayısıyla, zannediyorum, bu türlü meseleler üzerinde derinlemesine durularak, esasen, Kur’an-ı Kerim’in, öyle sıradan birinin beyanı olmadığı çok iyi işlenmeli. Efendim, “On dört asır evvel gökten indiği zannedilen…” Hayır “zannedilen” değil!.. “Ben yalan olabilirim, ben hayal olabilirim; fakat onun Allah’tan geldiği kat’iyyen ve kâtıbeten…” Cenâb-ı Hakk’a verilmeyince, onu izah edemezsiniz esasen. Öyle büyülü şeyler vardır ki onda, bir taraftan bir düğümü çözdüğünüz zaman, esasen, “Bu, bana yetti!” falan dersiniz. Öyle bir derinliği vardır onun. Kitapların satırlarında bu olmaz esasen; bu, kalbin enginliğiyle, kalb mirsâdı ile bakılınca olur; heyecan mızrabı ile o tellere dokunulunca, insan ruhunda o ses duyulur; o mızrap ile o ses duyulabilir, Allah’ın izni-inayeti ile.

Yeni bir “Kur’an Çağı” yaşanabilir ama İlahi Beyan’ı hallaç edip onda derinleşecek ruh insanlarına ihtiyaç var!..
Şimdi bunu sürekli seslendirmek suretiyle, esasen, yeniden bir “Kur’an Çağı” olabilir, Allah’ın izni-inayeti ile, Hazreti Pîr-i Mugân, Şem’-i Tâbân gibi, bir yönüyle, o Kur’an-ı Kerim’i o ölçüde hallaç ederek… -Üstad Necip Fazıl, “eşya ve hadiseleri hallaç etme” tabirini kullanırdı; “tekvinî emirleri hallaç etme” derdi.- Kur’an-ı Kerim’i bu şekilde hallaç etmek suretiyle… آمَنْتُ بِاللهِ وَمَلاَئِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ اْلآخِرِ، وَبِالْقَدَرِ خَيْرِهِ وَشَرِّهِ مِنَ اللهِ تَعَالَى، وَالْبَعْثُ بَعْدَ الْمَوْتِ حَقٌّ “Allah’a, meleklerine, peygamberlerine, kitaplarına, âhiret gününe, kadere, hayır ve şerrin Allah Teâlâ’dan olduğuna iman ettim. İnandım: Öldükten sonra dirilmek haktır.” Bu hakikatlerin hepsi, Kur’an-ı Kerim’de var. Bunların hepsini üç tane hakikate ircâ edebilirsiniz. Nitekim etmişler; Gazzâlî de, Hazreti Pîr de ircâ ediyor aynı zamanda. Ama Kur’an-ı Kerim’i öyle duyma çok önemlidir.

Duyurma da Kur’an-ı Kerim’i duyanların vazifesidir. İnsan duymuş ise şayet, duyuracaktır onu. “Nasıl oluyor da insanlar -böyle- gâfilâne davranıyor; buna bakmıyorlar?” diyecektir; Sahabe-i Kiram gibi, Tâbiîn-i Izâm gibi düşünecektir: “O Kur’an’ı Kerim ama gözyaşları nerede? Kalbin heyecanı nerede? Kalbin titremesi nerede?!.”

Evet, insanlarda o duyguyu oluşturmak lazım. Ölü ruhların elinden alarak onu, hakikaten “Yahu bir kere daha duyayım!” diye namaza koşma ruhunu canlandırmak lazım. Kur’an’ı eline alma, öpme, başına koyma… Ondan sonra da saygı ile onun karşısında iki büklüm olma…

Bu, zannediyorum, günümüzde bu mevzuda uzman insanların yapabileceği bir iş… Uzman dediğim, kitapların satırlarında düktor (!), dû-cent (!), dû-cennet (!), profesör değil. Esasen ruh insanları, kalb insanları, his insanları, şuur insanları… Zannediyorum işte bu mevzuda çok ciddî tembihe ihtiyaç var, ısrarla tembihe ihtiyaç var.

Önceki senelerde Ramazan boyunca Kur’an-ı Kerim’i meali ile beraber okuyorduk; sabah-akşam okumak suretiyle bir cüz okunuyordu, hiç olmazsa ayda bir kere bir hatim oluyordu. Böyle işleye işleye, belki başkalarına on beş günde bir hatim yapma duygusu aşılanmış olurdu. Hiç olmazsa ayda bir, senede on iki defa Kur’an-ı Kerim’i hatmetme aşılanmış olurdu.

İmam-ı Ebu Yusuf hazretleri, “Nafile namazlarda Kur’an’a bakarak okumada mahzur yoktur.” diyor; onun özel fetvası, tercihi. Hani en azından Kur’an-ı Kerim’i öyle okuma… Hatta ondan evvel de bir mealine bakma, imkanlı varsa; sonra namaz kılarken o ruhla okuma. Hani, mealini düşünerek okuma değil de en azından ondan anlayacağı şeyleri anlama mevzuu… Arkadaşlarımızın bazıları yapıyor, şu anda bunu yapıyorlar; yapmaya da devam etmek lazım.

Yabancılaştığımız bu meseleyi yeniden temel mevzuumuz haline, temel konumuz haline getirmek lazım. Kur’an ile yeniden, bir kere daha tanışmak lazım, bütünleşmek lazım. “Aradan bin dört yüz sene geçmiş!” Elin-âlemin öyle uzaktan ona bakmasına mukabil, hemen yeni, bize nazil olmuş gibi bakmak lazım. “Allah Allah! Yahu aynen, bugün bana iniyor gibi. Hislerimle o kadar örtüştüğünü görüyorum ki!..” filan diyecek şekilde yakından onu duyma ve hissetme mevzuu… Cenâb-ı Hak, cümleye nasip etsin.

Ramazan, itikâf ayıdır; çoğu insanın bir çeşit karantinada olduğu günümüzde bunu cebr-i lütfî bir halvet/uzlet fırsatı bilmeli ve evlerimizi halis niyetlerimizle bir nevi itikâf mahalli haline getirmeliyiz.
Aslında itikâfın da kendine göre şartları var; mesela insanın mescitte olması lazım, fuzûliyâttan uzak durması lazım, dünyeviliğe karşı sırtını dönmesi lazım, tamamen uhrevîliğe müteveccih olması lazım.

Fakat bir de o manada olabilir, izafi olarak esasen. Cenâb-ı Hak bizi mecburî bir halvete itmiş. Efendim, “Çıkmayalım dışarıya, başkalarıyla görüşmeyelim, kendimize bir şey bulaştırmayalım!” filan deniyor. Aynı zamanda, hakikaten Allah ile olan münasebetimiz açısından, Kur’an ile olan münasebetimiz açısından, o zaviyeden kendimize bir şey bulaştırmamamız lazım.

Şimdi hep bela/musibet/virüs saçılıp dolaşıyor. Onlardan kaçarak -bir yönüyle- Cenâb-ı Hakk’ın himâyesine, inayetine, sıyanetine sığınma… “Allah’ım! Bizi koru, muhafaza buyur!” deme… Bir de Kıtmîr şöyle bir dua da ediyor; diyorum ki: “Allah’ım! Bize -mesela bu Kıtmîr’e, kardeşlerimize, dostlarımıza, taraftarlarımıza, muhiplerimize, sempatizanlarımıza- lütfeylediğin şeyleri -yani dine-imana hizmet gibi, değişik yerlerde eğitim müesseseleri açmak gibi, insanlığı uyarma gibi, ne kadar nimet lütfetmiş isen, bunların hepsini- nezd-i Ulûhiyetine emanet olarak al; Sen, Kendin koru; başkaları ona zarar vermesin!.. Nezd-i Ulûhiyetine emanet olarak al, koru bunu, ne olur Allah’ım!” Böyle demek geliyor içimden çok defa.

Evet, inşaallah öyle olur. Bir ölçüde öyleydi. Ama “Eğer biz hakikaten o konumun hakkını tam vermiş olsaydık, Cenâb-ı Hak, bazılarını musallat etmezdi!” demeli ki, esasen, kendimizi yeniden bir düzene koyalım. Yoksa hafizanallah sadece başkalarını suçlamak suretiyle gıybete gireriz, iftiraya gireriz, ayıplamaya gireriz.

Hadis-i Şerif’ten mülhem, اَللَّهُمَّ اغْفِرْ لَنَا وَلِمَنِ اغْتَبْنَا diyebilir; اَللَّهُمَّ اغْفِرْ لَنَا وَلِمَنْ عَيَّرْنَا gibi ifadeler ekleyebilirsiniz. Bunların hepsini diyebilirsiniz: “Allah’ım, bizi ve kendilerine hata nisbet ettiklerimizi, ta’yîrde bulunduklarımızı (ayıpladıklarımızı) hepsini/herkesi mağfiret buyur Allah’ım!” Böyle demek suretiyle, bir engin vicdanla hareket etmiş olursunuz.`;

  return (
    <div className="max-w-md mx-auto px-5 mb-10">
      <button 
        onClick={() => setShowFull(true)}
        className="w-full text-left bg-white border border-slate-200/60 p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Quote size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Zulüm, Salgın ve Ramazan</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-widest">Özel Sohbet • Tam Metin</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </div>
      </button>

      {showFull && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="max-w-md mx-auto px-6 pt-12 pb-20">
            <div className="flex justify-between items-center mb-8">
              <button onClick={() => setShowFull(false)} className="p-2 bg-slate-100 rounded-xl text-slate-500">
                <X size={20} />
              </button>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Kürsü</span>
            </div>

            <h1 className="text-2xl font-black text-slate-900 leading-tight mb-8 text-center">Zulüm, Salgın ve Ramazan</h1>
            
            {/* Metin Alanı */}
            <div className="text-slate-700 leading-[1.8] text-[15px] whitespace-pre-line space-y-4 font-normal">
              {content}
            </div>

            <button 
              onClick={() => setShowFull(false)}
              className="mt-12 w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
            >
              Okumayı Tamamla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecondArticleCard;
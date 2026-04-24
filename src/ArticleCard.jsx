import React, { useState } from 'react';
import { BookOpen, X, ChevronRight } from 'lucide-react';

const ArticleCard = () => {
  const [showFull, setShowFull] = useState(false);

  // Senin paylaştığın metnin harfi harfine aynısı
  const originalText = `Hüzün ve Kur’an adeta birbirini tamamlayan iki kelime. Kur’an hüzünle inmiştir. Allah Rasülü (sallallahü aleyhi vesellem) bir hadislerinde buna işaretle buyurur ki; "Kur’an-ı Kerim’in en güzel tilaveti ciddi bir hüzün içinde okunanıdır.” Şahsen ben, ruhsuz Kur’an okumanın insanımızı duygusuz hale getireceğine inanıyorum. Kur’an’ı anlamak, Kur’an ile dirilmek onun özünde derinleşmeye bağlıdır. Kur’an’ın sadece ibare ve lafızları ile ilgilenenler sevap kazansalar bile sevaba açık bir topluluk haline gelemezler. Bir başka tabirle Kur’an’ı muhtevasına uygun şekilde anlayıp hayatlarına hayat kılamazlar. Evet, Kur’an’la münasebetimiz açısından asıl mesele kalb, şuur, irade, idrak ve hislerimizle ona yönelebilmek ve benliğimizin bütün buutlarıyla O’nu duyabilmektir. İşte böyle bir yöneliş ve duyuş sayesinde Allah’ın (c.c.) bize seslendiğini hisseder, suya ve ziyaya ulaşmış rüşeymler gibi birden bire yeşeririz. Okuduğiumuz ayetin her kelimesinde her cümlesinde farklı derinliklere erer, ruhumuzun atlasını temaşâ ettiğimiz aynı anda göklerin haritasını da müşahade etme ufkuna ulaşırız.

Acizane kanaatim Kur’an okuma tam manâsıyla bilinmiyor. Onun için bu meselenin çok ciddi olarak ele alınması gerekir. Çünkü Kur’an’ı kaide ve kurallarına uygun şekilde okuma onu içte duyma, manâ ve muhtevasına vakıf olma, derinliklerine nüfuz edebilme kadar önemlidir. Elfaz maâninin kalıbıdır (Lafızlar, ibareler manâ ve muhtevanın kalıbıdır). Kalıp bozuk olunca manâ sıkışıp kalıyor ve derinliklerine nüfuz edilemiyor. Mesela, kendi adıma Kur’an dinlerken yanlış okumalar karşısında ruhumda ihtilâç hasıl olduğunu, konsantrasyonumun bozulduğunu, manânın derinliklerine inmekten uzaklaştığımı rahatlıkla söyleyebilirim. Bende böyle olduğu gibi Kur’an’ı tam bir konsantrasyonla duyarak, hissederek dinlemek isteyen herkesin ruhunda da aynı türden ihtilâçların olacağı muhakkaktır.

Evet, Kur’an’ı Allah’ın (c.c.) Cebrail aleyhisselam’a, Cebrail’in İnsanlığın İftihar Tablosu’na veya Efendiler Efendisi’nin sahabeye okuduğu gibi okumak gerek. Cebrail (aleyhisselam) Allah Rasülü (sallallahü aleyhi vesellem) ile, "Kur’an nazil olduğu şekliyle korunuyor mu, doğru eda ediliyor mu?" diye her sene mukabele ediyordu. Bu açıdan hadiseye bakınca mukabeleye "test etme" de diyebiliriz. Bunun bize verdiği ehemmiyetli bir mesaj olsa gerek.

İsterseniz bir benzetme yapalım; namazı duyma, her rüknünü vicdanında hissederek kılma, O’nun huzurunda bulunduğunun şuurunda olma çok önemlidir. Ama bunun yanında namazı namaz yapan rüku, secde, kıraat, kıyam, teşehhüd gibi zahiri erkâna riayet de şarttır. Kur’an’ı tilavet kaidelerine riayet ederek hakkıyla okumayı da namazın zahiri erkanı gibi değerlendirebilirsiniz.

Kur’an’ı doğru okumak için üç şeyin çok önemli olduğunu söyleyebilirim. Birincisi; bir fem-i muhsinin (okuyuşu düzgün bir hoca) rahle-i tedrisine oturma. Yani mutlaka işin uzmanından ders alma. Kur’an okumak sadece harfleri bilmek değildir. Ben kendi kendime Fransızca öğrenmiştim; öğrenmiştim ama nasıl konuşuyordum Allah bilir. Bir ara İngilizce de çalıştım. Bir gün Rahmetli Tuzcu Cahid Bey bana "Hocam! Türkçe gibi İngilizce konuşuyorsun." dedi ve ben o gün İngilizce öğrenmeyi bıraktım. Harf ve kelimeleri aslına uygun şekilde telaffuz ancak işin uzmanının önüne diz çökmekle öğrenilir. İkincisi; talim esnasında doğru telaffuz için insanın kendini zorlaması. Mesela mahâric-i hurufa (harflerin mahreçleri) çalışırken bizim kıraat hocamız kendisini ve bizleri çok zorlardı. Mesela, “Dat” harfini gösterirken parmağını damağına koyardı. Bu ilk bakışta tekellüf gibi görünse bile belli bir müddet sonra alışıyor insan. Ve üçüncüsü, kulak dolgunluğu. Bu da Kur’an’ı tekellüfsüz okuyan hafızları çok dinlemekle olur.

Malesef biz doğru düzgün Kur’an-ı Kerim okumayı unutmuşuz. Hatta İmam Hatip’lerde ve İlahiyatlarda bile bu eğitim insanımıza tam tekmil verilemiyor. Kur’an Kursları ölçüsünde verilemiyor desem kimse bana alınmasın.

Bu faslı Hafız Münâvi’den nakledilen bir vak’a ile kapatalım : “Bir genç hafızlığını ikmal ederken hemen her gün sabahlara kadar uyumayıp Kur’ân-ı Kerim’i hatmediyor. Ertesi gün de tabii olarak hocasının karşısına rengi solmuş, benzi sararmış olarak çıkıyor. Hem maddî hem de mânevî açıdan kendisine mürşid olabilecek kapasitede olan hocası bu durumun sebebini onun ders arkadaşlarına soruyor. Onlar cevaben: ‘Üstadımız, bu talebeniz hemen her gün sabahlara kadar uyumayıp, Kur’an-ı Kerim’i hatmedip duruyor.’ diyorlar. Üstad, talebesinin Kur’ân-ı Kerim’i böyle okumasını arzu etmediği için bir gün onu karşısına alıyor ve: ‘Evlâdım! Kur’ân indiği gibi okunmalıdır. Bugünden itibaren sen Kur’ân’ı, şu ana kadar okuduğun gibi değil de beni karşında farzederek, dersini bana takrir ediyormuşsun gibi oku.’ tavsiyesinde bulunur.

Genç gider, hocasının tavsiyeleri çerçevesinde o gece Kur’ân-ı Kerim’i okur ve sabah hocasının huzuruna geldiğinde, ‘Efendim bu gece ancak Kurân-ı Kerim’i yarısına kadar okuyabildim’ der. Üstad, ‘Pekâlâ, bu gece de Kur’ân- Kerim’i doğrudan doğruya Rasûl-ü Ekrem’in (sallallahu aleyhi vesellem) huzurunda okuyor gibi oku!’ emrini verir. Talebe "Kendisine Kur’ân nazil olan Zât’ın huzurundayım, doğru okumalıyım" düşüncesiyle o gece Kur’an’ı daha dikkatli tilavet eder. Ertesi gün üstadına Kur’ân-ı Kerim’in ancak dörtte birini okuyabildiğini belirtir. Üstadı talebesindeki terakkiyi görünce, bir mürşidin müridinin dersinin arttırması gibi, ‘Bugün o emin melek, Cibril’in Resûl-ü Ekrem (sallallahu aleyhi vesellem)’e tebliğ ettiği anda dinliyor gibi oku!’ der.

Talebe ertesi gün: ‘Vallâhi üstadım, bugün ancak bir sûre okuyabildim.’ der. Üstad son adımı atar: ‘Evlâdım! Şimdi de onu, binlerce hicabın verasında bulunan Mevlâ-yı Müteal’in huzurunda okuyor gibi oku! Düşün ki, okuduğunu Allah (c.c.) dinliyor, senin için indirdiği kelamını senin ile mukâbele ediyor.’ Talebesi ertesi gün ağlayarak üstadının karşısına gelir: ‘Üstadım, “Elhamdü lillâhi Rabbi’l-âlemîn. Errahmanirrahim. Mâliki yevmi’d-dîn” dedim. Ama “İyyake na’büdü” demeye bir türlü dilim varmadı. Çünkü “Sadece Sana kulluk yaparım” diyeceğim; diyeceğim ama ben o kadar çok şeye kulluk yapıyorum ve o kadar çok şey karşısında serfürû ediyorum ki, O’nun karşımda hazır ve nazır olduğunu mülahazaya alınca ‘iyyake na’büdü’yü aşamadım.’ der."

Hafız Münâvi, bu gencin fazla yaşamadığını bir-iki gün sonra vefat ettiğini kaydeder. Onu bu seviyeye getiren o bilge ve mânâ eri üstad, gencin mezarının başında onun ahvalini müşahade ederken, delikanlı hocasının duyabileceği bir sesle, “Üstadım, ben hayyim (hayattayım). Hayy u Kayyum olan Sultanlar Sultanı’nın huzuruna vardım ve hiç hesap görmedim.” diye konuşur.

Bu menkıbeyi nakletmekle "Bu ölçüler içinde Kur’an’ı okumuyor veya okuyamıyorsanız onu okumayın!" demek istemiyorum. Fakat şu da unutulmaması gereken bir hakikat ki ruhumuzda inkılâplar meydana getirmeyen Kur’an’ın ferdî ve içtimaî hayatımızda müessir olacağı düşünülemez. Biz Kur’anla değişebilmeli, O’nun ufkuna yönelebilmeli, O’nu kendi derinlikleriyle duymalıyız ki O da esrarını sinelerimize boşaltsın. Keşke çeşitli vesilelerle bir araya gelindiğinde çok değil bir on dakika bu işe ayrılsa; ağzı düzgün bir kişi talimde bulunsa; bilenler bilmeyenlere talim etse; birebir mukabele şeklinde Kur’an okunsa.`;

  return (
    <div className="max-w-md mx-auto px-5 mb-10">
      <button 
        onClick={() => setShowFull(true)}
        className="w-full text-left bg-white border border-slate-200/60 p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-800">Hüzün ve Kur’an</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-widest">Tam Metin Makale</p>
            </div>
          </div>
          <ChevronRight size={18} className="text-slate-300" />
        </div>
      </button>

      {showFull && (
        <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-in slide-in-from-bottom duration-500">
          <div className="max-w-md mx-auto px-6 pt-12 pb-20">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={() => setShowFull(false)}
                className="p-2 bg-slate-100 rounded-xl text-slate-500"
              >
                <X size={20} />
              </button>
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Okuma Köşesi</span>
              <div className="w-10" />
            </div>

            <h1 className="text-2xl font-black text-slate-900 leading-tight mb-8 text-center">Hüzün ve Kur’an</h1>
            
            <div className="text-slate-700 leading-[1.8] text-[15px] whitespace-pre-line space-y-4 font-normal">
              {originalText}
            </div>

            <button 
              onClick={() => setShowFull(false)}
              className="mt-12 w-full py-4 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticleCard;
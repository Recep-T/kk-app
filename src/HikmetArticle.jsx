
import React, { useState } from 'react';
import { BookOpen, X, ChevronRight } from 'lucide-react';

const HikmetArticle = () => {
  const [showFull, setShowFull] = useState(false);

  const content = `Kur’ân-ı Kerim’de tekrarlar vardır ve bazı vak’alar çok tekrar edilir. Bu tekrarlar daha ziyade kıssalardadır. Bazen icmalen, bazen de tafsilen iman etrafında tahşidat yapılır, yerinde amele ait meseleler beslenir ve takviye edilir. Bunların hepsinin kendine göre bir yeri vardır.

İtikada (inanç esasları) müteallik meseleler; Cenâb-ı Hakk’a imanımız ve bunun delilleri, Kur’ân-ı Kerim tarafından ifade edilirken şüphe ve tereddütlerimizin de izale edilmesi hedeflenir. Kur’ân, Allah (celle celâluhu) hakkındaki kanaatimizi pekiştirmek için çok tahşidat yapar. Bu mevzuda o kadar çok misal ve mevzu ile bu hususu sunar ki, onun beyanından sonra ön yargısı olmayan bir insan artık Allah’a iman hususunda asla tereddüt ve şüpheye düşmez.

İşte böyle bir mevzu ne kadar anlatılırsa anlatılsın fazla değildir, aksine imanın gönüllerde kök salmasına vesile olması itibarıyla zarurîdir. Aynı şekilde, Peygamberimiz veya peygamberân-ı izâmın anlatılmasında da bu maksada matuf, yani imanı takviye adına tekrarlar vardır. Tıpkı bir çocuğa belletilir gibi bu husus da tekrar edilir. Bunun gibi Kur’ân-ı Kerim’in ahiret ve Cennet’e, haşir ve haşir safahatına dair yüzlerce meselesi vardır ki bunlar belki Kur’ân-ı Kerim’in dörtte üçü veya beşte üçünü teşkil eder. Bu sayede haşir ve onun verâsında olacaklara imanımız takviye edilmiş olur.

Aslında Kur’ân hem itikada müteallik hem de amele müteallik meseleleri insanlığa bildirmek için indirilmiştir. Bu itibarla beşer, daimî bir ders olarak, her an Kur’ân’a muhtaçtır. Hâlbuki hayat-ı içtimaiyede vazifelerin çokluğu ve mesainin yoğunluğu herkesin her an Kur’ân’ın bütününü okumasına imkân bırakmıyor. Onun için Kur’ân-ı Mu’cizü’l-Beyan, çeşitli sûreler içinde Kur’ân’da geçen bütün ahkâmı sık sık tekrar ediyor. Ta bütün Kur’ân-ı Kerim’i okumaya muktedir olamayan kimse, uzun bir sûreyi okuduğu zaman, tafsilen olmasa bile, icmalen bütün Kur’ân’ı tezekkür edebilmiş olsun.

Bu açıdan denebilir ki Allah, beşere merhamet etmiş, kâinatı anlatan öyle bir kitap indirmiştir ki, bu kitabın içinde bütün kâinatın mânâları, insanın vazifeleri, gideceği yerde göreceği şeylerin hepsi mündemiçtir. Ama bir insan her gün bunu baştan sona okuyamaz. Bazıları belki ayda bir bile okuyamaz; ihtimal gafletin hükümferma olduğu 20. asırda gafil Müslümanlar bunu senede bir defa bile okuyamazlar. Hele mânâsının derinliklerine inerek hiç mi hiç okuyamazlar.

İşte bunlar, meselâ, Bakara sûresi gibi bir sûreyi bir kere okuyuverseler ahkâm-ı Kur’ân’ı bütünüyle içinde görür ve itminana ulaşırlar. Bir başka defa da başka bir sûreyi okur, orada da yine değişik ahkâmla karşılaşırlar; âdeta bütün Kur’ân’ı okumuş gibi bir feyiz ve bereket elde ederler. Onun için müfessirler “Allah bütün kitapları Kur’ân-ı Kerim’de, Kur’ân’ı Bakara sûresinde, Bakara sûresini Fatiha sûresinde; Fatiha’yı da Bismillâhirrahmânirrahîm’de hulâsa etmiştir.” demişlerdir. Bismillâhirrahmânirrahîm’de, Fatiha’da Kur’ân’ın bütününü tekellüfsüz bir teville göstermek mümkündür.

Evet, bütün varlıklar insanda hulâsa edildiği gibi, geçmiş bütün kitaplar da Kur’ân-ı Kerim’de hulâsa edilmiştir. Nitekim Allah, bütün peygamberleri de Hz. Muhammed’de (sallallâhu aleyhi ve sellem) hulâsa etmiştir. İnsanlık peygamberlerde, peygamberler Hz. Muhammed’de hulâsa edilmiştir denebilir. Hulâsa, öz ve kaymak mânâsına O’na “Mustafa” diyoruz. Zira O, en safi, en öz ve özün özüdür. Bir diğer yaklaşımla mahlukatın özü beşerdir; hususiyle de Hz. Muhammed’e iman etmiş olan ümmet-i Muhammed’dir. Ahkâm-ı ilâhiyenin ezelden ebede kadar hulâsası da Kur’ân-ı Kerim’dir. Binaenaleyh her peygamber kendine ait hissesiyle bu hulâsanın içinde yerini almış; Hz. Musa Tevrat’ıyla, Hz. Davud Zebur’uyla, Hz. Mesih de İncil’iyle hulâsa edilmiştir. Diğer peygamberler de suhuflarıyla bunun içindedirler.

Kur’ân-ı Kerim’in, hususiyle kıssalar mevzuunda anlattıkları zâhiren tekrar gibi görünse de aslında tekrar değildir. Kur’ân’da kıssalar çeşitli münasebetlerle zikredilir. Her zikredilişte de meselenin hangi yönü anlatılıyorsa konu ona dair yönüyle dile getirilir. Aynı bir hadiseyi yirmi yerde, yirmi mevzua misal yapabiliriz…

Kur’ân bazen meseleleri anlatırken konuyu açar, bir yere kadar getirir ve insanı irşat eder. Kur’ân’daki vak’alarda öyle bir elastikiyet, revnaktarlık ve canlılık vardır ki, aynı vak’a başka taraflarda başka bir misal olarak gelir, âdeta, “Ben bir daha görünebilir miyim!” der. Her defasında aynı şey arz edilse de, dinleyenler onda farklı şeyler görür. Ancak nâdanlardır ki, işin nüanslarını anlamaz, aynı şeylerin tekrar edildiğini zannederler.

Meselenin mühim bir yönü de, Efendimiz’in (sallallâhu aleyhi ve sellem) kuvve-i mâneviyesinin takviye edilmesidir. Sık sık peygamberân-ı izâmın misalleri anlatılmak suretiyle, “Ey Nebiyy-i Âzam, ey Resûl-i Emced! Senden evvel başka peygamberler de geldiler. Senin başına belâlar geldi ve sana yalancı dediler. İşte sana Nuh, ona da yalancı demişlerdi. Ey Nebiyy-i Efham! Kendi kavmin dahi sana iman etmediler diye üzülüyorsun. Bak, Hz. Musa’nın cemaati ona neler yapıyor; sen bir adamından –meselâ Hâtıb İbn Ebî Beltaa’dan– onu küfre götürmeyecek bir ihanet gördün. Belki kalb-i pâkin müteessir oldu. Unutma! Hz. İsa’nın ümmetinden biri de kendisine ihanette bulundu ve onu düşmanlarına teslim etti. Öyle ise sen de maruz kaldıklarına aldırış etme!” denilmektedir.

Kur’ân, Peygamberimiz’in maruz kaldığı musibetlere karşı, bir bakıma onu teselli edici ve kuvve-i mâneviyesini takviye edici mahiyette her fırsatta kalb-i pâk-i Nebevî etrafında itminan esintileri meydana getirmiş ve onun kuvve-i mâneviye-i imaniyesini takviye etmiştir.`;

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
              <h4 className="text-sm font-bold text-slate-800">Kur’an’daki Tekrarlar ve Hikmeti</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-widest">Makale • Tam Metin</p>
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

            <h1 className="text-2xl font-black text-slate-900 leading-tight mb-8 text-center">Kur’an’daki Tekrarlar ve Hikmeti</h1>
            <div className="text-slate-700 leading-[1.8] text-[15px] whitespace-pre-line space-y-4 font-normal">
              {content}
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

export default HikmetArticle;

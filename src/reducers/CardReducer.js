
let data =
    [
        {
            id: 1,
            imageUrl: "https://cdnp.flypgs.com/files/Sehirler-long-tail/Paris/eyfel-tower.jpg",
            title: "Paris için bir gezi",
            mainText: "Şehir merkezindeki Sen Nehri boyunca uzanan tarihi bölge, 1991'den beri UNESCO Dünya Miras Alanı olarak sınıflandırılmıştır; orada görülecek popüler yerler arasında Île de la Cité üzerindeki Notre Dame de Paris Katedrali vardır halen 15 Nisan 2019 yangını'ndan sonra yenileme çalışmaları nedeniyle kapalıdır. Diğer popüler turistik yerler arasında yine Île de la Cité'de bulunan Sainte-Chapelle'in Gotik kraliyet şapeli; 1889 Paris Evrensel Sergisi ​​için inşa edilen Eyfel Kulesi; 1900 Paris Evrensel Sergisi ​​için inşa edilen Grand Palais ve Petit Palais; Champs-Élysées üzerindeki Arc de Triomphe ve sanat tarihiyle ve Sacré-Coeur Bazilikası ile Montmartre tepesi vardır",
            price: "1,256"
        },
        {
            id: 2,
            imageUrl: "https://www.bilgiustam.com/resimler/2015/06/city-of-London1.jpg",
            title: "Londra için bir hafta tatil",
            mainText: "Londra, sanat, ticaret, eğitim, eğlence, moda, finans, sağlık, medya, profesyonel hizmetler, araştırma ve geliştirme, turizm ve ulaşım alanlarında dünyanın önde gelen şehirlerinden biridir. Dünyanın en büyük finans merkezlerinden biridir ve dünyanın beşinci büyükşehir bölgesi GSYİH'sine sahiptir. Londra genellikle bir dünya kültür başkenti olarak kabul edilir. Uluslararası gelişlerle ölçülen dünyanın en çok ziyaret edilen şehri ve yolcu trafiği ile ölçülen dünyanın en büyük şehir havaalanı sistemine sahip. Dünyanın önde gelen yatırım hedefleri arasında yer alıyor ve daha fazla uluslararası perakendeciye ve ultra yüksek net değerli bireylere ev sahipliği yapıyor. Londra'daki üniversiteler, Avrupa'nın en büyük yükseköğretim enstitülerinden oluşuyor.",
            price: "2,136"
        },
        {
            id: 3,
            imageUrl: "https://i4.hurimg.com/i/hurriyet/75/1200x675/5e09d9f00f254400d05e15b2.jpg",
            title: "Tokyo İçin bir gezi",
            mainText: "Şehrin merkezinde hendekler ve geniş bahçelerle çevrili İmparatorluk Sarayı yer alır. Sarayın doğusunda, Japon iş dünyasının merkezi olarak nitelendirilen Maranouçi semti bulunur; kuzeydoğusunda ise pek çok üniversitenin ve basımevinin bulunduğu Kanda semti uzanır. Resmi binalar sarayın güneyindeki Kasumigaseki semtinde toplanmıştır. Millî parlamento binası ise Kasumigaseki'nin batısındadır. Dünyaca meşhur bir alışveriş merkezi olan Ginza semti şehrin doğu kesimindedir. Tokyo'nun mimarisi iki veya üç katlı ahşap evlerden, Meiji döneminden kalma taş yapılara ve beton veya çelikten yapılmış gökdelenlere kadar değişen bir çeşitlilik gösterir. Japonya'nın başlıca ibadet merkezi olan Meiji Tapınağı bir millî abide olarak kabul edilir.",
            price: "5,458"
        }

    ]

export default function CardReducer(state = [], action) {

    switch (action.filter) {
        case "list":
            return data;
        case "filter":
            return state.filter(x => x.id !== action.id);
        default:
            break;
    }



}
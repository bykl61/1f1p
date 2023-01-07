<template>
  <v-content>
    <div class="staticCarouselPage">
      <v-img src="../assets/images/hakkimizda-background.jpeg"/>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Hakkımızda</h2>
        <p>Ülkelerin sosyal ve ekonomik gelişmişliğini gösteren faktörlerin başında mesleki ve teknik eğitimin kalitesi gelmektedir. Küresel gelişmelere uygun şekilde planlanmış bir meslek eğitimi insan odaklı kalkınmanın sağlanmasında etkin rol oynamaktadır. Ülkemizin çok daha güçlü olabilmesi ve güzel bir geleceğin yeni nesillere hazırlanabilmesi ancak ve ancak yeni teknolojilerin geliştirilmesi ve bu teknolojilerin üretimiyle mümkün olabilecektir. Mesleki ve teknik eğitim, ülkemizin ihtiyacı olan nitelikli insan kaynağının yetiştirilmesi için büyük önem taşırken potansiyellerini keşfeden gençlerin inandıkları/benimsedikleri mesleklerde güçlü adımlarla kariyerlerini şekillendirmelerine imkân tanımaktadır. Bu nedenle yarışmamız; mesleki ve teknik eğitim liselerinin öneminin tüm toplum tarafından anlaşılması, bilinçli aileler tarafından tercih edilmesi ve nitelikli öğrencilerin tercihlerinde ilk sıralarda olmaları sağlanmasına yol açacaktır.
          Ayrıca geleceğe yönelik alınması gerekli en önemli tedbir tam donanımlı olarak yetişmiş bir genç neslin inşasıdır. Nitelikli iş gücüyle faydalı bilgiyi üretebilen, yenilikçi (inovatif) ve girişimci nesiller ile küresel krizlerden çıkışın ve refah ekonomisinin anahtar elementleri elde edilmiş olunacaktır. Bireylerin ilgi ve yeteneklerinin farkına varmaları ve çağın şartlarına uygun yeni bilgi, beceri ve yetkinlikler kazandırmaları bu anahtarın dişlerini oluşturmaktadır. Gençlerin girişimcilik, ekip çalışması, stres altında karar verebilme ve sorun çözebilme gibi özellikleri desteklemeli ve yeni imkanlar sağlanmalıdır. Yarışma programımız yeni nesillerin ulusal ve uluslararası alana açılabilme olanağı sağlamak, proje ve fikirlerini kolaylıkla ifade edebilecekleri mecralar oluşturularak gençlere istihdam edilebilme imkanları sunma konularını işlemektedir.
          İşte bu gaye ile İstanbul Milli Eğitim Müdürlüğü ile TEKDER İstanbul Şubesi arasında “Mesleki ve Teknik Eğitimin Öneminin Vurgulanması ve Bu Eğitim Kurumlarına Yönelik Bir Farkındalık Oluşturulması" amacıyla “BİR FİKİR BİR PROJE” isimli proje yarışması düzenlenmesi amaçlanmıştır.</p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <ProjectPartners items="items"/>
      </v-container>
    </div>
  </v-content>
</template>

<script>
import ProjectPartners from '../components/ProjectPartners.vue'

export default {
  name: "About",
  components: {ProjectPartners},
  data() {
    return {
        items: [
          {
            id: 1,
            src: require("../assets/images/partners/tekder-logo.png"),
            name: 'Tekder İstanbul',
          },
          {
            id: 1,
            src: require("../assets/images/partners/il-milli-egitim.jpg"),
            name: 'İstanbul İl Milli Eğitim Müdürlüğü',
          }
        ]
      };
  }
};
</script>
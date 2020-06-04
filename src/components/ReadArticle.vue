<template>
  <article class="flex flex-col shadow my-4">
    <!-- Article Image -->
    <a href="#" class="hover:opacity-75" v-if="data">
      <img :src="imageUrl()" />
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
      <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">{{
        data != null ? data.category.category : ""
      }}</a>
      <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{
        data != null ? data.Title : ""
      }}</a>
      <p href="#" class="text-sm pb-8">
        By
        <a href="#" class="font-semibold hover:text-gray-800">Ahmad Khamdani</a
        >, Published on {{ date() }}
      </p>
      <vue-simple-markdown v-if="data != null" :source="data.Content"></vue-simple-markdown>
      <!-- <h1 class="text-2xl font-bold pb-3">Introduction</h1>
      <p class="pb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
        neque non libero suscipit suscipit eu eu urna. Proin bibendum urna
        mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum
        aliquet. Donec mattis risus in turpis dapibus, eget tempus sem
        tincidunt. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis,
        pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget
        eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem
        lacus, malesuada vel hendrerit molestie, mollis vel elit.
      </p>
      <h1 class="text-2xl font-bold pb-3">Heading</h1>
      <p class="pb-3">
        Vivamus nec facilisis elit, quis congue justo. In non augue ex. Aenean
        pretium facilisis hendrerit. Sed sed imperdiet dui. Etiam faucibus a
        diam sed vehicula. Nullam commodo lacus tincidunt, tincidunt orci sed,
        dapibus leo. Vivamus vulputate quis risus a ultricies. Aliquam luctus id
        tellus non condimentum. Aenean maximus viverra ipsum eget vestibulum.
        Morbi ut tincidunt sem, efficitur volutpat tortor. Donec scelerisque,
        ipsum eu efficitur semper, neque turpis sodales quam, in aliquam elit
        lacus varius lorem. Ut ut diam id leo efficitur malesuada eget in velit.
        Pellentesque tristique orci nunc, vitae fermentum nibh luctus eu. Mauris
        condimentum justo sed ipsum egestas varius.
      </p>
      <p class="pb-3">
        Sed sagittis odio a volutpat feugiat. Cras aliquam varius justo, a
        rhoncus ante bibendum id. Nulla maximus nisl sed enim maximus, ut dictum
        lectus hendrerit. Fusce venenatis tincidunt eros. Phasellus quis augue
        vulputate ipsum pellentesque fringilla. Morbi nec tempor felis. Maecenas
        sollicitudin pellentesque dui, sit amet scelerisque mauris elementum
        nec. Cras ante metus, mattis in malesuada in, fermentum a nunc.
        Suspendisse potenti. Sed tempor lacus sed commodo dignissim. Quisque
        dictum, dolor auctor iaculis cursus, ipsum urna porttitor ex, sed
        consequat nisi tellus eget ante. Duis molestie mollis eros, eu
        sollicitudin mauris lobortis quis.
      </p>
      <p class="pb-3">
        Vivamus sed neque nec massa scelerisque imperdiet eget id sapien. Fusce
        elementum mi id malesuada luctus. Proin quis lorem id leo porta interdum
        non ac nisl. Integer nulla sem, ultrices sed neque eget, blandit
        condimentum metus. Aliquam eget malesuada sapien. Curabitur aliquet orci
        sit amet ex tincidunt convallis. Mauris urna mi, consequat mattis mollis
        a, dignissim eget sem. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia Curae; Nam facilisis sem diam,
        viverra consequat metus consequat vel. Cras a mi eu ex luctus malesuada
        quis eu ante. Aliquam erat volutpat.
      </p>
      <h1 class="text-2xl font-bold pb-3">Conclusion</h1>
      <p class="pb-3">
        Donec vulputate auctor leo lobortis congue. Sed elementum pharetra
        turpis. Nulla at condimentum odio. Vestibulum ullamcorper enim eget
        porttitor bibendum. Proin eros nibh, maximus vitae nisi a, blandit
        ultricies lectus. Vivamus eu maximus lacus. Maecenas imperdiet iaculis
        neque, vitae efficitur felis vestibulum sagittis. Nunc a eros aliquet,
        egestas tortor hendrerit, posuere diam. Proin laoreet, ligula non
        eleifend bibendum, orci nulla luctus ipsum, dignissim convallis quam
        dolor et nulla.
      </p> -->
    </div>
  </article>
</template>

<script>
import server from "./../static";

export default {
  props: ["data"],
  data() {
    return {
      imageUrl: function() {
        return server.server_url.slice(0, -1) + this.data.Cover.url;
      },
      date: function() {
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const newDate = new Date(this.data.created_at.slice(0, 10));
      const month = monthNames[newDate.getMonth()];
      const day = newDate.getDay();
      const year = newDate.getFullYear();
      //Published on April 25th, 2020
      return `${month} ${day}, ${year}`;
    },
    };
  },
};
</script>

<style>
.markdown-body h2 {
  font-size: 1.5rem!important;
  padding-bottom: 0px!important;
  margin-bottom: -10px!important;
  border: 0px!important;
}
</style>

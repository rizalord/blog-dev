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

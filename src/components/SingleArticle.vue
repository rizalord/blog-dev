<template>
  <article class="flex flex-col shadow my-4" @click="navigateToRead">
    <!-- Article Image -->
    <a class="hover:opacity-75 cursor-pointer">
      <img :src="imageUrl" />
    </a>
    <div class="bg-white flex flex-col justify-start p-6">
      <a class="text-blue-700 text-sm font-bold uppercase pb-4 cursor-pointer"
        >Technology</a
      >
      <a class="text-3xl font-bold hover:text-gray-700 pb-4  cursor-pointer">{{
        data.Title
      }}</a>
      <p class="text-sm pb-3">
        By
        <a class="font-semibold hover:text-gray-800">Ahmad Khamdani</a>,
        Published on {{ date }}
      </p>
      <a class="pb-6 content-low"> {{ content }} </a>

      <a class="uppercase text-gray-800 hover:text-black cursor-pointer mt-2"
        >Continue Reading <i class="fas fa-arrow-right"></i
      ></a>
    </div>
  </article>
</template>
<script>
import server from "./../static";

export default {
  props: ["data"],
  data() {
    return {
      imageUrl: server.server_url.slice(0, -1) + this.data.Cover.url,
    };
  },
  computed: {
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
        "December"
      ];
      const newDate = new Date(this.data.created_at.slice(0, 10));
      const month = monthNames[newDate.getMonth()];
      const day = newDate.getDay();
      const year = newDate.getFullYear();
      //Published on April 25th, 2020
      return `${month} ${day}, ${year}`;
    },
    content: function() {
      return this.data.Content.replace("##", "")
        .replace("#", "")
        .replace("###", "")
        .trim();
    },
  },
  methods: {
    navigateToRead() {
      this.$router.push({ name: "Read" , params: { id: this.data.id } });
    },
  },
};
</script>

<style scoped>
.content-low {
  display: -webkit-box; /* or inline-block */
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
}
</style>

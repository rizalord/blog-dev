<template>
  <div class="container mx-auto flex flex-wrap py-6">
    <!-- Post Section -->
    <section class="w-full md:w-2/3 flex flex-col items-center px-3">
      <!-- Read Article -->
      <read v-if="data != null" :data="data" />

      <!-- Pagination -->
      <!-- <div class="w-full flex pt-6">
        <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
          <p class="text-lg text-blue-800 font-bold flex items-center">
            <i class="fas fa-arrow-left pr-1"></i> Previous
          </p>
          <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
        <a
          href="#"
          class="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
        >
          <p
            class="text-lg text-blue-800 font-bold flex items-center justify-end"
          >
            Next <i class="fas fa-arrow-right pl-1"></i>
          </p>
          <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </div> -->

      <div
        class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6"
      >
        <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
          <img
            src="./../assets/my-photo.jpg"
            class="rounded-full shadow h-32 w-32"
          />
        </div>
        <div class="flex-1 flex flex-col justify-center md:justify-start">
          <p class="font-semibold text-2xl">Ahmad Khamdani</p>
          <p class="pt-2">
            Fullstack Developer, Intern Mobile Dev @ Ezy Industries
          </p>
          <div
            class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4"
          >
            <a target="_blank" class="" href="https://web.facebook.com/lexeto.farron">
              <i class="fab fa-facebook"></i>
            </a>
            <a target="_blank" class="pl-4" href="https://www.instagram.com/ahmad.khamdani2/">
              <i class="fab fa-instagram"></i>
            </a>
            <a target="_blank" class="pl-4" href="https://twitter.com/rizalord_">
              <i class="fab fa-twitter"></i>
            </a>
            <a target="_blank" class="pl-4" href="https://www.linkedin.com/in/ahmad-khamdani-7a4815169/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sidebar Section -->
    <sidebar />

    <div class="comments">
      <vue-disqus
        shortname="ahmadkhadmani"
        :identifier="page_id"
        url="http://localhost:8080/read"
      ></vue-disqus>
    </div>
  </div>
</template>

<script>
import sidebar from "./../components/Sidebar";
import read from "./../components/ReadArticle";
import server from "./../static";
export default {
  name: "Read",
  components: {
    sidebar,
    read,
  },
  data() {
    return {
      page_id: "1",
      idRead: null,
      data: null,
    };
  },
  created() {
    this.idRead = this.$route.params.id;

    this.$http.get(`${server.server_url}blogs/${this.idRead}`).then((res) => {
      this.data = res.data;
    });
  },
};
</script>

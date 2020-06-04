<template>
  <div>
    <div class="container mx-auto flex flex-wrap py-6">
      <!-- Posts Section -->
      <section class="w-full md:w-2/3 flex flex-col items-center px-3">
        <!-- Single Article -->
        <singlearticle v-for="sData in data" :key="sData.id" :data="sData" />
        <!-- End of Single Article -->

        <!-- Pagination -->
        <pagination
          v-if="this.$route.params.category == undefined"
          :index="page"
          :category="this.$route.params.category"
          @changePage="changePage"
        />
        <!-- End of Pagination -->
      </section>
      <!-- End of Posts Section -->

      <!-- Sidebar Section -->
      <sidebar />
      <!-- End of Sidebar -->
    </div>
  </div>
</template>

<script>
import singlearticle from "./../components/SingleArticle";
import sidebar from "./../components/Sidebar";
import pagination from "./../components/Pagination";
import server from "./../static";

export default {
  name: "Home",
  components: {
    sidebar,
    singlearticle,
    pagination,
  },
  data() {
    return {
      data: [],
      page: this.$route.params.page || 1,
    };
  },
  methods: {
    changePage(index) {
      index = (index - 1) * server.perPage;
      this.$http
        .get(
          `${server.server_url}blogs?_sort=created_at:DESC&_limit=${server.perPage}&_start=${index}`
        )
        .then((res) => {
          this.data = res.data;
        });
    },
  },
  computed: {
    startIndex: function() {
      return (this.page - 1) * server.perPage;
    },
  },
  created() {
    this.$http
      .get(
        this.$route.params.category == undefined
          ? `${server.server_url}blogs?_sort=created_at:DESC&_limit=${server.perPage}&_start=${this.startIndex}`
          : `${server.server_url}blogs/category/${this.$route.params.category}/${this.startIndex}`
      )
      .then((res) => {
        this.data = res.data;
      });
  },
  watch: {
    $route: function() {
      if (this.$route.params.category != undefined) {
        this.$http
          .get(
            `${server.server_url}blogs/category/${this.$route.params.category}/${this.startIndex}`
          )
          .then((res) => {
            this.data = res.data;
          });
      }
    },
  },
};
</script>

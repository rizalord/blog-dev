<template>
  <!-- Pagination -->
  <div class="flex items-center py-8">
    <router-link
      :to="`/${index}`"
      :class="
        `h-10 w-10 ${
          index == activePage ? 'bg-blue-800 text-white' : ''
        }  hover:bg-blue-600 hover:text-white font-semibold text-sm flex items-center justify-center`
      "
      v-for="index in pages"
      :key="index"
      @click.native="eventChangePage(index)"
    >
      {{ index }}
    </router-link>

    <router-link
      :to="{ name: 'Home', params: { page: activePage + 1 }}"
      @click.native="nextPage"
      v-if="pages != activePage"
      href="#"
      class="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
      >Next <i class="fas fa-arrow-right ml-2"></i
    ></router-link>
  </div>
</template>

<script>
import server from "./../static";
export default {
  props: ["index"],
  data() {
    return {
      pages: 0,
      activePage: 1,
    };
  },
  methods: {
    eventChangePage(index) {
      this.$emit("changePage", index);
      this.activePage = index;
    },
    nextPage() {
      this.activePage += 1;
      this.$emit("changePage", this.activePage);
    },
  },
  created() {
    this.$http.get(server.server_url + "blogs/count").then((res) => {
      this.pages = Math.round(res.data / server.perPage);
      this.activePage = this.index;
    });
  },
};
</script>

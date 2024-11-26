<template>
  <div class="pagination">
    <button @click="prevPage" :disabled="currentPage === 1">Trước</button>
    <span v-for="page in totalPages" :key="page">
      <button
        @click="gotoPage(page)"
        :class="{ 'active-page': currentPage === page }"
        :disabled="currentPage === page"
      >
        {{ page }}
      </button>
    </span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Sau
    </button>
  </div>
</template>

<script>
export default {
  name: "paninatedPages",
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    questions: {
      type: Array,
      required: true
    }
  },
  // methods: {
  //   prevPage() {
  //     if (this.currentPage > 1) {
  //       this.currentPage--;
  //     }
  //   },
  //   nextPage() {
  //     if (this.currentPage < this.totalPages) {
  //       this.currentPage++;
  //     }
  //   },
  //   gotoPage(page) {
  //     this.currentPage = page;
  //   },
  // },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('update:currentPage', this.currentPage - 1);
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('update:currentPage', this.currentPage + 1);
      }
    },
    gotoPage(page) {
      this.$emit('update:currentPage', page);
    }
  },
  computed: {
    paninatedquestions() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.questions.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.questions.length / this.pageSize);
    },
  },
};
</script>

<style>
/* // Phân trang, chon trang */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}
.pagination button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #0073e6;
  color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ddd;
  cursor: not-allowed;
}
.active-page {
  background-color: #0073e6;
  color: #fff;
}
</style>

<template>
  <nav aria-label="Page navigation">
    <ul class="pagination d-flex justify-content-end">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="renderData(pages.current_page - 1)"
        >
          Previous
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page + 'page'"
        :class="{ active: page === pages.current_page }"
      >
        <a class="page-link" href="#" @click.prevent="renderData(page)">{{
          page
        }}</a>
      </li>
      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="renderData(pages.current_page + 1)"
        >
          Next
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["pages", "renderData"],
};
</script>

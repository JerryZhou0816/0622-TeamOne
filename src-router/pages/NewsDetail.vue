<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item">{{ $route.params.newsId }}</li>
      <li class="list-group-item">{{ $route.query.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>

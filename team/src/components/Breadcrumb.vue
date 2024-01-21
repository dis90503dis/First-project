<template>
  <nav aria-label="breadcrumb" class="container">
    <ol class="breadcrumb">
      <li v-for="(crumb, index) in breadcrumb" :key="index" class="breadcrumb-item">
        <router-link :to="crumb.to" v-if="!crumb.active">{{ crumb.text }}</router-link>
        <span v-else>{{ crumb.text }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumb: {
      type: Array,
      required: true
    }
  }
}
</script>



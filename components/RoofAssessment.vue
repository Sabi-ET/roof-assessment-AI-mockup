<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Search Section -->
    <SearchSection
      :loading="loading"
      v-model:address="address"
      @search="handleSearch"
    />

    <!-- Results Section -->
    <ResultsSection v-if="showResults" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const showResults = ref(false)
const address = ref('15001 64th Ave N Maple Grove, MN 55311')

const handleSearch = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    showResults.value = true
  }, 2000)
}
</script>
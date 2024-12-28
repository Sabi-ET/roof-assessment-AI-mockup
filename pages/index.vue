<template>
  <div class="max-w-6xl mx-auto p-8">
    <!-- Search Section -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold mb-6">Roof Assessment AI</h1>
      <div class="flex gap-4">
        <UInput
          v-model="address"
          placeholder="Enter property address..."
          class="flex-1"
        />
        <UButton
          :loading="loading"
          @click="handleSearch"
          color="primary"
          :icon="loading ? 'i-heroicon-arrow-path' : 'i-heroicon-magnifying-glass'"
        >
          Analyze
        </UButton>
      </div>
    </div>

    <!-- Results Section -->
    <div v-if="showResults" class="space-y-6">
      <ResultsSection />
    </div>
  </div>
</template>

<script setup>
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
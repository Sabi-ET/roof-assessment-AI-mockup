<template>
  <div class="mb-8">
    <h1 class="text-3xl font-bold mb-6">Roof Assessment AI</h1>
    <div class="flex gap-4">
      <input 
        :value="address"
        @input="$emit('update:address', $event.target.value)"
        type="text" 
        placeholder="Enter property address..."
        class="flex-1 p-3 border rounded-lg"
      />
      <button 
        @click="$emit('search')"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2"
        :disabled="loading"
      >
        <Icon v-if="loading" name="loader-2" class="animate-spin" />
        <Icon v-else name="search" />
        Analyze
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: Boolean,
  address: String
})

defineEmits(['update:address', 'search'])
</script>
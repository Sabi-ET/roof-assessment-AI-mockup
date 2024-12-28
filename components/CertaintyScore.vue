<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">AI Certainty Score</h3>
    </template>
    <div class="flex items-center gap-4">
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div 
          class="bg-blue-600 h-4 rounded-full transition-all duration-500"
          :style="{ width: `${score}%` }"
        ></div>
      </div>
      <span class="font-medium">{{ score }}%</span>
    </div>
    <p class="mt-2 text-sm text-gray-600">
      This score indicates how confident the AI is with its analysis
    </p>
  </UCard>
</template>

<script setup>
const props = defineProps({
  score: {
    type: Number,
    default: 85
  }
})
</script>
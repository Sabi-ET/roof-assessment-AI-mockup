<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Roof Valley Assessment</h3>
    </template>
    <ul class="space-y-2">
      <li v-for="(item, index) in assessmentItems" :key="index" class="flex items-center gap-2">
        <span :class="['w-3 h-3 rounded-full', item.color]"></span>
        {{ item.text }}
      </li>
    </ul>
  </UCard>
</template>

<script setup>
const assessmentItems = [
  {
    color: 'bg-red-500',
    text: 'Critical Valley-Siding Intersection at NE corner'
  },
  {
    color: 'bg-yellow-500',
    text: 'Potential water accumulation point identified'
  },
  {
    color: 'bg-green-500',
    text: 'Proper valley spacing on West side'
  }
]
</script>
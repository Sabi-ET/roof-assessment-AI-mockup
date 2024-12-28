<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Structure Details</h3>
    </template>
    <div class="space-y-3">
      <div v-for="(detail, index) in structureDetails" :key="index">
        <span class="font-medium">{{ detail.label }}:</span> {{ detail.value }}
      </div>
    </div>
  </UCard>
</template>

<script setup>
const structureDetails = [
  { label: 'Roof Vents', value: '4 identified' },
  { label: 'Skylights', value: 'None detected' },
  { label: 'Gutters', value: 'Present on all sides' },
  { label: 'Roof Pitch', value: '6:12 (main section)' }
]
</script>
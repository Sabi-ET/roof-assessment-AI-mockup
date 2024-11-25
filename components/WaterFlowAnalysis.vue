<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Water/Ice Flow Analysis</h3>
    </template>
    <div class="space-y-3">
      <p class="text-red-600">⚠️ High Risk Areas Identified:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(risk, index) in riskAreas" :key="index">
          {{ risk }}
        </li>
      </ul>
    </div>
  </UCard>
</template>

<script setup>
const riskAreas = [
  'Valley convergence point at NE corner',
  'Potential ice dam formation area on North face',
  'Recommended gutter maintenance at valley outputs'
]
</script>
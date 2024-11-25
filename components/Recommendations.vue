<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Recommendations</h3>
    </template>
    <div class="mt-4">
      <p class="font-medium mb-2">General Recommendations:</p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-for="(recommendation, index) in generalRecommendations" :key="index">
          {{ recommendation }}
        </li>
      </ul>
    </div>
  </UCard>
</template>

<script setup>
const priorityActions = [
  'Inspect and repair NE valley-siding intersection',
  'Install additional drainage points at identified locations',
  'Address potential ice dam formation areas before winter',
  'Schedule professional inspection of ventilation system'
]

const generalRecommendations = [
  'Consider upgrading to impact-resistant shingles',
  'Improve attic insulation to prevent ice dams',
  'Install gutter guards to prevent debris accumulation',
  'Upgrade to a smart moisture monitoring system'
]

const maintenanceTasks = [
  'Quarterly gutter cleaning and inspection',
  'Bi-annual professional roof inspection',
  'Monthly visual inspection of problem areas',
  'Seasonal ice dam prevention maintenance'
]
</script>
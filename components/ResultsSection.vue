<template>
  <div class="space-y-6">
    <SatelliteAnalysis />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RoofValleyAnalysis />
      <StructureDetails />
      <WaterFlowAnalysis />
      <Recommendations />
      <CertaintyScore :score="85" />
      <FeedbackForm />
    </div>
  </div>
</template>

<script setup>
import SatelliteAnalysis from './SatelliteAnalysis.vue'
import RoofValleyAnalysis from './RoofValleyAnalysis.vue'
import StructureDetails from './StructureDetails.vue'
import WaterFlowAnalysis from './WaterFlowAnalysis.vue'
import Recommendations from './Recommendations.vue'
import CertaintyScore from './CertaintyScore.vue'
import FeedbackForm from './FeedbackForm.vue'
</script>
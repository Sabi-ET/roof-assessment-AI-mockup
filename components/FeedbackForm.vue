<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold">Provide Feedback</h3>
    </template>
    <div class="space-y-4">
      <div class="flex gap-4">
        <UButton 
          :color="feedback === 'helpful' ? 'green' : 'gray'"
          @click="feedback = 'helpful'"
        >
          <Icon name="heroicons:thumb-up" class="mr-2" />
          Helpful
        </UButton>
        <UButton
          :color="feedback === 'not-helpful' ? 'red' : 'gray'"
          @click="feedback = 'not-helpful'"
        >
          <Icon name="heroicons:thumb-down" class="mr-2" />
          Not Helpful
        </UButton>
      </div>
      
      <UTextarea
        v-model="comments"
        placeholder="Additional comments (optional)"
        :rows="3"
      />

      <UButton
        color="blue"
        @click="submitFeedback"
        :loading="submitting"
      >
        Submit Feedback
      </UButton>
    </div>
  </UCard>
</template>

<script setup>
const feedback = ref(null)
const comments = ref('')
const submitting = ref(false)

const submitFeedback = async () => {
  if (!feedback.value) return
  
  submitting.value = true
  // Mock API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  feedback.value = null
  comments.value = ''
  submitting.value = false
}
</script>
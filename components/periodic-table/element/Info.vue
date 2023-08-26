<template>
  <div class="fixed top-0 left-0 h-screen w-screen">
    <periodic-table-element class="fixed" id="elementInfo" :element="element"/>
  </div>
</template>

<script setup>
const props = defineProps({
  element: {
    type: Object,
    default() {
      return {
        name: null,
        symbol: null,
        atomicNumber: null,
        atomicMass: null,
        groupName: null,
      }
    },
  },
})

const { element } = props

onMounted(() => {
  const position = element.position
  const elementInfo = document.getElementById('elementInfo')
  elementInfo.style.top = `${position.top}px`
  elementInfo.style.left = `${position.left}px`
})
</script>
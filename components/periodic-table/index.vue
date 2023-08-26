<template>
  <div class="poppins h-screen flex flex-col justify-center items-center gap-8 px-2">
    <div class="poppins text-6xl">Periodic Table Quiz</div>
    <periodic-table-element-key />
    <div class="grid grid-cols-18 gap-1">
      <template v-for="period in sortElements()" :key="period">
        <template v-for="element in period" :key="element">
          <periodic-table-element :element="element" @select="selectElement($event, element)"/>
        </template>
      </template>
    </div>
    <periodic-table-element-info v-if="isSelected" :element="selectedElement" />
  </div>
</template>

<script setup>
import { elements } from '~/data/table'

const selectedElement = ref(null)
const isSelected = ref(false)

function sortElements() {
  const sortedElements = Array(10).fill().map(()=>Array(18).fill())

  Object.values(elements).forEach((element) => {
    const group = element.group - 1
    const period = element.period - 1

    if (sortedElements[period][group] === undefined) {
      sortedElements[period][group] = element
    }
  })

  return sortedElements
}

function selectElement(event, element) {
  const rect = event.target.getBoundingClientRect()
  element.position = rect
  selectedElement.value = element
  isSelected.value = true
}
</script>

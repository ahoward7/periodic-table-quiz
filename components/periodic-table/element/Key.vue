<template>
<div class="flex gap-4">
  <div v-for="category in categories" :key="category.label" class="text-sm 3xl:text-base px-2 py-1 rounded-3px border-2 border-black" :class="category.color">
    {{ category.label }}
  </div>
</div>
</template>

<script setup>
const categories = [
  {
    label: 'Alkali Metal',
    color: 'bg-alkali-metal',
  },
  {
    label: 'Alkaline Earth Metal',
    color: 'bg-alkaline-earth-metal',
  },
  {
    label: 'Transition Metal',
    color: 'bg-transition-metal',
  },
  {
    label: 'Basic Metal',
    color: 'bg-basic-metal',
  },
  {
    label: 'Metalloid',
    color: 'bg-metalloid',
  },
  {
    label: 'Nonmetal',
    color: 'bg-nonmetal',
  },
  {
    label: 'Halogen',
    color: 'bg-halogen',
  },
  {
    label: 'Noble Gas',
    color: 'bg-noble-gas',
  },
  {
    label: 'Lanthanide',
    color: 'bg-lanthanide',
  },
  {
    label: 'Actinide',
    color: 'bg-actinide',
  }
]
</script>

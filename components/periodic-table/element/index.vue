<template>
  <div 
    v-if="name"
    class="relative w-18 h-18 3xl:w-24 3xl:h-24 border-2 border-black rounded-3px"
    :class="color(), symbol ? 'cursor-pointer hover:scale-125 hover:z-10 duration-300' : ''"
    @click="emit('select', $event)"
  >
    <div class="absolute w-full flex justify-between px-1">
      <div class="text-sm 3xl:text-base">{{ atomicNumber }}</div>
      <div class="text-xs 3xl:text-sm">{{ density }}</div>
    </div>
    <div class="h-full flex flex-col justify-center items-center">
      <div class="text-2xl 3xl:text-3xl">
        {{ symbol }}
      </div>
      <div class="saira text-[13px] 3xl:text-base mt-n-9 3xl:mt-n-6">
        {{ name }}
      </div>
    </div>
    <div class="absolute bottom-0 mb-n-2 w-full saira text-sm 3xl:text-base text-center">
      {{ atomicMass }}
    </div>
  </div>
  <div v-else class="h-12"/>
</template>

<script setup>
const emit = defineEmits(['select'])
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
const { name, symbol, atomicNumber, atomicMass, density, groupName } = element

function color() {
  if (!name) return ''
  const group = groupName
  
  if (group === 'alkali metal') return 'bg-alkali-metal'
  if (group === 'alkaline earth metal') return 'bg-alkaline-earth-metal'
  if (group === 'transition metal') return 'bg-transition-metal'
  if (group === 'metal') return 'bg-basic-metal'
  if (group === 'metalloid') return 'bg-metalloid'
  if (group === 'nonmetal') return 'bg-nonmetal'
  if (group === 'halogen') return 'bg-halogen'
  if (group === 'noble gas') return 'bg-noble-gas'
  if (group === 'lanthanide') return 'bg-lanthanide'
  if (group === 'actinide') return 'bg-actinide'
}
</script>

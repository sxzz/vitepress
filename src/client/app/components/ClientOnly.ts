import { defineComponent, ref, onMounted, createIf, createSlot } from 'vue'

export const ClientOnly = defineComponent({
  vapor: true,
  setup() {
    const show = ref(false)

    onMounted(() => {
      show.value = true
    })

    const n0 = createIf(
      () => show.value,
      () => createSlot('default')
    )
    return n0
  }
})

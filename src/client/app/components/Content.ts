import {
  createComponent,
  defineComponent,
  template,
  watch,
  createBranch,
  onMounted,
  onUpdated,
  onUnmounted
} from 'vue'
import { useData, useRoute } from 'vitepress'
import { contentUpdatedCallbacks } from '../utils'

const runCbs = () => contentUpdatedCallbacks.forEach((fn) => fn())

export const Content = defineComponent({
  name: 'VitePressContent',
  props: {
    as: { type: [Object, String], default: 'div' }
  },
  vapor: true,
  setup(props) {
    const route = useRoute()
    const { frontmatter, site } = useData()
    watch(frontmatter, runCbs, { deep: true, flush: 'post' })

    onMounted(runCbs)
    onUpdated(runCbs)
    onUnmounted(runCbs)

    return createComponent(
      props.as,
      () => site.value.contentProps ?? { style: { position: 'relative' } },
      {
        default: () => {
          return createBranch(
            () => route.component,
            (value) => () =>
              value ? createComponent(value) : template('404 Page Not Found')()
          )
        }
      }
    )
  }
})

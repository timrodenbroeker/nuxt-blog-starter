import { wrapFunctional } from './utils'

export { default as Navigation } from '../../components/Navigation.vue'
export { default as PrevNext } from '../../components/PrevNext.vue'

export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c))
export const LazyPrevNext = import('../../components/PrevNext.vue' /* webpackChunkName: "components/prev-next" */).then(c => wrapFunctional(c.default || c))

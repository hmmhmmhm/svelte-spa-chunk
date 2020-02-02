<script>
    import { fly } from 'svelte/transition'
    import Loadable from 'svelte-loadable'
    import { get } from 'svelte/store'
    import isPageChanged from './store'
    export let params = {}
    export let dynamicImport
    export let delay = 0

    function flashPrevent(node) {
		return {
			duration: 4000,
			tick: t => {
                if(get(isPageChanged)){
                    node.style.display = 'none'
                }else{
                    node.style.display = 'block'
                }
			}
		}
	}
</script>

<Loadable loader={dynamicImport} {params} {delay}>
    <div slot="loading">
        {(isPageChanged.set(false)) ? '' : ''}
    </div>
    <div
        class="loadable-container"
        out:flashPrevent
        slot="success"
        let:component
    >
        <svelte:component this={component} {params} />
        {(isPageChanged.set(true)) ? '' : ''}
    </div>

</Loadable>

<style>
    .loadable-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>
<script>
    import { fly } from 'svelte/transition'
    import Loadable from 'svelte-loadable'
    import { get } from 'svelte/store'
    export let params = {}
    export let dynamicImport
    export let delay = 0
</script>

<Loadable loader={dynamicImport} {params} {delay}>
    <div slot="loading" />
    <div class="loadable-container" slot="success" let:component>
        <svelte:component this={component} {params} />
    </div>
</Loadable>

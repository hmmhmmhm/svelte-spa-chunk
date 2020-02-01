<script>
    import { fly } from 'svelte/transition'
    import Loadable from 'svelte-loadable'
    export let params = {}
    export let dynamicImport
    export let delay = 0
</script>

<Loadable loader={dynamicImport} {params} {delay}>

    <div
        class="loadable-container"
        out:fly={{ x: 0, duration: 4000 }}
        slot="success"
        let:component
    >
        <svelte:component this={component} {params} />
    </div>

</Loadable>

<style>
    .loadable-container {
        width: 100%;
        height: 100%;
        position: absolute;
    }
</style>
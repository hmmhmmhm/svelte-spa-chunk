<script>
    import Loadable from 'svelte-loadable'
    export let params = {}
    export let dynamicImport
</script>

<Loadable loader={dynamicImport} params={params} />
<script>
    import Loadable from 'svelte-loadable'
    export let params = {}
    export let dynmaicImport
</script>

<Loadable loader={dynmaicImport} params={params} />
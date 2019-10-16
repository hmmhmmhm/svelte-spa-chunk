import ChunkWrap from './chunk.svelte'

export const Chunk = (dynmaicImport, Component: any = ChunkWrap) => {
    return class SvelteComponentHook {
        constructor(options){
            options.props = {
                ...options.props,
                dynmaicImport
            }
            return new Component(options)
        }
    }
}

export default Chunk
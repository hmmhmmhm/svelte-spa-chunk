export const ChunkGenerator = (Component) => {
    return (dynmaicImport) => Chunk(dynamicImport, Component)
}

export const Chunk = (dynamicImport: () => any, Component) => {
    return class SvelteComponentHook {
        constructor(options){
            options.props = {
                ...options.props,
                dynamicImport
            }
            return new Component(options)
        }
    }
}

export default Chunk

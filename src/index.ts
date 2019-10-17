export const ChunkGenerator = (Component) => {
    return (dynamicImport) => Chunk(dynamicImport, Component)
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

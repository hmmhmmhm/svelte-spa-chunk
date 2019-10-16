export const ChunkGenerator = (Component) => {
    return (dynmaicImport) => Chunk(dynmaicImport, Component)
}

export const Chunk = (dynmaicImport: () => any, Component) => {
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
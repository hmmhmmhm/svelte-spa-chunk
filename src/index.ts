export const Chunk = (dynmaicImport, Component: any) => {
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
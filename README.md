# svelte-spa-chunk
> 🚧 Do the Chunk split on a page-by-page basis. In the svelte-spa-router module.
>



**<u>svelte-spa-chunk</u>** module allows you to apply code splitting on each page in the <u>svelte-spa-router</u>. Dynamic import is implemented to automatically call only when rendering through <u>svelte-lodable</u> .



## Install

```bash
npm i svelte-spa-chunk
```



## Usage

Apply the following to the route map of the svelte-spa-router:



```typescript
import { ChunkGenerator } from 'svelte-spa-chunk'
import ChunkComponent from 'svelte-spa-chunk/Chunk.svelte'
const Chunk = ChunkGenerator(ChunkComponent)

/**
 * @description Client Side Render Index
 */
export default {
    '/':        Chunk(()=> import('./main.svelte')),
    '/a':       Chunk(()=> import('./a.svelte')),
    '/b':       Chunk(()=> import('./b.svelte')),
    '/async':   Chunk(()=> import('./async.svelte')),

    '*':        Chunk(()=> import('./main.svelte')),
}
```



## License

MIT Licensed.
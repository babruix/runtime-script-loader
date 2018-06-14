# Runtime Script loader

## Get started
This command will create bundle dist/index.js
```
yarn && yarn build
```

## Example usage
1. Load dist/index.js by adding to your page:
```
<script src="runtime-script-loader/dist/index.js"></script>
```
2. Specify dependencies in src/script-loader.ts:
```
 {name: 'eventQueue', src: 'your-monorepo/packages/event-queue/dist/index.js'},
  {name: 'jsApi', src: 'your-monorepo/packages/js-api/dist/index.js'}
```

3. Load dependencies on run time:
```
const sLoader = new ScriptLoader();
sLoader.load('eventQueue', 'jsApi').then(data => {

    console.log('script loaded ', data);

  }).catch(error => {
    console.log(error)});
```

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name: 'eventQueue', src: 'your-monorepo/packages/gcc-event-queue-mediator/dist/index.js'},
  {name: 'jsApi', src: 'your-monorepo/packages/gcc-js-api/dist/index.js'}
];

interface Scripts {
  name: string;
  src: string;
}
export const ScriptStore: Scripts[] = [
  {name: 'eventQueue', src: 'your-monorepo/packages/event-queue/dist/index.js'},
  {name: 'jsApi', src: 'your-monorepo/packages/js-api/dist/index.js'}
];

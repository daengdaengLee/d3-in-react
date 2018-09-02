export default {
  nodes: [
    { name: 'index' },
    { name: 'about' },
    { name: 'contact' },
    { name: 'store' },
    { name: 'cheese' },
    { name: 'yoghurt' },
    { name: 'milk' },
  ],
  links: [
    { source: 0, target: 1, value: 25 },
    { source: 0, target: 2, value: 10 },
    { source: 0, target: 3, value: 40 },
    { source: 1, target: 2, value: 10 },
    { source: 3, target: 4, value: 25 },
    { source: 3, target: 5, value: 10 },
    { source: 3, target: 6, value: 5 },
    { source: 4, target: 6, value: 5 },
    { source: 4, target: 5, value: 15 },
  ],
};

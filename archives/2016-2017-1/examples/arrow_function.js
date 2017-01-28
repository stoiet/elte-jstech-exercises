
[
  { name: 'first', description: 'description', value: 1 },
  { name: 'second', description: 'description', value: 5 },
  { name: 'third', description: 'description', value: 4 },
  { name: 'forth', description: 'description', value: 2 },
  { name: 'fifth', description: 'description', value: 1 },
  { name: 'sixth', description: 'description', value: 3 },
  { name: 'seventh', description: 'description', value: 4 },
  { name: 'eighth', description: 'description', value: 5 },
  { name: 'ninth', description: 'description', value: 1 }
]
  .filter(({ value }) => value > 4)
  .map(({ name, description }) => `${name} ${description}`)
  .map(([firstCharacter, ...description]) => `${firstCharacter.toUpperCase()}${description.join('')}`)
  .map(description => `${description} has greater value than 4!`)
  .forEach(winner => console.log(winner));

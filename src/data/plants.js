const image = (name, hue) => ({
  src: '/plant-thumbnail.svg',
  alt: `${name} houseplant`,
  hue,
})

export const plantCategories = [
  {
    id: 'easy-care',
    name: 'Easy-Care Favorites',
    description: 'Resilient plants that thrive with a little light and a lot of love.',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 24, description: 'Architectural leaves and famously forgiving care.', image: image('Snake Plant', 106) },
      { id: 'zz-plant', name: 'ZZ Plant', price: 28, description: 'Glossy foliage that stays lush in low light.', image: image('ZZ Plant', 126) },
      { id: 'pothos', name: 'Golden Pothos', price: 18, description: 'A fast-growing vine with cheerful marbled leaves.', image: image('Golden Pothos', 82) },
      { id: 'spider-plant', name: 'Spider Plant', price: 16, description: 'Playful striped leaves and cascading plantlets.', image: image('Spider Plant', 102) },
      { id: 'cast-iron', name: 'Cast Iron Plant', price: 32, description: 'Deep green leaves built for shady corners.', image: image('Cast Iron Plant', 139) },
      { id: 'jade', name: 'Jade Plant', price: 22, description: 'A sculptural succulent said to bring good luck.', image: image('Jade Plant', 94) },
    ],
  },
  {
    id: 'air-purifying',
    name: 'Air-Purifying Plants',
    description: 'Fresh-looking foliage for a calmer, greener home.',
    plants: [
      { id: 'peace-lily', name: 'Peace Lily', price: 30, description: 'Elegant white blooms above glossy green leaves.', image: image('Peace Lily', 150) },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 34, description: 'Bold, burgundy-tinged leaves make a statement.', image: image('Rubber Plant', 165) },
      { id: 'bamboo-palm', name: 'Bamboo Palm', price: 38, description: 'Soft palm fronds bring the tropics indoors.', image: image('Bamboo Palm', 116) },
      { id: 'dracaena', name: 'Lemon Lime Dracaena', price: 26, description: 'Striped neon foliage brightens any room.', image: image('Lemon Lime Dracaena', 70) },
      { id: 'chinese-evergreen', name: 'Chinese Evergreen', price: 27, description: 'Patterned leaves that tolerate lower light.', image: image('Chinese Evergreen', 132) },
      { id: 'english-ivy', name: 'English Ivy', price: 19, description: 'Classic trailing greenery for shelves and baskets.', image: image('English Ivy', 145) },
    ],
  },
  {
    id: 'statement',
    name: 'Statement Plants',
    description: 'Show-stopping shapes and textures for your favorite space.',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 42, description: 'Iconic split leaves with unmistakable tropical style.', image: image('Monstera Deliciosa', 122) },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 48, description: 'Large violin-shaped leaves with dramatic presence.', image: image('Fiddle Leaf Fig', 110) },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 46, description: 'Towering leaves create an instant indoor oasis.', image: image('Bird of Paradise', 92) },
      { id: 'calathea', name: 'Calathea Orbifolia', price: 36, description: 'Silver-striped leaves that move with the light.', image: image('Calathea Orbifolia', 156) },
      { id: 'alocasia', name: 'Alocasia Polly', price: 35, description: 'Arrow-shaped foliage traced with pale veins.', image: image('Alocasia Polly', 175) },
      { id: 'philodendron', name: 'Pink Princess', price: 55, description: 'Rare dark foliage splashed with vivid pink.', image: image('Pink Princess', 326) },
    ],
  },
]

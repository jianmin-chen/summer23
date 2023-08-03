export const rotate = (min, max) => Math.random() * (max - min + 1) + min

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const shuffle = l => l.sort(() => Math.random() - 0.5)

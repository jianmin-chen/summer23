export const rotate = (min, max) => Math.random() * (max - min + 1) + min

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const shuffle = l => l.sort(() => Math.random() - 0.5)

export const choose = l => l[random(0, l.length)] || l[0]

export const approx = (a, b, epsilon = 800) => {
  if (Math.abs(a - b) > epsilon) return false
  return true
}

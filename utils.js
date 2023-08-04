export const rotate = (min, max) => Math.random() * (max - min + 1) + min

export const random = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const shuffle = l => l.sort(() => Math.random() - 0.5)

export const choose = l => l[random(0, l.length)] || l[0]

export const approx = (a, b, epsilon = 800) => {
  if (Math.abs(a - b) > epsilon) return false
  return true
}

export const color = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`

export const randomOutlier = (min, max, buffer, maxcount) => {
  let randomBetween = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min)

  function addLeaves(f, min, max, arr = []) {
    if (arr.length < maxcount) {
      arr.push(f)
      if (min + buffer < f - buffer)
        addLeaves(randomBetween(min + buffer, f - buffer), min, f, arr)
      if (f + buffer < max - buffer)
        addLeaves(randomBetween(f + buffer, max - buffer), f, max, arr)
    }
    return arr
  }
  return addLeaves(randomBetween(min, max), min - buffer, max + buffer)
}

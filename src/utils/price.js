export function generateBTWPrice(price) {
  const newPrice = price - ((price / 100) * 9)

  if (!newPrice) {
    return 0
  }

  return newPrice
}
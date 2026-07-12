export const cn = (...classes: (string | boolean | undefined | null)[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const whatsappUrl = (message?: string): string => {
  const msg = message || 'Hello W7 Worldwide! I\'m interested in your Premium TWS AirPods.'
  return `https://wa.me/+265990173974?text=${encodeURIComponent(msg)}`
}

export interface NavLink {
  label: string
  href: string
}

export interface ProductColor {
  name: string
  hex: string
  image: string
}

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface Review {
  id: number
  name: string
  location: string
  rating: number
  text: string
  avatar: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface WhyChooseItem {
  icon: string
  title: string
  description: string
}

export interface BoxItem {
  icon: string
  title: string
}

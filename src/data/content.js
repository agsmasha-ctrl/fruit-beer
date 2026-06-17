// Real content pulled from the Figma design (single source of truth).
import canApple from '../assets/images/can-1.png'
import canOrange from '../assets/images/can-2.png'
import canStrawberry from '../assets/images/can-3.png'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Mission', href: '#mission' },
  { label: 'Collection', href: '#collection' },
  { label: 'Recipe', href: '#recipe' },
  { label: 'Find us', href: '#find-us' },
  { label: 'Contact', href: '#footer' },
]

export const HERO = {
  title: 'Refresh your senses – Fruit Beer in every sip!',
  cta: 'Where to buy',
}

export const MISSION = {
  tag: 'Our Mission',
  description:
    'At FRUIT we are driven by a passion to bring the best of nature’s flavors into every bottle. Our mission is built on four key principles.',
  cards: [
    {
      title: 'Quality Craftsmanship',
      body: 'We are committed to using only the finest ingredients and traditional brewing methods to create fruit beers that exceed expectations.',
      variant: 'white',
      corner: 'tl',
    },
    {
      title: 'Innovation in Flavor',
      body: 'We aim to redefine the beer experience by blending the classic brewing process with the vibrant, natural tastes of strawberry, apple, and orange.',
      variant: 'pink',
      corner: 'tr',
    },
    {
      title: 'Celebrating Moments',
      body: 'Whether you’re sharing a drink with friends, celebrating a milestone, or unwinding after a long day, our fruit beers are made to enhance those moments.',
      variant: 'green',
      corner: 'bl',
    },
    {
      title: 'Sip Sustainably',
      body: 'From sustainable ingredients to eco-friendly packaging, we work to reduce our impact and support a healthier planet.',
      variant: 'fiolet',
      corner: 'br',
    },
  ],
}

export const COLLECTION = {
  tag: 'Collection',
  description: 'Explore our delightful flavors',
  cards: [
    {
      name: 'Apple Zest',
      body: 'A lively, tangy apple flavor that brings a refreshing crispness to every sip.',
      can: canApple,
      flower: 'petals8',
      titleColor: 'text-fiolet',
    },
    {
      name: 'Strawberry Bliss',
      body: 'A refreshing burst of ripe strawberries, perfectly balanced with a smooth finish.',
      can: canStrawberry,
      flower: 'scallop',
      titleColor: 'text-fiolet',
    },
    {
      name: 'Citrus Surge',
      body: 'A vibrant mix of zesty oranges, delivering a tangy and invigorating experience with every taste.',
      can: canOrange,
      flower: 'petals10',
      titleColor: 'text-fiolet',
    },
  ],
}

export const RECIPE = {
  tag: 'Recipe',
  description:
    'Here are 5 main ingredients for your fruit beer, keeping it simple and focused on key elements',
  ingredients: [
    {
      title: 'Crystal-clear Water',
      body: 'The essential base of any beer, providing the perfect canvas for all other flavors.',
    },
    {
      title: 'A Touch of Hops',
      body: 'Adds subtle bitterness to balance the sweetness of the fruit and enhances the overall flavor profile.',
    },
    {
      title: 'High-Quality Barley Malt',
      body: 'Provides the backbone with its smooth, malty character and contributes to the beer’s body.',
    },
    {
      title: 'Fruit Juice',
      body: 'The natural fruit essence that gives every can its signature taste and aroma.',
    },
    {
      title: 'Yeast',
      body: 'Ferments the sugars in the malt and fruit, creating alcohol while contributing to the beer’s final taste and texture.',
    },
  ],
}

export const FIND_US = {
  tag: 'Find us',
  title: 'Where to buy',
  cta: 'Find in store',
}

export const SOCIAL = {
  tag: 'Join our community',
  title: 'Share your moments with us!',
  ticker: 'Real fruit · Perfectly balanced · Natural · Tasty · ',
}

export const FOOTER = {
  email: 'contact@fruitbeer.com',
  columns: [
    { label: 'Home', href: '#home' },
    { label: 'Our Mission', href: '#mission' },
    { label: 'Collection', href: '#collection' },
    { label: 'Recipe', href: '#recipe' },
    { label: 'Find us', href: '#find-us' },
    { label: 'Contact', href: '#footer' },
  ],
  social: ['Follow us on Instagram and TikTok', 'Privacy Policy', 'Age Confirmation'],
}

export type Colors = {
    primary: string,
    secondary: string,
    error: string,
    warn: string
}

export type Filters = {
  blur: (px:number)=>string,
  brightness: (value:number)=>string,
  contrast: (percent: number)=>string,
  grayscale: (percent: number)=>string,
  hueRotate: (deg:number)=>string,
  invert: (percent: number)=>string,
  opacity: (percent: number)=>string,
  saturate: (percent: number)=>string,
  sepia: (percent: number)=>string,
}

export type Theme = {
    color: Colors,
    backgroundColor: Colors
    filters: Filters
}

export const theme:Theme = {
  color: {
    primary: '#e5e5e5',
    secondary: '#151515',
    error: 'red',
    warn: 'yellow'
  },
  backgroundColor: {
    primary: '#151515',
    secondary: '#e5e5e5',
    error: 'red',
    warn: 'yellow'
  },
  filters: {
    blur: (px:number) => {
      return `blur(${px}px)`
    },
    brightness: (value:number) => {
      return `brightness(${value})`
    },
    contrast: (percent: number) => {
      return `contrast(${percent}%)`
    },
    grayscale: (percent: number) => {
      return `grayscale(${percent}%)`
    },
    hueRotate: (deg:number) => {
      return `hue-rotate(${deg}deg)`
    },
    invert: (percent: number) => {
      return `invert(${percent}%)`
    },
    opacity: (percent: number) => {
      return `opacity(${percent}%)`
    },
    saturate: (percent: number) => {
      return `saturate(${percent}%)`
    },
    sepia: (percent: number) => {
      return `sepia(${percent}%)`
    }
  }
}

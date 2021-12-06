
export type Colors = {
    primary: string,
    secondary: string,
    error: string,
    warn: string
}

export type Theme = {
    color: Colors,
    backgroundColor: Colors
}

export const theme:Theme = {
  color: {
    primary: 'green',
    secondary: 'blue',
    error: 'red',
    warn: 'yellow'
  },
  backgroundColor: {
    primary: 'green',
    secondary: 'blue',
    error: 'red',
    warn: 'yellow'
  }
}
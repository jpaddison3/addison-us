import { createMuiTheme } from '@material-ui/core/styles'

const fontStack = 'Helvetica, "Helvetica Neue", Arial, sans-serif'

// build headings
const headingNames = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
type HeadingName = typeof headingNames[number];
type Headings = Partial<Record<HeadingName, { fontWeight: number }>>
const headings = headingNames.reduce((coll: Headings, h: HeadingName) => {
  coll[h] = {
    fontWeight: 700
  }
  return coll
}, {} as Headings)

// build theme
export const theme = createMuiTheme({
  typography: {
    fontFamily: fontStack,
    ...headings,
  },
  palette: {
    primary: {
      main: '#B22222',
    }
  }
})

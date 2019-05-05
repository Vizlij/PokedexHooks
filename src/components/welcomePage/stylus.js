import { keyframes, stylus } from 'stylus-in-react'

const fadeIn = keyframes(`
animation-name = fadeIn

@keyframes animation-name
  for i in 0..10
    {10% * i}
      opacity (i/10)
      background-color #FFC107
      color white
`)

const Title = stylus(
  `
div
  animation ${fadeIn} 4s ease-out
  width 800px
  height 100px
  background-color white
  text-align center
  color #FFC107
  border-radius 20px
`,
  { displayName: 'FadeInButton' }
)

export default Title

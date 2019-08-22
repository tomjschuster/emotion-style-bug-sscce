import React from 'react'
import ReactDOM from 'react-dom' 
import styled from '@emotion/styled'

const H1 = styled.h1`
  font-size: 3rem;
`

const H2AsBigAsAnH1 = H1.withComponent('h2')

const App = () => <H2AsBigAsAnH1>Success</H2AsBigAsAnH1>

ReactDOM.render(<App />, document.getElementById('app'))


import React from 'react'
import './style.css'
import Button from './Button'

const App = () => {
  return (
        <>
          <h1 style={{ textAlign:'center',color:'bisque' }}>Hello World </h1>     
             																								  {/* inline css */}
					<Button title = 'Play Store' />    
																															{/* reusable componant */}
					<Button title = 'App Store' />
																															{/* passing parameter */}
					<Button /> 
        </>
  )
}

export default App;

import React from 'react'

const ComponentWithChildren = ({ children }) => {
  return (
    <div 
    style={{ 
        backgroundColor: 'lightblue',
        width: '90%',
        height: '18rem',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '15px'
        }}>
        {children}
    </div>
  )
}

export default ComponentWithChildren
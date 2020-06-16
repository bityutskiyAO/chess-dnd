import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export const Square = ({theme, children}) => (
    <div className={`default-square ${theme}-square`} style={{color: theme === 'black' ? 'white' : 'black'}}>
        {children}
    </div>
)

Square.propTypes = {
    theme: PropTypes.string
}

Square.defaultProps = {
    theme: 'white'
}

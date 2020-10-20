import React from 'react'
import { Icon } from '@ant-design/compatible';

import './all.css'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           
           <p> 엿장수  <Icon type="smile" /></p>

        </div>
    )
}

export default Footer

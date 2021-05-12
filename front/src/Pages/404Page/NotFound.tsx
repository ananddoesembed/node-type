import React from 'react'
import backGroundImage from '../../assets/404.png'
export default function NotFound() {
    return (
        <div style={{height:'100vh',width:'100vw',display:'flex',backgroundColor:'#ffcfff',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <img src={backGroundImage} alt="bgImage"/>
            <h1>This Page Contains Nothing but Scraps</h1>
            <p style={{textAlign:'center',width:'70%'}}>A perfectly enticing pizza box sitting on a table. You open it filled with anticipation. And find… nothing but scraps. Perhaps a half eaten crust. And a lot of grease. The anticipation turns to deep disappointment and despair. There’s nothing left!</p>
        </div>
    )
}

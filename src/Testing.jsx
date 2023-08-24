import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { IconUserCircle } from '@tabler/icons-react';



function App() {


  // const input = prompt('test')

  // console.log(input)




  const [count, setCount] = useState(0)

  return (
    <div>

    <div style={{
      backgroundColor: '#00A8A9', 
      textAlign: 'right', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent:'flex-end'}}>
      <div>
        
        <p style={{paddingTop:'10px', margin:'0px', color:'#00A8A9'}}>
          มานี มีงานเยอะมาก
        </p>

        <p style={{paddingBottom:'10px', margin:'0px'}}>
          (12345)
        </p> 
      </div>
     
      <div style={{paddingRight:'10px', paddingLeft:'10px'}}>
        <IconUserCircle />
      </div>
    </div>

      <div style={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingTop:'50px', }}> 
        <p 
        style={{margin:0}}
        >
          ยังไม่มีข้อสอบ 
        </p>
        <p 
        style={{margin:0}}
        >กรุณาเข้าใช้ใหม่ภายหลัง</p>

      </div>

      <div style={{ 
         display: 'flex',
         justifyContent:'center',
         alignItems:'center',
         flexDirection: 'column', 
      }}> 
        <div style={{
                  height: '100px',
                  width: '300px',
                  backgroundColor: 'powderblue',
                  borderRadius:'10px',
        }}>
       
        </div>
        <a href="https://www.google.com/" target='_blank'> Visit google</a> 
      </div>
    

    </div>
  )
}

export default App

// import React, { useEffect } from 'react'
// import './Action.css';
// // import Collapse from 'react-bootstrap/Collapse';
// import { useState } from 'react';
// import { actionAPI } from '../Services/allAPI';

// function Action() {

//   // const [open, setOpen] = useState(Array(3).fill(false));
//   const [viewaction,setViewaction] = useState({})

//   // open[false,false,false]

//   // const handleCollapse = () => {
//   //   setOpen(...open,open[val]= !open[val])
//   //   const newOpen = [...open]
//   //   newOpen[index] = !newOpen[index]
//   //   setOpen(newOpen)
//   // }


//   useEffect(() => {

//     const handleviewaction = async () => {
//       const token = sessionStorage.getItem('token')
//       const reqHeader = {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}`
//       }
//       const result = await actionAPI(reqHeader)
//       setViewaction(result.data)
//     }
//     handleviewaction()
//   }, [])
//   console.log(viewaction,"jitha");

//   return (
//     <div className='action-container'>
//       <div className='action-section'>
//         <h1>My Requests</h1>
//         <p>See My Activity</p>
//       </div>
//       {viewaction.map((item) => (
//         <div className='list-container'>
//           <div className='list-section'>
//             {/* <div onClick={() => { handleCollapse() }} className='section1'> */}
//             <div  className='section1'>

//               <div className='icon-section'>
//                 <div className='section1-icon' >
//                   <i class="ri-hospital-fill"></i>
//                 </div>
//               </div>
//               <div >
//                 <h4>{item.personname}</h4>
//                 <h6>{item.location}</h6>
//                 <h6>{item.bloodgroup}</h6>
//                 {/* <Collapse in={open[index]}>
//                   <div id="example-collapse-text">
//                     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//                     terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//                     labore wes anderson cred nesciunt sapiente ea proident.
//                   </div>
//                 </Collapse> */}
//               </div>
//             </div>
//             <div className='button-section'>
//               <button className='btn btn-light'>Status</button>
//             </div>
//           </div>
//         </div>
//       ))
//       }
//     </div>
//   )
// }
// export default Action


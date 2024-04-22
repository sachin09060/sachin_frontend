// import React from 'react'
// import Child from './Child'


// const Parent = (props) => {
//   return (
//     <div>
//       <div>
//         <Child {...props}/>
//       </div>
//     </div>
//   )
// }

// Parent.propTypes = {

// }

// export default Parent

// Without using Props achiving drilling

import React, {useState} from 'react'
import Child from './Child'

export const DataContaxt = React.createContext();

const Parent = () => {

  const [data, setData] = useState(0)

  return (
    <DataContaxt.Provider value={[data, setData]}>
      <Child/>
    </DataContaxt.Provider>
  )
}

export default Parent


import React, { useEffect, useState } from 'react'


const DataTable = () => {

    const[user,setUser] = useState([]);

    const getUser = async () => {
        const response = await fetch('https://lfapi.html5.run/products');
        
        setUser(await response.json());
        

    }

   useEffect(() => {

       getUser();
   },[]);

return(
    <>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Price</th>
      <th scope="col">Review</th>
      <th scope="col">Title</th>
      <th scope="col">Stock</th>
    </tr>
  </thead>

  <tbody>
  {
            user.map((curElem) => {
                return(
      
    <tr>

      <th scope="row">#</th>
      <td>{curElem.id}</td>
      <td>{curElem.price}</td>
      <td>{curElem.reviews}</td>
      <td>{curElem.title}</td>
      <td>{curElem.stock}</td>
      
    </tr>
    )

})

  }
   
  </tbody>
</table>
      
</>
)
}



export default DataTable
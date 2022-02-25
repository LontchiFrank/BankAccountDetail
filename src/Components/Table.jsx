import React,{useState, useEffect} from 'react'
import UserCard from './UserCard'
import axios from 'axios';

function Table() {

const [viewAll, setViewAll] = useState();

const viewAllAccount = async () =>{

    const views=  await axios.get("https://goodwillbackend.herokuapp.com/users/viewAll");
    console.log(views.data.users);
    setViewAll(views.data.users);
}
// const list = viewAll.map(view=><div><UserCard view={view} /></div>    
// )

// if(this.state.weather?.length > 0) {
//     this.state.weather.map((element) => {
//       return (
//         <div className="col-md-4" key={element.id}>  // also don't forget about the passing a unique value as key property
//           <Body city={element.location.name}/>
//         </div>
//       );
//     })
//   }
useEffect(() => {

viewAllAccount();



}, [])

console.log(viewAll)


  return (
    <div>
         <div class="table-responsive">
                <table class="table table-hover table-nowrap">
                    <thead class="table-light">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Account Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Location</th>
                            <th scope="col">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
  viewAll && viewAll !== null ? viewAll.map(view=><UserCard view={view} />):null
    
  }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Table
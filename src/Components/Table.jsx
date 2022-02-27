import React,{useState, useEffect} from 'react'
import UserCard from './UserCard'
import axios from 'axios';

function Table() {

const [viewAll, setViewAll] = useState();

const viewAllAccount = async () =>{

    const views=  await axios.get("https://goodwillbackend.herokuapp.com/users/viewAll");
    setViewAll(views.data.users);
}
const deleteAccount = async (id)=>{
    // console.log(id)
 await axios.delete(`https://goodwillbackend.herokuapp.com/users/deleteUserAcct/${id}`);

const  newAccount = viewAll.filter(view => {return( view._id !== id)});

setViewAll(newAccount);

}


useEffect(() => {
viewAllAccount();
}, [])



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
  viewAll && viewAll !== null ? 
  viewAll.map((view, key)=><UserCard view={view} key={key} id={view._id} onDelete={deleteAccount} />)
  :null
 }

                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Table
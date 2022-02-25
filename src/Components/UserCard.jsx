import React from 'react'

function UserCard({id,view, onDelete}) {

const pic1= "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
const pic2="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
const pic3="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
const pic4="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
const pic5="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"

const arr=[pic1,pic2,pic3,pic4,pic5];

const pics = arr[Math.floor(Math.random() * arr.length)]


  return (

          <tr>
                            <td data-label="Job Title"> <img alt="..." src={pics}  class="avatar avatar-sm rounded-circle me-2"/> <a class="text-heading font-semibold" href="#"> {view.name} </a> </td>
                            <td data-label="Email"> <span>Web Designer</span> </td>
                            <td data-label="Phone"> <a class="text-current" href="mailto:robert.fox@example.com">{view.email}</a> </td>
                            <td data-label="Lead Score"> <a class="text-current" href="tel:202-555-0152">{view.tel}</a> </td>
                            <td data-label="Amount"> <span class="badge bg-soft-success text-success">7/10</span> </td>
                            <td data-label="">  {view.amount}frs</td>
                            <td data-label="">        <button class="btn btn-success btn-circle btn-circle-sm m-1"><i class="fa fa-pen"></i></button>    <button class="btn btn-danger btn-circle btn-circle-sm m-1" onClick={() => onDelete(id)} ><i class="fa fa-trash"></i></button></td>
                            <td data-label="" class="text-end">
                                <div class="dropdown"> <a class="text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="bi bi-three-dots-vertical"></i> </a>
                                    <div class="dropdown-menu dropdown-menu-end"> <a href="#!" class="dropdown-item"> Action </a> <a href="#!" class="dropdown-item"> Another action </a> <a href="#!" class="dropdown-item"> Something else here </a> </div>
                                </div>
                            </td>
                        </tr>
 
  )
}

export default UserCard
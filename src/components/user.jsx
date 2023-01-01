import { useEffect, useState } from "react";
const User = ({userid}) => {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const getUser = async()=>{ 
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
            const body = await response.json();
            console.log(body);
            setUser(body);
        } 
        getUser();
    },
    
    [userid]);

    if(!user) return <p>Loading</p> ;

   return <div className="card" style = {{width:"18rem"}}>
   <div className="card-header">
        
        {user.name} ({user.username})
   </div>
   <ul className="list-group list-group-flush">
     <li className="list-group-item">Phone number : {user.phone}</li>
     <li className="list-group-item">Company: {user.company.name}</li>
     <li className="list-group-item">catch phrase: {user.company.catchPhrase}</li>
   </ul>
 </div>
};

export default User;

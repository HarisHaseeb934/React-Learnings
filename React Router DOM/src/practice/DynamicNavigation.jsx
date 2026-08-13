import { NavLink, useNavigate, useParams } from "react-router-dom";

export const UserPage = () => {
    const users = [ { id: 101, name: "Alice" }, { id: 102, name: "Bob" } ];

    return(
        <ul>
            {
                users.map(user => (
                    <User key={user.id} {...user}/>
                ))
            }
        </ul>
    )
}

const User = (user) => {
    const navigate = useNavigate();
    const {id,name} = user;

    return(
        <li>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <NavLink onClick={() => navigate(`/user/${user.id}`)}>
                <button>
                    View Profile
                </button>
            </NavLink>
        </li>
    )
}

export const UserProfile = () => {
    const navigate = useNavigate();
    const params = useParams();
    return(
        <section>
            <p>{params.id}</p>
            <p>{params.name}</p>
            <NavLink onClick={() => navigate(-1)}>Go Back to Users</NavLink>
        </section>
    )
}
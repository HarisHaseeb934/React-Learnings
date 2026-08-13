import { useState } from "react"
import { Form } from "react-router-dom"


export const getFormData = async({request}) => {
    let data = await request.formData();
    let obj = Object.fromEntries(data);
    console.log(obj);
    return null;
}

export const Contact = () => {
    // const [user, setUser] = useState({});

    // const handleChange = (target) => {
    //     let {value, name} = target;
    //     setUser(prev => ({...prev, [name]: value}));
    // }
    // const handelSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(user);
    // }



    return(
        <Form method="POST">
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name"/>
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="Message">Message: </label>
                <input type="text-area" name="Message" id="Message"/>
            </div>
            <button type="submit">Submit</button>
        </Form>

        // <form onSubmit={(e) => handelSubmit(e)}>
        //     <div>
        //         <label htmlFor="name">Name: </label>
        //         <input type="text" name="name" id="name" value={user.name} onChange={(e) => handleChange(e.target)}/>
        //     </div>
        //     <div>
        //         <label htmlFor="email">Email: </label>
        //         <input type="text" name="email" id="email" value={user.email} onChange={(e) => handleChange(e.target)}/>
        //     </div>
        //     <div>
        //         <label htmlFor="Message">Message: </label>
        //         <input type="text-area" name="Message" id="Message" value={user.Message} onChange={(e) => handleChange(e.target)}/>
        //     </div>
        //     <button>Submit</button>
        // </form>
    )
}
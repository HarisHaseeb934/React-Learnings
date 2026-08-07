import { useEffect, useRef, useState } from "react"
import { putData } from "../api/axiosInstance";

export const Form = ({handlePost, edit, setData, data, setEdit}) => {
    const [input, setInput] = useState({
        title: "",
        body: ""
    })
    // console.log(edit)
    let isEdit = Object.keys(edit).length !== 0;

    let btn = useRef(null);

    useEffect(() => {
        edit && setInput({
            title: edit.title || "",
            body: edit.body || "" 
        })
    },[edit])

    const handleChange = (e) => {
        let {name, value} = e.target;
        setInput(prev => ({...prev, [name]: value}))
    }

    const handelputData = async(id, post) => {
        try{
            let response = await putData(id, post);
            console.log(response);
            if(response.status === 200){
                setData(prev => {
                    return prev.map(prev => prev.id === id ? response.data : prev)
                })
                setEdit({})
                setInput({
                    title: "",
                    body: ""
                })
            }
        }catch(error){
            console.log("Cannot Update data")
        }

    }

    const handleAdd = (e) => {
        e.preventDefault();
        if(btn.current.value === "Edit"){
            handelputData(edit.id, input);
        }else{
            handlePost(input);
        }
    }

    return(
        <form className="w-xl bg-[#3c3c3c] flex m-auto p-3">
            <div>
                <input type="text" name="title" value={input.title} onChange={handleChange} className="bg-white p-2 m-2"/>
            </div>
            <div>
                <input type="text" name="body" value={input.body} onChange={handleChange} className="bg-white p-2 m-2"/>
            </div>
            <div>
                <button onClick={handleAdd} className="p-2 m-2 bg-green-500 px-4" value={isEdit ? "Edit" : "Add"} ref= {btn}>{isEdit ? "Edit" : "Add"}</button>
            </div>
        </form>
    )
}
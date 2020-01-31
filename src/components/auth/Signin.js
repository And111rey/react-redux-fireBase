import React, {useState} from "react"

export const SignIn = () => {


    // const [email, setEmail] = useState("")
    // const [pass, setPass] = useState("")
    const [data, setData] = useState({email:"", pass: ""})

    const handleChange = (e) => {
        // setEmail([e.target.id] = e.target.value)
        // setPass([e.target.id] = e.target.value )
    
        setData({
            email: e.target.value,
            pass:  e.target.value
        })
    
    }
    const handleSubmit = (e) => {
        // console.log("DEF", e.preventDefault())
        e.preventDefault()
        console.log(data)


    }




    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>

                <h5 className="grey-text text-darken-3"> Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}
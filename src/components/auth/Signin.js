import React, {useReducer} from "react"

export const SignIn = () => {


 const [data, setData] = useReducer((state, newState) => ({...state, ...newState}), {})

    const handleChange = (e) => {
        const name = e.target.name
        const newState = e.target.value
        setData({[name]: newState})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
    }




    return (
        <div className="container">

                <h5 className="grey-text text-darken-3"> Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <button onClick={handleSubmit} className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
        </div>
    )
}
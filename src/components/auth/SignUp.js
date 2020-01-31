import React, {useReducer} from "react"

export const SignUp = () => {


    const [data, setData] = useReducer(
        (state, newState) => ({...state, ...newState}), {} );

    const handleChange = e => {
        const name = e.target.name;
        const newValue = e.target.value;
        setData({[name]: newValue});
        console.log(e.target.name)
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)


    }




    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>

                <h5 className="grey-text text-darken-3"> Sign In</h5>
                
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input value={data.email} type="email" name="email" onChange={handleChange}/>
                </div>

                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input value={data.password} type="text" name="password" onChange={handleChange}/>
                </div>

                  {/*  */}
                <div className="input-field">
                    <label htmlFor="First Name">First Name</label>
                    <input value={data.firstName} type="text" name="firstName" onChange={handleChange}/>
                </div>

                  
                <div className="input-field">
                    <label htmlFor="Last Name">Last Name</label>
                    <input value={data.lasrName} type="text" name="lastName" onChange={handleChange}/>
                </div>
                {/*  */}

                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
            </form>
        </div>
    )
}
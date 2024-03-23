import { useState } from "react";

const StatefulForm = () => {
    const [name , setName] = useState('exmaple');
    const [email , setEmail] = useState('example@gmail.com');
    const [password , setPassword] = useState(null);
    const [error , setError] = useState(''); 


    const handleSubmit  = e => {
        e.preventDefault();
        if(password.length < 6){
            setError("password must be 6 character or more");
        }
        else{
            setError('');
            console.log( name , email ,password);
        }
    }
    const handleName = e => {
        setName(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                onChange={handleName}
                type="text" 
                name="name"
                value={name}
                />
                <br />
                <input 
                onChange={handleEmail}
                type="email" 
                name="email"
                value={email}
                />
                <br />
                <input type="number" name="phone"/>
                <br />
                <input 
                onChange={handlePassword}
                type="password" 
                name="password"
                required
                />
                <br />
                <input type="submit" value="submit"/>
                <p>{error}</p>
            </form>
        </div>
    );
};

export default StatefulForm;
import useInputState from "../../Hooks/useInputState";

const HookForm = () => {

    // const [name , setName] = useInputState('unknown');
    const nameState = useInputState('unknown');
    console.log(nameState)

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameState.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input {...nameState} type="text" name="name"/>
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default HookForm;
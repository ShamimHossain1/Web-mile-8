import { useState } from "react";


const Form = () => {

    const [email, setEmail] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(e.target.name.value);
        e.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;
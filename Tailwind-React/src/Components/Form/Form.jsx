

const Form = () => {

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
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Form;
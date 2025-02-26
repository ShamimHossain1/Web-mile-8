
const ReusableForm = ({formTitle}) => {

    const handleSubmit = (e) => {
        console.log(e.target.name.value);
        e.preventDefault();
        console.log('Form Submitted');
    }
    return (
        <div>
            <h1 className="text-3xl text-center mt-10">{formTitle}</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-5 p-6  rounded-2xl shadow-lg space-y-4"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-100 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                    Submit
                </button>
            </form>

        </div>
    );
};

export default ReusableForm;
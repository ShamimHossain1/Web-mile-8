

const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50 px-6">
                <img
                    src="https://i.imgur.com/qIufhof.png"
                    alt="Error Illustration"
                    className="w-64"
                />
                <h1 className="text-4xl font-bold text-gray-800 mt-4">Oops! Something went wrong.</h1>
                <p className="text-gray-600 mt-2">We can't seem to find the page you're looking for.</p>
                <a
                    href="/"
                    className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
                >
                    Go to Homepage
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
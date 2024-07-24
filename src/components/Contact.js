

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg p-10">
        <h1 className="text-5xl font-bold text-center text-orange-600 mb-10">Contact Us</h1>
        <p className="text-2xl text-gray-800 mb-6 text-center">
          We would love to hear from you! Connect with the developer of Food Shrine on the following platforms:
        </p>
        <div className="flex flex-col items-center">
          <a 
            href="https://twitter.com/@amol_gawade01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-blue-500 hover:underline mb-4"
          >
            X (formerly Twitter)
          </a>
          <a 
            href="https://linkedin.com/in/amol-gawade" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-blue-700 hover:underline mb-4"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/amol-gawade01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-2xl text-black hover:underline mb-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

const Contact = () => {
  return (
    <section className="flex justify-center bg-gray-200 h-auto p-6">
      <div className="w-full sm:w-1/2 bg-gray-800">
        <h1 className="text-white text-center text-4xl">Contact Me</h1>
        <form className="flex flex-col p-6">
          <label className="text-white mb-2">Full Name</label>
          <input type="text" placeholder=" Full Name" className="w-full" />
          <label className="text-white my-2">Email</label>
          <input type="email" placeholder=" Email" className="w-full" />
          <label className="text-white my-2">Inquiry</label>
          <textarea
            type="message"
            placeholder=" Please describe your inquiry"
            className="w-full h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

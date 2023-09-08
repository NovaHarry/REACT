const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <div className="p-4">
        <form className="grid justify-center gap-4">
          <input
            placeholder="Name"
            className="border-black border-2 rounded-md p-2"
          />
          <input
            placeholder="Message"
            className="border-black border-2 rounded-md p-2"
          />
          <button className="bg-black text-white rounded-md p-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

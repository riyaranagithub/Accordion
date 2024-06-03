import { useState } from "react";
import reactQuestions from "./component/data";

function App() {
  const [ques, setQues] = useState(reactQuestions);
  const [show, setShow] = useState(null);
  const handleShow = (id) => {
    if (show === id) {
      setShow(null);
    } else {
      setShow(id);
    }
  };

  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center bg-cover flex-col relative"
      style={{ backgroundImage: 'url("./src/back.webp")' }}
    >
      <h1 className="text-4xl font-mono font-bold fixed top-6">
        React Interview Questions
      </h1>
      <div className="w-1/2  bg-slate-100 p-4 rounded-2xl shadow-black shadow-2xl">
        {ques.map((elem) => (
          <div key={elem.id}>
            <div className="flex text-2xl font-serif mb-2">
              <p
                className=" pr-2"
                onClick={() => {
                  handleShow(elem.id);
                }}
              >
                {" "}
                {show === elem.id ? "➖" : "➕"}
              </p>{" "}
              {elem.question}
            </div>
            {show === elem.id && (
              <div>
                <p className="text-xl font-medium mb-3">{elem.answer}</p>
                <hr />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import Additem from "./Components/Additem";
import Header from "./Components/Header";
import Content from "./Components/Content";
import { useState } from "react";

function App() {
  let intial = [];
  try {
    const storedItems = JSON.parse(
      localStorage.getItem("student_enrollment_form")
    );
    intial = storedItems || [];
  } catch (error) {
    console.error("Local storage is not available or the data is corrupted.");
  }
  const [formData, setFormData] = useState(intial);
  const [currentData, setCurrentData] = useState({
    name: "",
    email: "",
    website: "",
    imageLink: "",
    gender: "",
    skill: [], // Initialize skill with an empty array
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = formData.length ? formData[formData.length - 1].id + 1 : 1;
    const newPost = { id, ...currentData };

    setFormData([...formData, newPost]);
    localStorage.setItem(
      "student_enrollment_form",
      JSON.stringify([...formData, newPost])
    );
    setCurrentData({
      name: "",
      email: "",
      website: "",
      imageLink: "",
      gender: "",
      skill: [], // Reset skills after submission
    });

    setSubmitted(true);
  };
  const handleInputChange = (event) => {
    setCurrentData({ ...currentData, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCurrentData((prevData) => ({
        ...prevData,
        skill: [...(prevData.skill || []), value],
      }));
    } else {
      setCurrentData((prevData) => ({
        ...prevData,
        skill: prevData.skill.filter((item) => item !== value),
      }));
    }
  };
  const deleteObj = (id) => {
    if (formData) {
      let post = formData.filter((form) => form.id !== id);
      setFormData(post);
      localStorage.setItem("student_enrollment_form", JSON.stringify(post));
    }
  };

  return (
    <div className="bg-hellow">
      <Header />
      <div className=" p-10 ">
        <div className="grid grid-cols-1">
          <Additem
            handleSubmit={handleSubmit}
            currentData={currentData}
            setCurrentData={setCurrentData}
            handleCheckboxChange={handleCheckboxChange}
            handleInputChange={handleInputChange}
          />{" "}
        </div>
        <div className="">
          <Content formData={formData} deleteObj={deleteObj} />
        </div>
      </div>
    </div>
  );
}

export default App;

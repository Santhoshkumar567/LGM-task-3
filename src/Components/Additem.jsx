import React, { useState } from "react";
const Additem = ({
  handleSubmit,
  handleCheckboxChange,
  handleInputChange,
  currentData,
}) => {
  return (
    <div className="sm:card w-full sm:bg-cyan-900 ">
      <div className="sm:card-body mx-auto">
        <div className="form-control">
          <form>
            <div className="sm:flex my-3">
              <label className="label" htmlFor="username">
                <span className="label-text text-lg sm:w-32  text-white ">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={currentData.name || ""}
                onChange={handleInputChange}
                className="input input-bordered input-primary w-full"
              />
            </div>
            <div className="sm:flex my-3">
              <label className="label  " htmlFor="email">
                <span className="label-text text-lg sm:w-32  text-white">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                value={currentData.email || ""}
                onChange={handleInputChange}
                className="input input-bordered input-primary  w-full"
              />
            </div>
            <div className="sm:flex my-3">
              <label className="label " htmlFor="websitelink">
                <span className="label-text text-lg sm:w-32 text-white">
                  Github Link
                </span>
              </label>
              <input
                type="text"
                name="website"
                value={currentData.website || ""}
                onChange={handleInputChange}
                className="input input-bordered input-primary w-full "
              />
            </div>
            <div className="sm:flex my-3">
              <label className="label " htmlFor="imagelink">
                <span className="label-text text-lg sm:w-32  text-white">
                  Image Link
                </span>
              </label>
              <input
                type="text"
                name="imageLink"
                value={currentData.imageLink || ""}
                onChange={handleInputChange}
                className="input input-bordered input-primary w-full "
              />
            </div>
            <div className="sm:flex my-3">
              <label className="label ">
                <span className="label-text text-lg sm:w-32  text-white">
                  Gender
                </span>
              </label>
              <div className="flex justify-center">
                <div className="form-control ">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={currentData.gender === "Male"}
                      onChange={handleInputChange}
                      className="radio radio-warning mr-1"
                    />
                    <span className="label-text mr-3  text-white ">male</span>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={currentData.gender === "Female"}
                      onChange={handleInputChange}
                      className="radio radio-warning mr-1"
                    />
                    <span className="label-text mr-3  text-white">female</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="sm:flex">
              <label className="label ">
                <span className="label-text text-lg w-32  text-white">
                  Skills
                </span>
              </label>
              <div className="flex justify-center">
                <div className="form-control mx-1">
                  <label className="cursor-pointer label" htmlFor="css">
                    <span className="label-text mr-1 text-white">HTML</span>
                    <input
                      type="checkbox"
                      id="css"
                      name="skill"
                      value="CSS"
                      checked={currentData.skill?.includes("CSS")}
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-warning"
                    />
                  </label>
                </div>
                <div className="form-control mx-1">
                  <label className="cursor-pointer label" htmlFor="java">
                    <span className="label-text mr-1 text-white">CSS</span>
                    <input
                      type="checkbox"
                      id="java"
                      name="skill"
                      value="Java"
                      checked={currentData.skill?.includes("Java")}
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-warning"
                    />
                  </label>
                </div>
                <div className="form-control mx-1">
                  <label className="cursor-pointer label" htmlFor="html">
                    <span className="label-text mr-1 text-white">js</span>
                    <input
                      type="checkbox"
                      id="html"
                      name="skill"
                      value="Html"
                      checked={currentData.skill?.includes("Html")}
                      onChange={handleCheckboxChange}
                      className="checkbox checkbox-warning"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="text-center my-3">
              <button
                type="button"
                className="btn btn-success w-7/12"
                onClick={handleSubmit}
              >
                Enroll Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Additem;

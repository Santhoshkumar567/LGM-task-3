import React from "react";

const Content = ({ formData, deleteObj }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
      {formData.map((form) => (
        <div
          className="card card-top sm:card-side bg-base-100 shadow-xl  my-3 p-4"
          key={form.id}
        >
          <img
            src={form.imageLink}
            alt="Movie"
            className="w-5/12 mx-auto mt-3 rounded md:mt-0 md:mx-0"
          />
          <div className="card-body">
            <h2 className="card-title">{`${form.name}`}</h2>
            <p className="my-2 ">{`Email: ${form.email}`}</p>
            <p className="my-2 w-8/12">{`GithubLink: ${form.website} `}</p>
            <p className="my-2">{`gender:${form.gender}`}</p>
            <p className="my-2">{`skill: ${form.skill}`}</p>
            <button
              className="btn btn-success"
              onClick={() => deleteObj(form.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;

import React from "react";

function ModalForm(props) {
    const onFormSubmit=(event)=>
    {
        event.preventDefault();
    }
  return (
    <div className=" h-[100vh] bg-black/50 relative">
      <div className="  top-1/4 fixed rounded-md bg-white lg:w-1/3 lg:ml-[25vw] mid:w-1/3 mid:ml-[15vw] sm:w-3/5 sm:ml-[15vw] xxxs: w-3/5 xxxs:ml-[20vw] ">
        <div className="flex justify-between mt-5 mb-5">
          <div className="pl-5 font-medium">
            <h4 >Add new contact</h4>
          </div>
          <div
            className="cursor-pointer pr-5"
            onClick={props.modalCloseHandler}
          >
          <img src="src\assets\Svg\CloseIcon.svg" alt="close option" />
          </div>
        </div>
        <hr />

        <form onSubmit={onFormSubmit} className="mt-5 mb-5">
          <div className="flex justify-between">
            <div className="pl-5 mr-5">
              <label htmlFor="fname" className="text-xs">First Name</label>
              <br />
              <input type="text" id="fname" className="w-full h-8 mt-2 rounded-md bg-gray-100 placeholder:pl-5 text-xs" placeholder= {` Enter your Name`}/>
            </div>
            <div className="pr-5">
              <label htmlFor="lname" className="text-xs">Last Name</label>
              <br />
              <input type="text" id="lname" className="w-full h-8 mt-2 rounded-md bg-gray-100 placeholder:pl-5 text-xs" placeholder="Enter your Name"/>
            </div>
          </div>
          <div className="pl-5 pr-5 mt-2">
            <label htmlFor="email"className="text-xs">Email*</label>
            <br />
            <input type="Email" id="email" className="w-full h-8 mt-2 mb-5 rounded-md bg-gray-100 placeholder:pl-5 text-xs" placeholder="Enter your Name" />
          </div>
          <div className="flex justify-around ml-5 mr-5">
            <div>
              <button className="border-solid border border-sky-300 sm:w-28 h-10 rounded-md text-sky-300 xs:text-xs xxxs:w-14 xxxs:text-[8px]"  onClick={props.modalCloseHandler}>
                Cancel
              </button>
            </div>
            <div>
              <button type="submit" className="sm:w-28 h-10 bg-sky-300 rounded-md text-white xs:text-xs xxxs:w-14 xxxs:text-[8px]">
                Add Contact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;

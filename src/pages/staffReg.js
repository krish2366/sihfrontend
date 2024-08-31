import staff from "../Images/staff.svg"

const StaffRegistration = () => {
    return (
        <div className="bg-[#CFEDEF] w-full h-[51rem] flex pb-5  ">
            <div className="w-max bg-[#CFEDEF]">
                <img src={staff} alt=""  className="w-[53rem] h-[50rem]"/>
            </div>
            <div className="bg-login-image w-[623px] h-[51rem] flex flex-col p-16 pt-10 space-y-2">

                <div className="py-10 px-5 bg-[#F4FFFD] border rounded-lg space-y-8 mt-10">
                    <div className="font-inter font-bold underline text-center">
                        <p className="text-2xl">Staff Registation Form</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">Email Id</p>
                        <input type="text" name="email id" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3 ">
                        <p className="text-[20px]">Password</p>
                        <input type="password" name="password" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3 ">
                        <p className="text-[20px]">Confirm Password</p>
                        <input type="password" name="password" className="w-64 h- border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">First Name</p>
                        <input type="text" name="firstname" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">Last Name</p>
                        <input type="text" name="lastname" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">Position At</p>
                        <input type="text" name="position at" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">Department</p>
                        <input type="text" name="Department" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    
                    <div className="flex justify-center">
                        <button className=" bg-[#6AEDFF] rounded-full w-40 h-12 font-bold text-2xl">Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default StaffRegistration;
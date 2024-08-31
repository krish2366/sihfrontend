import doctors from "../Images/doctors.svg"

const DoctorRegistration = () => {
    return (
        <div className="bg-[#CFEDEF] w-full h-[51rem] flex pb-5  ">
            <div className="w-max bg-[#CFEDEF]">
                <img src={doctors} alt=""  className="w-[53rem] h-[50rem]"/>
            </div>
            <div className="bg-login-image w-[623px] h-[51rem] flex flex-col p-16 pt-10 space-y-2">
                <div className="py-10 px-5 bg-[#F4FFFD] h-[46rem] border rounded-lg space-y-8">
                    <div className="font-inter font-bold underline text-center">
                        <p className="text-[22px]">Doctor Registation Form</p>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">User Id</p>
                        <input type="text" name="user id" className="w-64 h-8 border border-black rounded-md pl-2" /> 
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
                        <p className="text-[20px]">Specialization</p>
                        <input type="text" name="specialization" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">License Number</p>
                        <input type="text" name="License number" className="w-64 h-8 border border-black rounded-md pl-2" /> 
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-[20px]">Years Of Experience</p>
                        <input type="text" name="years of experience" className="w-64 h-8 border border-black rounded-md pl-2" /> 
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
                    <div className="flex justify-center">
                        <button className=" bg-[#6AEDFF] rounded-full w-40 h-12 font-bold text-2xl">Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default DoctorRegistration;
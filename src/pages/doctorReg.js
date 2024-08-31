import doctors from "../Images/doctors.svg"
import logo from '../Images/logo.svg'

const DoctorRegistration = () => {
    return (
        <div className="bg-[#CFEDEF] w-full h-[51rem] flex pb-5  ">
            <div className="w-max bg-[#CFEDEF]">
                <img src={doctors} alt=""  className="w-[53rem] h-[50rem]"/>
            </div>
            <div className="bg-login-image w-[623px] h-[51rem] flex flex-col p-16 pt-10 space-y-2">
                <div className="flex justify-center h-[10rem]"><img src={logo} alt="" /></div>

                <div className="py-10 px-5 bg-[#F4FFFD] h-[36rem] border rounded-lg space-y-9">
                    <div className="font-inter font-bold underline text-center">
                        <p className="text-[20px]">Doctor Registation Form</p>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">User Id</p>
                        <input type="text" name="user id" className="w-64 h-8 border border-black rounded-md" /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">First Name</p>
                        <input type="text" name="firstname" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Last Name</p>
                        <input type="text" name="lastname" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Specialization</p>
                        <input type="text" name="specialization" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">License Number</p>
                        <input type="text" name="License number" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Years Of Experience</p>
                        <input type="text" name="years of experience" className="w-64 h-8 border border-black rounded-md" /> 
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
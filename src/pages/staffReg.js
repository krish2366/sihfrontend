import staff from "../Images/staff.svg"
import logo from '../Images/logo.svg'

const StaffRegistration = () => {
    return (
        <div className="bg-[#CFEDEF] w-full h-[51rem] flex pb-5  ">
            <div className="w-max bg-[#CFEDEF]">
                <img src={staff} alt=""  className="w-[53rem] h-[50rem]"/>
            </div>
            <div className="bg-login-image w-[623px] h-[51rem] flex flex-col p-16 pt-10 space-y-2">
                <div className="flex justify-center h-48"><img src={logo} alt="" /></div>

                <div className="py-10 px-5 bg-[#F4FFFD] border rounded-lg space-y-9">
                    <div className="font-inter font-bold underline text-center">
                        <p className="text-2xl">Staff Registation Form</p>
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">User Id</p>
                        <input type="text" name="user id" className="w-64 h-9 border border-black rounded-md" /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">First Name</p>
                        <input type="text" name="firstname" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Last Name</p>
                        <input type="text" name="lastname" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Position At</p>
                        <input type="text" name="position at" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Department</p>
                        <input type="text" name="Department" className="w-64 h-9 border border-black rounded-md " /> 
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
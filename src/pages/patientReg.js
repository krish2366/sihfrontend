import consultancy from "../Images/consultancy.svg"
import logo from '../Images/logo.svg'

const PatientRegistration = () => {
    return (
        <div className="bg-[#CBEFEF] w-full h-[51rem] flex pb-5  ">
            <div className="p-20 pt-28 mt-14 w-max">
                <img src={consultancy} alt=""  className="w-[43rem]"/>
            </div>
            <div className="bg-login-image w-[623px] h-[51rem] flex flex-col p-16 pt-10 space-y-2">
                <div className="flex justify-center h-[10rem]"><img src={logo} alt="" /></div>

                <div className="py-10 px-5 bg-[#F4FFFD] border rounded-lg space-y-9 h-[36rem]">
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-[20px]">First Name</p>
                        <input type="text" name="firstname" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Last Name</p>
                        <input type="text" name="lastname" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">DOB</p>
                        <input type="text" name="dob" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Gender</p>
                        <input type="text" name="gender" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Address</p>
                        <input type="text" name="address" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-[20px]">Zip Code</p>
                        <input type="text" name="zipcode" className="w-64 h-8 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-center">
                        <button className=" bg-[#6AEDFF] rounded-full w-40 h-12 font-bold text-2xl">Submit</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default PatientRegistration;
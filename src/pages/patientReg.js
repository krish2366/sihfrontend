import consultancy from "../Images/consultancy.svg"
import logo from '../Images/logo.svg'

const PatientRegistration = () => {
    return (
        <div className="bg-[#CBEFEF] w-full h-full flex pb-5  ">
            <div className="p-20 pt-28 mt-14 w-max">
                <img src={consultancy} alt=""  className="w-[43rem]"/>
            </div>
            <div className="bg-login-image w-[623px] flex flex-col p-16 pt-10 space-y-5">
                <div className="flex justify-center h-48"><img src={logo} alt="" /></div>
                <p className="font-bold text-center text-2xl "><u>Patient Registration Form</u></p>
                <div className="py-10 px-5 bg-[#F4FFFD] border rounded-lg space-y-9">
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">First Name</p>
                        <input type="text" name="firstname" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Last Name</p>
                        <input type="text" name="lastname" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">DOB</p>
                        <input type="text" name="dob" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Gender</p>
                        <input type="text" name="gender" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Address</p>
                        <input type="text" name="address" className="w-64 h-9 border border-black rounded-md " /> 
                    </div>
                    <div className="flex justify-between items-center mb-5">
                        <p className="text-2xl">Zip Code</p>
                        <input type="text" name="zipcode" className="w-64 h-9 border border-black rounded-md " /> 
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
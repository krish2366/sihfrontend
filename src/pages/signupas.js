import multirole from "../Images/multirole.svg"
import logo from '../Images/logo.svg'
import docins from '../Images/docins.svg'
import patient from '../Images/patient.svg'
import id from '../Images/id.svg'
const SignUpAs = () => {
    return (
        <div className="bg-[#CBEFEF] flex">
            <div className="p-20 py-0 mt-14  ">
                <img src={multirole} alt="" className=""/>
            </div>
            <div className="bg-login-image w-[623px] flex flex-col p-28 pt-5 space-y-2">
                <div className="flex justify-center h-48 my-5"><img src={logo} alt="" /></div>
                <div className="p-10 bg-[#F4FFFD] border rounded-lg text-center text-4xl space-y-5">
                    <h3 className="font-bold text-blue-700 ">Sign up as</h3>
                    <button className="flex justify-center items-center space-x-2 bg-[#6AEDFF] rounded-full w-full h-14 font-bold text-2xl "><text>Doctor</text><img src={docins} alt="" /></button>
                    <button className="flex justify-center items-center space-x-2 bg-[#6AEDFF] rounded-full w-full h-14 font-bold text-2xl"><text>Patient</text><img src={patient} alt="" /></button>
                    <button className="flex justify-center items-center space-x-2 bg-[#6AEDFF] rounded-full w-full h-14 font-bold text-2xl"><text>Staff</text><img src={id} alt="" /></button>
                </div>

            </div>
        </div>
    );
}
 
export default SignUpAs;
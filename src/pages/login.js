import hospital from "../Images/hospital.svg"
import logo from '../Images/logo.svg'

const LoginPage = () => {
    return (
        <div className="bg-[#CBEFEF] w-full h-full flex pb-5  ">
            <div className="p-20 pt-0 mt-14 w-max">
                <img src={hospital} alt="" />
            </div>
            <div className="bg-login-image w-[623px] flex flex-col p-28 pt-0 space-y-2">
                <div className="flex justify-center h-48"><img src={logo} alt="" /></div>
                <p className="font-julee">Let's get started!!</p>
                <div className="p-10 bg-[#F4FFFD] border rounded-lg">
                    <div className="space-y-2 mb-5">
                        <p>Username/Email-Id</p>
                        <input type="text" name="username" placeholder="Enter your email/username" className="w-full h-11 border rounded-md" /> 
                    </div>
                    <div className="mb-5">
                        <p>Password</p>
                        <input type="password" name="password" placeholder="Enter your password" className="w-full h-11 border rounded-md mt-2" /> 
                        <p className="mt-0"><i>atleast 8 characters</i></p>
                    </div>
                    <button className=" bg-[#6AEDFF] text-white rounded-lg w-full h-9 font-bold text-2xl">Login</button>
                </div>
                <p className="text-[#0047FF] font-semibold">Forgot Password ? </p>
                <div className=" w-full">
                    <p className="font-bold text-xl bg-[#F4FFFD] py-5 px-8 rounded-lg">Don’t have an account? <text className="text-[#3C96FF]">Sign up</text></p>
                </div>
            </div>
        </div>
    );
}
 
export default LoginPage;
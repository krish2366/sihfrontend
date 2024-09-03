import { useState } from "react";
import consultancy from "../Images/consultancy.svg";

const PatientRegistration = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('')


  const handleClick = () =>{
    console.log("submit got clicked")

    const data = {
      phoneNumber : phoneNumber, 
      email : email,
      password : password,
      firstName : firstname,
      lastName : lastname,
      dob : DOB,
      gender : gender,
      address : address,
      zipCode : zipcode
    }

    if(password === confirmPassword && password !== "" && email !== ""  && firstname !== "" && DOB !== "" && gender !== "" && address !== "" && zipcode !== ""){
      console.log("credentials available");
      fetch("http://localhost:5000/register-patient",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) =>{
        console.log('response<<<<<<<<<')
        res.json()
      }).then((data) =>{
        console.log('data<<<<<<<<<<<<')
        console.log(data)
      }).catch((err)=>{
        console.log("error: ",err)
      })
    }





  }

  return (
    <div className="bg-[#CBEFEF] w-full flex pb-5  ">
      <div className="p-20 pt-0 w-max ">
        <img src={consultancy} alt="" className="w-[43rem] h-[45rem]" />
      </div>
      <div className="bg-login-image w-[623px] h-fit flex flex-col p-16 py-5 space-y-2">
        <div className="py-5 px-5 bg-[#F4FFFD]  border rounded-lg space-y-8 ">
          <div className="font-inter font-bold underline text-center">
            <p className="text-[22px]">Patient Registation Form</p>
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">Email Id</p>
            <input
              type="text"
              name="email id"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
            
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">Phone Number</p>
            <input
              type="text"
              name="phoneno"
              value={phoneNumber}
              onChange={(e)=>{
                setPhoneNumber(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
            
          </div>
          <div className="flex justify-between items-center mb-3 ">
            <p className="text-[20px]">Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>
          <div className="flex justify-between items-center mb-3 ">
            <p className="text-[20px]">Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>{
                setConfirmPassword(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-[20px]">First Name</p>
            <input
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e)=>{
                setFirstname(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2 "
            />
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-[20px]">Last Name</p>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value)
              }}
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">DOB</p>
            <input
              type="text"
              name="dob"
              value={DOB}
              onChange={(e)=>{
                setDOB(e.target.value);
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">Gender</p>
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={(e)=>{
                setGender(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2 "
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">Address</p>
            <input
              type="text"
              name="address"
              value={address}
              onChange={(e)=>{
                setAddress(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>
          <div className="flex justify-between items-center mb-3">
            <p className="text-[20px]">Zip Code</p>
            <input
              type="text"
              name="zipcode"
              value={zipcode}
              onChange={(e)=>{
                setZipcode(e.target.value)
              }}
              required
              className="w-64 h-8 border border-black rounded-md pl-2"
            />
          </div>

          <div className="flex justify-center">
            <button onClick={handleClick}  className=" bg-[#6AEDFF] rounded-full w-40 h-12 font-bold text-2xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRegistration;

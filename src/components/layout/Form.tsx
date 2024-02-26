"use client"

import React, {useState} from "react";
import Input from "../Input";
import Label from "../Label";
import axios from 'axios';
import Button from "../Button";
import toast from "react-hot-toast";

function Form() {
  
  const [data, setData] = useState(
    {
      name: '',
      email: '',
      linkedin: '',
      description: ''
    }
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData(
      {
        ...data,
        [e.target.name]: e.target.value
        
      }
    )
  }

  const sendEmail = async () => {
    console.log(data)
    const result = await axios.post("/api/send", data)
    console.log(result.data.status)
    if (result.data.status === 200) {
      toast.error("Enviado")
      toast.custom(() => (
        <div>
          <h1>Custom Toast</h1>
          <p>This is a custom toast!</p>
        </div>
      ));
    }
    return result.data;
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  return (
    <form
      action=""
      className="w-[80%] h-[90%] flex flex-col justify-around items-center text-white"
      onSubmit={handleSubmit}
    >
      
        <div className="flex items-center flex-col w-full justify-center gap-2">
          <Label htmlfor="name" >
          Nombre
          </Label>
            <Input id="name" onChange={handleChange} type="text" placeholder="Nombre" name="name" />
            
        </div>
        <div className="flex items-center flex-col w-full justify-center gap-2">
          <Label htmlfor="email">
            Email
          </Label>
                <Input id="email" onChange={handleChange} type="email" placeholder="Correo" name="email" />
        </div>
      <div className="flex items-center flex-col w-full justify-center gap-2">
        <Label htmlfor="linkedin">Linkedin</Label>
        <Input id="linkedin" onChange={handleChange} type="text" placeholder="linkedin" name="linkedin" />
      </div>
      <Label htmlfor="description">Description</Label>
      <textarea
      onChange={handleChange}
        name="description"
        id="description"
        cols={60}
        rows={10}
        className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20] mb-2"
      ></textarea>
      <Button className="text-white text-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20]  w-[110px] h-[50px] text-lg gap-1 rounded-md py-2 px-5 hover:text-black hover:bg-white cursor-pointer transition-all ease-in duration-200" onClick={sendEmail}>Enviar</Button>
    </form>
  );
}

export default Form;

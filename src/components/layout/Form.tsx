"use client"

import React, {useState} from "react";
import Input from "../Input";
import Label from "../Label";
import axios from 'axios';
import Button from "../Button";

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
    const result = await axios.post("http://localhost:3000/api/send", data)
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
      <Label htmlfor="name" >
        <Input onChange={handleChange} type="text" placeholder="Nombre" name="name" />
        Nombre
      </Label>
      <Input onChange={handleChange} type="email" placeholder="Correo" name="email" />

      <Input onChange={handleChange} type="text" placeholder="Linkdin" name="linkedin" />
      <textarea
      onChange={handleChange}
        name="description"
        id=""
        cols={60}
        rows={10}
        className="bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#D0BFFF]/[0.20]"
      ></textarea>
      <Button className="text-black bg-white w-[50px] h-[50px]" onClick={sendEmail}>Enviar</Button>
    </form>
  );
}

export default Form;

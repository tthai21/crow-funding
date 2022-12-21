import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../../components/common/FormGroup";
import FormRow from "../../components/common/FormRow";
import Input from "../../components/input/Input";
import Textarea from "../../components/input/Textarea";
import Label from "../../components/label/Label";
import {Dropdown} from "../../dropdown";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import axios from "axios";
import { useState } from "react";
Quill.register("modules/imageUploader", ImageUploader);


const CampaignAddNew = () => {
  const { handleSubmit, control } = useForm({});
  const [content,setContent] = useState("")
  const handleAddNewCampaign =(values)=>{
    console.log(values);
  }
  
  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
        //   console.log("upload: ~ file", file);
        //   const bodyFormData = new FormData();
        //   console.log("upload: ~ bodyFormData", bodyFormData);
        //   bodyFormData.append("image", file);
        //   const response = await axios({
        //     method: "post",
        //     url: imgbbAPI,
        //     data: bodyFormData,
        //     headers: {
        //       "Content-Type": "multipart/form-data",
        //     },
        //   });
        //   return response.data.data.url;
        },
      },
    }),
    []
  );
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="text-center">
        <h1 className="py-4 px-14 text-text2 bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block mb-10">
          Start a Campaign 🚀{" "}
        </h1>
      </div>
      <form onSubmit={handleSubmit(handleAddNewCampaign)}>
        <FormRow>
          <FormGroup>
            <Label>Campaign Title *</Label>
            <Input
              control={control}
              name="title"
              placeholder="Please enter title"
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Select a Category *</Label>
            {/* Dropdown */}
            <Dropdown>
                <Dropdown.Select placeholder="Select category"></Dropdown.Select>
                <Dropdown.List>
                    <Dropdown.Option>Architecture</Dropdown.Option>
                    <Dropdown.Option>Education</Dropdown.Option>
                    <Dropdown.Option>School fund</Dropdown.Option>
                </Dropdown.List>
            </Dropdown>
          </FormGroup>
        </FormRow>
        <FormGroup>
        <Label>Short Description *</Label>
            <Textarea name="short_description" placeholder="Write short description..." control={control}></Textarea>
        </FormGroup>
        <FormGroup>
        <Label>Story *</Label>     
              <ReactQuill
              placeholder="Write your story..."
                modules={modules}
                theme="snow"
                value={content}
                onChange={setContent}
              />
        </FormGroup>
      </form>
    </div>
  );
};

export default CampaignAddNew;

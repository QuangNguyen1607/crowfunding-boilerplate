import FormGroup from "components/common/FormGroup";
import FormRow from "components/common/FormRow";
import { Dropdown } from "components/dropdown";
import { Input } from "components/input";
import Textarea from "components/input/Textarea";
import { Label } from "components/lable";
import React from "react";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import ReactQuill, { Quill } from "react-quill";
import axios from "axios";
import { useState } from "react";
import { useMemo } from "react";
Quill.register("modules/imageUploader", ImageUploader);

//
const CampainAddNew = () => {
	const { handleSubmit, control } = useForm();
	const [content, setContent] = useState('')
	const handleAddNewCampaign = values => {
		console.log(values);
	};
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
				upload: async file => {
					// const bodyFormData = new FormData();
					// bodyFormData.append("image", file);
					// const response = await axios({
					// 	method: "post",
					// 	url: imgbbAPI,
					// 	data: bodyFormData,
					// 	headers: {
					// 		"Content-Type": "multipart/form-data",
					// 	},
					// });
					// return response.data.data.url;
				},
			},
		}),
		[]
	);
	return (
		<div className="bg-white rounded-xl py-10 px-[66px]">
			<div className="text-center">
				<h1 className="py-4 px-14 text-text2 bg-text4 bg-opacity-5 rounded-xl text-[25px] inline-block mx-auto font-bold">
					Start a Campaign 🚀
				</h1>
				<form handleSubmit={handleAddNewCampaign}>
					<FormRow>
						<FormGroup>
							<Label>Campaign Title</Label>
							<Input
								control={control}
								type="text"
								name="title"
								placeholder="Write a title"></Input>
						</FormGroup>
						<FormGroup>
							<Label>Select a category</Label>
							<Dropdown>
								<Dropdown.Select placeholder="Select the category"></Dropdown.Select>
								<Dropdown.List>
									<Dropdown.Option>1</Dropdown.Option>
									<Dropdown.Option>2</Dropdown.Option>
									<Dropdown.Option>3</Dropdown.Option>
								</Dropdown.List>
							</Dropdown>
						</FormGroup>
					</FormRow>
					<FormGroup>
						<Label>Short Description *</Label>
						<Textarea
							control={control}
							placeholder="Write a short description...."
							name="short_description"></Textarea>
					</FormGroup>
					<FormGroup>
						<Label>Story *</Label>
						<ReactQuill
							modules={modules}
							theme="snow"
							value={content}
							onChange={setContent}
							placeholder='Write your story'
						/>
					</FormGroup>
				</form>
			</div>
		</div>
	);
};

export default CampainAddNew;

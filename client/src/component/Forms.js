import React, { Fragment, useEffect, useState } from "react";
import { Form, Input, Button, Select, DatePicker, Upload, } from "antd";

const { Option } = Select;

const Homepage = () => {
    const [form] = Form.useForm();
    const [image, setImage] = useState("");

    const uploadImage = async (options) => {
        const { file } = options;
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "payal_cloudinaryImage")
        data.append("cloud_name", "dmodq8klr")
        let resp = await fetch(
            "https://api.cloudinary.com/v1_1/dmodq8klr/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        resp = await resp.json();
        console.log(" resp : ", resp);
        setImage(resp.url);
    };
    useEffect(() => {
        if (image) {
            onFinish();
        }
    }, );

    const onFinish = async (values) => {
        console.log(values, "values");
        let result = await fetch("http://localhost:5010/createuserformdata", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: values.firstName,
                lastName: values.lastName,
                address: values.address,
                gender: values.gender,
                age: values.age,
                city: values.city,
                status: values.status,
                email: values.email,
                contact: values.contact,
                profilePhoto: image,
                // date: values.date,
            }),
        });
        result = await result.json();
        console.log("result : ", result);
        if (result.error) {
            console.log("result.error : ", result.error)
        } else {
            form.resetFields();
        }
        return result

    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form
            form={form}
            name="basic"
            layout={"vertical"}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            style={{ width: '500px', margin: '0 auto', padding: '10px' }}

        >
        <Form.Item label="First Name" name="firstName"
        // rules={[{ required: true, message: 'Please input your username!', },]}
        >
            <Input />
        </Form.Item>

            <Form.Item label="Last Name" name="lastName"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Address" name="address"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="gender" label="Gender">
                <Select placeholder="Please Select (optional)" allowClear={true}>
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Age" name="age"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="City" name="city"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item name="status" label="Status">
                <Select placeholder="Please Select (optional)" allowClear={true}>
                    <Option value="single">Single</Option>
                    <Option value="married">Married</Option>
                    <Option value="unmarried">Unmarried</Option>
                </Select>
            </Form.Item>

            <Form.Item label="Email" name="email"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Contact" name="contact"
            // rules={[{ required: true, message: 'Please input your username!', },]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Profile Photo"
                name="profilePhoto"
            >
                <Upload
                    showUploadList={true}
                    listType="picture-card"
                    accept="image/*"
                    customRequest={uploadImage}
                >
                    <div>
                        <div style={{ marginTop: 8 }}>Drop/Upload Files Here</div>
                    </div>
                </Upload>
            </Form.Item>

            <Form.Item shouldUpdate>
                {() => (
                    <Fragment>
                        <Button
                            style={{ width: "25%", padding: "5px" }}
                            type="primary"
                            htmlType="submit"
                        >
                            Create
                        </Button>

                        <Button
                            style={{ width: "25%", padding: "5px", marginLeft: "10px" }}
                            htmlType="button"
                            onClick={() => form.resetFields()}
                        >
                            {" "}
                            Cancel
                        </Button>
                    </Fragment>
                )}
            </Form.Item>
        </Form>
    );
};

export default Homepage;

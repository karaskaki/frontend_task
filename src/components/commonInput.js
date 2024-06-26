import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const InputHandler = ({ onSubmit, editMode = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      isValid = false;
      errors["name"] = "Name is required";
    }

    if (!email.trim()) {
      isValid = false;
      errors["email"] = "Email is required";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        isValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, email });
      setName("");
      setEmail("");
      setErrors({});
    }
  };

  return (
    <div className="header-box">
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          validateStatus={errors.name ? "error" : ""}
          help={errors.name}
        >
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item
          validateStatus={errors.email ? "error" : ""}
          help={errors.email}
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleSubmit}>
            {editMode ? "Edit user" : "Add user"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InputHandler;

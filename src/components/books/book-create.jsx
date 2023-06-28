import { Button, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const { TextArea } = Input;

const BookCreate = ({ addBook }) => {
    const [form] = Form.useForm();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const initialValues = {
        name: '',
        image: '',
        year: '',
    }
    const submitHandler = (values) => {
        values.id = uuidv4();
        addBook(values);
        form.resetFields();
        setIsCreateModalOpen(false);
        }
    const showModal = () => {
        setIsCreateModalOpen(true);
        };
    const handleCancel = () => {
        setIsCreateModalOpen(false);
        };
    return (
        <div>
            <Button type="primary" onClick={showModal}>Add book</Button>
            <Modal title="Create book" open={isCreateModalOpen} onCancel={handleCancel} footer={null}>
        <Form initialValues={initialValues} labelCol={{span: 5}} wrapperCol={{span: 16}} onFinish={submitHandler} form={form}>
            <Form.Item label = "Book's name" name="name" rules={
                [
                {
                    required: true,
                    message: 'Name is required!',
                },
                ]
            }>
                <Input></Input>
            </Form.Item>
            <Form.Item label = "Autor" name="autor" rules={
                [
                {
                    required: true,
                    message: 'Autor is required!',
                },
                ]
            }>
                <Input></Input>
            </Form.Item>
            <Form.Item label = "Genre" name="genre" rules={
                [
                {
                    required: true,
                    message: 'Genre is required!',
                },
                ]
            }>
                <Input></Input>
            </Form.Item>
            <Form.Item label = "Year" name="year" rules={
                [
                {
                    required: true,
                    message: 'Year is required!',
                },
                ]
            }>
                <Input></Input>
            </Form.Item>
            <Form.Item label = "Description" name="description">
                    <TextArea></TextArea>
                </Form.Item>
            <Form.Item wrapperCol={{offset: 5}}>
                <Button htmlType='submit' type='dashed'>Save</Button>
            </Form.Item>
            </Form>
        </Modal>
        </div>
    );
}

export default BookCreate;

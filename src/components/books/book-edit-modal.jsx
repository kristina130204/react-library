import React from 'react';
import { Button, Form, Input, Modal, Rate } from 'antd';
const { TextArea } = Input;

const BookEditModal = ({isModalOpen, setIsModalOpen, updateBook, editedBook}) => {
    const [form] = Form.useForm();
    const handleCancel = () => {
        setIsModalOpen(false);
        };
    const submitHandler = (values) => {
        updateBook(values);
    }
    form.setFieldsValue(editedBook);
    return (
        <div>
            <Modal title="Edit book" open={isModalOpen} onCancel={handleCancel} footer={null}>
            <Form labelCol={{span: 7}} wrapperCol={{span: 16}} onFinish={submitHandler} form={form}>
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
                <Form.Item label = "Rate" name="rating">
                    <Rate allowHalf></Rate>
                </Form.Item>
                <Form.Item label = "Publishing year" name="year" rules={
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

export default BookEditModal;

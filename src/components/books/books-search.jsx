import { Button, Form, Input } from 'antd';
import React from 'react';

const BooksSearch = ( { searchHandler } ) => {
    const [form] = Form.useForm();
    const submitHandler = (values) => {
        searchHandler(values.name.toLowerCase());
        form.resetFields();
    }
    return (
        <div>
            <Form className='grid-search' onFinish={submitHandler} form={form}>
                <Form.Item name='name'>
                    <Input placeholder='Enter name, autor or genre of book'/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType='submit'>Search</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default BooksSearch;

import React, { useState } from 'react';
import { Steps, Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { TextArea } = Input;

const DashboardPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleNext = () => {
      setCurrentStep(currentStep + 1);
    };
  
    const handlePrev = () => {
      setCurrentStep(currentStep - 1);
    };
  
    const handleUpload = (file) => {
      // Handle file upload logic here
      console.log('Uploaded file:', file);
      message.success(`${file.name} uploaded successfully`);
    };
  
    const handleExport = () => {
      // Handle export logic here
      message.success('Entries exported successfully');
    };
  
    const steps = [
      {
        title: 'Step 1',
        content: (
          <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}>
            <br />
            <Form.Item label="Product">
              <Input />
            </Form.Item>
            <Form.Item label="Client">
              <Input />
            </Form.Item>
            <Form.Item label="TPS">
              <Input />
            </Form.Item>
            <Form.Item label="Site">
              <Input />
            </Form.Item>
            <div>
                <h3>Or Upload data from Excel sheet</h3>
            </div>
            <Form.Item label="File">
            <Upload onChange={(info) => handleUpload(info.file)}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              <div style={{ padding: 0,textAlign: 'right' }} >
              <Button  type="link"  shape="circle" ghost={true} onClick={handleExport} icon={<DownloadOutlined />}>
                Export
              </Button>
              </div>

            </Form.Item>
          </Form>
        ),
      },
      // Add more steps here if needed
      {
        title: 'Step 2',
        content: (
          <Form>
            <Form.Item label="Product">
              <Input />
            </Form.Item>
            <Form.Item label="Client">
              <Input />
            </Form.Item>
            <Form.Item label="TPS">
              <Input />
            </Form.Item>
            <Form.Item label="Site">
              <Input />
            </Form.Item>

          </Form>
        ),
      },
    ];
  
    return (
      <div>
        <Steps current={currentStep}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[currentStep].content}</div>
        <div className="steps-action">
          {currentStep < steps.length - 1 && (
            <Button type="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {/* {currentStep === steps.length - 1 && (
            <>
              <Upload onChange={(info) => handleUpload(info.file)}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
              <Button type="primary" onClick={handleExport} icon={<DownloadOutlined />}>
                Export
              </Button>
            </>
          )} */}
          {currentStep > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={handlePrev}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  };
  
  export default DashboardPage;
  
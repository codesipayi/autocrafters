import React, { useState } from 'react';
import { Steps, Form, Input, Button, Upload, message, Dropdown, Table, Tag, Space } from 'antd';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';

const { Step } = Steps;
const { TextArea } = Input;


const items = [
    {
      key: '1',
      label: "SMSC"
    },
    {
      key: '2',
      label:"Firewall"
    },
    {
      key: '3',
      label: 
          "UNO"
    },
    {
        key: '4',
        label: "Ngage"
        
    },
    {
        key: '5',
        label: (
                "SMSHUB"
        ),
    },
    {
        key: '6',
        label: (
                "LEAP"
        ),
    },
  ];

const projStatus = [
    {
      key: '1',
      label: "Pending"
    },
    {
      key: '2',
      label:"On Hold"
    },
    {
      key: '3',
      label: 
          "Completed"
    },
    {
        key: '4',
        label: "Rejected"
        
    }
  ];

  const columns = [
    {
      title: 'Sl. no',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Effort Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Effort in MM',
      dataIndex: 'mm',
      key: 'mm',
    }
  ];
  const data = [
    {
      key: '1',
      id: '1',
      type: 'Application Implementation',
      mm: '1'
    },
    {
        key: '2',
        id: '2',
        type: 'Integration Testing',
        mm: '0.5'
    },
    {
        key: '3',
        id: '3',
        type: 'Documentation',
        mm: '0.3'
    },
    {
        key: '4',
        id: '4',
        type: 'PVG',
        mm: '1'
    },
    {
        key: '5',
        id: '5',
        type: 'Infra Implementation',
        mm: '0.5'
    },
  ];
const DashboardPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleNext = () => {
      if(currentStep == 0){
        fetch("http://172.25.39.227:8001/send_email")
        .then(()=>{
            message.success("Email with attachments has been sent");
        })
        .catch((e) => {
            message.error("Error while sending email");
        })
      }
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
        title: 'Create Ticket',
        content: (
          <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}>
            <br />
            <Form.Item label="Product">
            <Dropdown menu={{ items,}} 
            
            placement="bottom"
            >
                <Button size={"large"}>SMSC</Button>
            </Dropdown>

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
        title: 'Sending Email',
        content: (
            <div style={{ padding: "30 30" }}>
                <br /> 
                <br />
                <h3>Sending Email with SOW and BOQ </h3>
                <br />
            </div>

        ),
      },
      {
        title: 'Review',
        content: (
            <div style={{ padding: "30 30" }} >
                 <br />
                <Form>
                    <Form.Item label="Upload reviewed File">
                    <Upload onChange={(info) => handleUpload(info.file)}>
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                    </Form.Item>
            </Form>
            </div>

        ),
      },
      {
        title: 'Checklist',
        content: (
            <div style={{ padding: "30 30" }}>
                <br />
                <br />
                <h3>Creating checklist and Sending EMail with checklist </h3>
                <br />
            </div>

        ),
      },
      {
        title: 'Effort Sharing',
        content: (
            <div>
                <h3>Update the Efforts </h3>

                <Table columns={columns} dataSource={data} />
            </div>

        ),
      },
      {
        title: 'PO Status',
        content: (
            <div>
                <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}>
            <br />
                <Form.Item label="Project Status">
                <Dropdown 
                menu={{ projStatus}} 
                placement="bottom"
                >
                    <Button size={"large"}>Pending</Button>
                </Dropdown>

                </Form.Item>
            </Form>
            </div>

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
  
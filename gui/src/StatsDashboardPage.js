import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const StatsDashboardPage = () => {
    // Sample data for completed and pending tasks
    const completedTasks = 35;
    const pendingTasks = 15;
  
    return (
      <div style={{ padding: '24px' }}>
         <h1></h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Completed CR"
                value={completedTasks}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Pending CR"
                value={pendingTasks}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>
        <br />
        <br />
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Completed RFP"
                value={14}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Pending RFP"
                value={12}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default StatsDashboardPage;
  
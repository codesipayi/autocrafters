import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';

const StatsDashboardPage = () => {
    // Sample data for completed and pending tasks
    const completedTasks = 35;
    const pendingTasks = 15;
  
    return (
      <div style={{ padding: '24px' }}>
         <h1>Welcome to the Reports Page!</h1>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Completed Tasks"
                value={completedTasks}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Pending Tasks"
                value={pendingTasks}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default StatsDashboardPage;
  
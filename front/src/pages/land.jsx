import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  Typography,
  Drawer,
  Grid,
} from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Land = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screens = Grid.useBreakpoint();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ background: "#ffffff" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 12px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flex: "0 0 auto",
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                background: "#4f46e5",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 6,
                fontWeight: 700,
              }}
            >
              Q
            </div>
            <div>
              <Title level={5} style={{ margin: 0 }}>
                Quizly
              </Title>
              <Text type="secondary" style={{ fontSize: 12 }}>
                Simple quizzes for students & teachers
              </Text>
            </div>
          </div>

          <div style={{ flex: "0 0 auto" }}>
            {screens && screens.md ? (
              <Menu
                mode="horizontal"
                selectable={false}
                style={{ borderBottom: "none" }}
              >
                <Menu.Item key="home">
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="features">
                  <a href="#features">Features</a>
                </Menu.Item>
                <Menu.Item key="teachers">
                  <a href="#for-teachers">Teachers</a>
                </Menu.Item>
                <Menu.Item key="students">
                  <a href="#for-students">Students</a>
                </Menu.Item>
                <Menu.Item key="signin">
                  <Link to="/fullstack_project/sign-up">
                    <Button type="primary">Sign up</Button>
                  </Link>
                </Menu.Item>
              </Menu>
            ) : (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setDrawerOpen(true)}
              />
            )}
          </div>
        </div>
      </Header>

      <Drawer
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu mode="vertical" selectable={false}>
          <Menu.Item key="home" onClick={() => setDrawerOpen(false)}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="features" onClick={() => setDrawerOpen(false)}>
            <a href="#features">Features</a>
          </Menu.Item>
          <Menu.Item key="teachers" onClick={() => setDrawerOpen(false)}>
            <a href="#for-teachers">Teachers</a>
          </Menu.Item>
          <Menu.Item key="students" onClick={() => setDrawerOpen(false)}>
            <a href="#for-students">Students</a>
          </Menu.Item>
          <Menu.Item key="signin" onClick={() => setDrawerOpen(false)}>
            <Link to="/fullstack_project/sign-up">
              <Button type="primary" block>
                Sign up
              </Button>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>

      <Content
        style={{ padding: screens && screens.md ? "48px 24px" : "20px 12px" }}
      >
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <Title level={2}>Make quizzes fast. Teach smarter.</Title>
            <Paragraph type="secondary">
              Create, run and track quizzes with an interface built for
              classrooms. Quick setup, clear results, and easy sharing.
            </Paragraph>

            <Row gutter={12} style={{ marginTop: 24 }}>
              <Col span={screens && screens.md ? undefined : 24}>
                <Link to="/fullstack_project/sign-up">
                  <Button
                    type="primary"
                    size="large"
                    block={!screens || !screens.md}
                  >
                    Get started — Students
                  </Button>
                </Link>
              </Col>
              <Col span={screens && screens.md ? undefined : 24}>
                <Button size="large" block={!screens || !screens.md}>
                  For teachers
                </Button>
              </Col>
            </Row>

            <Row style={{ marginTop: 24 }} gutter={16}>
              <Col span={8}>
                <Text type="secondary">No learning curve</Text>
              </Col>
              <Col span={8}>
                <Text type="secondary">Real-time results</Text>
              </Col>
              <Col span={8}>
                <Text type="secondary">Works on mobile</Text>
              </Col>
            </Row>
          </Col>

          <Col
            xs={24}
            md={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Card
              style={{
                width: screens && screens.md ? 360 : "100%",
                borderRadius: 12,
              }}
            >
              <div
                style={{
                  height: 160,
                  background: "linear-gradient(90deg,#6366f1,#a78bfa)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                Live Quiz Preview
              </div>
              <div style={{ marginTop: 16 }}>
                <Text type="secondary">Next quiz</Text>
                <div style={{ marginTop: 8, fontWeight: 600 }}>
                  Biology — Chapter 5
                </div>
                <div
                  style={{
                    marginTop: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    color: "rgba(0,0,0,0.45)",
                    fontSize: 12,
                  }}
                >
                  <div>10 questions</div>
                  <div>15 mins</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <div id="features" style={{ marginTop: 32 }}>
          <Title level={3}>Designed for ease</Title>
          <Paragraph type="secondary">
            Everything you need for quick quizzes and clear feedback.
          </Paragraph>

          <Row gutter={16} style={{ marginTop: 12 }}>
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Create in seconds</Title>
                <Paragraph type="secondary">
                  Add questions, set timings, and publish — no setup headaches.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Live modes</Title>
                <Paragraph type="secondary">
                  Run quizzes live or let students take them asynchronously.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Title level={5}>Progress tracking</Title>
                <Paragraph type="secondary">
                  Easy-to-read reports help you identify class and student
                  needs.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        <div id="for-teachers" style={{ marginTop: 48 }}>
          <Title level={4}>For teachers</Title>
          <Paragraph type="secondary">
            Quickly create assessments, schedule quizzes, and export results.
          </Paragraph>
        </div>

        <div id="for-students" style={{ marginTop: 24 }}>
          <Title level={4}>For students</Title>
          <Paragraph type="secondary">
            Join quizzes with a code, get instant feedback, and track your
            improvement.
          </Paragraph>
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Quizly — Built for classrooms
      </Footer>
    </Layout>
  );
};

export default Land;

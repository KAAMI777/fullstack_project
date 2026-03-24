import { Form, Input, Button, Card, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import constants from "../constants";

const { Title, Text } = Typography;

export default function SignUp() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await fetch(`${constants.BASE_API_URL}api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Signup failed");
      message.success("Account created — redirecting to sign in...");
      navigate("/signin");
    } catch (err) {
      console.error(err);
      message.error(err.message || "Signup error");
    }
  };

  return (
    <Card style={{ maxWidth: 420, margin: "4rem auto", borderRadius: 8 }}>
      <Title level={4}>Create an account</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Email is required" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Password is required" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="At least 6 characters" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign up
          </Button>
        </Form.Item>
      </Form>

      <Text>Already have an account? </Text>
      <a href="/signin">Sign in</a>
    </Card>
  );
}

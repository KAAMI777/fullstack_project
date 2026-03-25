import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import constants from "../constants";
import axios from "axios";
import {
  Card,
  Input,
  Button,
  Checkbox,
  Typography,
  Row,
  Col,
  message,
} from "antd";

import { MailOutlined, LockOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remember: true,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    message.loading({ content: "Signing in...", key: "signin" });
    try {
      const response = await axios.post(
        `${constants.BASE_API_URL}/user/login`,
        {
          email: data.email,
          password: data.password,
        },
      );

      const respData = response && response.data ? response.data : {};
      const storage = data.remember ? localStorage : sessionStorage;
      if (respData.token) {
        storage.setItem("token", respData.token);
        axios.defaults.headers.common["Authorization"] =
          `Bearer ${respData.token}`;
      }
      message.success({ content: "Signed in", key: "signin", duration: 2 });
      navigate("/dashboard");
    } catch (err) {
      console.error("Sign in error:", err);
      message.error({ content: "Sign in failed", key: "signin" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", padding: 16, background: "#f0f2f5" }}
    >
      <Col xs={22} sm={16} md={10} lg={8}>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <Title level={3} style={{ margin: 0 }}>
              Sign In
            </Title>
            <Text type="secondary">Welcome back — please sign in</Text>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <div style={{ marginBottom: 12 }}>
                  <Input
                    {...field}
                    size="large"
                    placeholder="Email"
                    prefix={<MailOutlined />}
                  />
                  {errors.email && (
                    <Text type="danger">{errors.email.message}</Text>
                  )}
                </div>
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              }}
              render={({ field }) => (
                <div style={{ marginBottom: 12 }}>
                  <Input.Password
                    {...field}
                    size="large"
                    placeholder="Password"
                    prefix={<LockOutlined />}
                  />
                  {errors.password && (
                    <Text type="danger">{errors.password.message}</Text>
                  )}
                </div>
              )}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={!!field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  >
                    Remember me
                  </Checkbox>
                )}
              />
              <a href="#forgot">Forgot password?</a>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              loading={loading}
            >
              Sign In
            </Button>
          </form>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <Text type="secondary">Don't have an account? </Text>
            <Button
              type="link"
              onClick={() => navigate("/fullstack_project/sign-up")}
              style={{ padding: 0 }}
            >
              Sign up
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

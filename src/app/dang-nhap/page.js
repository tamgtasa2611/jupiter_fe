"use client";

import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";
import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";
import LoginForm from "../components/customer/login/LoginPage";

const { Content } = Layout;

export default function LoginPage() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

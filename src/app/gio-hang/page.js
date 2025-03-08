"use client";

import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";
import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";
import CartPage from "../components/customer/cart/CartPage";

const { Content } = Layout;

export default function Cart() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content className="bg-gray-50">
        <CartPage />
      </Content>
      <Footer />
    </Layout>
  );
}

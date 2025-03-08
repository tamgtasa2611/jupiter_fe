"use client";
import "@ant-design/v5-patch-for-react-19";
import { Layout } from "antd";
import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";
import WishlistPage from "../components/customer/wishlist/WishlistPage.jsx";

const { Content } = Layout;

export default function Wishlist() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content className="bg-gray-50">
        <WishlistPage />
      </Content>
      <Footer />
    </Layout>
  );
}

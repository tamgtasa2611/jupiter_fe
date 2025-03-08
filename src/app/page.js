"use client";
import "@ant-design/v5-patch-for-react-19";

import { Layout } from "antd";
import Header from "./components/customer/Header";
import HeroBanner from "./components/customer/HeroBanner";
import Features from "./components/customer/Features";
import ProductShowcase from "./components/customer/ProductShowcase";
import Testimonials from "./components/customer/Testimonials";
import Newsletter from "./components/customer/Newsletter";
import Footer from "./components/customer/Footer";

const { Content } = Layout;

export default function CustomerLandingPage() {
  return (
    <Layout className="landing-page App">
      <Header />
      <Content>
        <HeroBanner />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <Newsletter />
      </Content>
      <Footer />
    </Layout>
  );
}

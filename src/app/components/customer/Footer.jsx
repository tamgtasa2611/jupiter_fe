"use client";

import { Layout, Row, Col, Typography, Space, Divider, Input, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined,
  TikTokOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Footer: AntFooter } = Layout;
const { Title, Paragraph, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className="bg-gray-100 pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <Row gutter={[48, 32]}>
          <Col xs={24} sm={12} md={6}>
            <div className="mb-6">
              <Title level={3} className="mb-2">
                Jupiter
              </Title>
              <Paragraph className="text-gray-600">
                Thương hiệu thời trang hàng đầu với sứ mệnh mang đến phong cách trẻ trung, năng động
                cho giới trẻ Việt Nam.
              </Paragraph>
            </div>
            <Space size="large">
              <Link href="#">
                <FacebookOutlined className="text-xl text-gray-600 hover:text-blue-600" />
              </Link>
              <Link href="#">
                <InstagramOutlined className="text-xl text-gray-600 hover:text-pink-600" />
              </Link>
              <Link href="#">
                <TikTokOutlined className="text-xl text-gray-600 hover:text-blue-400" />
              </Link>
              <Link href="#">
                <YoutubeOutlined className="text-xl text-gray-600 hover:text-red-600" />
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-6">
              Danh mục
            </Title>
            <Space direction="vertical">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Trang chủ
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Sản phẩm
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Bộ sưu tập
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Về chúng tôi
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Liên hệ
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-6">
              Hỗ trợ
            </Title>
            <Space direction="vertical">
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Chính sách đổi trả
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Hướng dẫn mua hàng
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Thanh toán và vận chuyển
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Chương trình thành viên
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-500">
                Câu hỏi thường gặp
              </Link>
            </Space>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <Title level={4} className="mb-6">
              Liên hệ
            </Title>
            <Space direction="vertical">
              <Space>
                <PhoneOutlined className="text-gray-600" />
                <Text className="text-gray-600">0123 456 789</Text>
              </Space>
              <Space>
                <MailOutlined className="text-gray-600" />
                <Text className="text-gray-600">contact@jupiter.com</Text>
              </Space>
              <Space align="start">
                <EnvironmentOutlined className="text-gray-600" />
                <Text className="text-gray-600">Số 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh</Text>
              </Space>
            </Space>
          </Col>
        </Row>

        <Divider className="my-8" />

        <Row justify="space-between" align="middle">
          <Col xs={24} className="text-center mb-4 md:mb-0">
            <Text className="text-gray-500">
              T & T © {new Date().getFullYear()} Jupiter Store
            </Text>
          </Col>
        </Row>
      </div>
    </AntFooter>
  );
};

export default Footer;

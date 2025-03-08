"use client";

import { useEffect, useState } from "react";
import { Layout, Menu, Button, Drawer, Space } from "antd";
import { MenuOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Header: AntHeader } = Layout;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    { key: "home", label: "Trang chủ" },
    { key: "products", label: "Sản phẩm" },
    { key: "collections", label: "Bộ sưu tập" },
    { key: "about", label: "Về chúng tôi" },
    { key: "contact", label: "Liên hệ" },
  ];

  return (
    <AntHeader
      className={`fixed w-full z-10 px-4 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      style={{ padding: "0 20px", height: 64 }}
    >
      <div className="flex justify-between items-center h-full">
        <div className="logo">
          <Link href="/">
            <h1 className="text-2xl font-bold m-0">Jupiter</h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{ border: "none", background: "transparent" }}
          />
        </div>
        <div className="flex items-center">
          <Space>
            <Button type="text" icon={<ShoppingCartOutlined />} />
            <Button type="text" icon={<UserOutlined />} />
            <Button
              type="text"
              icon={<MenuOutlined />}
              className="md:hidden"
              onClick={showDrawer}
            />
          </Space>
        </div>
      </div>
      <Drawer title="Menu" placement="right" onClose={onClose} open={visible}>
        <Menu mode="vertical" items={menuItems} style={{ border: "none" }} />
      </Drawer>
    </AntHeader>
  );
};

export default Header;

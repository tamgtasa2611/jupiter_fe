"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Input,
  InputNumber,
  Typography,
  Card,
  Row,
  Col,
  Divider,
  Empty,
  Image,
  message,
  Spin,
  Tag,
  Tooltip,
  Select,
  Space,
  Radio,
} from "antd";
import {
  DeleteOutlined,
  ShoppingOutlined,
  MinusOutlined,
  PlusOutlined,
  InfoCircleOutlined,
  GiftOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  SwapOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./cartPage.module.css";

const { Title, Text } = Typography;
const { Option } = Select;

// Dữ liệu giỏ hàng giả lập cho cửa hàng quần áo
const fakeCartItems = [
  {
    id: 1,
    name: "Áo Phông Unisex Cotton Basic",
    image: "https://picsum.photos/300/400?random=1",
    price: 250000,
    originalPrice: 350000,
    quantity: 1,
    available: true,
    maxQuantity: 10,
    discount: "29%",
    size: "L",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    color: "Đen",
    availableColors: ["Đen", "Trắng", "Xám", "Xanh Navy"],
    colorImages: {
      Đen: "https://picsum.photos/300/400?random=1",
      Trắng: "https://picsum.photos/300/400?random=5",
      Xám: "https://picsum.photos/300/400?random=6",
      "Xanh Navy": "https://picsum.photos/300/400?random=7",
    },
  },
  {
    id: 2,
    name: "Quần Jeans Nam Slim Fit",
    image: "https://picsum.photos/300/400?random=2",
    price: 590000,
    originalPrice: 750000,
    quantity: 1,
    available: true,
    maxQuantity: 8,
    discount: "21%",
    size: "32",
    availableSizes: ["29", "30", "31", "32", "33", "34"],
    color: "Xanh đậm",
    availableColors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    colorImages: {
      "Xanh đậm": "https://picsum.photos/300/400?random=2",
      "Xanh nhạt": "https://picsum.photos/300/400?random=8",
      Đen: "https://picsum.photos/300/400?random=9",
    },
  },
  {
    id: 3,
    name: "Áo Khoác Denim Unisex Oversize",
    image: "https://picsum.photos/300/400?random=3",
    price: 799000,
    originalPrice: 999000,
    quantity: 1,
    available: true,
    maxQuantity: 5,
    discount: "20%",
    size: "M",
    availableSizes: ["S", "M", "L", "XL"],
    color: "Xanh",
    availableColors: ["Xanh", "Đen", "Trắng"],
    colorImages: {
      Xanh: "https://picsum.photos/300/400?random=3",
      Đen: "https://picsum.photos/300/400?random=10",
      Trắng: "https://picsum.photos/300/400?random=11",
    },
    freeGift: "Túi vải canvas",
  },
  {
    id: 4,
    name: "Váy Liền Nữ Cổ V",
    image: "https://picsum.photos/300/400?random=4",
    price: 690000,
    originalPrice: 690000,
    quantity: 1,
    available: false,
    maxQuantity: 0,
    discount: null,
    size: "S",
    availableSizes: ["XS", "S", "M"],
    color: "Hồng",
    availableColors: ["Hồng", "Trắng", "Đen"],
    colorImages: {
      Hồng: "https://picsum.photos/300/400?random=4",
      Trắng: "https://picsum.photos/300/400?random=12",
      Đen: "https://picsum.photos/300/400?random=13",
    },
  },
];

// Mã giảm giá giả lập
const fakeCoupons = [
  { code: "WELCOME10", discount: 10, type: "percent", maxDiscount: 200000 },
  { code: "FREESHIP", discount: 30000, type: "fixed", maxDiscount: 30000 },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  useEffect(() => {
    // Giả lập việc fetch dữ liệu từ API
    setTimeout(() => {
      setCartItems(fakeCartItems);
      setLoading(false);
    }, 100);
  }, []);

  // Tính tổng tiền
  const calculateSubtotal = () => {
    return cartItems
      .filter((item) => item.available)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Tính tổng tiền ban đầu (trước giảm giá)
  const calculateOriginalTotal = () => {
    return cartItems
      .filter((item) => item.available)
      .reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  };

  // Tính tổng tiền giảm giá trên sản phẩm
  const calculateProductDiscount = () => {
    return calculateOriginalTotal() - calculateSubtotal();
  };

  // Tính giảm giá từ mã giảm giá
  const calculateCouponDiscount = () => {
    if (!appliedCoupon) return 0;

    const subtotal = calculateSubtotal();
    if (appliedCoupon.type === "percent") {
      const discount = subtotal * (appliedCoupon.discount / 100);
      return Math.min(discount, appliedCoupon.maxDiscount);
    } else {
      return appliedCoupon.discount;
    }
  };

  // Tính tổng tiền cuối cùng
  const calculateFinalTotal = () => {
    const subtotal = calculateSubtotal();
    const couponDiscount = calculateCouponDiscount();
    return subtotal - couponDiscount;
  };

  // Cập nhật số lượng sản phẩm
  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  // Cập nhật size của sản phẩm
  const updateSize = (id, size) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, size } : item)));
    message.success("Đã cập nhật kích thước");
  };

  // Cập nhật màu sắc của sản phẩm
  const updateColor = (id, color) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.colorImages && item.colorImages[color]) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, color, image: item.colorImages[color] } : item
        )
      );
      message.success("Đã cập nhật màu sắc");
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, color } : item)));
      message.success("Đã cập nhật màu sắc");
    }
  };

  // Xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    message.success("Đã xóa sản phẩm khỏi giỏ hàng");
  };

  // Áp dụng mã giảm giá
  const applyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError("Vui lòng nhập mã giảm giá");
      return;
    }

    const foundCoupon = fakeCoupons.find(
      (coupon) => coupon.code.toLowerCase() === couponCode.toLowerCase()
    );

    if (foundCoupon) {
      setAppliedCoupon(foundCoupon);
      setCouponError("");
      message.success("Áp dụng mã giảm giá thành công!");
    } else {
      setCouponError("Mã giảm giá không hợp lệ hoặc đã hết hạn");
      setAppliedCoupon(null);
    }
  };

  // Xóa mã giảm giá
  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    message.info("Đã xóa mã giảm giá");
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  // Render danh sách sản phẩm trong giỏ hàng
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <Card
        key={item.id}
        className="mb-4 overflow-hidden cart-item-card hover:shadow-md transition-shadow duration-300"
      >
        <div className="flex flex-col md:flex-row gap-4">
          {/* Ảnh sản phẩm */}
          <div className="w-full md:w-1/4 flex-shrink-0">
            <Link href={`/product/${item.id}`}>
              <div className="aspect-[3/4] relative overflow-hidden rounded-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                  preview={false}
                  width="100%"
                  height="auto"
                />
                {item.discount && (
                  <div className="absolute top-2 left-2">
                    <Tag color="error" className="font-medium text-sm">
                      -{item.discount}
                    </Tag>
                  </div>
                )}
                {!item.available && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Tag color="default" className="font-medium text-sm px-2 py-1">
                      Hết hàng
                    </Tag>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Chi tiết sản phẩm */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between h-full">
              {/* Thông tin sản phẩm */}
              <div className="flex-1">
                <Link
                  href={`/product/${item.id}`}
                  className="hover:text-primary-color transition-colors"
                >
                  <Title level={5} className="mb-1 line-clamp-2">
                    {item.name}
                  </Title>
                </Link>

                {/* Các tùy chọn sản phẩm (Size và màu) */}
                <div className="mt-3 space-y-3">
                  {/* Chọn Size */}
                  <div className="flex flex-wrap items-center">
                    <Text className="text-gray-500 mr-2 min-w-[80px]">Kích thước:</Text>
                    <Select
                      value={item.size}
                      onChange={(value) => updateSize(item.id, value)}
                      style={{ width: 90 }}
                      disabled={!item.available}
                      size="middle"
                    >
                      {item.availableSizes.map((size) => (
                        <Option key={size} value={size}>
                          {size}
                        </Option>
                      ))}
                    </Select>
                  </div>

                  {/* Chọn Màu */}
                  <div className="flex flex-wrap items-center">
                    <Text className="text-gray-500 mr-2 min-w-[80px]">Màu sắc:</Text>
                    <Radio.Group
                      value={item.color}
                      onChange={(e) => updateColor(item.id, e.target.value)}
                      disabled={!item.available}
                      className="flex flex-wrap"
                    >
                      {item.availableColors.map((color) => (
                        <Radio.Button
                          key={color}
                          value={color}
                          className="mr-2 mb-2 flex items-center"
                        >
                          <div
                            className="w-3 h-3 rounded-full mr-1"
                            style={{
                              backgroundColor:
                                color === "Đen"
                                  ? "#000"
                                  : color === "Trắng"
                                  ? "#fff"
                                  : color === "Xám"
                                  ? "#888"
                                  : color === "Xanh Navy"
                                  ? "#000080"
                                  : color === "Xanh đậm"
                                  ? "#0047AB"
                                  : color === "Xanh nhạt"
                                  ? "#6495ED"
                                  : color === "Hồng"
                                  ? "#FFC0CB"
                                  : color === "Xanh"
                                  ? "#1E90FF"
                                  : undefined,
                              border: color === "Trắng" ? "1px solid #ddd" : "none",
                            }}
                          ></div>
                          {color}
                        </Radio.Button>
                      ))}
                    </Radio.Group>
                  </div>
                </div>

                {/* Trạng thái sản phẩm */}
                <div className="my-3 flex items-center">
                  {item.available ? (
                    <Text type="success" className="flex items-center text-sm">
                      <CheckCircleFilled className="mr-1" /> Còn hàng
                    </Text>
                  ) : (
                    <Text type="danger" className="flex items-center text-sm">
                      <CloseCircleFilled className="mr-1" /> Hết hàng
                    </Text>
                  )}
                </div>

                {/* Quà tặng kèm nếu có */}
                {item.freeGift && (
                  <div className="mb-3">
                    <Tag icon={<GiftOutlined />} color="processing" className="py-0.5">
                      Tặng: {item.freeGift}
                    </Tag>
                  </div>
                )}

                {/* Giá */}
                <div className="mb-3">
                  <div className="flex items-center">
                    <Text strong className="text-lg mr-2">
                      {formatCurrency(item.price)}
                    </Text>

                    {item.originalPrice > item.price && (
                      <Text delete type="secondary" className="text-sm">
                        {formatCurrency(item.originalPrice)}
                      </Text>
                    )}
                  </div>
                </div>
              </div>

              {/* Số lượng và thành tiền */}
              <div className="flex flex-col md:items-end justify-between mt-3 md:mt-0">
                {/* Số lượng */}
                <div className="flex items-center">
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    disabled={!item.available || item.quantity <= 1}
                    shape="circle"
                    size="middle"
                    className="flex items-center justify-center"
                  />
                  <InputNumber
                    min={1}
                    max={item.maxQuantity}
                    value={item.quantity}
                    onChange={(value) => updateQuantity(item.id, value)}
                    disabled={!item.available}
                    className="mx-2 w-16 text-center"
                  />
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() =>
                      updateQuantity(item.id, Math.min(item.maxQuantity, item.quantity + 1))
                    }
                    disabled={!item.available || item.quantity >= item.maxQuantity}
                    shape="circle"
                    size="middle"
                    className="flex items-center justify-center"
                  />
                </div>

                {/* Thành tiền */}
                <div className="mt-4 md:text-right">
                  <Text className="text-sm text-gray-500 block mb-1">Thành tiền:</Text>
                  <Text strong className="text-lg" type={item.available ? "danger" : "secondary"}>
                    {formatCurrency(item.price * item.quantity)}
                  </Text>
                </div>

                {/* Nút xóa */}
                <Button
                  danger
                  type="text"
                  icon={<DeleteOutlined />}
                  onClick={() => removeItem(item.id)}
                  className="mt-3 self-start md:self-end hover:bg-red-50"
                >
                  Xóa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ));
  };

  if (loading) {
    return (
      <div className="container mx-auto py-16 px-4 flex justify-center items-center min-h-[300px]">
        <Spin
          size="large"
          // tip="Đang tải giỏ hàng..."
        />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className="max-w-2xl mx-auto shadow-sm rounded-lg overflow-hidden">
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <div className="text-center">
                <Title level={4} className="mb-1">
                  Giỏ hàng của bạn đang trống
                </Title>
                <Text className="block text-gray-500 mb-6">
                  Hãy thêm sản phẩm vào giỏ hàng để mua sắm
                </Text>
              </div>
            }
          >
            <Button
              type="primary"
              size="large"
              icon={<ShoppingOutlined />}
              className="min-w-[180px]"
            >
              <Link href="/products" className="text-white">
                Tiếp tục mua sắm
              </Link>
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Title level={2} className="mb-6 flex items-center">
        <ShoppingOutlined className="mr-3" /> Giỏ hàng của bạn
        <Text className="ml-3 font-normal text-lg">({cartItems.length} sản phẩm)</Text>
      </Title>

      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <div className="mb-4">{renderCartItems()}</div>

          <div className="flex flex-wrap justify-between items-center mt-6">
            <Link href="/products">
              <Button size="large" className="mb-3 md:mb-0">
                <ShoppingOutlined /> Tiếp tục mua sắm
              </Button>
            </Link>
            <Button
              danger
              size="large"
              onClick={() => {
                if (confirm("Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi giỏ hàng?")) {
                  setCartItems([]);
                  message.success("Đã xóa tất cả sản phẩm khỏi giỏ hàng");
                }
              }}
              disabled={cartItems.length === 0}
              className="mb-3 md:mb-0"
            >
              <DeleteOutlined /> Xóa giỏ hàng
            </Button>
          </div>
        </Col>

        <Col xs={24} lg={8}>
          <div className="sticky top-24">
            {/* Mã giảm giá */}
            <Card
              title="Mã giảm giá"
              className="mb-4 shadow-sm rounded-lg"
              styles={{
                header: { borderBottom: "1px solid #f0f0f0" },
              }}
            >
              <div className="flex items-center">
                <Input
                  placeholder="Nhập mã giảm giá"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 mr-2"
                  status={couponError ? "error" : ""}
                />
                <Button type="primary" onClick={applyCoupon} disabled={!!appliedCoupon}>
                  Áp dụng
                </Button>
              </div>

              {couponError && <div className="text-red-500 text-sm mt-2">{couponError}</div>}

              {appliedCoupon && (
                <div className="mt-3 bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                  <div>
                    <div className="font-medium text-blue-600">
                      {appliedCoupon.code}
                      {appliedCoupon.type === "percent"
                        ? ` - Giảm ${appliedCoupon.discount}%`
                        : ` - Giảm ${formatCurrency(appliedCoupon.discount)}`}
                    </div>
                    <div className="text-sm text-blue-500">
                      {appliedCoupon.type === "percent" &&
                        `Tối đa ${formatCurrency(appliedCoupon.maxDiscount)}`}
                    </div>
                  </div>
                  <Button
                    type="text"
                    danger
                    onClick={removeCoupon}
                    className="flex items-center justify-center"
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              )}

              {/* Gợi ý mã giảm giá */}
              <div className="mt-3">
                <Text type="secondary" className="text-xs">
                  Mã khả dụng: <span className="font-bold">WELCOME10</span>,{" "}
                  <span className="font-bold">FREESHIP</span>
                </Text>
              </div>
            </Card>

            {/* Tổng đơn hàng */}
            <Card
              title="Tổng đơn hàng"
              className="shadow-sm rounded-lg"
              styles={{
                header: { borderBottom: "1px solid #f0f0f0" },
              }}
            >
              <div className="flex justify-between mb-3">
                <Text>Tạm tính:</Text>
                <Text>{formatCurrency(calculateOriginalTotal())}</Text>
              </div>

              {calculateProductDiscount() > 0 && (
                <div className="flex justify-between mb-3 text-green-600">
                  <Text className="flex items-center" type="success">
                    Giảm giá sản phẩm:
                    <Tooltip title="Tiết kiệm từ giảm giá sản phẩm">
                      <InfoCircleOutlined className="ml-1 text-gray-400" />
                    </Tooltip>
                  </Text>
                  <Text type="success">- {formatCurrency(calculateProductDiscount())}</Text>
                </div>
              )}

              {appliedCoupon && (
                <div className="flex justify-between mb-3 text-blue-600">
                  <Text type="primary">
                    Mã giảm giá <span className="font-medium">{appliedCoupon.code}</span>:
                  </Text>
                  <Text type="primary">- {formatCurrency(calculateCouponDiscount())}</Text>
                </div>
              )}

              <div className="flex justify-between mb-3">
                <Text>Phí vận chuyển:</Text>
                <Text>Miễn phí</Text>
              </div>

              <Divider className="my-3" />

              <div className="flex justify-between mb-6">
                <Text strong className="text-lg">
                  Thành tiền:
                </Text>
                <div className="text-right">
                  <Text strong className="text-2xl text-red-500">
                    {formatCurrency(calculateFinalTotal())}
                  </Text>
                  <div className="text-gray-500 text-xs mt-1">(Đã bao gồm VAT)</div>
                </div>
              </div>

              <Button
                type="primary"
                size="large"
                block
                className="h-12 text-base"
                disabled={cartItems.filter((item) => item.available).length === 0}
              >
                Tiến hành đặt hàng
              </Button>

              {/* Thông tin thanh toán */}
              <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                <div className="text-sm text-gray-600 flex items-start mb-2">
                  <CheckCircleFilled className="text-green-500 mr-2 mt-1" />
                  <div>Miễn phí vận chuyển cho đơn hàng từ 500.000₫</div>
                </div>
                <div className="text-sm text-gray-600 flex items-start mb-2">
                  <CheckCircleFilled className="text-green-500 mr-2 mt-1" />
                  <div>Đổi trả miễn phí trong vòng 30 ngày</div>
                </div>
                <div className="text-sm text-gray-600 flex items-start">
                  <CheckCircleFilled className="text-green-500 mr-2 mt-1" />
                  <div>Giao hàng nhanh 1-3 ngày (nội thành)</div>
                </div>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;

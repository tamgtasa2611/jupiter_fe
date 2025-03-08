"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Card,
  Row,
  Col,
  Empty,
  Image,
  message,
  Spin,
  Tag,
  Tooltip,
  Divider,
  Pagination,
  Badge,
  Select,
} from "antd";
import {
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
  ShoppingCartOutlined,
  ShareAltOutlined,
  EyeOutlined,
  SwapOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./wishlistPage.module.css";

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;

// Dữ liệu wishlist giả lập cho shop quần áo
const fakeWishlistItems = [
  {
    id: 1,
    name: "Áo Phông Unisex Cotton Basic",
    image: "https://picsum.photos/400/500?random=1",
    price: 250000,
    originalPrice: 350000,
    discount: "29%",
    available: true,
    inStock: true,
    colors: ["Đen", "Trắng", "Xám", "Xanh Navy"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    category: "Áo phông",
    isNew: true,
    rating: 4.8,
    numReviews: 124,
    dateAdded: "2024-02-15T08:30:00",
  },
  {
    id: 2,
    name: "Quần Jeans Nam Slim Fit",
    image: "https://picsum.photos/400/500?random=2",
    price: 590000,
    originalPrice: 750000,
    discount: "21%",
    available: true,
    inStock: true,
    colors: ["Xanh đậm", "Xanh nhạt", "Đen"],
    sizes: ["29", "30", "31", "32", "33", "34"],
    category: "Quần jeans",
    isNew: false,
    rating: 4.5,
    numReviews: 89,
    dateAdded: "2024-02-10T14:45:00",
  },
  {
    id: 3,
    name: "Áo Khoác Denim Unisex Oversize",
    image: "https://picsum.photos/400/500?random=3",
    price: 799000,
    originalPrice: 999000,
    discount: "20%",
    available: true,
    inStock: false,
    colors: ["Xanh", "Đen", "Trắng"],
    sizes: ["S", "M", "L", "XL"],
    category: "Áo khoác",
    isNew: false,
    rating: 4.7,
    numReviews: 56,
    dateAdded: "2024-01-25T10:15:00",
  },
  {
    id: 4,
    name: "Váy Liền Nữ Cổ V",
    image: "https://picsum.photos/400/500?random=4",
    price: 690000,
    originalPrice: 690000,
    discount: null,
    available: true,
    inStock: true,
    colors: ["Hồng", "Trắng", "Đen"],
    sizes: ["XS", "S", "M", "L"],
    category: "Váy đầm",
    isNew: true,
    rating: 4.6,
    numReviews: 42,
    dateAdded: "2024-01-20T09:00:00",
  },
  {
    id: 5,
    name: "Áo Sơ Mi Nam Oxford Dài Tay",
    image: "https://picsum.photos/400/500?random=5",
    price: 450000,
    originalPrice: 550000,
    discount: "18%",
    available: true,
    inStock: true,
    colors: ["Trắng", "Xanh nhạt", "Xám"],
    sizes: ["M", "L", "XL", "XXL"],
    category: "Áo sơ mi",
    isNew: false,
    rating: 4.9,
    numReviews: 78,
    dateAdded: "2024-02-05T16:20:00",
  },
  {
    id: 6,
    name: "Chân Váy Midi Xếp Ly",
    image: "https://picsum.photos/400/500?random=6",
    price: 420000,
    originalPrice: 520000,
    discount: "19%",
    available: true,
    inStock: true,
    colors: ["Đen", "Be", "Nâu"],
    sizes: ["S", "M", "L"],
    category: "Chân váy",
    isNew: false,
    rating: 4.7,
    numReviews: 35,
    dateAdded: "2024-02-01T11:30:00",
  },
];

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("dateAdded");
  const [filterInStock, setFilterInStock] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    // Giả lập việc fetch dữ liệu từ API
    setTimeout(() => {
      setWishlistItems(fakeWishlistItems);
      setLoading(false);
    }, 100);
  }, []);

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    message.success("Đã xóa sản phẩm khỏi danh sách yêu thích");
  };

  const clearAllWishlist = () => {
    setWishlistItems([]);
    message.success("Đã xóa tất cả sản phẩm khỏi danh sách yêu thích");
  };

  const addToCart = (id) => {
    // Giả lập thêm vào giỏ hàng
    message.success("Đã thêm sản phẩm vào giỏ hàng");
  };

  const addAllToCart = () => {
    // Giả lập thêm tất cả vào giỏ hàng
    message.success("Đã thêm tất cả sản phẩm vào giỏ hàng");
  };

  const shareSocial = (id) => {
    // Giả lập chia sẻ MXH
    message.info("Đã sao chép đường dẫn sản phẩm vào clipboard");
  };

  // Format currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const handleSortChange = (value) => {
    setSortBy(value);

    // Sort items based on selected option
    let sortedItems = [...wishlistItems];
    switch (value) {
      case "priceAsc":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "dateAdded":
      default:
        sortedItems.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
    }

    setWishlistItems(sortedItems);
  };

  const handleFilterChange = (checked) => {
    setFilterInStock(checked);
  };

  const filteredItems = filterInStock
    ? wishlistItems.filter((item) => item.inStock)
    : wishlistItems;

  const paginatedItems = filteredItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) {
    return (
      <div className={`container mx-auto ${styles.loadingContainer}`}>
        <Spin size="large" tip="Đang tải danh sách yêu thích..." />
      </div>
    );
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4">
        <Card className={styles.emptyStateContainer}>
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description={
              <div className={styles.emptyStateContent}>
                <Title level={4} className={styles.emptyStateTitle}>
                  Danh sách yêu thích của bạn đang trống
                </Title>
                <Text className={styles.emptyStateDescription}>
                  Hãy thêm những sản phẩm bạn yêu thích để mua sau
                </Text>
              </div>
            }
          >
            <Button
              type="primary"
              size="large"
              icon={<ShoppingOutlined />}
              className={styles.emptyStateButton}
            >
              <Link href="/collections/all" className="text-white">
                Khám phá sản phẩm
              </Link>
            </Button>
          </Empty>
        </Card>
      </div>
    );
  }

  return (
    <div className={`container mx-auto py-8 px-4 ${styles.container}`}>
      <div className={styles.header}>
        <div className={`mb-4 md:mb-0 ${styles.headerContent}`}>
          <Title level={2} className={styles.headerTitle}>
            <HeartFilled className={styles.headerIcon} /> Sản phẩm yêu thích
          </Title>
          <Text className="text-gray-500">
            {wishlistItems.length} sản phẩm trong danh sách yêu thích của bạn
          </Text>
        </div>

        <div className={styles.sortFilterContainer}>
          <div className={styles.sortContainer}>
            <Text className={styles.sortLabel}>Sắp xếp:</Text>
            <Select
              defaultValue="dateAdded"
              style={{ width: 180 }}
              onChange={handleSortChange}
              value={sortBy}
            >
              <Option value="dateAdded">Mới thêm nhất</Option>
              <Option value="priceAsc">Giá: Thấp đến cao</Option>
              <Option value="priceDesc">Giá: Cao đến thấp</Option>
              <Option value="nameAsc">Tên: A-Z</Option>
              <Option value="nameDesc">Tên: Z-A</Option>
            </Select>
          </div>

          <div className="ml-0 md:ml-4">
            <Button
              type="default"
              icon={<FilterOutlined />}
              onClick={() => setFilterInStock(!filterInStock)}
              className={filterInStock ? "border-blue-500 text-blue-500" : ""}
            >
              {filterInStock ? "Hiện tất cả" : "Chỉ còn hàng"}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.actionContainer}>
        <div>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => {
              if (confirm("Bạn có chắc chắn muốn xóa tất cả sản phẩm khỏi danh sách yêu thích?")) {
                clearAllWishlist();
              }
            }}
          >
            Xóa tất cả
          </Button>
        </div>

        <div>
          <Button type="primary" icon={<ShoppingCartOutlined />} onClick={addAllToCart}>
            Thêm tất cả vào giỏ
          </Button>
        </div>
      </div>

      <Row gutter={[16, 16]} className="mb-8">
        {paginatedItems.map((item) => (
          <Col xs={24} sm={12} lg={8} key={item.id}>
            <Card
              hoverable
              className={styles.wishlistCard}
              bodyStyle={{ padding: 0 }}
              actions={[
                <Tooltip title="Thêm vào giỏ hàng" key="add-cart">
                  <Button
                    type="text"
                    icon={<ShoppingCartOutlined />}
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                  />
                </Tooltip>,
                <Tooltip title="Chia sẻ" key="share">
                  <Button
                    type="text"
                    icon={<ShareAltOutlined />}
                    onClick={() => shareSocial(item.id)}
                  />
                </Tooltip>,
                <Tooltip title="Xóa" key="delete">
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => removeFromWishlist(item.id)}
                  />
                </Tooltip>,
              ]}
            >
              <div className="relative">
                <Link href={`/product/${item.id}`}>
                  <div className={styles.productImageContainer}>
                    <Image
                      alt={item.name}
                      src={item.image}
                      className={styles.productImage}
                      preview={false}
                    />

                    <div className={styles.productImageOverlay}>
                      <Button
                        icon={<EyeOutlined />}
                        className={styles.quickViewButton}
                        shape="circle"
                        size="large"
                      />
                    </div>
                  </div>
                </Link>

                {/* Badges */}
                <div className={styles.badgeContainer}>
                  {item.discount && (
                    <Tag color="red" className={styles.discountTag}>
                      -{item.discount}
                    </Tag>
                  )}
                  {item.isNew && (
                    <Tag color="green" className={styles.newTag}>
                      Mới
                    </Tag>
                  )}
                </div>

                {!item.inStock && (
                  <div className={styles.outOfStockOverlay}>
                    <Tag color="default" className="text-base font-medium px-4 py-1">
                      Hết hàng
                    </Tag>
                  </div>
                )}
              </div>

              <div className={styles.productCardContent}>
                <div className={styles.categoryText}>
                  <Text type="secondary" className="text-sm">
                    {item.category}
                  </Text>
                </div>

                <Link href={`/product/${item.id}`} className={styles.productNameLink}>
                  <Title level={5} className={styles.productName} title={item.name}>
                    {item.name}
                  </Title>
                </Link>

                <div className={styles.ratingContainer}>
                  <div className={styles.ratingStars}>
                    {"★".repeat(Math.floor(item.rating))}
                    {"☆".repeat(5 - Math.floor(item.rating))}
                    <span className={styles.reviewCount}>({item.numReviews})</span>
                  </div>
                </div>

                <div className={styles.priceContainer}>
                  <div className={styles.priceWrapper}>
                    <Text strong className={styles.price}>
                      {formatCurrency(item.price)}
                    </Text>

                    {item.originalPrice > item.price && (
                      <Text delete className={styles.originalPrice}>
                        {formatCurrency(item.originalPrice)}
                      </Text>
                    )}
                  </div>

                  <div className={styles.variantsInfo}>
                    {item.colors.length} màu × {item.sizes.length} size
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {filteredItems.length > pageSize && (
        <div className={styles.paginationContainer}>
          <Pagination
            current={currentPage}
            total={filteredItems.length}
            pageSize={pageSize}
            onChange={setCurrentPage}
            showSizeChanger={false}
          />
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

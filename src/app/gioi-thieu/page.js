"use client";

import { Layout, Typography, Row, Col, Divider, Card, Image, Timeline } from "antd";
import { RocketOutlined, HeartOutlined, TeamOutlined, BulbOutlined } from "@ant-design/icons";
import Header from "../components/customer/Header";
import Footer from "../components/customer/Footer";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function AboutPage() {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content className="bg-white">
        {/* Hero Banner */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000')",
            }}
          ></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center px-6 text-white">
              <Title
                level={1}
                className="text-5xl md:text-6xl mb-4 text-white font-extrabold"
                style={{ marginTop: 0, color: "white" }}
              >
                Câu chuyện Jupiter
              </Title>
              <Paragraph
                className="text-xl text-white max-w-2xl mx-auto"
                style={{ color: "white" }}
              >
                Hành trình của chúng tôi từ một ý tưởng nhỏ đến thương hiệu thời trang local brand
                hàng đầu Việt Nam
              </Paragraph>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Title level={2} className="text-3xl font-bold mb-6">
                Chúng tôi là Jupiter
              </Title>
              <Paragraph className="text-lg text-gray-700 mb-4">
                Jupiter được thành lập vào năm 2019 bởi nhóm bạn trẻ đam mê thời trang và mong muốn
                tạo ra một thương hiệu thời trang mang đậm bản sắc Việt Nam nhưng vẫn theo kịp xu
                hướng thời trang thế giới.
              </Paragraph>
              <Paragraph className="text-lg text-gray-700 mb-4">
                Xuất phát từ niềm đam mê với thời trang đường phố, chúng tôi mong muốn mang đến
                những sản phẩm chất lượng, thiết kế độc đáo và giá cả hợp lý cho người tiêu dùng
                Việt Nam.
              </Paragraph>
              <Paragraph className="text-lg text-gray-700">
                Tên gọi {"Jupiter"} - sao Mộc, hành tinh lớn nhất trong hệ mặt trời, thể hiện khát
                vọng vươn xa, chinh phục những đỉnh cao mới trong ngành thời trang Việt Nam và quốc
                tế.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Image
                src="https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?q=80&w=800"
                alt="Jupiter Team"
                className="rounded-lg shadow-lg"
              />
            </Col>
          </Row>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Title level={2} className="text-3xl font-bold mb-12 text-center">
              Giá trị cốt lõi
            </Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} sm={12} md={6}>
                <Card
                  bordered={false}
                  className="text-center h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <RocketOutlined className="text-4xl text-blue-500 mb-4" />
                  <Title level={4}>Sáng tạo</Title>
                  <Paragraph>
                    Không ngừng đổi mới, sáng tạo trong thiết kế và phát triển sản phẩm
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card
                  bordered={false}
                  className="text-center h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <HeartOutlined className="text-4xl text-red-500 mb-4" />
                  <Title level={4}>Chất lượng</Title>
                  <Paragraph>Cam kết chất lượng vượt trội trong từng đường kim mũi chỉ</Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card
                  bordered={false}
                  className="text-center h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <TeamOutlined className="text-4xl text-green-500 mb-4" />
                  <Title level={4}>Cộng đồng</Title>
                  <Paragraph>Xây dựng cộng đồng thời trang yêu thích văn hóa Việt Nam</Paragraph>
                </Card>
              </Col>
              <Col xs={24} sm={12} md={6}>
                <Card
                  bordered={false}
                  className="text-center h-full shadow-sm hover:shadow-md transition-shadow"
                >
                  <BulbOutlined className="text-4xl text-yellow-500 mb-4" />
                  <Title level={4}>Bền vững</Title>
                  <Paragraph>Hướng đến thời trang bền vững và thân thiện với môi trường</Paragraph>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        {/* Our Journey */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Title level={2} className="text-3xl font-bold mb-12 text-center">
            Hành trình phát triển
          </Title>
          <Timeline
            mode="alternate"
            items={[
              {
                color: "blue",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2019: Khởi đầu
                    </Title>
                    <Paragraph>
                      Jupiter ra đời với cửa hàng đầu tiên tại Quận 1, TP.HCM và dòng sản phẩm áo
                      phông signature đầu tiên.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: "green",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2020: Vượt qua thách thức
                    </Title>
                    <Paragraph>
                      Phát triển kênh bán hàng online trong đại dịch COVID-19 và ra mắt BST
                      {"Resilience"} được đánh giá cao.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: "red",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2021: Mở rộng thị trường
                    </Title>
                    <Paragraph>
                      Mở thêm 2 cửa hàng mới tại Hà Nội và Đà Nẵng, đồng thời ra mắt dòng sản phẩm
                      outerwear.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: "orange",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2022: Cột mốc quan trọng
                    </Title>
                    <Paragraph>
                      Đạt 100,000 khách hàng thân thiết và ra mắt BST collab với họa sĩ Việt Nam nổi
                      tiếng.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: "purple",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2023: Định vị thương hiệu
                    </Title>
                    <Paragraph>
                      Xuất hiện trên các sàn diễn thời trang lớn và được các tạp chí thời trang hàng
                      đầu đánh giá cao.
                    </Paragraph>
                  </div>
                ),
              },
              {
                color: "blue",
                children: (
                  <div className="mb-8">
                    <Title level={4} className="mb-2">
                      2024: Phát triển bền vững
                    </Title>
                    <Paragraph>
                      Ra mắt dòng sản phẩm thân thiện môi trường và mở rộng thị trường quốc tế.
                    </Paragraph>
                  </div>
                ),
              },
            ]}
          />
        </div>

        {/* Design Philosophy */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} md={12} className="order-2 md:order-1">
                <Title level={2} className="text-3xl font-bold mb-6">
                  Triết lý thiết kế
                </Title>
                <Paragraph className="text-lg text-gray-700 mb-4">
                  Tại Jupiter, chúng tôi tin rằng thời trang không chỉ là những gì bạn mặc, mà còn
                  là cách bạn thể hiện bản thân.
                </Paragraph>
                <Paragraph className="text-lg text-gray-700 mb-4">
                  Mỗi thiết kế của chúng tôi đều là sự kết hợp giữa văn hóa đường phố hiện đại và
                  những giá trị truyền thống Việt Nam, tạo nên phong cách riêng biệt không thể nhầm
                  lẫn.
                </Paragraph>
                <Paragraph className="text-lg text-gray-700">
                  Chúng tôi chú trọng vào chất liệu, đường may và những chi tiết nhỏ nhất để mang
                  đến những sản phẩm không chỉ đẹp mà còn bền, thoải mái và phản ánh đúng tinh thần
                  của người mặc.
                </Paragraph>
              </Col>
              <Col xs={24} md={12} className="order-1 md:order-2">
                <Image
                  src="https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?q=80&w=800"
                  alt="Jupiter Design Process"
                  className="rounded-lg shadow-lg"
                />
              </Col>
            </Row>
          </div>
        </div>

        {/* Team */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <Title level={2} className="text-3xl font-bold mb-12 text-center">
            Đội ngũ của chúng tôi
          </Title>
          <Row gutter={[32, 48]}>
            <Col xs={24} sm={12}>
              <div className="text-center">
                <Image
                  src="tam.jpg"
                  alt="Nguyễn Đức Tâm"
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
                  preview={false}
                />
                <Title level={4} className="mb-1">
                  Nguyễn Đức Tâm
                </Title>
                <Text type="secondary" className="block mb-3">
                  Founder & Creative Director & Head of Design
                </Text>
                <Paragraph className="text-gray-600">
                  Với 10 năm kinh nghiệm trong ngành thời trang, Tâm là linh hồn sáng tạo của
                  Jupiter.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} sm={12}>
              <div className="text-center">
                <Image
                  src="tu.jpg"
                  alt="Nguyễn Thị Cẩm Tú"
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-md"
                  preview={false}
                />
                <Title level={4} className="mb-1">
                  Nguyễn Thị Cẩm Tú
                </Title>
                <Text type="secondary" className="block mb-3">
                  Founder & Creative Director & Head of Design
                </Text>
                <Paragraph className="text-gray-600">
                  Tú mang đến Jupiter những thiết kế độc đáo kết hợp giữa truyền thống và hiện đại.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>

        {/* Join Us CTA */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <Title level={2} className="text-3xl font-bold mb-6 text-white">
              Tham gia cùng cộng đồng Jupiter
            </Title>
            <Paragraph className="text-lg mb-8">
              Trở thành một phần của cộng đồng yêu thích thời trang và văn hóa đường phố cùng
              Jupiter. Theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật những bộ sưu tập
              mới nhất và các sự kiện đặc biệt.
            </Paragraph>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Theo dõi Instagram
              </a>
              <a
                href="#"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors"
              >
                Khám phá bộ sưu tập mới
              </a>
            </div>
          </div>
        </div>

        {/* Stores */}
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <Title level={2} className="text-3xl font-bold mb-12 text-center">
            Hệ thống cửa hàng
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                bordered={false}
                className="h-full shadow-sm hover:shadow-md transition-shadow"
                cover={
                  <Image
                    alt="Jupiter Hồ Chí Minh"
                    src="https://images.unsplash.com/photo-1573855619003-97b4799dcd8b?q=80&w=500"
                    preview={false}
                  />
                }
              >
                <Title level={4}>Jupiter Hồ Chí Minh</Title>
                <Paragraph>42 Nguyễn Huệ, Quận 1, TP.HCM</Paragraph>
                <Paragraph>Giờ mở cửa: 9:00 - 22:00</Paragraph>
                <Paragraph>Hotline: 028 3821 xxxx</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                bordered={false}
                className="h-full shadow-sm hover:shadow-md transition-shadow"
                cover={
                  <Image
                    alt="Jupiter Hà Nội"
                    src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=500"
                    preview={false}
                  />
                }
              >
                <Title level={4}>Jupiter Hà Nội</Title>
                <Paragraph>18 Hàng Bài, Quận Hoàn Kiếm, Hà Nội</Paragraph>
                <Paragraph>Giờ mở cửa: 9:00 - 22:00</Paragraph>
                <Paragraph>Hotline: 024 3826 xxxx</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                bordered={false}
                className="h-full shadow-sm hover:shadow-md transition-shadow"
                cover={
                  <Image
                    alt="Jupiter Đà Nẵng"
                    src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=500"
                    preview={false}
                  />
                }
              >
                <Title level={4}>Jupiter Đà Nẵng</Title>
                <Paragraph>123 Nguyễn Văn Linh, Quận Hải Châu, Đà Nẵng</Paragraph>
                <Paragraph>Giờ mở cửa: 9:00 - 22:00</Paragraph>
                <Paragraph>Hotline: 0236 3823 xxxx</Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

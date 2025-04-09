import React, { useState } from "react";
import { Container, Row, Col, Card, Button, ButtonGroup, Modal } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action"; // Assuming your redux action is correctly imported
import { FaPhoneAlt } from 'react-icons/fa';

const productData = [
  {
    id: 1,
    name: "Luxury Boat",
    category: "Boat",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat1.jpg", // Updated path for main boat image
    price: "$35,500", // Updated price
    description: "Experience the ocean in style.",
    details: "Made for ocean adventures. GPS, radar, luxury cabin and full service warranty included.",
    interiorImages: [
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat1.jpg", // Updated interior image
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat2.jpg", // Updated interior image
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat3.jpg", // Updated interior image
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat4.jpg", // Updated interior image
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/boat5.jpg"  // Updated interior image
    ],
  },
  {
    id: 2,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike1.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 3,
    name: "Mobile Home",
    category: "Mobile Home",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/home.jpg", // Updated path
    interiorImages: [
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside1.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside2.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside3.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside4.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside5.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside6.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside7.jpg",
    ],
    price: "$100,000", // Updated price (original $80,000 + $20,000)
    description: "Home on the move.",
    details: "Spacious, with kitchen, bathroom and solar panels. Move-in ready.",
  },
  {
    id: 4,
    name: "Private Helicopter",
    category: "Helicopter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/helicopter.jpg", // Updated path
    price: "$515,000", // Updated price (original $500,000 + $15,000)
    description: "Fly anywhere in style.",
    details: "Seats 4, autopilot system, luxury leather seats, and advanced navigation.",
  },
  {
    id: 5,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car1.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 6,
    name: "Security Gun",
    category: "Gun",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/gun.jpg", // Updated path
    price: "$3,000",
    description: "Licensed for security only.",
    details: "Legal firearm with full documentation. Only sold to authorized security personnel.",
  },
  {
    id: 7,
    name: "Mobile Home Deluxe",
    category: "Mobile Home",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/home1.jpg", // Updated path
    interiorImages: [
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside1.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside2.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside3.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside4.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside5.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside6.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside7.jpg",
    ],
    price: "$90,000",
    description: "Deluxe mobile home with modern style.",
    details: "Lounge space, modular kitchen, and smart bathroom.",
  },
  {
    id: 8,
    name: "Mobile Home Compact",
    category: "Mobile Home",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/home2.jpg", // Updated path
    interiorImages: [
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside1.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside2.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside3.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside4.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside5.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside6.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside7.jpg",
    ],
    price: "$70,000",
    description: "Compact, efficient, and lightweight.",
    details: "Perfect for travel with foldable furniture and solar-powered AC.",
  },
  {
    id: 9,
    name: "Mobile Home Premium",
    category: "Mobile Home",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/home3.jpg", // Updated path
    interiorImages: [
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside1.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside2.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside3.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside4.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside5.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside6.jpg",
      "https://muzamil-ahmad-dev.github.io/skyride/assets/image/inside7.jpg",
    ],
    price: "$95,000",
    description: "Luxury features with complete comfort.",
    details: "Double bedroom, high-end kitchen, bathroom, Wi-Fi, and more.",
  },
  {
    id: 10,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car2.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 11,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car3.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 12,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car4.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 13,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car5.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 14,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car6.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 15,
    name: "Luxury Car",
    category: "Car",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/car7.jpg", // Updated path
    price: "$60,000",
    description: "Comfort and performance.",
    details: "V8 engine, automatic transmission, leather interior, sunroof.",
  },
  {
    id: 16,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike2.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 17,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike3.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 18,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike4.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 19,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike5.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 20,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike6.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 21,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike7.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  },
  {
    id: 22,
    name: "Electric Scooter",
    category: "Electric Scooter",
    image: "https://muzamil-ahmad-dev.github.io/skyride/assets/image/bike8.jpg", // Updated path
    price: "$1,200",
    description: "Eco-friendly city commuting.",
    details: "Top speed 30 km/h. Long-lasting battery. Lightweight frame. Great for urban rides.",
  }
];

const categories = [
  "All",
  "Boat",
  "Car",
  "Electric Scooter",
  "Gun",
  "Mobile Home",
  "Helicopter",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  const dispatch = useDispatch();

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((p) => p.category === selectedCategory);

  const addProductToCart = (product) => {
    dispatch(addCart(product)); // Add to Redux cart
  };

  const toggleDetails = (id) => {
    setShowModal((prevState) => (prevState === id ? null : id));
  };

  const handleModalOpen = (product) => {
    setCurrentProduct(product);
    setCurrentImageIndex(0);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const nextImage = () => {
    if (currentProduct && currentProduct.interiorImages) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentProduct.interiorImages.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProduct && currentProduct.interiorImages) {
      setCurrentImageIndex(
        currentImageIndex === 0
          ? currentProduct.interiorImages.length - 1
          : currentImageIndex - 1
      );
    }
  };

  return (
    <Container className="my-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2 className="text-center mb-4">Our Items</h2>

      {/* Category Buttons */}
      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        <ButtonGroup className="category-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "warning" : "outline-warning"}
              onClick={() => setSelectedCategory(cat)}
              className="category-btn"
            >
              {cat}
            </Button>
          ))}
        </ButtonGroup>
      </div>

    {/* Product Cards */}
<Row>
  {filteredProducts.map((product) => (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={product.id}>
      <Card className="shadow-lg h-100 custom-card">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text className="fw-bold">{product.price}</Card.Text>

          {/* WhatsApp Chat Button */}
          <Button
            variant="success"
            className="me-2 mb-2 w-100"
            href={`https://wa.me/17409818487?text=Hi, I'm interested in the ${product.name}`}
            target="_blank"
          >
            <FaWhatsapp className="me-2" />
            Chat to Buy
          </Button>

          {/* Call Now Button */}
          <Button
            variant="outline-info"
            className="me-2 mb-2 w-100"
            href="tel:+17409818487"
          >
            <FaPhoneAlt className="me-2" />
            Call Now
          </Button>

          {/* Buy Now Button */}
          

          {/* More Info Button */}
          <Button
            variant="outline-warning"
            onClick={() => handleModalOpen(product)}
            className="mb-2 w-100 custom-hover"
          >
            More Info
          </Button>

          {/* Add to Cart Button */}
          <Button
            variant="outline-dark"
            onClick={() => {
              addProductToCart(product);
            }}
            className="mb-2 w-100 custom-hover"
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>


      {/* Fullscreen Image Modal */}
      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        centered
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen={true}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {currentProduct?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {currentProduct?.interiorImages && (
            <div className="fullscreen-image-container">
              <img
                src={currentProduct.interiorImages[currentImageIndex]}
                alt={`Interior of ${currentProduct.name}`}
                className="fullscreen-image"
                style={{
                  width: "100%",
                  maxHeight: "80vh",
                  objectFit: "contain",
                }}
              />
              <div className="image-navigation">
                <Button
                  variant="light"
                  onClick={prevImage}
                  className="image-nav-btn"
                  style={{
                    position: "absolute",
                    left: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  &lt;
                </Button>
                <Button
                  variant="light"
                  onClick={nextImage}
                  className="image-nav-btn"
                  style={{
                    position: "absolute",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  &gt;
                </Button>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {/* Custom Styles */}
      <style>
        {`
          .category-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 1rem;
}

.category-btn {
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  flex: 1 1 20%; /* Flex-grow/shrink with base 20% */
  max-width: 22%;
  min-width: 100px;
  text-align: center;
  border: none;
  background-color: #09122c;
  color: white;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.category-btn:hover {
  background-color: #ffc107;
  color: #09122c;
}

.fullscreen-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 80vh;
  overflow: hidden;
  padding: 0.5rem;
}

.fullscreen-image {
  width: 100%;
  height: auto;
  max-height: 75vh;
  object-fit: contain;
}

.image-navigation .image-nav-btn {
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
}

.image-navigation .prev {
  left: 10px;
}

.image-navigation .next {
  right: 10px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .category-btn {
    flex: 1 1 45%;
    max-width: 48%;
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }

  .image-navigation .image-nav-btn {
    font-size: 1.2rem;
    padding: 6px;
  }
}

        `}
      </style>
    </Container>
  );
};

export default Products;

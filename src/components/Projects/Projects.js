import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import music from "../../Assets/Projects/music.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import food from "../../Assets/Projects/food.png";
import car from "../../Assets/Projects/car.png";
import diet from "../../Assets/Projects/cutterbuck.PNG";
import cutter from "../../Assets/Projects/diet.PNG";
import fatllama from "../../Assets/Projects/fatllama.PNG";
import jeff from "../../Assets/Projects/jeff.PNG";
import reap from "../../Assets/Projects/reap.PNG";
import sphynx from "../../Assets/Projects/sphynx.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Audi Princeton"
              description="Audi Princeton is a car dealership located in Princeton, New Jersey. They specialize in selling new and pre-owned Audi vehicles, as well as providing service and parts for all Audi models. They also offer financing options and a variety of other services."
              // ghLink="https://github.com/onlinedev0808/chatify"
              demoLink="https://www.audiprinceton.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="HalalPlates"
              description="HalalPlates is an online platform that connects customers with local halal restaurants. It provides a convenient way to order food from halal restaurants in your area. Customers can search for restaurants by cuisine, location, and price range. They can also read reviews and ratings from other customers to help them make their decision. HalalPlates also offers discounts and promotions for its customers."
              // ghLink="https://github.com/onlinedev0808/editor.git"
              demoLink="https://www.halalplates.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music site"
              description="Website for music and art enthusiasts. It provides a platform for users to share their work, collaborate with other artists, and discover new music and art. The site also offers tutorials, resources, and tools to help users create their own projects."
              // ghLink="https://github.com/onlinedev0808/plant_ai.git"
              demoLink="https://dev333.musicart.io"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diet}
              isBlog={false}
              title="Metnu"
              description="Metnu is an online platform that provides resources and tools to help people learn and develop their skills in the areas of marketing, technology, and entrepreneurship. The platform offers courses, tutorials, articles, and other resources to help users gain knowledge and develop their skills. It also provides a community forum where users can ask questions and get advice from experts in the field."
              // ghLink="https://github.com/onlinedev0808/chatify"
              demoLink="https://www.metnu.com/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cutter}
              isBlog={false}
              title="Cutter Buck"
              description="Cutter Buck is an online retailer that specializes in men's and women's apparel, accessories, and footwear. The company offers a wide selection of clothing and accessories for golf, business, casual, and outdoor activities. Cutter Buck also offers custom embroidery services for corporate events, teams, and special occasions."
              // ghLink="https://github.com/onlinedev0808/editor.git"
              demoLink="https://cutterbuck.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fatllama}
              isBlog={false}
              title="Fat Llama"
              description=" Fat Llama is an online peer-to-peer rental marketplace that allows people to rent out their items to others. It is a secure and convenient way for people to make money from their unused items, while also providing an affordable way for others to access the things they need."
              // ghLink="https://github.com/onlinedev0808/plant_ai.git"
              demoLink="https://fatllama.com/"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jeff}
              isBlog={false}
              title="Jeff Wyler Chevrolet"
              description=" Jeff Wyler Chevrolet of Columbus is a car dealership located in Columbus, Ohio. They offer a wide selection of new and used vehicles, as well as financing and service options. They also have an online inventory search tool, allowing customers to easily find the perfect vehicle for their needs."
              // ghLink="https://github.com/onlinedev0808/chatify"
              demoLink="https://jeffwylerchevroletofcolumbus.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reap}
              isBlog={false}
              title="Reap"
              description="Reap Global is an online platform that helps businesses and organizations to create, manage, and track their sustainability initiatives. It provides tools to measure, report, and communicate progress on sustainability goals. Reap Global also offers resources to help businesses and organizations understand the importance of sustainability and how to implement it in their operations."
              // ghLink="https://github.com/onlinedev0808/editor.git"
              demoLink="https://reap.global/en/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sphynx}
              isBlog={false}
              title="Sphynx"
              description=" The Sphynx is an online platform that provides a secure and private way to store, manage, and share personal data. It allows users to securely store their personal information, such as passwords, bank accounts, credit cards, and other sensitive data. The platform also provides tools for managing and sharing this data with others."
              // ghLink="https://github.com/onlinedev0808/plant_ai.git"
              demoLink=" https://thesphynx.co"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/onlinedev0808/chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/onlinedev0808/editor.git"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/onlinedev0808/plant_ai.git"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import { Container } from "react-bootstrap";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

function Home() {
    return (
      <div>
        <Menu />
        <Container>
            <h1>Bem-vindo à Minha Empresa</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fringilla nisl sit amet consectetur.
            </p>
        </Container>
        <Footer />
      </div>
    );
  }

export default Home
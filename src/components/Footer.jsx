import { Container } from "react-bootstrap"
import { AppName } from "../constants/Global"

function Footer(){
    return (
        <Container>
            &copy; Copyright 2023-<script>document.write(new Date().getFullYear())</script>, {AppName}.
        </Container>
    )
}

export default Footer
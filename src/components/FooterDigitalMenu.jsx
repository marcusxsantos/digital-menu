import { AppName } from "../constants/Global"

function FooterDigitalMenu(){
    return (
        <div>
            &copy; Copyright 2023-<script>document.write(new Date().getFullYear())</script>, {AppName}.
        </div>
    )
}

export default FooterDigitalMenu
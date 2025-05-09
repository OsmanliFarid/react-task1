import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const Footer = () =>{
     return (
        <div>
            <div className="FooterBoxs">
                <div className="Container2">
                      <div className="FooterBox">
                        <div className="FooterTitleBox">
                        <h1 className="FooterTitle">Контакты</h1>
                        <h1 className="FooterTitle2">ОБЩИЕ</h1>
                        <a href="#" className="FooterNumber">+(351) 282 405 600</a>
                        <a href="#" className="FooterNumber2">+(351) 282 405 697</a>
                        <a href="#" className="FooterMail">info@autodromodoalgarve.com</a>
                        <h1 className="FooterTitle3">БИЛЕТЫ</h1>
                        <a href="#" className="FooterNumber3">+(351) 282 405 600</a>
                        <a href="#" className="FooterPage">tickets@autodromodoalgarve.com</a>
                        <div className="FooterConcat">
                           <AiOutlineYoutube />
                           <FaInstagram />
                           <CiFacebook />
                        </div>
                      </div>
                      <div className="FooterImframeBox">
                        <h1 className="FooterIframeTitle">
                            АДРЕС
                        </h1>
                        <p className="FooterIframeTitle2">
                            Sitio do Escampadinho, Mexilhoeira Grande, 8500-148 Portimao, Portugal
                        </p>
                        <img src="./public/img.png" alt="" />
                      </div>
                      </div>
                      <div className="FooterEnd">
                        <h1 className="FooterEndTitle">Design by Varvara Prokopchuk</h1>
                        <img src="./public/FooterLogo.png" alt="" />
                        <h1 className="FooterEndTitle2">Политика конфиденциальности </h1>
                      </div>
                </div>
            </div>
        </div>
     )
}
export default Footer
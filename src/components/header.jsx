const Header = () =>{
    return (
        <div className="Header">
            <div className="Container">
            <div className="Navbar">
                <ul>
                    <li><a href="./index.html">О гонке</a></li>
                    <li><a href="#">Трек</a></li>
                    <li><a href="#">Lamborghini Super trofeo</a></li>
                    <li><a href="#">Новости</a></li>
                </ul>
                <div className="logo">
                    <img src="./public/Logo.svg" alt="" />
                </div>
                <ul>
                    <li><a href="#">Купить билеты</a></li>
                    <li><a href="#">Смотреть онлайн</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
            </div>
            <div className="HeaderTitleBox">
                <h1 className="HeaderTitle">
                LAMBORGHINI SUPER TROFEO
                </h1>
                <h1 className="HeaderTitle2">
                Гранд-финал 2022
                </h1>
                <h1 className="HeaderTitle3">
                3-6 ноября 
                </h1>
                <p className="HeaderBorder"></p>
                <p className="HeaderTitle4">
                автодром Портимао,Португалия
                </p>
            </div>
            </div>
        </div>
    )
}
export default Header
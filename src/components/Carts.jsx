import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Carts = () =>{
    
    const NewArray = [
        {
            id:1,
            img:"./public/CartImg.png",
            title:"НЕЛЬСОН ПИКЕ СТАЛ ПОБЕДИТЕЛЕМ ГРАНД-ФИНАЛА В ПОРТИМАНЕ",
            descripton:"Нельсон Пике-младший из Ansa Motorsports обеспечил возвращение титула Lamborghini Super Trofeo Grand Finals в Северную Америку впервые с 2017 года после победы и второе место в паре 50-минутных гонок на Autodromo Nacionale do Algarve в Портимане.Между тем, титул Pro-Am был подорван, поскольку Брайан Ортис и Себастьян Карасо из"
        },
        {
            id:2,
            img:"./public/CartImg2.png",
            title:"ГРАНД ФИНАЛ. ДЕНЬ 1",
            descripton:"Утренний дождь означал, что мокрая гонка была объявлена ​​до старта, и перед большинством экипажей стоял выбор: использовать слики или мокрые шины. Большинство участников предпочли мокрую трассу, но поулист Спинелли начал гонку на сликах и сразу же поплатился за это. Huracan № 61 опустился вниз, заняв всего 28-е место, поскольку большинством экипажей стоял выбор: использовать слики или мокрые"
        }
    ]
    return (
        <div>
            <div className="Container2" >
                <div className="CartsArrowBox">
                    <div className="ArrowLeft">
                        <FaArrowLeftLong />
                    </div>
                    <div className="ArrowRight">
                        <FaArrowRightLong />
                    </div>
                </div>
                <div className="CartsBox" >
            {NewArray.map((item,index) =>(
                
                    
                        <div className="Carts" key={index}>
                    <div className="CartImgBox">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="CartsTitleBox">
                        <h1 className="CartTitle">{item.title}</h1>
                        <p className={`CartDesc ${index === 1 ? "CartNew" : ""}`}>{item.descripton}</p>
                    </div>
                </div>
                    
                
            ))}
            </div>
            </div>
        </div>
    )
}
export default Carts
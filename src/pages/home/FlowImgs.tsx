import React from "react";
import Slider from "react-slick";
import '../../index.css'

// Functional component
const FlowImgs: React.FC = () => {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 300,
        nextArrow: (
            <div>
                <div className="next-slick-arrow">
                    <img src="./src/img/Img4.png"></img>
                </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow">
                    <img src="./src/img/Img0.png"></img>
                </div>
            </div>
        )
    };
    return (
        <div className="slider-container" style={{marginTop: '50px' , height: 'auto'}}>
            <Slider {...settings}>
                
                <div style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: 'auto', boxSizing: 'border-box' }}>
                        <img src={"./src/img" + "/Img1.png"} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: '500px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: 'auto',boxSizing: 'border-box' }}>
                        <img src={"./src/img" + "/Img1.png"} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', width: 'auto' ,boxSizing: 'border-box'}}>
                        <img src={"./src/img" + "/Img1.png"} />
                    </div>
                </div>

                
            </Slider>
        </div>
    );
}



export default FlowImgs;

// function CustomPaging() {
//     const settings = {
//       customPaging: function(i) {
//         return (
//           <a>
//             <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
//           </a>
//         );
//       },
//       dots: true,
//       dotsClass: "slick-dots slick-thumb",
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div className="slider-container">
//         <Slider {...settings}>
//           <div>
//             <img src={baseUrl + "/abstract01.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract02.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract03.jpg"} />
//           </div>
//           <div>
//             <img src={baseUrl + "/abstract04.jpg"} />
//           </div>
//         </Slider>
//       </div>
//     );
//   }
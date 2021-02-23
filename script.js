function _extends() { _extends = Object.assign || function(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const { useState } = React;
const { useSprings, interpolate, animated, useSpring } = ReactSpring;
const { useDrag } = ReactUseGesture;
const rootElement = document.getElementById("root");
const imgData = [{
        name: " ANTECEDENTES DE LOS DERECHOS HUMANOS",
        detail: "Originalmente, los individuos tenían derechos sólo por pertenecer a un grupo, como una familia o clase social. Entonces, en el año 539 a. C., Ciro el grande, tras conquistar la ciudad de Babilonia, hizo algo totalmente inesperado: liberó a todos los esclavos y les permitió volver a casa. Aún más, declaró que la gente tenía derecho a escoger su propia religión. El cilindro de Ciro, una tablilla de arcilla con estas proclamaciones inscritas, se considera la primera declaración de derechos humanos en la historia.",
        images: [
            "",
            ""
        ],

        url: "http://www.0800flor.net/wp-content/uploads/2017/11/redactar-antecedentes-de-una-investigacion-640x426.jpg",
        profile: "https://lopezelias.com/wp-content/uploads/2020/08/derechoshumanos-plea-2020.jpg"
    },

    {
        name: "Los hitos más importantes incluyeron:",
        detail: "La idea de los derechos humanos se difundió rápidamente hasta India, Grecia y finalmente Roma. ",
        images: [
            "",
            ""
        ],

        url: "https://assets.sutori.com/user-uploads/image/6aa30666-af09-43f6-8e73-67ea5d5e0a0d/9dd1a8b93a4738aeb0b4af8a64de1c28.jpeg",
        profile: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/10366581/1.jpg"
    },

    {
        name: "1215: La Carta Magna",
        detail: " Que dio a la gente nuevos derechos e hizo que el rey estuviera sujeto a la ley.",
        images: [
            "",
            ""
        ],

        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu6owhsln_NM57Z5VEphPC8uyX79xbSeOUKw&usqp=CAU",
        profile: "data:image/jpeg;base64,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 "
    },

    {
        name: "1628: La Petición de Derechos",
        detail: "Que estableció los derechos de la gente.",
        images: [
            "",
            ""
        ],

        url: "https://upload.wikimedia.org/wikipedia/commons/3/33/Edward_coke.jpg",
        profile: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/8454311/download_%282%29.jpg "
    },
    {
        name: "1776: La Declaración de Independencia de los Estados Unidos",
        detail: " Que proclamaba el derecho a la vida, la libertad y la búsqueda de la felicidad.",
        images: [
            "",
            ""
        ],

        url: "https://estaticos.muyhistoria.es/media/cache/400x300_thumb/uploads/images/gallery/54943b8fb04f668c2e2906a3/REDES.jpg",
        profile: "https://c8.alamy.com/compes/p50w42/la-declaracion-de-independencia-de-los-estados-unidos-julio-4-1776-facsimil-p50w42.jpg"
    },
    {
        name: "1789: La Declaración de los Derechos del Hombre y del Ciudadano",
        detail: " Un documento de Francia que establecía que todos los ciudadanos son iguales ante la ley.",
        images: [
            "",
            ""
        ],

        url: "https://lh3.googleusercontent.com/proxy/ZBg2EaqpQyh1R2VhtePR9AnvLGMBaATQ-P2oEpaav06XsMDANcbnTYe4odXdA9hQSAYZLUBsbPsnVHzOYzh8l1uhOr6p8dYfSnv1ygsOprJxfWgTV-ESNWl-CDYDrAaCHAiHOOatZfNxY5_7Ri3_Ig",
        profile: "https://i.ytimg.com/vi/iOSFaOTYjko/mqdefault.jpg"
    },
    {
        name: "1948: La Declaración Universal de Derechos Humanos",
        detail: ".El primer documento que proclama los 30 derechos a los que todo ser humano tiene derecho.",
        images: [
            "",
            ""
        ],

        url: "https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photos/11521955/2.jpg",
        profile: "https://lh3.googleusercontent.com/proxy/dWpY9mopyu_lHOjtcnU9K0QAChefN6OLwaKXc7ELq1FuteGV7mJiybGJhEAGXojtXZE9lID9KarW07iZm6D_DDPAQr6NVwWP9GK46QQbzJH-gh3EiT3DzkQhM37whhV0EG-rUQmEuWs-EYd0XT88tHyycJ4ramQ8yQDhLhttcuAif9OSTZVwtSpaM7g"
    }
];


const Card = props => {
    const { _x, _y, num, index, data, active, setActive } = props;
    const cardIndex = num - index;
    const offset = cardIndex * 276 + 80;
    const [{ x, y, scale }, set] = useSpring(() => ({
        x: _x + offset,
        y: _y,
        scale: active ? 2.4 : 1
    }));

    const [{ posX, posY, proScale, blur }, setPro] = useSpring(() => ({
        posX: 0,
        posY: 0,
        proScale: 1.2,
        config: { mass: 2 },
        blur: 0
    }));

    const handleClick = () => {
        if (num === index) {
            if (!active) {
                set({ scale: 2.2 });
                setPro({ posX: -53, posY: -337, proScale: 2.5, blur: 4 });
                setActive(true);
            }
        }
    };
    set({ x: _x + offset, y: _y });
    if (num === index) {
        if (!active) {
            set({ scale: 1 });
            setPro({ posX: 0, posY: 0, proScale: 1, blur: 0 });
        }
    }
    return /*#__PURE__*/ (
        React.createElement(animated.div, {
                id: "card",
                style: {
                    transform: interpolate(
                        [
                            x.interpolate(x => `translateX(${x}px)`),
                            y.interpolate(y => `translateY(${y}px)`)
                        ],

                        (translateX, translateY) => `${translateX} ${translateY}`),

                    zIndex: num === index ? 10 : 1
                }
            }, /*#__PURE__*/


            React.createElement(animated.div, {
                    id: "imgContainer",
                    style: {
                        transform: scale.interpolate(s => `scale(${s})`)
                    }
                }, /*#__PURE__*/


                React.createElement(animated.img, {
                    style: {
                        width: "300%",
                        userSelect: "none",
                        transform: x.
                        interpolate({ range: [-196, 356], output: [-380, -20] }).
                        interpolate(x => `translate3d(${x}px, 0px, 0px)`)
                    },

                    src: data.url
                }), /*#__PURE__*/

                React.createElement(animated.div, {
                    style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        backdropFilter: blur.interpolate(x => ` blur(${x}px)`),
                        backgroundColor: blur.
                        interpolate({ range: [0, 4], output: [0, 0.3] }).
                        interpolate(x => `rgba(0, 0, 0, ${x})`)
                    }
                })), /*#__PURE__*/



            React.createElement(animated.img, {
                id: "profile",
                style: {
                    transform: interpolate(
                        [
                            posX.interpolate(x => `translateX(${x}px)`),
                            posY.interpolate(y => `translateY(${y}px)`),
                            proScale.interpolate(y => `scale(${y})`)
                        ],

                        (translateX, translateY, proScale) =>
                        `${translateX} ${translateY} ${proScale}`),

                    border: proScale.
                    interpolate({ range: [1, 2.5], output: [6, 4] }).
                    interpolate(x => `${x}px solid #fff`)
                },

                src: data.profile,
                onClick: handleClick
            })));



};
const heightOffset = 200;
const Info = props => {
    const { active, index, setActive } = props;
    const [{ y }, set] = useSpring(() => ({ y: !active ? -40 : 0 }));
    set({ y: !active ? -40 : 0 });
    return /*#__PURE__*/ (
        React.createElement(React.Fragment, null, /*#__PURE__*/
            React.createElement(animated.div, {
                    id: "cross",
                    onClick: () => {
                        setActive(false);
                    },
                    style: {
                        transform: y.
                        interpolate({ range: [-40, 0], output: [0, 1] }).
                        interpolate(y => `scale(${y})`)
                    }
                }, /*#__PURE__*/


                React.createElement("div", { className: "close" })), /*#__PURE__*/

            React.createElement(animated.div, {
                    style: { bottom: y.interpolate(y => `${y}vh`) },
                    id: "infocontainer"
                }, /*#__PURE__*/

                React.createElement("div", { id: "detailName" }, imgData[index].name), /*#__PURE__*/
                React.createElement("div", { id: "detailPro" }, imgData[index].detail), /*#__PURE__*/
                React.createElement("button", { id: "follow" }, "Desarrollo"), /*#__PURE__*/
                React.createElement("button", { id: "message" }, "Humano"), /*#__PURE__*/
                React.createElement("img", {
                    id: "detailImage",
                    src: imgData[index].images[0],
                    style: { background: "#000" }
                }), /*#__PURE__*/

                React.createElement("img", {
                    id: "detailImage",
                    src: imgData[index].images[1],
                    style: { background: "#2174f3" }
                }))));




};
const Head = /*#__PURE__*/
    React.createElement(React.Fragment, null, /*#__PURE__*/
        React.createElement("div", {
                style: {
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between"
                }
            }, /*#__PURE__*/


            React.createElement("h1", null, "Desarrollo Humano"), /*#__PURE__*/
            React.createElement("div", { id: "user" })), /*#__PURE__*/

        React.createElement("div", { id: "nav" }, /*#__PURE__*/
            React.createElement("div", { id: "el", style: { color: "#000" } }, "Antecedente DH"), /*#__PURE__*/


            React.createElement("div", { id: "el" }, "Luis"), /*#__PURE__*/
            React.createElement("div", { id: "el" }, "Upqroo"), /*#__PURE__*/
            React.createElement("div", { id: "el" }, "Ing.sw")));




function App() {
    const [{ x, y }, set] = useState(() => ({ x: 0, y: heightOffset }));
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(false);
    const bind = useDrag(
        ({ down, movement: [x, y], distance, direction: [xDir], velocity }) => {
            const trigger = velocity > 0.2;
            const dir = xDir < 0 ? -1 : 1;
            if (!active) {
                if (trigger && !down) {
                    if (!(index + dir * -1 >= imgData.length || index + dir * -1 < 0)) {
                        setIndex(index + dir * -1);
                    }
                    set({ x: 0, y: heightOffset });
                } else {
                    set({ x: down ? x : 0, y: heightOffset });
                }
            }
        });

    return /*#__PURE__*/ (
        React.createElement("div", _extends({ id: "app" }, bind()),
            Head,
            imgData.map((data, i) => {
                return /*#__PURE__*/ (
                    React.createElement(Card, {
                        key: i,
                        _x: x,
                        _y: y,
                        num: i,
                        index: index,
                        data: data,
                        active: active,
                        setActive: setActive
                    }));


            }), /*#__PURE__*/
            React.createElement(Info, { active: active, index: index, setActive: setActive })));


}

ReactDOM.render( /*#__PURE__*/
    React.createElement(App, null),
    rootElement);
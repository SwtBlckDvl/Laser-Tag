import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
    { label: "Nosotros", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Precios", href: "#" },
    { label: "Eventos y Promociones", href: "#" },
    { label: "Ubicación y Contacto", href: "#" },
    { label: "Testimonios", href: "#" },
];

export const testimonials = [
    {
        user: "Alan M.",
        edad: "14 años",
        image: user1,
        text: "¡Una experiencia increíble! Mis amigos y yo nos divertimos muchísimo. Definitivamente volveremos.",
    },
    {
        user: "Jessica Sánchez",
        edad: "24 años",
        image: user2,
        text: "El mejor lugar para celebrar cumpleaños. Los niños se lo pasaron genial y el personal fue muy atento.",
    },
    {
        user: "David Joel",
        edad: "40 años",
        image: user3,
        text: "Ideal para desconectar y disfrutar con amigos. Me encantó la competencia y la adrenalina.",
    },
    {
        user: "Marcos P.",
        edad: "12 años",
        image: user4,
        text: "Una experiencia única que supera cualquier expectativa. Perfecto para pasar una tarde divertida.",
    },
    {
        user: "Laura Pérez",
        edad: "17 años",
        image: user5,
        text: "La ambientación es impresionante. Nunca había jugado algo así. ¡Recomendado al 100%!",
    },
    {
        user: "Emilia Dávalos",
        edad: "55 años",
        image: user6,
        text: "Las instalaciones son de primera y el equipo está en perfecto estado. ¡Regresaré pronto!",
    },
];

export const features = [
    {
        icon: <BotMessageSquare />,
        text: "Equipamiento de Alta Calidad",
        description:
            "Utiliza tecnología de última generación para garantizar un juego óptimo.",
    },
    {
        icon: <Fingerprint />,
        text: "Personal Capacitado",
        description:
            "Empleados entrenados que brindan atención y aseguran el buen uso del equipo.",
    },
    {
        icon: <ShieldHalf />,
        text: "Entorno Controlado",
        description:
            "Espacios diseñados para minimizar riesgos y asegurar la seguridad de los jugadores.",
    },
    {
        icon: <BatteryCharging />,
        text: "Equipamiento de Protección",
        description:
            "Chalecos y gafas que garantizan la seguridad durante el juego.",
    },
    {
        icon: <PlugZap />,
        text: "Ambientes Temáticos",
        description:
            "Campos de juego creativos y variados que mantienen la diversión y la inmersión.",
    },
    {
        icon: <GlobeLock />,
        text: "Modos de Juego Diversos",
        description:
            "Diferentes tipos de partidas y misiones para ofrecer nuevos desafíos y experiencias.",
    },
];

// export const checklistItems = [
//     {
//         title: "Code merge made easy",
//         description:
//             "Track the performance of your VR apps and gain insights into user behavior.",
//     },
//     {
//         title: "Review code without worry",
//         description:
//             "Track the performance of your VR apps and gain insights into user behavior.",
//     },
//     {
//         title: "AI Assistance to reduce time",
//         description:
//             "Track the performance of your VR apps and gain insights into user behavior.",
//     },
//     {
//         title: "Share work in minutes",
//         description:
//             "Track the performance of your VR apps and gain insights into user behavior.",
//     },
// ];

export const pricingOptions = [
    {
        title: "Free",
        price: "$0",
        features: [
            "Private board sharing",
            "5 Gb Storage",
            "Web Analytics",
            "Private Mode",
        ],
    },
    {
        title: "Pro",
        price: "$10",
        features: [
            "Private board sharing",
            "10 Gb Storage",
            "Web Analytics (Advance)",
            "Private Mode",
        ],
    },
    {
        title: "Enterprise",
        price: "$200",
        features: [
            "Private board sharing",
            "Unlimited Storage",
            "High Performance Network",
            "Private Mode",
        ],
    },
];

export const LinksContacto = [
    { href: "#", text: "Dirección" },
    { href: "#", text: "Número de teléfono: 5511223344" },
    { href: "#", text: "lasertag2024@gmail.com" },
    { href: "#", text: "Horarios: 10:00-22:00 hrs" },
];

export const LinksEnlaces = [
    { href: "#", text: "Nosotros" },
    { href: "#", text: "Servicios" },
    { href: "#", text: "Precios" },
    { href: "#", text: "Eventos y Promociones" },
    { href: "#", text: "Testimonios" },
];

export const LinksConexiones = [
    { href: "#", text: "Políticas de privacidad y términos y condiciones" },
    { href: "#", text: "Enlace a Google Maps" },
    { href: "#", text: "Testimonios" },
    { href: "#", text: "Links de Redes sociales" },
    { href: "#", text: "Trabaja con nosotros" },
];
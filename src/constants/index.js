import {
    facebook, instagram, shieldTick,
    support, truckFast, twitter
} from "../assets/icons";

import {
    bigShoe1, bigShoe2, bigShoe3,
    customer1, customer2,
    product1, product2, product3, product4,
    thumbnailShoe1, thumbnailShoe2, thumbnailShoe3
} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about-us", label: "About Us" },
    { href: "#contact-us", label: "Contact" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '22', label: 'Shops' },
    { value: '50+', label: 'Brands' },
    { value: '150k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: product1,
        name: "Stay Positive T-Shirt",
        price: "$29.90",
    },
    {
        imgURL: product2,
        name: "Sea-Heart Hoodie",
        price: "$90.00",
    },
    {
        imgURL: product3,
        name: "Don't Look Back T-Shirt",
        price: "$35.00",
    },
    {
        imgURL: product4,
        name: "Hidden Paradise Hoodie",
        price: "$99.90",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'John Brown',
        rating: 4.8,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Angel Smith',
        rating: 4.5,
        feedback: "The products are stylish and perfect for my taste. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Alien T-Shirts", link: "/" },
            { name: "Skull T-Shirts", link: "/" },
            { name: "Cool Shoes", link: "/" },
            { name: "Hoodies", link: "/" },
            { name: "Vans Products", link: "/" },
            { name: "More Brands", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Contact",
        links: [
            { name: "customer@buenavibra.com", link: "mailto:customer@nike.com" },
            { name: "+54564998442", link: "tel:+54564998442" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

import Button from '../../../../components/Common/Button/Primary/Button';
import Container from '../../../../components/Common/Container/Container';
import Row from '../../../../components/Common/Row/Row';

import service1 from '../../../../assets/epiccoders/services/1.png';
import service2 from '../../../../assets/epiccoders/services/2.png';
import service3 from '../../../../assets/epiccoders/services/3.png';
import service4 from '../../../../assets/epiccoders/services/4.png';
import faster from '../../../../assets/epiccoders/services/5.png';

import reactNativeLogo from '../../../../assets/technologies/react-native.png';
import nextLogo from '../../../../assets/technologies/next.webp';
import androidLogo from '../../../../assets/technologies/android.png';
import mongoLogo from '../../../../assets/technologies/mongo.png';
import flutterLogo from '../../../../assets/technologies/flutter.webp';
import graphqlLogo from '../../../../assets/technologies/graphql.png';
import nodeLogo from '../../../../assets/technologies/node.webp';
import postgressLogo from '../../../../assets/technologies/postgress.png';
import devopsLogo from '../../../../assets/technologies/devops.png';
import springLogo from '../../../../assets/technologies/spring.svg';
import ContainerSlider from '../../../../components/Common/ContainerSlider/ContainerSlider';

import agileLogo from '../../../../assets/epiccoders/whyChoose/agile.png';
import secureLogo from '../../../../assets/epiccoders/whyChoose/secure.png';
import seoLogo from '../../../../assets/epiccoders/whyChoose/seo.png';
import uxLogo from '../../../../assets/epiccoders/whyChoose/ux.png';

import Navbar from '../../components/NavBar/Navbar';
import Logo from '../../../../components/Logo/Logo';

import whatsappLogo from '../../../../assets/social/blackAndWhite/whatsapp.png';
import instaLogo from '../../../../assets/social/blackAndWhite/instagram.png';

import './home.scss';

export default function HomeEpicCoders() {
    function ContactButton({ theme }) {
        return (
            <a href="tel:+919457776161">
                <Button
                    className="btn-contact-us"
                    label={'Contact Us'}
                    // onClick={() => scrollToId('FOOTER')}
                    type={'SOLID'}
                    roundedCorners
                    theme={theme}
                />
            </a>
        );
    }
    function Rating({ theme }) {
        return (
            <div className="rating-container">
                <div className={`rating ${theme === 'LIGHT' ? 'light' : 'dark'}`}>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>{' '}
                    <p className="opacity-white-text">
                        Rated 5/5 on <u>Many.</u>
                    </p>
                </div>
            </div>
        );
    }
    return (
        <>
            <Container className={'container-1 background'}>
            <Navbar />
                <div className="section1 flex-column-center">
                    <h1>Design and engineering studio.</h1>
                    <p className="opacity-white-text">
                        We create stunning, custom Webflow websites that combine beautiful design
                        with seamless functionality.
                    </p>
                    <ContactButton theme={'LIGHT'} />
                    <Rating theme={'LIGHT'} />
                </div>
            </Container>
            <Container className="container-2">
                <h2>Our services</h2>
                <p className="opacity-dark-text">
                    We offer a range of services, including web and mobile app development, UI/UX
                    design, and full stack development, to create an exceptional online presence
                    tailored to your digital needs.
                </p>
            </Container>

            <Container className="container-3">
                <Row
                    containerClass={'row'}
                    itemClass={'card background'}
                    data={[
                        {
                            heading: 'Web Development',
                            paragraph:
                                'Building custom, high-performance websites to meet your business needs.',
                            backgroundImage: service2,
                        },
                        {
                            heading: 'Mobile App Development',
                            paragraph:
                                'We develops custom mobile apps using Android and Flutter, providing smooth and engaging user experiences.',
                            backgroundImage: service1,
                        },
                        {
                            heading: 'UI/UX Design',
                            paragraph:
                                'Creating visually stunning, user-friendly designs that engage your audience.',
                            backgroundImage: service4,
                        },
                        {
                            heading: 'Full Stack Development',
                            paragraph:
                                'We provide comprehensive full stack development services, building robust and scalable solutions from front-end to back-end.',
                            backgroundImage: service3,
                        },
                    ]}
                    child={item => {
                        return (
                            <>
                                <h3>{item.heading}</h3>
                                <p className="opacity-white-text card-paragraph">
                                    {item.paragraph}
                                </p>
                                <img className="item-logo" src={item.backgroundImage} />
                            </>
                        );
                    }}
                ></Row>
            </Container>
            <Container className="container-4" contentHorizontalAlign="left">
                <h2>Our clients.</h2>
                <p className="opacity-dark-text">
                    Here are some forward thinking companies we had pleasure working with.
                </p>
                <Row
                    // Todo add logo
                    containerClass={'row-clients'}
                    itemClass={'card'}
                    data={[
                        'PROMAN',
                        'BIMRA 4x4',
                        'Newton School',
                        'Zenpact',
                        'FOX MORTGAGE',
                        'E-Cart',
                        'CITI BANK',
                        'WOW',
                        'RENTOMOJO',
                        'HEALTHIFY',
                        '24 SEVEN',
                        'T&T',
                    ]}
                    child={item => {
                        return <p>{item}</p>;
                    }}
                ></Row>
            </Container>
            <Container className={'container-5 background'}>
                <div className="left">
                    <h2 className='opacity-white-text'>What our clients are saying</h2>
                    <ContactButton theme={'LIGHT'} />
                </div>
                <div className="right">
                    <ContainerSlider>
                        <div className="card-testimonial">
                            <h4>T&T</h4>
                            <p className="testimonial-para">
                                "Epic Coder enhanced our online presence with a stunning website
                                that’s both beautiful and functional. Their professionalism and
                                attention to detail were top-notch, resulting in a significant boost
                                in user engagement. Highly recommend!"
                            </p>
                            <h5>Tina Leo</h5>
                            <p className="opacity-white-text">CEO, T&T</p>
                        </div>
                        <div className="card-testimonial">
                            <h4>24 SEVEN</h4>
                            <p className="testimonial-para">
                                "Epic Coder delivered a fantastic mobile app using Flutter. Their
                                expertise and dedication were clear throughout, and the high-quality
                                app has been a hit with our users. We’re thrilled with the results!"
                            </p>
                            <h5>Kunai G</h5>
                            <p className="opacity-white-text">CEO, 24 SEVEN</p>
                        </div>
                    </ContainerSlider>
                </div>
            </Container>
            <Container className="container-6" contentHorizontalAlign="center">
                <h2>Technologies we use</h2>
                <p className="opacity-dark-text">
                    We work with cutting-edge technologies designed to solve your product
                    requirements.
                </p>
                <Row
                    name="services-row"
                    containerClass={'technologies-container'}
                    itemClass={'technologies-item'}
                    data={[
                        {
                            title: 'React Native',
                            icon: reactNativeLogo,
                        },
                        {
                            title: 'Next.js',
                            icon: nextLogo,
                        },
                        {
                            title: 'Android',
                            icon: androidLogo,
                        },
                        {
                            title: 'Flutter',
                            icon: flutterLogo,
                        },
                        {
                            title: 'Spring Boot',
                            icon: springLogo,
                        },
                        {
                            title: 'GraphQL',
                            icon: graphqlLogo,
                        },
                        {
                            title: 'Node.js',
                            icon: nodeLogo,
                        },
                        {
                            title: 'Mongo DB',
                            icon: mongoLogo,
                        },
                        {
                            title: 'PostgreSQL',
                            icon: postgressLogo,
                        },
                        {
                            title: 'DevOps',
                            icon: devopsLogo,
                        },
                    ]}
                    child={item => {
                        return (
                            <>
                                <img className="item-logo" src={item.icon} />
                                <p className="opacity-dark-text">{item.title}</p>
                            </>
                        );
                    }}
                />
            </Container>
            <Container className={'container-7 background'} contentHorizontalAlign="left">
                <h2>Why choose Epic coders</h2>
                <div className="service-why-section">
                    <Row
                        containerClass={'service-why-left-container'}
                        itemClass="why-card"
                        data={[
                            {
                                icon: uxLogo,
                                heading: 'User-Centric Design',
                                description:
                                    'At Epic Coders, we prioritize your users with our user-centric design approach. We create intuitive, visually appealing interfaces that not only captivate but also enhance usability, ensuring a seamless and engaging experience for every visitor.',
                            },
                            {
                                icon: agileLogo,
                                heading: 'Using Agile Methodologies',
                                description:
                                    'Choose Epic Coder for our Agile approach, which ensures flexibility and adaptability throughout your project. Our iterative process allows for continuous improvement and quick adjustments to meet your evolving needs',
                            },
                            {
                                icon: seoLogo,
                                heading: 'SEO-Friendly',
                                description:
                                    'Achieve optimal search engine visibility with our SEO-friendly approach. We incorporate best practices and advanced techniques to enhance your websites ranking, ensuring it reaches the right audience and drives meaningful traffic.',
                            },
                            {
                                icon: secureLogo,
                                heading: 'Secure Solutions',
                                description:
                                    'Security is a top priority. We implement robust measures and adhere to best practices to protect your data, ensuring that your digital solutions are safeguarded against potential threats.',
                            },
                        ]}
                        child={item => (
                            <>
                                <div className="image">
                                    <img src={item.icon} />
                                </div>
                                <h3>{item.heading}</h3>
                                <p className="opacity-white-text card-paragraph">
                                    {item.description}
                                </p>
                            </>
                        )}
                    />

                    <div className="service-why-right-container">
                        <h3>Take control of your online presence</h3>
                        <img className="logos" src={faster} />
                        <ContactButton theme={'LIGHT'} />
                    </div>
                </div>
            </Container>
            <Container className="container-8" contentHorizontalAlign="left">
                <h2>Ready to scale your project to the next level?</h2>
                <p className="opacity-dark-text">
                    Let's take your project to new heights, reach out and see how we can help you.
                </p>

                <ContactButton theme={'DARK'} />
                <Rating theme={'DARK'} />
            </Container>
            <Container className="container-9" contentHorizontalAlign="left">
                <div className={'footer background'}>
                    <div className="footer-row1">
                        <Logo showSubtitle={false} />
                        <div className="link-items">
                            <div className="item flex-center">
                                <a href="https://wa.me/+919457776161" className="flex-center">
                                    <img src={whatsappLogo} />
                                </a>
                            </div>

                            <div className="item flex-center">
                                <a href="https://wa.me/+919457776161" className="flex-center">
                                    <img src={instaLogo} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <p>South Extension 42 New Delhi, India</p> */}
                    <div className="footer-row2">
                        <div className="left">
                            <p>
                                <a className="opacity-white-text" href="mailto:pixobrew@gmail.com?subject=Request for Editing Services&body=Hi,">
                                    pixobrew@gmail.com
                                </a>
                            </p>
                            <p>
                                {' '}
                                <a className="opacity-white-text" href="tel:+919457776161">+91 9457776161</a>
                            </p>
                        </div>
                        <div className="right">
                            <p>All rights reserved Epic Coders Studio</p>
                        </div>
                    </div>
                </div>
                <h2 className="about-bottom-text opacity-dark-text">
                    Epic Coders | Website Design And Development | Best Web Development Agency
                </h2>
            </Container>
        </>
    );
}

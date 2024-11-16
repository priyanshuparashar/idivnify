import { FaMagnifyingGlass, FaPhone, FaEnvelope } from "react-icons/fa6";

const Navbar = () => {
    return (
        <>
            <section className="as_header_wrapper">
                <div className="as_info_detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <a href="javascript:;">
                                            <div className="as_infobox">
                                                <span className="as_infoicon">
                                                    <FaPhone />
                                                </span>
                                                +1800 326 3264
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <div className="as_infobox">
                                                <span className="as_infoicon">
                                                    <FaEnvelope />
                                                </span>
                                                support@website.com
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="as_right_info">
                                    <div className="as_search_wrapper">
                                        <input type="text" name="" className="form-control" id="" placeholder="Search..." />
                                        <a href="#">
                                            <FaMagnifyingGlass />
                                        </a>
                                    </div>
                                    <div className="as_user">
                                        <a href="login.html">
                                            <img src="./src/assets/images/profile.jpg" alt="" />
                                            <span className="as_add_user">+</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                            <div className="as_logo">
                                <a href="index.html">
                                    <img src="./src/assets/images/logo.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-6">
                            <div className="as_right_info">
                                <div className="as_menu_wrapper">
                                    <span className="as_toggle">
                                        <img src="./src/assets/images/svg/menu.svg" alt="" />
                                    </span>
                                    <div className="as_menu">
                                        <ul>
                                            <li><a href="index.html" className="active">home</a></li>
                                            <li><a href="about.html">about us</a></li>
                                            <li><a href="javascript:;">pages</a>
                                                <ul className="as_submenu">
                                                    <li><a href="service.html">service</a></li>
                                                    <li><a href="service_single.html">service single</a></li>
                                                    <li><a href="appointments.html">appointment</a></li>
                                                    <li><a href="pricing.html">pricing plans</a></li>
                                                    <li><a href="error.html">404</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:;">shop</a>
                                                <ul className="as_submenu">
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop_single.html">Shop Single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:;">blog</a>
                                                <ul className="as_submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="blog_single.html">blog single</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="javascript:;" className="as_wishlist"><img src="./src/assets/images/svg/wishlist.svg" alt="" /></a>
                                <div className="as_cart">
                                    <div className="as_cart_wrapper">
                                        <span><img src="./src/assets/images/svg/cart.svg" alt="" /><span className="as_cartnumber">02</span></span>
                                    </div>

                                    <div className="as_cart_box">
                                        <div className="as_cart_list">
                                            <ul>
                                                <li>
                                                    <div className="as_cart_img">
                                                        <img src="./src/assets/images/p1.jpg" className="img-responsive" />
                                                    </div>
                                                    <div className="as_cart_info">
                                                        <a href="#">Yellow Sapphire</a>
                                                        <p>1 X $20.00</p>
                                                        <a href="javascript:;" className="as_cart_remove"><i className="fa fa-trash"></i></a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="as_cart_img">
                                                        <img src="./src/assets/images/p2.jpg" className="img-responsive" />
                                                    </div>
                                                    <div className="as_cart_info">
                                                        <a href="#">yantra</a>
                                                        <p>1 X $10.00</p>
                                                        <a href="javascript:;" className="as_cart_remove"><i className="fa fa-trash"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="as_cart_total">
                                            <p>total<span>$30.00</span></p>
                                        </div>
                                        <div className="as_cart_btn">
                                            <button type="button" className="as_btn">view cart</button>
                                            <button type="button" className="as_btn">checkout</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Navbar
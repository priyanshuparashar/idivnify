const LoginPage = () => {
    return(
        <>
        <section className="as_login_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="ad_login_box">
                        <div className="row">
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="as_login_slider as_padderTop70 as_padderBottom60 text-center">
                                    <div className="as_login_img">
                                        <img src="./src/assets/images/login_slide1.png" alt="" />
                                    </div>
                                    <div className="as_login_img">
                                        <img src="./src/assets/images/login_slide1.png" alt="" />
                                    </div>
                                    <div className="as_login_img">
                                        <img src="./src/assets/images/login_slide1.png" alt="" />
                                    </div>
                                    <div className="as_login_img">
                                        <img src="./src/assets/images/login_slide1.png" alt="" />
                                    </div>
                                    <div className="as_login_img">
                                        <img src="./src/assets/images/login_slide1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-7 col-sm-12">
                                <div className="as_login_detail text-center">
                                    <a href="javascript:;"><img src="assets/images/logo.svg" alt="" /></a>
                                    
                                    <h1 className="as_padderTop50">Welcome back!</h1>
                                    <p className="as_padderBottom30">Please Login to your account</p>
                                    
                                    <form action="#" className="d_block">
                                        <div className="form-group as_padderBottom10">
                                            <input type="text" name="" placeholder="Email" id="" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="" placeholder="Password" id="" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <div className="as_login_data">
                                                <label>Keep Me Signed In 
                                                     <input type="checkbox" name="as_remember_me" value="" />
                                                     <span className="checkmark"></span>
                                                </label>
                                                <a href="#">Forgot password ?</a>
                                            </div>
                                        </div>
                                        <div className="text-center as_padderTop20">
                                            <a href="index.html" className="as_btn">Sign in</a>
                                        </div>
                                    </form>
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

export default LoginPage
class locatorsPage{

    url="https://demoblaze.com/";

    // signup
    signup = "//a[@id='signin2']"
    signup_username = "//input[@id='sign-username']"
    signup_password = "//input[@id='sign-password']"
    signup_close = "//div[@id='signInModal']//button[@type='button'][normalize-space()='Close']"

    // login
    login = "//a[@id='login2']"
    login_username = "//input[@id='loginusername']"
    login_password = "//input[@id='loginpassword']"
    loginp_close = "//div[@id='logInModal']//button[@type='button'][normalize-space()='Close']"

    // cart
    cart = "//a[@id='cartur']"
    place_order = "//button[normalize-space()='Place Order']"
    place_order_name = "//input[@id='name']"
    place_order_country = "//input[@id='country']"
    place_order_city = "//input[@id='city']"
    place_order_credit_card= "//input[@id='card']"
    place_order_month = "//input[@id='month']"
    place_order_year= "//input[@id='year']"
    place_order_close= "//div[@id='orderModal']//button[@type='button'][normalize-space()='Close']"

    // About_us
    about_us = "//a[normalize-space()='About us']"
    open_video = "//div[@class='vjs-poster']"
    pause_video = "//video[@id='example-video_html5_api']"
    about_us_close = "//div[@id='videoModal']//button[@type='button'][normalize-space()='Close']"

    // Contact us
    contact = "//a[normalize-space()='Contact']"
    contact_email = "//input[@id='recipient-email']"
    contact_Name = "//input[@id='recipient-name']"
    contact_message = "//textarea[@id='message-text']"
    contact_close = "//div[@id='exampleModal']//button[@type='button'][normalize-space()='Close']"
    

    // Home
    // phones
    home = "//li[@class='nav-item active']//a[@class='nav-link']"
    home_phone = "//div[@id='contcont']//a[2]"
    phone_nexus6 = "//a[normalize-space()='Nexus 6']"
    add_to_cart = "//a[normalize-space()='Add to cart']"
    home_cart = "//a[@id='cartur']"
    cart_delete = "//a[normalize-space()='Delete']"
    
    // Laptops
    home_laptops = "//a[3]"
    laptops_sony = "//a[normalize-space()='Sony vaio i7']"
    laptops_add_to_cart = "//a[normalize-space()='Add to cart']"
    laptops_cart = "//a[@id='cartur']"
    laptops_cart_delete = "//a[normalize-space()='Delete']"

    // Monitors
    home_monitors = "//a[4]"
    monitors_apple = "//a[normalize-space()='Apple monitor 24']"
    monitors_add_to_cart = "//a[normalize-space()='Add to cart']"
    monitors_cart = "//a[@id='cartur']"
    monitors_cart_delete = "//a[normalize-space()='Delete']"
    

}

export default locatorsPage;

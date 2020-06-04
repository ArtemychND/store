<template>
    <div class="footer">
        <div class="footer-wrapper">
            <div class="footer-information">
                <h3>Furnir</h3>
                <p>
                There are many variations of passg of <br />
                Lorem ipsum available, but thmajority <br />
                have suffered altem
                </p>
                <span>Connect With Social</span>
                <a href="#"></a>
            </div>
            <div class="footer-links">
                <h4>Quick Links</h4>
                <a href="#">About</a>
                <a href="#">Dilivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Best Selling Products</a>
            </div>
            <div class="footer-account">
                <h4>My Account</h4>
                <a href="#">My account</a>
                <a href="#">Contact Us</a>
                <a href="#">Shop</a>
                <a href="#">Trending Products</a>
                <a href="#">Featured Products</a>
            </div>
            <div class="footer-contacts">
                <h4>Get in Touch</h4>
                <p></p>
            </div>
        </div>
        <div class="footer-sub-copyright"></div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.footer {
    background-color: rgb(247, 247, 247);
}

.footer-wrapper {
    padding: 30px;
    text-align: start;
    display: flex;
    justify-content: space-between;
}
.footer-information,
.footer-contacts,
.footer-links,
.footer-account {
    display: flex;
    flex-direction: column;
}
</style>

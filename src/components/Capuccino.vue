<script></script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="Box col-xs-12 col-md-4">
                <div class="img-container">
                    <img src="/images/coffee.jpg" class="img-fluid rounded-pill" alt="">
                </div>
                <div class="txt-container">
                    <h5>Americano</h5>
                    <p>100% Natural Arabica or Robusta, 30 ml Cup</p>
                    <div>                       
                        <div class="spn">
                            <font-awesome-icon :icon="['fas', 'heart']" />
                            <font-awesome-icon :icon="['fas', 'cart-flatbed']" />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-dark rounded-pill">
                        $2.50
                    </button>
                </div>
            </div>
            <div class="Box col-xs-12 col-md-4 mt-sm-5 mt-md-0 mr-sm-0 mr-md-2">
                <div class="img-container">
                    <img src="/images/coffee.jpg" class="img-fluid rounded-pill" alt="">
                </div>
                <div class="txt-container">
                    <h5>Americano</h5>
                    <p>100% Natural Arabica or Robusta, 30 ml Cup</p>
                    <div>                       
                        <div class="spn">
                            <font-awesome-icon :icon="['fas', 'heart']" />
                            <font-awesome-icon :icon="['fas', 'cart-flatbed']" />
                        </div>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-dark rounded-pill">
                        $2.50
                    </button>
                </div>
            </div>
            <div class="col-xs-12 col-md-4 mt-sm-5 mt-md-0">
                <h2 class="heading mb-4">Lorem Ipsum is simply dummy text of</h2>
                <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eius commodi minima doloribus iste nulla.</p>
                <button class="color-btn">Learn More</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.img-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.img-fluid{
    widows: 150px;
    height: 150px;
    box-shadow: 0 0 20px rgb(50, 50, 50);
}
.Box{
    background-color: #faebd7;
    padding: 10px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}
.txt-container{
    font-size: 14px;
}
.btn{
    width: 180px;
}
.spn{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    font-size: 20px;
    padding-bottom: 10px;
}
.heading{
    font-size: 25px;
    font-weight: 700;
}
.color-btn{
    border: none;
    background-image: linear-gradient(to right, #000, #ff9203);
    color: white;
    padding: 4px 8px;
    border-radius: 40px;
    font-weight: 700;
}
@media screen and (max-width: 575px) {
    .Box{
        margin-top: 40px;
    }
}
</style>
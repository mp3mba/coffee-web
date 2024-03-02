<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <h3 class="fw-bolder">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, facilis.
                </h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla nostrum nesciunt voluptas repellat ex maxime repellendus? Corporis aperiam odio praesentium.
                </p>
                <button class="color-btn">
                    Learn More
                </button>
            </div>
            <div class="col-sm-12 col-md-6 box-img d-flex justify-content-md-end justify-content-sm-center">
                <img src="/images/coffee1.jpg" class="img-fluid rounded-pill" alt="...">
            </div>
        </div>
    </div>
</template>

<style scoped>
    .img-fluid{
        width: 300px;
        height: 300px;
        box-shadow: 0 0 30px black;
    }
    .box-img{
        display: flex;
        justify-content: end;
    }
    .color-btn{
    border: none;
    background-image: linear-gradient(to right, #000, #ff9203);
    color: white;
    padding: 4px 8px;
    border-radius: 40px;
    font-weight: 700;
}
.para{
    padding: 16px;
    background-color: #faebd7;
    border-radius: 15px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <img src="/images/app.jpg" class="img-fluid" alt="">
            </div>
            <div class="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                <h3 class="fw-bolder w-100">App is Available</h3>
                <p class="fs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate laudantium consequatur expedita fugiat dolor exercitationem, asperiores, minima recusandae voluptates rerum saepe illo inventore tenetur quaerat accusamus porro?</p>
                <p class="w-100">
                    <span class="ml spn">
                        <font-awesome-icon :icon="['fas', 'apple-whole']" size="1x" />
                    </span>
                    <span class="spn">
                        <font-awesome-icon :icon="['fas', 'vr-cardboard']" size="1x" />
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.spn{
    background-color: #fffaef;
    border-radius: 20px;
    padding: 10px;
}
.fs{
    font-size: 16px;
}
.ml{
    margin-right: 30px;
}
</style>
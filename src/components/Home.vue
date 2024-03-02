<script>
</script>

<template>
    <div class="continer">
        <div class="row">
            <div class="col-xs-12 col-md-6 mt-5">
                <h1 class="h1">
                    coffee <br> the best for you
                </h1>
                <button type="button" class="btn btn-dark rounded-pill mt-4">
                    Coffee Shop
                </button>
                <div class="mt-5 span-icons">
                    <span class="spn">
                        <font-awesome-icon :icon="['fas', 'mug-saucer']" size="2x" />
                    </span>
                    <span class="spn">
                        <font-awesome-icon :icon="['fas', 'mug-hot']" size="2x" />
                    </span>
                    <span class="spn">
                        <font-awesome-icon :icon="['fas', 'trophy']" size="2x" />
                    </span>
                    <span class="spn">
                        <font-awesome-icon :icon="['fas', 'seedling']" size="2x" />
                    </span>
                </div>
            </div>
            <div class="col-xs-12 col-md-6 d-flex justify-content-md-end justify-content-sm-center mt-5">
                <img src="/images/coffee2.jpg" class="img-fluid rounded-pill" alt="...">
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.span-icons{
    margin-top: 15px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 20px;
}
.spn{
    background-color: #fffaef;
    border-radius: 20px;
    padding: 10px;
}

.h1{
    font-size: 60px;
    text-transform: capitalize;
    font-weight: 800;
}

.btn{
    box-shadow: 0 0 10px black;
}

@media screen and (min-width: 800px) {
    .img-fluid{
        width: 380px;
        height: 380px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 30px rgb(50, 50, 50);
    }
}

@media screen and (max-width: 768px) {
    .img-fluid{
        width: 400px;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 30px rgb(50, 50, 50);
    }
}
</style>

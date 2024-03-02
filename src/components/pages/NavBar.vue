<template>
    <nav class="navbar navbar-expand-md navbar-light bg-tra">
        <div class="container-fluid">
            <button class="navbar-toggler border border-2 border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-md-flex justify-content-between align-items-center" id="navbarTogglerDemo01">
                <div>
                    <a class="navbar-brand text-uppercase fw-bolder" href="#">coffee shop</a>
                </div>
                <div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active fw-bolder" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bolder" aria-current="page" href="#">Coffee Menu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active fw-bolder" aria-current="page" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-dark rounded-pill ">Coffee Shop</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>
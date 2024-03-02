<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-6 col-md-3">
                <a class="navbar-brand text-uppercase fw-bolder" href="#">coffee shop</a>
            </div>
            <div class="col-sm-6 col-md-3">
                <h4 class="header">
                    Our Services
                </h4>
                <p>
                    Pricing
                </p>
                <p>
                    Tracking
                </p>
                <p>
                    Reporting a Bug
                </p>
                <p>
                    Terms of Service
                </p>
            </div>
            <div class="col-sm-6 col-md-3">
                <h4 class="header">
                    Our Company
                </h4>
                <p>
                    Pricing
                </p>
                <p>
                    Tracking
                </p>
                <p>
                    Reporting a Bug
                </p>
                <p>
                    Terms of Service
                </p>
            </div>
            <div class="col-sm-6 col-md-3">
                <h4 class="header">
                    Address
                </h4>
                <p>
                    <font-awesome-icon :icon="['fas', 'square-phone']" /> +255 769 323 980
                </p>
                <p>
                    <font-awesome-icon :icon="['fas', 'envelope']" /> Mwanza, Tanzania
                </p>
                <p>
                    <font-awesome-icon :icon="['fas', 'location-dot']" /> Earth
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header{
        font-weight: 800;
    }
</style>
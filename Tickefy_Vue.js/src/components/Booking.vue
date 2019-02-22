<template>
    <article class="booking" v-bind:id="booking.code">
        <section class="what">
            <p class="type">who</p>
            <h1>{{ booking.event.artist }}</h1>
        </section>
        <section class="where">
            <p class="type">Where</p>
            <h2>{{ booking.event.where.venue }}</h2>
            <p>{{ booking.event.where.adress }}</p>
        </section>
        <section class="when">
            <p class="type">When</p>
            <h2>{{ booking.event.when.date }}</h2>
        </section>
        <section class="from">
            <p class="type">From</p>
            <h2>{{ booking.event.when.startTime }}</h2>
        </section>
        <section class="to">
            <p class="type">To</p>
            <h2>{{ booking.event.when.endTime }}</h2>
        </section>
        <section class="info">
            <p class="type">Info</p>
            <p>{{ booking.event.info }}</p>
        </section>
        <section class="code">
            <h1 class="barcode">
                {{ booking.code }}
            </h1>
            <p class="utfcode">#{{ booking.code }}</p>
        </section>
    </article>
</template>

<script>
export default {
    name: 'booking',
    props: ['booking']
}
</script>

<style lang="scss">
@import '../scss/variables';
$baseline: 18px;
.booking {
    max-width: 18rem;
    background: white;
    box-shadow: 0 0 3rem rgba($color: #000000, $alpha: .15);
    width: 100%;
    margin: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30px;
    grid-template-rows: auto $baseline*6 $baseline*4 $baseline*5 $baseline*6;
    border-radius: .25rem;
    grid-template-areas: 
    "what what what"
    "where where where"
    "when from to"
    "info info info"
    "code code code";
    .type {
        padding: .75rem 0 0 1rem;
        margin: 0;
        font-size: .6rem;
        letter-spacing: .05rem;
        font-weight: 600;
        color: rgba($color: #000, $alpha: .5);
        text-transform: uppercase;
    }
    h2 {
        margin: 0;
        font-size: 1.25rem;
        padding: .125rem 1rem;
        font-weight: 500;
        color: rgba($color: #000, $alpha: .8);
    }
    p {
        padding: .25rem 1rem;
        margin: 0;
        color: rgba($color: #000, $alpha: .8);
    }
    .what {
        grid-area: what;
        border-bottom: 1px dotted rgba($color: #000, $alpha: .4);
        background: rgba($color: #000, $alpha: 0);
        h1 {
            margin: 0;
            color: $pink;
            padding: 0 0 1rem 1rem;
            font-size: 2rem;
        }
    }
    .where {
        grid-area: where;
        background: rgba($color: #000, $alpha: 0.03);
        border-bottom: 1px dotted rgba($color: #000, $alpha: .4);
    }
    .when {
        grid-area: when;
        background: rgba($color: #000, $alpha: 0.06);
        overflow: hidden;
    }
    .from {
        grid-area: from;
        background: rgba($color: #000, $alpha: 0.06);
        border-left: 1px dotted rgba($color: #000, $alpha: .4);
        border-right: 1px dotted rgba($color: #000, $alpha: .4);
    }
    .to {
        grid-area: to;
        background: rgba($color: #000, $alpha: 0.06);
    }
    .info {
        grid-area: info;
        background: rgba($color: #000, $alpha: 0.1);
        border-top: 1px dotted rgba($color: #000, $alpha: .4);
        border-bottom: 1px dotted rgba($color: #000, $alpha: .4);
    }
    .code {
        grid-area: code;
        background: rgba($color: #000, $alpha: 0.13);
        @extend %center;
        flex-direction: column;
        justify-content: center;
        .barcode {
            font-family: 'Libre Barcode 128', cursive;
            margin: 1rem 0 0 0;
            padding: 0;
            font-size: 5rem;
            font-weight: 100;
        }
        .utfcode {
            margin: -1.5rem 0 0 0;
            padding: 0;
            color: rgba(0, 0, 0, .6);
            letter-spacing: .25rem;
        }
    }
}
</style>
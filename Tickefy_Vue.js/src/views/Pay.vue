<template>
    <main id="pay">
        <section class="content" v-if="event">
        <p>You are about to score some sweet tickets to</p>
        <h1>{{ event.artist }}</h1>
        <p class="when">{{ event.when.date }} {{ event.when.startTime }} - {{ event.when.endTime }}</p>
        <p class="where">@ {{ event.where.venue }}</p>
        <section class="counter">
          <article class="price">{{ event.price * amount }} sek</article>
          <button class="decrese" @click="amount--" :disabled="amount==0">
            <img src="../assets/decrese.svg" alt="decrese">
          </button>
          <article class="num-tickets">{{ amount }}</article>
          <button class="increse" @click="amount++ " :disabled="amount==6">
            <img src="../assets/increse.svg" alt="increse">
          </button>
        </section>
        <p v-visible="amount==6">Max 6 tickets per person!</p>
        <a href="#" class="btn"  @click="buy">Take my money!</a>
        <a href="#" class="btn"  @click="$router.push('/events')">I regret my decision</a>
        </section>
        <section class="content" v-if="!event">
          <p>No ticket selected.</p>
          <a href="#" class="btn" @click="$router.push('/events')">Go to events</a>
        </section>
        <pager :activeStep="activeStep"/>
    </main>
</template>

<script>
import pager from '@/components/Pager';
export default {
  name: 'pay',
  data(){
    return {
      activeStep: 2,
      amount: 1,
    }
  },
  components: {
    pager
  },
  computed: {
    event(){
      return this.$store.state.event;
    }
  },
  methods: {
    buy(){
      if (this.amount > 0) {
      this.$store.dispatch('buy', { event: this.event._id, amount: this.amount });
      this.$router.push('/bookings');
      }
    }
  }
}
</script>
<style lang="scss">
@import '../scss/variables';
#pay {
  @extend %mobileFirst;
  background: $darkblue;
  display: flex;
  flex-direction: column;
  .content {
    flex: 7;
    @extend %center;
    flex-direction: column;
    a {
      &.btn {
        max-width: 80vw;
        width: 100%;
        border-radius: 3px;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 700;
        background: $green;
        height: 4rem;
        margin-top: 1.5rem;
        @extend %center;
      }
    }
    p {
      color: rgba($color: #fff, $alpha: .7);
      font-size: 1.2rem;
      font-style: italic;
      padding: 2rem 3rem;
      text-align: center;
      padding: 1rem;
      margin: 0;
    }
    h1 {
      color: $pink;
      font-size: 2.4rem;
      text-align: center;
      line-height: 2.4rem;
      margin: .5rem 2.6rem;
      text-shadow: 1px 1px 0 rgba($color: #fff, $alpha: .1); 
    }
    .when {
      font-size: 1.2rem;
      font-weight: 700;
      color: $green;
      text-align: center;
      margin: 0;
      padding: .25rem 0;
    }
    .where {
      font-size: 1.2rem;
      color: rgba($color: #fff, $alpha: .6);
      text-align: center;
      margin: 0;
      padding: 0;
    }
    .counter {
      max-width: 14rem;
      width: 100%;
      margin: 2rem 0;
      border: .125rem solid $pink;
      border-radius: 4px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 4rem;
      font-size: 1.6rem;
      color: white;
      .price {
        grid-column: 1/4;
        @extend %center;
        border-bottom: 1px solid $pink;
      }
      .increse {
        @extend %center;
        background: none;
        border-style: solid;
        border-width: 0px 0px 0px 1.5px;
        border-color:  $pink;
      }
      .decrese {
        @extend %center;
        background: none;
        border-style: solid;
        border-width: 0px 1.5px 0px 0px;
        border-color:  $pink;
      }
      .num-tickets {
        @extend %center;
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
  }
}
</style>
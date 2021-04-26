<template>
  <body>
    <article>
      <h1>{{ Intro }}</h1>
      <p>
        Choose your location to report an issue (s). <br />
        Share an update or report a crime
      </p>
    </article>

    <main>
      <h2>FAQs</h2>
      <div>
        <strong>How we use your data</strong>
        <p>
          We decided to use this independent and generalized approach to
          coordinate-based data collection rather than utilize a tracker-based
          technology. It avoids the need to attach GPS trackers to individual
          cattle to enable effective monitoring.
        </p>
      </div>
      <div>
        <strong>Government regulations</strong>
        <p>Use</p>
      </div>

      <div>
        <strong>Government regulations</strong>
        <p>Use</p>
      </div>
    </main>

    <Footer />
  </body>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: { Footer },
  data() {
    return {
      isRedColor: "red",
      Intro: "Ecological Monitoring App",
      selectedIndex: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
body {
  main {
    width: 90%;
    margin: auto;
  }
  article {
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.234),
        rgba(0, 0, 0, 0.529)
      ),
      url("../assets/leo.png");
    background-repeat: no-repeat;
    margin: auto;
    width: 100%;

    padding: 2.5rem 0;

    p,
    h1 {
      color: #fbfbfb;
      padding-left: 1.5rem;
    }

    h1 {
      margin-top: 0;
      color: #fbfbfb;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: 400;
    }
  }
}
</style>

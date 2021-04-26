<template>
  <body>
    <article>
      <h1>{{ Intro }}</h1>
      <p>
        How we use your data for for the benefit of all
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
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown types
        </p>
      </div>

      <div>
        <strong>Declarations</strong>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown types
        </p>
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
    <p>
      Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
      laying out print, graphic or web designs. The passage is attributed to an
      unknown types
    </p>;
    return {
      isRedColor: "red",
      Intro: "Terms of data usage",
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
  p {
    font-weight: 300 !important;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-align: justify;
  }
  strong {
    color: #505050;
    font-weight: 500;
    font-size: 12px;
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

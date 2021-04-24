<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Choose your location to report an issue (s).
        </p>
      </aside>
    </main>

    <section class="section-cover-1">
      <strong>Share update or report a crime</strong>
      <br /><br />
      <div class="sign-up-sec">
        <div><p>Select your location:</p></div>
        <select name="cars" class="docs">
          <option value="volvo">Ololosoloko</option>
          <option value="saab">Documents</option>
          <option value="opel">Monograph</option>
          <option value="audi">Periodical</option>
        </select>
      </div>
    </section>

    <section class="section-cover">
      <div class="data-categories">
        <div @click="buttonisPressed(0)" :style="getStyle(0)" class="sec-one">
          <i class="fas fa-hippo"></i>
          <p>Species citing</p>
        </div>
        <div @click="buttonisPressed(1)" class="sec-one" :style="getStyle(1)">
          <i class="fas fa-paw"></i>
          <p>Park boundary trespassing</p>
        </div>
      </div>

      <div class="data-categories">
        <div @click="buttonisPressed(2)" class="sec-one" :style="getStyle(2)">
          <i class="fas fa-horse"></i>
          <p>Livestock grazing</p>
        </div>
        <div @click="buttonisPressed(3)" class="sec-one" :style="getStyle(3)">
          <i class="fas fa-cloud"></i>
          <p>Weather report</p>
        </div>
      </div>
    </section>

    <section class="home-control">
      <div>
        <a href="/"
          ><button>
            <i class="fas fa-house-user" style="font-size: 20px;"></i></button
        ></a>
      </div>
      <div>
        <button class="submit-report" type="submit">
          <a href="send-message">Submit report</a>
        </button>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      isRedColor: "red",
      Intro: "Ecological Monitoring App",
      selectedIndex: 0,
    };
  },

  methods: {
    async buttonisPressed(index) {
      this.selectedIndex = index;
    },

    getStyle(index) {
      return this.selectedIndex == index
        ? {
            "border-radius": "4px",
            "background-color": "#505050",
            color: "#fff",
          }
        : {};
    },

    submissionStatus() {
      // alert("Data submitted successfully!");
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  body {
    p {
      font-weight: 300 !important;
      font-size: 12px;
      letter-spacing: 0.2px;
    }
    main {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.234),
          rgba(0, 0, 0, 0.529)
        ),
        url("../assets/leo.png");
      background-repeat: no-repeat;
      margin: auto;
      width: 100%;

      aside {
        padding: 3rem 1rem 2rem 1.5rem;

        p {
          color: #fbfbfb;
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

    .home-control {
      background: #649c0f;
      bottom: 0;
      left: 0;
      position: absolute;
      outline: none;
      padding: 0.5rem 0;
      font-size: 12px;
      color: #fff;
      width: 100%;
      margin-top: 2.5rem;
      display: flex;
      justify-content: space-between;

      button:hover {
        background: green;
      }

      p {
        font-size: 12px;
      }
    }

    select {
      width: 35%;
      height: 35px;
      border-radius: 3px;
      padding: 0.5rem 0;
      background: #ffffff;
      border: 1px solid #649c0f;
    }

    select:hover {
      outline: none;
    }

    button {
      cursor: pointer;
      height: 40px;
      padding: 0 1rem;
      width: 100%;
      background: #649c0f;
      border-radius: 3px;
      border: none;
      border-style: none;
      outline: none;
      border: 1px solid #649c0f;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #fff;
    }

    .data-categories {
      display: flex;
      margin-top: 1rem;

      p {
        margin: 6px 0;
        font-size: 13px;
      }

      img {
        width: 100%;
      }

      .sec-one {
        width: 100%;
        padding: 0.3rem;

        p {
          font-size: 14px;
          text-align: center;
        }

        i {
          font-size: 3.5rem;
          padding: 1rem 2rem;
          color: #649c0f;
        }
      }
    }

    .section-cover-1 {
      display: block;
      background-color: #fff;
      padding: 20px 15px;
      width: 90%;

      .sign-up-sec {
        display: flex;
        justify-content: space-between;

        p {
          font-size: 14px;
        }
      }
    }

    .section-cover {
      display: block;
      background-color: #fff;
      padding: 20px 15px;
      border-radius: 16px;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
      margin-top: -4rem;
      width: 90%;
      margin: auto;

      h2 {
        font-size: 20px;
      }
    }
  }
}
</style>

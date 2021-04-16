<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Share your location data here
        </p>
      </aside>
    </main>

    <section class="section-cover">
      <p>Share update or report a crime</p>
      <div class="sign-up-sec">
        <div><p>Select a location</p></div>
        <select name="cars" class="docs">
          <option value="volvo">Ololosoloko</option>
          <option value="saab">Article</option>
          <option value="saab">Report</option>
          <option value="saab">Media</option>
          <option value="saab">Documents</option>
          <option value="opel">Monograph</option>
          <option value="audi">Periodical</option>
        </select>
      </div>
    </section>

    <section class="section-cover">
      <div class="data-categories">
        <div @click="buttonisPressed(0)" :style="getStyle(0)" class="sec-one">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
        <div @click="buttonisPressed(1)" class="sec-one" :style="getStyle(1)">
          <img src="../assets/tiger.png" alt="" />
          <p>Park boundary trespassing</p>
        </div>
      </div>

      <div class="data-categories">
        <div @click="buttonisPressed(2)" class="sec-one" :style="getStyle(2)">
          <img src="../assets/tiger.png" alt="" />
          <p>Livestock grazing</p>
        </div>
        <div @click="buttonisPressed(3)" class="sec-one" :style="getStyle(3)">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
      </div>
    </section>

    <section class="home-control">
      <div>
        <a href="/"><button>Home</button></a>
      </div>
      <div>
        <button type="submit">Submit</button>
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
            "border-radius": "3px",
            "background-color": "#649c0f",
            color: "#fff",
          }
        : {};
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
      outline: none;
      padding: 0.5rem 0;
      font-size: 12px;
      color: #fff;
      width: 100%;
      margin-top: 3rem;
      display: flex;
      justify-content: space-around;

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
        //border: 1px solid rgba(221, 221, 221, 0.652);
        width: 100%;
        padding: 0.3rem;
      }
    }

    .section-cover {
      width: 90%;
      margin: auto;

      h2 {
        font-size: 20px;
      }
      .sign-up-sec {
        display: flex;
        justify-content: space-between;

        p {
          font-size: 14px;
        }
      }
    }
  }
}
</style>

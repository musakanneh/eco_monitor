<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Share your location information
        </p>
      </aside>
    </main>

    <section class="section-cover">
      <h2>Daily update</h2>
      <div class="sign-up-sec">
        <div><p>Select a location to share from</p></div>
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
      <br />
      <div class="data-categories">
        <div class="sec-one">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
        <div class="sec-one">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
      </div>
      <div class="data-categories">
        <div class="sec-one">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
        <div class="sec-one">
          <img src="../assets/tiger.png" alt="" />
          <p>Human Wildlife Conflict</p>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  data() {
    return {
      Intro: "Ecological Monitoring Application",
    };
  },
};
</script>

<style lang="scss" scoped>
body {
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
      padding: 3rem 1rem 5rem 1.5rem;

      p {
        color: #fbfbfb;
      }

      h1 {
        margin-top: 0;
        color: #fbfbfb;
        font-size: 24px;
      }
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
</style>

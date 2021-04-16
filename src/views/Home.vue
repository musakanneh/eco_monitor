<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Access your account share your location information
        </p>
      </aside>
    </main>

    <section class="access-account">
      <form @submit.prevent="pressed">
        <p>Resister</p>
        <div class="email"><input type="email" placeholder="email" /></div>
        <div class="password">
          <input type="password" placeholder="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </section>

    <section class="sign-up-sec">
      <div><p>Don't have an account?</p></div>
      <div>
        <a href="/"> <button>Sign Up</button></a>
      </div>
    </section>
  </body>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "home",

  computed: {},

  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "ShareData" });
        console.log(user);
      } catch (err) {
        alert(err);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      Intro: "The Ecological Monitoring Application",
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  body {
    background-color: rgba(221, 221, 221, 0.412);

    main {
      background-image: url("../assets/banner.png");
      background-repeat: no-repeat;
      margin: auto;
      width: 100%;
      margin-bottom: 2rem;

      aside {
        padding: 6rem 1rem 8rem 1.5rem;

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

    .access-account {
      margin: auto;
      width: 85%;
      margin-top: 1rem;

      input {
        font-family: "Raleway", sans-serif;
        width: 80%;
        height: 35px;
        border: 1px solid #649c0f;
        padding: 0 30px;
        color: rgb(106, 106, 106);
        font-size: 13px;
        border-radius: 2px;
        margin-bottom: 15px;
      }

      input:focus {
        outline: none;
      }
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

    .sign-up-sec {
      width: 85%;
      margin: auto;
      margin-top: 2rem;
      display: flex;
      padding-bottom: 4rem;
      justify-content: space-between;

      p {
        font-size: 12px;
      }
    }
  }
}
</style>

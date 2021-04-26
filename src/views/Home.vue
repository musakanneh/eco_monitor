<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Access your account to share your location data
        </p>
      </aside>
    </main>

    <section class="access-account">
      <form @submit.prevent="authenticateUserLogin">
        <br />
        <strong>User login</strong>
        <div class="phone-number">
          <input type="text" placeholder="Phone number" />
        </div>
        <div class="password">
          <input type="text" placeholder="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>

      <section class="sign-up-sec">
        <div><p>Don't have an account?</p></div>
        <div>
          <a href="/register"> <button>Register</button></a>
        </div>
      </section>
    </section>

    <section class="home-control">
      <div><p>All right reserved @ Eco Monitor 2021</p></div>
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
    async authenticateUserLogin() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "ShareData" });
        console.log(user);
      } catch (err) {
        alert("Invalid username or password");
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
    p {
      font-size: 12px;
      font-weight: 300;
    }

    .home-control {
      position: sticky;
      bottom: 0px;
      background-color: #fff;
      box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
      left: 0;
      position: absolute;
      outline: none;
      padding: 1.5rem 0;
      font-size: 12px;
      color: #303030;
      width: 100%;
      text-align: center;

      button:hover {
        background-color: green;
      }

      p {
        font-size: 12px;
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
      font-size: 12px;
      color: #fff;
    }

    .sign-up-sec {
      width: 100%;
      margin: auto;
      margin-top: 2.5rem;
      display: flex;
      padding-bottom: 2rem;
      justify-content: space-between;

      p {
        font-size: 12px;
      }
    }

    main {
      background-image: url("../assets/banner.png");
      background-repeat: no-repeat;
      margin: auto;
      width: 100%;
      margin-bottom: 3.3rem;

      aside {
        padding: 4rem 1rem 3rem 1.5rem;

        p {
          color: #fbfbfb;
        }

        h1 {
          margin-top: 0;
          line-height: 1.5rem;
          color: #fbfbfb;
          font-size: 20px;
          font-weight: 400;
        }
      }
    }

    .access-account {
      display: block;
      background-color: #fff;
      padding: 20px 15px;
      border-radius: 16px;
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0);
      margin-top: -4rem;

      input {
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 90%;
        padding: 10px 15px;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #333;
        font-size: 18px;
        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
        background-color: #f3f3f3;
        transition: 0.4s;

        &::placeholder {
          color: #888;
          transition: 0.4s;
        }
      }

      &:focus-within {
        label {
          color: #ea526f;
        }

        input[type="text"] {
          background-color: #fff;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

          &::placeholder {
            color: #666;
          }
        }
      }
    }
  }
}
</style>

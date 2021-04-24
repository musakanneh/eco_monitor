<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Write message
        </p>
      </aside>
    </main>

    <section class="access-account">
      <form @submit.prevent="authenticateUserLogin">
        <br />
        <div class="email">
          <textarea type="email" placeholder="Write your message here" />

          <div class="content">
            <input type="checkbox" id="" name="" value="" />
            <p>I consent to receiving in-app nitifications reguarly</p>
          </div>
        </div>
        <div>
          <button @click="submitData()" type="submit">Submit data</button>
        </div>
      </form>
    </section>
  </body>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "home",

  computed: {},

  data() {
    return {
      email: "",
      password: "",
      error: "",
      Intro: "Input your data below",
    };
  },

  methods: {
    async authenticateUserLogin() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        this.$router.replace({ name: "/" });
        console.log(user);
      } catch (err) {
        alert("Invalid username or password");
      }
    },
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

    .content {
      width: 95%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      input,
      p {
        margin: 0;
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
      margin-top: -4rem;

      textarea {
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 90%;
        padding: 25px 15px;
        border-radius: 5px;
        margin-bottom: 20px;
        color: #333;
        font-size: 14px;
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

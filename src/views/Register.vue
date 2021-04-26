<template>
  <body>
    <main>
      <aside>
        <h1>{{ Intro }}</h1>
        <p>
          Register to acecss your account
        </p>
      </aside>
    </main>

    <section class="access-account">
      <form>
        <strong>User registration</strong>
        <div class="f-name">
          <input type="First name" placeholder="First name" />
        </div>
        <div class="l-name">
          <input type="Last name" placeholder="Last name" />
        </div>
        <div class="password">
          <input type="Password" placeholder="Password" />
        </div>
        <div class="password">
          <input type="Confirm password" placeholder="Confirm password" />
        </div>
        <div class="password">
          <input type="Phone number" placeholder="Phone number" />
        </div>
      </form>
      <div>
        <a href="shareData"> <button>Register</button></a>
      </div>

      <section class="sign-up-sec">
        <div><p>Already have an account?</p></div>
        <div>
          <a href="/"> <button>Login</button></a>
        </div>
      </section>
    </section>

    <Footer />
  </body>
</template>

<script>
import Footer from "@/components/Footer.vue";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "home",

  components: { Footer },

  computed: {},

  // methods: {
  //   async authenticateUserLogin() {
  //     try {
  //       const user = firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(
  //           this.firstName,
  //           this.lastName,
  //           this.phoneNumber
  //         );
  //       this.$router.replace({ name: "send-message" });
  //       console.log(user);
  //     } catch (err) {
  //       alert("Invalid username or password");
  //     }
  //   },
  // },

  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      error: "",
      Intro: "User registration",
    };
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px) {
  body {
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

        p {
          font-weight: 300 !important;
          font-size: 12px;
          line-height: 18px;
          letter-spacing: 0.2px;
          text-align: justify;
        }

        h1 {
          margin-top: 0;
          line-height: 1.5rem;
          color: #fbfbfb;
          font-size: 20px;
          letter-spacing: 0.2px;
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
      margin-top: 1.5rem;
      display: flex;
      padding-bottom: 2rem;
      justify-content: space-between;

      p {
        font-size: 12px;
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
        margin: 15px 0;
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

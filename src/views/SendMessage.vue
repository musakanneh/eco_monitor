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
      <form v.on:submit.prevent="add">
        <br />

        <div>
          <div class="email">
            <textarea v-model="text.text" placeholder="Enter report" />
          </div>

          <article>
            <p>
              By submitting this data, you wave the permission to share it with
              others for the safety of the community
            </p>
            <aside>
              <input type="radio" />
              <p>Do you wish to receive in-app notifications?</p>
            </aside>
          </article>

          <button type="submit" value="add">
            Submit data
          </button>
        </div>
      </form>
    </section>

    <Footer />
  </body>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import firebase from "firebase";
// import toastr from "toastr";

// let config = {
//   apiKey: "AIzaSyBs2nmguHUoj63mLmPgYMo9kJgGOlwVrUc",
//   authDomain: "eco-monitor-90a2f.firebaseapp.com",
//   projectId: "eco-monitor-90a2f",
//   storageBucket: "eco-monitor-90a2f.appspot.com",
//   messagingSenderId: "117749325643",
//   appId: "1:117749325643:web:6a57bdbd73cba004fc92ce",
// };

// let app = firebase.initializeApp(config);
// let db = app.database();
// let textRef = db.ref("text");

export default {
  name: "message",
  components: { Footer },

  firebase: {
    // texts: textRef,
  },

  data() {
    return {
      text: {
        text: "",
      },
      Intro: "The Ecological Monitoring Application",
    };
  },

  methods: {
    add() {
      textRef.push(this.text);
      this.text.text = "";
      this.submitMessage();
      //   toastr.success("Submitted successfully!");
    },

    submitMessage() {
      alert("Message added!");
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

    article {
      width: 98%;
      margin: auto;
      margin-bottom: 2.5rem;

      aside {
        display: flex;
        justify-content: space-evenly;
        align-items: left !important;
        width: 75%;

        p,
        input {
          margin: 0;
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
      border-radius: 16px 16px 0 0;
      box-shadow: 0 0 12px rgba(0, 0, 0, 0);
      margin-top: -5rem;

      textarea {
        appearance: none;
        border: none;
        outline: none;
        background: none;
        display: block;
        width: 90%;
        padding: 50px 15px;
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
        textarea[type="text"] {
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

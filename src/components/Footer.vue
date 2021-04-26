<template>
  <div>
    <footer>
      <a href="/"> <p>Logout</p></a>
      <div>
        <a href="/shareData">
          <img src="../assets/logo1.png" alt="" />
        </a>
      </div>

      <div>
        <a href="faq"> <p>FAQs</p></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: #474747;
  box-shadow: 0px 0px 12px rgba(100, 100, 100, 0.2);
  bottom: 0;
  left: 0;
  position: absolute;
  margin-top: 2.5rem;
  padding: 0.5rem 0;
  outline: none;
  font-size: 12px;
  color: #fff;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  a {
    color: #fff;
  }

  img {
    color: #649c0f;
  }
}
</style>

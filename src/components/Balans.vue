<template>
  <div :class="$style.conteiner">
    <div :class="$style.logIn">
      <div :class="$style.title">Balans</div>
      <div :class="$style.signIn">Войти</div>
      <div :class="$style.signUp">Зарегистрироваться</div>
    </div>
    <form action="#" :class="$style.form">
      <div>
        <input type="text" placeholder="введите email" :class="$style.input" />
      </div>
      <div>
        <input type="text" placeholder="введите пароль" :class="$style.input" />
      </div>
      <div>
        <input
          type="text"
          placeholder="введите номер карты"
          :class="$style.input"
        />
      </div>
      <div>
        <input type="text" placeholder="введите мм/гг" :class="$style.input" />
      </div>
      <div>
        <input
          type="text"
          placeholder="введите cvc код"
          :class="$style.input"
        />
      </div>
    </form>
  </div>
</template>
<style lang="scss" module>
.conteiner {
  max-width: 1100px;
  margin: 0 auto;
}
.logIn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0 30px 0;
}
.signUp {
  margin: 0 0 0 10px;
}
.title {
  font-size: 30px;
  text-align: center;
  margin: 0 270px 0 0;
}
.form {
  text-align: center;
}
.input {
  padding: 0 0 0 5px;
  width: 50%;
  height: 40px;
  margin: 0 0 20px 0;
  color: #2e2d28;
  border-color: #706d51;
}
</style>

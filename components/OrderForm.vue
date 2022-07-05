<template>
    <div class="row justify-content-center d-none">
<!--        <div class="col-lg-4 col-sm-12 text-center">-->
<!--            <div>-->
<!--                <b-button v-b-modal.modal-1 class="order-btn">Замовити</b-button>-->

<!--                <b-modal id="modal-1" title="Замовити">-->
<!--                    <b-form name="order">-->
<!--                        <label for="name" class="popup-label mt-2">Iм'я</label>-->
<!--                        <b-form-input-->
<!--                            id="name"-->
<!--                            :state="nameState"-->
<!--                            v-model="formData.name"-->
<!--                            type="text"-->
<!--                            placeholder="Введiть iм'я"-->
<!--                        ></b-form-input>-->
<!--                        <div v-if="errors.name" class="error">{{errors.name}}</div>-->
<!--                        <label for="email" class="popup-label mt-2" >Email</label>-->
<!--                        <b-form-input-->
<!--                            id="email"-->
<!--                            v-model="formData.email"-->
<!--                            type="email"-->
<!--                            :state="emailState"-->
<!--                            placeholder="Введiть email"-->
<!--                        ></b-form-input>-->
<!--                        <div v-if="errors.email" class="error">{{errors.email}}</div>-->
<!--                        <label for="tel" class="popup-label mt-2">Teлефон</label>-->
<!--                        <b-form-input-->
<!--                            id="tel"-->
<!--                            :state="telState"-->
<!--                            v-model="formData.tel"-->
<!--                            type="tel"-->
<!--                            placeholder="Введiть номер телефону"-->
<!--                        ></b-form-input>-->
<!--                        <div v-if="errors.tel" class="error">{{errors.tel}}</div>-->
<!--                        <label for="message" class="popup-label mt-2">Текст повiдомлення</label>-->
<!--                        <b-form-textarea-->
<!--                            id="message"-->
<!--                            :state="messageState"-->
<!--                            v-model="formData.message"-->
<!--                            placeholder="Введiть текст"-->
<!--                        ></b-form-textarea>-->
<!--                        <div v-if="errors.message" class="error">{{errors.message}}</div>-->
<!--                    </b-form>-->
<!--                    <template #modal-footer>-->
<!--                        <b-btn class="submit-form-popup my-3 mx-auto order-btn"-->
<!--                               @click="handlerSubmit"-->
<!--                        >Замовити</b-btn>-->
<!--                    </template>-->
<!--                </b-modal>-->
<!--            </div>-->
<!--        </div>-->
    </div>

</template>
<script>
const ERROR_MSG = {
    empty: "Це поле e обов'язковим",
    lengthName:"Довжина iм'я не може бути меньше нiж 3 букви",
    lengthTel:"Довжина номера телефона не може бути меньше нiж 5 цифр",
    email: "Введiть корректний email",
    tel: "Введiть корректний номер телефону",
}

export default {
    computed: {
        nameState() {
            return this.$data.errors.name ? false : null;
        },
        emailState() {
            return this.$data.errors.email ? false : null;
        },
        telState() {
            return this.$data.errors.tel ? false : null;
        },
        messageState(){
            return this.$data.errors.message ? false : null;
        }
    },
    data() {
        return {
            formData : {
                name: "",
                email: "",
                tel: "",
                message: "",
            },
            errors:{},
        }
    },

    methods: {
        handlerSubmit(event) {
            event.preventDefault();
            this.clearAllErrors();
            this.validateForm();
            if(!Object.keys(this.$data.errors).length){
                grecaptcha.ready(function() {
                    grecaptcha.execute('6LfdhnogAAAAADFMYpEvpswVA38j68sZwRtB7Dmi', {action: 'submit'}).then(function(token) {
                        console.log(token)
                    });
                });
            }
        },

        validateForm() {
            for (let key in this.$data.formData) {
                this.validateEmptyField(this.$data.formData[key], key);
            }
            if(!Object.keys(this.$data.errors).find(key => key === "name")){
                this.validateNameLength(this.$data.formData.name);
            }
            if (!Object.keys(this.$data.errors).find(key => key === "email")) {
                this.validateEmail(this.$data.formData.email);
            }
            if (!Object.keys(this.$data.errors).find(key => key === "tel")) {
                this.validatePhone(this.$data.formData.tel);
            }
        },

        validateEmptyField(dataValue, keyName) {
            const dataValueTrimmed = dataValue.trim();
            if (!dataValueTrimmed) {
                this.$data.errors[keyName] = ERROR_MSG.empty;
            }
        },

        validateNameLength(dataValue){
            const dataValueTrimmed = dataValue.trim();
            if(dataValueTrimmed.length < 3){
                this.$data.errors.name = ERROR_MSG.lengthName;
            }
        },

        validateEmail(dataValue) {
            const dataValueTrimmed = dataValue.trim();
            const reg = /@/;

            if (!dataValueTrimmed.match(reg)) {
                this.$data.errors.email = ERROR_MSG.email;
            }
        },

        validatePhone(dataValue) {
            const dataValueTrimmed = dataValue.trim();
            if(dataValueTrimmed.length < 5){
                this.$data.errors.tel = ERROR_MSG.lengthTel;
            }
        },

        clearAllErrors() {
            this.$data.errors = {};
        },
    }
}
</script>








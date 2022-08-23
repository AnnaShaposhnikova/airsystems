<template>
    <div>
        <b-button v-b-modal.modal-1 class="order-btn">{{$t("Замовити")}}</b-button>

        <b-modal id="modal-1" :title='$t("Замовити")'>
            <b-form name="order">
                <label for="name" class="popup-label mt-2">{{$t("Iм'я")}}</label>
                <b-form-input
                    id="name"
                    :state="nameState"
                    v-model="formData.name"
                    type="text"
                    :placeholder="$t('Введiть iм\'я')"
                ></b-form-input>
                <div v-if="errors.name" class="error">{{errors.name}}</div>
                <label for="email" class="popup-label mt-2" >Email</label>
                <b-form-input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    :state="emailState"
                    :placeholder="$t('Введiть email')"
                ></b-form-input>
                <div v-if="errors.email" class="error">{{errors.email}}</div>
                <label for="tel" class="popup-label mt-2">Teлефон</label>
                <b-form-input
                    id="tel"
                    :state="telState"
                    v-model="formData.tel"
                    type="tel"
                    :placeholder="$t('Введiть номер телефону')"
                ></b-form-input>
                <div v-if="errors.tel" class="error">{{errors.tel}}</div>
                <label for="message" class="popup-label mt-2">{{$t("Текст повiдомлення")}}</label>
                <b-form-textarea
                    id="message"
                    :state="messageState"
                    v-model="formData.message"
                    :placeholder="$t('Введiть текст')"
                    rows="5"
                ></b-form-textarea>
                <div v-if="errors.message" class="error">{{errors.message}}</div>
            </b-form>
            <template #modal-footer>
                <b-btn class="submit-form-popup my-3 mx-auto order-btn" @click="handlerSubmit">{{$t("Замовити")}}</b-btn>
            </template>
        </b-modal>

        <b-modal id="modal-2" size="sm" variant="success">
            <p class="my-4">{{$t("Відправлено")}}</p>
            <template #modal-footer>
                <b-btn class="" @click="$bvModal.hide('modal-2')">OK</b-btn>
            </template>
        </b-modal>
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

const FORM_DATA = {
    name: "",
    email: "",
    tel: "",
    message: "",
};

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
        messageState() {
            return this.$data.errors.message ? false : null;
        }
    },
    data() {
        return {
            formData: {...FORM_DATA},
            errors: {},
        }
    },

    mounted() {
        this.$root.$on('bv::modal::hide', (bvEvent, modalId) => {
            this.clearAllErrors();
            this.$data.formData = {...FORM_DATA};
        })
    },

    methods: {
        handlerSubmit(event) {
            event.preventDefault();
            this.clearAllErrors();
            this.validateForm();
            if (Object.keys(this.$data.errors).length) {
                return;
            }
            this.$bvModal.hide('modal-1');
            fetch('/info.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.$data.formData),
            });
            this.$bvModal.show('modal-2');
        },

        validateForm() {
            for (let key in this.$data.formData) {
                this.validateEmptyField(this.$data.formData[key], key);
            }
            if (!Object.keys(this.$data.errors).find(key => key === "name")) {
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

        validateNameLength(dataValue) {
            const dataValueTrimmed = dataValue.trim();
            if (dataValueTrimmed.length < 3) {
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
            if (dataValueTrimmed.length < 5) {
                this.$data.errors.tel = ERROR_MSG.lengthTel;
            }
        },

        clearAllErrors() {
            this.$data.errors = {};
        },
    }
}
</script>







